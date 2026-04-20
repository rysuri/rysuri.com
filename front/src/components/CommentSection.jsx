import { useEffect, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

function CommentSection() {
  const [comments, setComments] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [currentPage, setCurrentPage] = useState(0);
  const [status, setStatus] = useState(null); // "sending" | "sent" | "error"

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/comments`)
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp),
        );
        setComments(sorted);
      })
      .catch((err) => console.error("Error fetching comments:", err));
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch(`${import.meta.env.VITE_API_URL}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      const newComment = await res.json();
      setComments((prev) => [newComment, ...prev]);
      setForm({ name: "", email: "", message: "" });
      setCurrentPage(0);
      setStatus("sent");
      setTimeout(() => setStatus(null), 3000);
    } else {
      setStatus("error");
    }
  };

  const prev = () =>
    setCurrentPage((i) => (i === 0 ? comments.length - 1 : i - 1));
  const next = () =>
    setCurrentPage((i) => (i === comments.length - 1 ? 0 : i + 1));

  const active = comments[currentPage];

  return (
    <>
      {/* Comments carousel — testimonial style */}
      <section className="py-16 border-t border-neutral-200">
        <h2 className="text-2xl font-bold text-center mb-10">
          What People Say
        </h2>

        {comments.length === 0 ? (
          <p className="text-center text-sm text-neutral-400">
            No comments yet — be the first!
          </p>
        ) : (
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-6 text-center">
            <Quote size={32} className="text-neutral-300" />

            <p className="text-lg text-neutral-700 leading-relaxed">
              "{active.message}"
            </p>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-sm font-bold text-neutral-500">
                {active.name[0].toUpperCase()}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold">{active.name}</p>
                <p className="text-xs text-neutral-500">
                  {new Date(active.timestamp).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>

            {comments.length > 1 && (
              <div className="flex items-center gap-4 mt-2">
                <button
                  onClick={prev}
                  className="p-1.5 rounded-full border border-neutral-200 hover:bg-neutral-100 transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                <div className="flex gap-2">
                  {comments.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i === currentPage ? "bg-neutral-900" : "bg-neutral-300"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  className="p-1.5 rounded-full border border-neutral-200 hover:bg-neutral-100 transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Write a comment */}
      <section className="py-16 border-t border-neutral-200">
        <h2 className="text-2xl font-bold text-center mb-10">
          Leave a Comment
        </h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto flex flex-col gap-3"
        >
          <div className="grid sm:grid-cols-2 gap-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              className="border border-neutral-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-neutral-500 transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="border border-neutral-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-neutral-500 transition-colors"
            />
          </div>
          <textarea
            name="message"
            placeholder="Write a comment..."
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            className="border border-neutral-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-neutral-500 transition-colors resize-none"
          />
          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-5 py-2 bg-neutral-900 text-white text-sm rounded-lg hover:bg-neutral-700 transition-colors disabled:opacity-50"
            >
              {status === "sending" ? "Posting..." : "Post Comment"}
            </button>
            {status === "sent" && (
              <p className="text-sm text-green-600">Comment posted!</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-500">Something went wrong.</p>
            )}
          </div>
        </form>
      </section>
    </>
  );
}

export default CommentSection;

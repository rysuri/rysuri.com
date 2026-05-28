import { useEffect, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, AlertCircle, CheckCircle2 } from "lucide-react";

function CommentSection() {
  const [comments, setComments] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [currentPage, setCurrentPage] = useState(0);
  const [status, setStatus] = useState(null); // null | "sending" | "sent" | "error"
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/comments`)
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
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
    setErrorMessage(null);

    try {
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
        setTimeout(() => setStatus(null), 4000);
      } else {
        const body = await res.json().catch(() => ({}));
        console.error("POST /comments failed:", body);
        setErrorMessage(
          body.error || "Something went wrong. Please try again."
        );
        setStatus("error");
      }
    } catch (err) {
      console.error("Network error posting comment:", err);
      setErrorMessage("Could not reach the server. Check your connection.");
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
      {/* ── Testimonials carousel ── */}
      <section className="py-28 border-neutral-200">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold">Testimonials</h2>
          <p className="text-sm text-neutral-400 mt-2">
            Don't just take my word for it…
          </p>
        </div>

        {comments.length === 0 ? (
          <p className="text-center text-sm text-neutral-400">
            No comments yet. Be the first!
          </p>
        ) : (
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-6 text-center">
            <Quote size={32} className="text-neutral-300" />

            <p className="text-lg text-neutral-700 leading-relaxed">
              "{active.message}"
            </p>

            <div className="text-center">
              <p className="text-sm font-semibold">{active.name}</p>
              <p className="text-xs text-neutral-400 mt-0.5">
                {new Date(active.timestamp).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>

            {comments.length > 1 && (
              <div className="flex items-center gap-4 mt-2">
                <button
                  onClick={prev}
                  className="p-1.5 rounded-full border border-neutral-200 hover:bg-neutral-100 transition-colors"
                  aria-label="Previous comment"
                >
                  <ChevronLeft size={16} />
                </button>

                <div className="flex gap-2">
                  {comments.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i)}
                      aria-label={`Go to comment ${i + 1}`}
                      className={`w-2 h-2 rounded-full transition-colors ${i === currentPage ? "bg-neutral-900" : "bg-neutral-300"
                        }`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  className="p-1.5 rounded-full border border-neutral-200 hover:bg-neutral-100 transition-colors"
                  aria-label="Next comment"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>
        )}
      </section>

      {/* ── Leave a comment ── */}
      <section className="py-28 border-t border-neutral-200">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold">Leave a Comment</h2>
          <p className="text-sm text-neutral-400 mt-2">
            Have something to say? I'd love to hear it.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto flex flex-col gap-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-neutral-500">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                required
                maxLength={50}
                className="border border-neutral-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-neutral-500 transition-colors bg-white"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-neutral-500">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                required
                className="border border-neutral-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-neutral-500 transition-colors bg-white"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <label className="text-xs font-medium text-neutral-500">
                Message
              </label>
              <span
                className={`text-xs transition-colors ${form.message.length > 450
                  ? "text-red-400"
                  : "text-neutral-300"
                  }`}
              >
                {form.message.length}/500
              </span>
            </div>
            <textarea
              name="message"
              placeholder="Write something nice..."
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              maxLength={500}
              className="border border-neutral-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-neutral-500 transition-colors resize-none bg-white"
            />
          </div>

          <div className="flex flex-col items-center gap-3 pt-1">
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-5 py-2.5 bg-neutral-900 text-white text-sm rounded-lg hover:bg-neutral-700 transition-colors disabled:opacity-50"
            >
              {status === "sending" ? "Posting…" : "Post Comment"}
            </button>
            <p className="text-xs text-neutral-400">
              Comments are moderated by{" "}
              <span className="text-neutral-500 font-medium">Anthropic</span>.
            </p>

            {status === "sent" && (
              <div className="flex items-center gap-1.5 text-sm text-green-600">
                <CheckCircle2 size={15} />
                Comment posted!
              </div>
            )}

            {status === "error" && (
              <div className="flex items-start gap-1.5 text-sm text-red-500 max-w-sm text-center">
                <AlertCircle size={15} className="mt-0.5 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}
          </div>
        </form>
      </section>
    </>
  );
}

export default CommentSection;
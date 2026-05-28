import { useState, useEffect } from "react";
import resumePDF from "../assets/media/ry-suriyathep-resume.pdf";
import portrait from "../assets/media/portrait.jpg";

const FALLBACK_COMMENTS = [
  { _id: 1, name: "Alex Chen", message: "Ry is an incredibly talented engineer, always delivers clean and thoughtful work!" },
  { _id: 2, name: "Sarah M.", message: "Working with Ry was a pleasure. Super communicative and sharp." },
  { _id: 3, name: "James K.", message: "One of the best developers I've had the chance to collaborate with." },
  { _id: 4, name: "Priya S.", message: "Ry's attention to detail is unmatched. Highly recommend!" },
  { _id: 5, name: "Marcus T.", message: "Great problem solver and even better teammate." },
  { _id: 6, name: "Leila R.", message: "Ry brought so much energy and skill to our project. Fantastic work." },
  { _id: 7, name: "Tom W.", message: "Incredibly fast learner and a joy to work with." },
];

const LANES = [4, 16, 29, 42, 55, 68, 80];
const DELAYS = [0, 3, 6, 1.5, 8, 4.5, 11];
const DURATION = 13;

function FloatingBubble({ comment, left, delay }) {
  return (
    <div
      className="absolute bottom-0 flex items-end gap-2 pointer-events-none"
      style={{
        left: `${left}%`,
        animation: `floatUp ${DURATION}s ${delay}s infinite linear`,
        opacity: 0,
        maxWidth: 200,
      }}
    >
      <div
        className="bg-white/80 backdrop-blur-md border border-neutral-100 shadow-sm px-3 py-2"
        style={{ borderRadius: "18px 18px 18px 4px" }}
      >
        <p className="text-xs text-neutral-600 leading-snug line-clamp-2">
          {comment.message}
        </p>
        <p className="text-[10px] text-neutral-400 mt-0.5 font-medium">
          {comment.name}
        </p>
      </div>
    </div>
  );
}

function HeroSection() {
  const [bubbleComments, setBubbleComments] = useState(FALLBACK_COMMENTS);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/comments`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length >= 3) {
          // Shuffle and take up to 7 so the lanes stay populated
          const shuffled = [...data].sort(() => Math.random() - 0.5).slice(0, 7);
          setBubbleComments(shuffled);
        }
      })
      .catch(() => {
        // silently keep fallback data
      });
  }, []);

  return (
    <>
      <style>{`
        @keyframes floatUp {
          0%   { transform: translateY(0px);    opacity: 0; }
          8%   { opacity: 1; }
          75%  { opacity: 0.6; }
          100% { transform: translateY(-100vh); opacity: 0; }
        }
        @keyframes heroPortrait {
          from { opacity: 0; transform: scale(0.93); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes heroText {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-portrait {
          animation: heroPortrait 0.6s ease forwards;
        }
        .hero-text {
          animation: heroText 0.6s ease forwards;
          animation-delay: 0.18s;
          opacity: 0;
        }
      `}</style>

      <section className="min-h-220 w-full relative flex items-center justify-center px-16 overflow-hidden">
        {/* Floating testimonials */}
        <div className="absolute inset-0 pointer-events-none">
          {bubbleComments.map((comment, i) => (
            <FloatingBubble
              key={comment._id}
              comment={comment}
              left={LANES[i % LANES.length]}
              delay={DELAYS[i % DELAYS.length]}
            />
          ))}
          <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-white via-white/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-5 bg-gradient-to-t from-[rgba(99,149,220,0)] to-transparent" />
        </div>

        {/* Hero content */}
        <div
          className="relative z-10 flex flex-col sm:flex-row items-center gap-10 sm:gap-16 rounded-3xl"
          style={{
            background: "rgba(244, 244, 245, 0.9)",
            boxShadow: "0 0 60px 60px rgba(244, 244, 245, 0.9)",
          }}
        >
          <img
            src={portrait}
            alt="Ry Suriyathep"
            className="hero-portrait w-40 h-40 sm:w-52 sm:h-52 rounded-full object-cover object-top shrink-0"
          />

          <div className="hero-text flex flex-col items-center sm:items-start gap-3 text-center sm:text-left">
            <p className="text-sm text-neutral-400 uppercase tracking-wide">
              สวัสดี, ฉันคือ
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
              RY SURIYATHEP
            </h1>
            <p className="text-base text-neutral-500">
              Software Engineer at UNLV
            </p>
            <div className="flex items-center gap-3 text-sm text-neutral-400 mt-1">
              <a className="hover:text-neutral-900 transition-colors" href={resumePDF} target="_blank" rel="noreferrer">
                Resume
              </a>
              <span>·</span>
              <a className="hover:text-neutral-900 transition-colors" href="https://www.youtube.com/@ryvsu" target="_blank" rel="noreferrer">
                YouTube
              </a>
              <span>·</span>
              <a className="hover:text-neutral-900 transition-colors" href="https://www.linkedin.com/in/rysuri" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
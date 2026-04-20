import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import resumePDF from "../assets/media/ry-suriyathep-resume.pdf";
import CommentSection from "../components/CommentSection";
import { MapPin, GraduationCap, Laptop, Award } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    description:
      "I love building responsive, fast, and visually polished user interfaces.",
    skills: ["React", "Vue.js", "JavaScript", "HTML", "CSS", "Vite", "GSAP"],
  },
  {
    title: "Backend",
    description:
      "I enjoy solving problems and building reliable, scalable systems.",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "MongoDB",
      "PostgreSQL",
      "Supabase",
    ],
  },
  {
    title: "Cloud & DevOps",
    description:
      "I've deployed and managed applications using modern cloud platforms.",
    skills: ["AWS", "Railway", "Vercel", "Git", "GitHub"],
  },
  {
    title: "Other",
    description: "Tools and platforms I've built real projects with.",
    skills: ["Shopify", "WordPress", "Roblox Studio", "C++", "Java"],
  },
];

const skillIcon = (name) => {
  const map = {
    React: "react",
    "Vue.js": "vuejs",
    JavaScript: "javascript",
    HTML: "html",
    CSS: "css",
    Vite: "vite",
    GSAP: "gsap",
    "Node.js": "nodejs",
    "Express.js": "expressjs",
    Python: "python",
    MongoDB: "mongodb",
    PostgreSQL: "postgresql",
    Supabase: "supabase",
    AWS: "aws",
    Railway: "railway",
    Vercel: "vercel",
    Git: "git",
    GitHub: "github",
    Shopify: "shopify",
    WordPress: "wordpress",
    "Roblox Studio": "roblox_studio",
    "C++": "cpp",
    Java: "java",
  };
  return new URL(`../assets/skills/${map[name]}.png`, import.meta.url).href;
};

// Placeholder video clips — swap src for real URLs later
const videoClips = [
  {
    id: 1,
    label: "Cinematic Edit",
    src: new URL("../assets/videos/clip1.gif", import.meta.url).href,
  },
  {
    id: 2,
    label: "Montage Reel",
    src: new URL("../assets/videos/clip2.gif", import.meta.url).href,
  },
  {
    id: 3,
    label: "Event Recap",
    src: new URL("../assets/videos/clip3.gif", import.meta.url).href,
  },
  {
    id: 4,
    label: "Short-Form",
    src: new URL("../assets/videos/clip4.gif", import.meta.url).href,
  },
  {
    id: 5,
    label: "Gaming Clip",
    src: new URL("../assets/videos/clip5.gif", import.meta.url).href,
  },
  {
    id: 6,
    label: "Clip 6",
    src: new URL("../assets/videos/clip6.gif", import.meta.url).href,
  },
  {
    id: 7,
    label: "Clip 7",
    src: new URL("../assets/videos/clip7.gif", import.meta.url).href,
  },
];

const CONSTRAINED = "max-w-[1092px] mx-auto px-5 sm:px-7 lg:px-8 xl:px-0";

function Home() {
  useEffect(() => {
    document.title = "Ry Suriyathep | Software Engineer";
  }, []);

  useGSAP(() => {
    gsap.from("#hero-tag", { y: 20, opacity: 0, duration: 0.7 });
    gsap.from("#hero-name", { opacity: 0, duration: 1.5 });
    gsap.from("#hero-links", { y: -20, opacity: 0, duration: 0.7 });
  }, []);

  return (
    <div>
      {/* ── Constrained top sections ───────────────────────────── */}
      <div className={CONSTRAINED}>
        {/* Hero */}
        <section className="flex flex-col items-center justify-center text-center py-24 gap-4">
          <div
            id="hero-links"
            className="flex items-center gap-3 text-sm text-neutral-500"
          >
            <a
              className="hover:text-neutral-900 transition-colors"
              href={resumePDF}
              target="_blank"
              download="ry-suriyathep-resume.pdf"
            >
              Resume
            </a>
            <span>|</span>
            <a
              className="hover:text-neutral-900 transition-colors"
              href="https://www.youtube.com/@ryvsu"
              target="_blank"
            >
              Youtube
            </a>
            <span>|</span>
            <a
              className="hover:text-neutral-900 transition-colors"
              href="https://www.linkedin.com/in/rysuri"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
          <h1
            id="hero-name"
            className="text-4xl sm:text-6xl font-bold tracking-tight"
          >
            RY P. SURIYATHEP
          </h1>
          <p id="hero-tag" className="text-neutral-500 text-lg">
            Software Engineer at UNLV
          </p>
        </section>

        {/* About */}
        <section className="grid md:grid-cols-2 gap-12 py-12 border-t border-neutral-200">
          <div className="flex flex-col gap-5">
            <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">
              About Me
            </p>
            <h2 className="text-3xl font-bold">
              Hi, I'm{" "}
              <span className="underline underline-offset-4">
                Ry Suriyathep
              </span>
            </h2>
            <ul className="flex flex-col gap-2 text-sm text-neutral-600">
              <li className="flex items-center gap-2">
                <MapPin size={15} /> Based in Las Vegas, Nevada
              </li>
              <li className="flex items-center gap-2">
                <GraduationCap size={15} /> 2nd Year CS Student at UNLV
              </li>
              <li className="flex items-center gap-2">
                <Laptop size={15} /> Full-Stack Developer
              </li>
              <li className="flex items-center gap-2">
                <Award size={15} /> AWS Cloud Certified
              </li>
            </ul>
            <p className="text-sm text-neutral-600 leading-relaxed">
              I'm a web developer with over <strong>five years</strong> of
              experience building responsive, user-focused applications. I work
              with modern front-end frameworks like React and AWS.
              <br />
              <br />
              My projects range from client websites and e-commerce integrations
              to personal applications that showcase clean design and reliable
              performance.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-semibold mb-3">Certifications</h3>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
                  alt="AWS Certified Cloud Practitioner Badge"
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <p className="text-sm font-semibold">
                    AWS Certified Cloud Practitioner
                  </p>
                  <p className="text-xs text-neutral-500">
                    Issued January 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── Skills — full width background ────────────────────── */}
      <div className="w-full bg-neutral-50 border-y border-neutral-200 py-28 pb-40">
        <div className={CONSTRAINED}>
          <div className="text-center mb-14">
            <h2 className="text-2xl font-bold">Skills & Technologies</h2>
            <p className="text-sm text-neutral-400 mt-2">
              Tools I reach for every day.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {skillCategories.map((cat) => (
              <div
                key={cat.title}
                className="bg-white border border-neutral-200 rounded-xl p-6 flex flex-col gap-3"
              >
                <h3 className="font-semibold text-base">{cat.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {cat.description}
                </p>
                <div className="flex flex-wrap gap-3 mt-1">
                  {cat.skills.map((s) => (
                    <div
                      key={s}
                      className="group relative flex items-center justify-center"
                    >
                      <img
                        src={skillIcon(s)}
                        alt={s}
                        className="w-8 h-8 object-contain transition-all duration-200 group-hover:scale-110"
                      />
                      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-900 px-2 py-1 text-[11px] font-medium text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                        {s}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="/projects"
              target="_blank"
              className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors border border-neutral-700 hover:border-neutral-500 px-5 py-2.5 rounded-full"
            >
              View my projects ↗
            </a>
          </div>
        </div>
      </div>

      {/* ── Video editing — full width dark section ────────────── */}
      <div className="w-full bg-neutral-900 py-28 overflow-hidden">
        <div className={CONSTRAINED}>
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-3">
              Oh, one more thing
            </p>
            <h2 className="text-2xl font-bold text-white">
              I also edit videos.
            </h2>
            <p className="text-sm text-neutral-400 mt-2">
              When I am not coding, I'm using the Adobe Suite to craft videos
              that have garnered me <strong>3,500+ followers</strong> and{" "}
              <strong>135K+ likes</strong>.
            </p>
          </div>
        </div>

        <div
          className="flex justify-center gap-5 px-8 overflow-x-auto pb-4"
          style={{ scrollbarWidth: "none" }}
        >
          {videoClips.map((clip) => (
            <div
              key={clip.id}
              className="flex-shrink-0 w-80 rounded-xl overflow-hidden"
            >
              <img
                src={clip.src}
                alt={clip.label}
                className="w-full h-52 object-cover"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="https://www.tiktok.com/@perkacs"
            target="_blank"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors border border-neutral-700 hover:border-neutral-500 px-5 py-2.5 rounded-full"
          >
            Follow me on TikTok ↗
          </a>
        </div>
      </div>

      {/* ── Constrained bottom sections ───────────────────────── */}
      <div className={CONSTRAINED}>
        <CommentSection />
      </div>
    </div>
  );
}

export default Home;

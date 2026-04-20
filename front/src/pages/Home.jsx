import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import resumePDF from "../assets/media/ry-suriyathep-resume.pdf";
import CommentSection from "../components/CommentSection";
import {
  MapPin,
  GraduationCap,
  Laptop,
  Award,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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

const testimonials = [
  {
    quote:
      "Ry delivered a clean, professional website that perfectly represents our firm. Responsive, fast, and easy to navigate.",
    name: "Carlos Calderon",
    title: "Attorney",
    company: "Calderon Law",
  },
  {
    quote:
      "Ry built out our Shopify storefront with great attention to detail. The store looks exactly how we envisioned it.",
    name: "CupnCo Team",
    title: "E-commerce",
    company: "CupnCoShop",
  },
  {
    quote:
      "Ry is a motivated developer with strong problem-solving skills and a sharp eye for design.",
    name: "UNLV CS Department",
    title: "Computer Science",
    company: "UNLV",
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

function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    document.title = "Ry Suriyathep | Software Engineer";
  }, []);

  useGSAP(() => {
    gsap.from("#hero-tag", { y: 20, opacity: 0, duration: 0.7 });
    gsap.from("#hero-name", { opacity: 0, duration: 1.5 });
    gsap.from("#hero-links", { y: -20, opacity: 0, duration: 0.7 });
  }, []);

  const prev = () =>
    setActiveTestimonial((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setActiveTestimonial((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <div className="max-w-[1092px] mx-auto px-5 sm:px-7 lg:px-8 xl:px-0">
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
            <span className="underline underline-offset-4">Ry Suriyathep</span>
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
                <p className="text-xs text-neutral-500">Issued January 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 border-t border-neutral-200">
        <h2 className="text-2xl font-bold text-center mb-10">
          Skills & Technologies
        </h2>
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
                    {/* Tooltip */}
                    <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-900 px-2 py-1 text-[11px] font-medium text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CommentSection />
    </div>
  );
}

export default Home;

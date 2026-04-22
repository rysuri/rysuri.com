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

function SkillsSection() {
  return (
    <div className="w-full bg-neutral-50 border-y border-neutral-200 py-28 pb-40">
      <div className="max-w-[1092px] mx-auto px-5 sm:px-7 lg:px-8 xl:px-0">
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
            className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-black transition-colors border border-neutral-300 hover:border-neutral-600 px-5 py-2.5 rounded-full"
          >
            View my projects ↗
          </a>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;

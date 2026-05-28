const CONSTRAINED = "max-w-[1092px] mx-auto px-5 sm:px-7 lg:px-8 xl:px-0";

const facts = [
  ["Location", "Las Vegas, Nevada"],
  ["Role", "Full-Stack Developer"],
  ["Stack", "React · Node.js · PostgreSQL · MongoDB"],
  ["Cert", "AWS CCP, Jan 2025"],
  ["Experience", "5+ years"],
];

const timeline = [
  {
    group: "Now",
    items: [
      { title: "Software Engineer", org: "UNLV", tag: "Current" },
      { title: "B.S. Computer Science", org: "University of Nevada, Las Vegas", tag: "In progress" },
    ],
  },
  {
    group: "Previously",
    items: [
      { title: "Freelance Web Developer", org: "Client work · E-commerce · Design systems", dim: true },
    ],
  },
];

function AboutSection() {
  return (
    <div id="about" className="w-full bg-neutral-50 border-b border-neutral-200 py-28 pb-40">
      <div className={CONSTRAINED}>

        <div className="text-center mb-14">
          <h2 className="text-2xl font-bold tracking-tight">About Me</h2>
          <p className="text-neutral-500 mt-2 max-w-xl mx-auto text-sm leading-relaxed">
            I'm a web developer with over{" "}
            <span className="text-neutral-700 font-medium">five years</span> of
            experience building responsive, user-focused applications. My projects
            range from client websites and e-commerce integrations to personal
            applications that showcase clean design and reliable performance.
          </p>
        </div>

        <div className="max-w-lg mx-auto flex flex-col gap-10">

          {/* Compact meta */}
          <div>
            {facts.map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between items-baseline gap-3 py-1.5 border-b border-neutral-200 first:border-t"
              >
                <span className="text-[9px] tracking-[0.12em] uppercase text-neutral-400 whitespace-nowrap">
                  {label}
                </span>
                <span className="text-[11px] text-neutral-500 text-right">{value}</span>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="flex flex-col gap-8">
            {timeline.map(({ group, items }) => (
              <div key={group}>
                <p className="text-[9px] tracking-[0.15em] uppercase text-neutral-400 mb-4">{group}</p>
                <div>
                  {items.map((item, i) => (
                    <div key={item.title} className="grid grid-cols-[16px_1fr] gap-x-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-[7px] h-[7px] rounded-full mt-[5px] flex-shrink-0 ${item.dim ? "bg-neutral-300" : "bg-neutral-800"}`} />
                        {i < items.length - 1 && (
                          <div className="w-px bg-neutral-200 flex-1 mt-1.5" />
                        )}
                      </div>
                      <div className={i < items.length - 1 ? "pb-5" : ""}>
                        <p className={`leading-tight ${item.dim ? "text-sm font-medium text-neutral-600" : "text-base font-semibold text-neutral-900 tracking-tight"}`}>
                          {item.title}
                        </p>
                        {item.org && (
                          <p className="text-xs text-neutral-400 mt-0.5">{item.org}</p>
                        )}
                        {item.tag && (
                          <span className="inline-block mt-1.5 text-[10px] text-neutral-500 bg-neutral-100 border border-neutral-200 rounded-full px-2.5 py-0.5">
                            {item.tag}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutSection;
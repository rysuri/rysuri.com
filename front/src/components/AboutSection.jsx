import { MapPin, GraduationCap, Laptop, Award, Zap } from "lucide-react";

const CONSTRAINED = "max-w-[1092px] mx-auto px-5 sm:px-7 lg:px-8 xl:px-0";

const tldr = [
  "5+ years building production web apps",
  "Full-stack: React, Node.js, PostgreSQL, MongoDB",
  "AWS Certified Cloud Practitioner (Jan 2025)",
  "Shipped real client projects — not just tutorials",
  "Currently pursuing CS @ UNLV, graduating 2027",
];

function AboutSection() {
  return (
    <div
      id="about"
      className="w-full bg-neutral-50 border-b border-neutral-200 py-28 pb-40"
    >
      <div className={CONSTRAINED}>
        <div className="text-center mb-14">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="text-sm text-neutral-400 mt-2">
            The person behind the code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white border border-neutral-200 rounded-xl p-6 flex flex-col gap-4">
            <h3 className="font-semibold text-base">Hi, I'm Ry Suriyathep</h3>
            <ul className="flex flex-col gap-2 text-sm text-neutral-500">
              <li className="flex items-center gap-2">
                <MapPin size={14} className="shrink-0" /> Based in Las Vegas,
                Nevada
              </li>
              <li className="flex items-center gap-2">
                <GraduationCap size={14} className="shrink-0" /> 2nd Year CS
                Student at UNLV
              </li>
              <li className="flex items-center gap-2">
                <Laptop size={14} className="shrink-0" /> Full-Stack Developer
              </li>
              <li className="flex items-center gap-2">
                <Award size={14} className="shrink-0" /> AWS Cloud Certified
              </li>
            </ul>
            <p className="text-sm text-neutral-500 leading-relaxed">
              I'm a web developer with over{" "}
              <strong className="text-neutral-700">five years</strong> of
              experience building responsive, user-focused applications. I work
              with modern front-end frameworks like React and AWS.
              <br />
              <br />
              My projects range from client websites and e-commerce integrations
              to personal applications that showcase clean design and reliable
              performance.
            </p>
          </div>

          <div className="bg-white border border-neutral-200 rounded-xl p-6 flex flex-col gap-4">
            <h3 className="font-semibold text-base">Certifications</h3>
            <div className="flex items-center gap-4 p-4 rounded-lg border border-neutral-100 bg-neutral-50">
              <img
                src="https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
                alt="AWS Certified Cloud Practitioner Badge"
                className="w-14 h-14 object-contain shrink-0"
              />
              <div>
                <p className="text-sm font-semibold">
                  AWS Certified Cloud Practitioner
                </p>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Issued January 2025
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-neutral-900 rounded-xl p-6 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Zap size={15} className="text-yellow-400" />
            <h3 className="font-semibold text-sm text-white tracking-wide">
              TL;DR — for employers
            </h3>
          </div>
          <ul className="grid sm:grid-cols-2 gap-2">
            {tldr.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2 text-sm text-neutral-300"
              >
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;

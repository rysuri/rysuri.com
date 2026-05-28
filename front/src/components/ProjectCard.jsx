import React, { useState } from "react";

function ProjectCard({
  title,
  description,
  thumbnail,
  tags,
  technologies,
  link,
  website,
  repo,
  source,
  onClick,
}) {
  const [hovered, setHovered] = useState(false);

  const displayTags = tags ?? technologies ?? [];
  const liveUrl = link ?? website;
  const repoUrl = repo ?? source;

  return (
    <article
      className="group bg-white border border-blue-100 rounded-xl overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative w-full overflow-hidden bg-neutral-100"
        style={{ aspectRatio: "16/9" }}
      >
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-4 p-8 flex-1">
        <h3 className="font-semibold text-lg text-neutral-800 group-hover:text-blue-500 transition-colors">
          {title}
        </h3>
        <p className="text-[15px] text-neutral-500 leading-relaxed flex-1">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {displayTags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-400 border border-blue-100"
            >
              {tag}
            </span>
          ))}
        </div>
        <div
          className="flex items-center gap-3 pt-1 text-sm text-neutral-400"
          onClick={(e) => e.stopPropagation()}
        >
          {liveUrl && (
            <>
              <span
                onClick={() => window.open(liveUrl, "_blank")}
                className="hover:text-neutral-900 transition-colors cursor-pointer"
              >
                Live ↗
              </span>
              <span>·</span>
            </>
          )}
          {repoUrl && (
            <span
              onClick={() => window.open(repoUrl, "_blank")}
              className="hover:text-neutral-900 transition-colors cursor-pointer"
            >
              GitHub ↗
            </span>
          )}
          <span className="ml-auto text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
            View project →
          </span>
        </div>
      </div>
    </article>
  );
}

export default React.memo(ProjectCard);
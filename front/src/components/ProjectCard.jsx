import React from "react";
import { Globe, Github, Youtube } from "lucide-react";

function ProjectCard({
  title,
  description,
  thumbnail,
  technologies = [],
  website,
  source,
  showcase,
  onClick,
}) {
  return (
    <article
      className="border border-neutral-200 rounded-lg overflow-hidden cursor-pointer hover:border-neutral-400 transition-colors"
      onClick={onClick}
    >
      <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />

      <div className="p-5 flex flex-col gap-3">
        <h3 className="font-semibold text-base">{title}</h3>
        <p className="text-sm text-neutral-600 leading-relaxed">{description}</p>

        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5" aria-hidden>
            {technologies.map((t) => (
              <span key={t} className="text-xs px-2 py-0.5 bg-neutral-100 rounded-full text-neutral-600">
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-3 mt-1" onClick={(e) => e.stopPropagation()}>
          {website && (
            <a className="flex items-center gap-1 text-xs hover:underline" href={website} target="_blank" rel="noreferrer">
              <Globe size={13} /> Website
            </a>
          )}
          {showcase && (
            <a className="flex items-center gap-1 text-xs hover:underline" href={showcase} target="_blank" rel="noreferrer">
              <Youtube size={13} /> Showcase
            </a>
          )}
          {source && (
            <a className="flex items-center gap-1 text-xs text-neutral-500 hover:underline" href={source} target="_blank" rel="noreferrer">
              <Github size={13} /> Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default React.memo(ProjectCard);

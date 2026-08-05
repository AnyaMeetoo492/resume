import type { Project } from "../types/resume";
import { Favicon } from "./Favicon";
import { Section } from "./Section";

interface ProjectsProps {
  projects: Project[];
  title: string;
}

function ProjectEntry({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reverse = index % 2 === 1;

  return (
    <div
      className={`flex items-center gap-6 mb-8 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      {project.image && (
        <div className="shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-32 h-32 object-cover rounded-lg shadow-sm"
          />
        </div>
      )}

      {/* Content */}
      <div className={`flex-1 ${reverse ? "text-right" : "text-left"}`}>
        {/* Titre + date */}
        <div
          className={`flex items-start justify-between gap-4 ${
            reverse ? "flex-row-reverse" : ""
          }`}
        >
          <h3 className="text-sm font-semibold text-primary inline-flex items-center gap-1.5">
            {project.url && <Favicon url={project.url} size={13} />}

            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </h3>

          <span className="text-xs text-muted whitespace-nowrap">
            {project.date}
          </span>
        </div>

        {/* Technologies */}
        <p className="text-xs text-muted mt-1">{project.tech}</p>

        {/* Description */}
        <ul className="mt-2">
          <li
            className={`text-sm leading-relaxed text-primary/85 relative ${
              reverse ? "pr-4 before:right-0" : "pl-4 before:left-0"
            } before:content-['•'] before:absolute before:text-accent`}
          >
            {project.description}
          </li>
        </ul>
      </div>
    </div>
  );
}

/** Projects section */
export function Projects({ projects, title }: ProjectsProps) {
  return (
    <Section title={title}>
      {projects.map((project, idx) => (
        <ProjectEntry key={idx} project={project} index={idx} />
      ))}
    </Section>
  );
}

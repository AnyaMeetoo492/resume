import type { Project } from "../types/resume";
import { Favicon } from "./Favicon";
import { Section } from "./Section";

interface ProjectsProps {
  projects: Project[];
}

/** Renders a single project entry (same structure as ExperienceEntry). */
function ProjectEntry({ project }: { project: Project }) {
  return (
    <div className="mb-5 print:mb-3 last:mb-0">
      {/* Top line: title + date */}
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
        <h3 className="text-sm font-semibold text-primary inline-flex items-center gap-1.5">
          {project.url && (
            <Favicon url={project.url} size={13} />
          )}

          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
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

      {/* Tech stack */}
      <p className="text-xs text-muted mt-0.5">
        {project.tech}
      </p>

      {/* Description */}
      <ul className="mt-2 print:mt-1.5 space-y-1">
        <li className="text-sm leading-relaxed text-primary/85 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-accent">
          {project.description}
        </li>
      </ul>
    </div>
  );
}

/** Projects section */
export function Projects({ projects }: ProjectsProps) {
  return (
    <Section title="Projects">
      {projects.map((project, idx) => (
        <ProjectEntry key={idx} project={project} />
      ))}
    </Section>
  );
}

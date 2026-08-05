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
      className={`flex gap-4 items-start mb-4 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      {project.image && (
        <div className="shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-20 h-20 object-cover rounded-md"
          />
        </div>
      )}

      {/* Contenu */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-baseline gap-3">
          <h3
            className={`text-sm font-semibold text-primary inline-flex items-center gap-1.5 ${
              reverse ? "justify-end" : ""
            }`}
          >
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

        <p
          className={`text-xs text-muted mt-0.5 ${
            reverse ? "text-right" : ""
          }`}
        >
          {project.tech}
        </p>

        <p
          className={`mt-1 text-sm leading-relaxed text-primary/85 ${
            reverse ? "text-right" : ""
          }`}
        >
          • {project.description}
        </p>
      </div>
    </div>
  );
}

export function Projects({ projects, title }: ProjectsProps) {
  return (
    <Section title={title}>
      {projects.map((project, idx) => (
        <ProjectEntry key={idx} project={project} index={idx} />
      ))}
    </Section>
  );
}

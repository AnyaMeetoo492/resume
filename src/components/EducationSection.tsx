// Erwin Lejeune - 2026-02-15

import type { Education } from "../types/resume";
import { Section } from "./Section";

interface EducationSectionProps {
  education: Education[];
  title: string;
}

/** Renders educational background. */
export function EducationSection({
  education,
  title,
}: EducationSectionProps) {
  return (
    <Section title={title}>
      <div className="space-y-3 print:space-y-2">
        {education.map((edu) => (
          <div key={edu.degree}>
            <div className="flex items-start gap-3">
              {edu.logo && (
                <img
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  className="w-8 h-8 object-contain shrink-0"
                />
              )}

              <div>
                {edu.institutionUrl ? (
                  <h3 className="text-xs font-semibold text-primary">
                    <a
                      href={edu.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors print:no-underline"
                    >
                      {edu.institution}
                    </a>
                  </h3>
                ) : (
                  <h3 className="text-xs font-semibold text-primary">
                    {edu.institution}
                  </h3>
                )}

                <p className="text-xs text-muted">{edu.degree}</p>
                <p className="text-xs text-muted/70">{edu.period}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// Erwin Lejeune - 2026-02-15

import type { Education } from "../types/resume";
import { Section } from "./Section";

interface EducationSectionProps {
  education: Education[];
  title: string;
}

/** Renders educational background. */
export function EducationSection({ education, title }: EducationSectionProps) {
  return (
    <Section title={title}>
      <div className="space-y-2 print:space-y-1.5">
        {education.map((edu) => (
          <div key={edu.degree}>
            {edu.institutionUrl ? (
              <h3 className="text-xs font-semibold text-primary print:text-xs">
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
              <h3 className="text-xs font-semibold text-primary print:text-xs">{edu.institution}</h3>
            )}
            <p className="text-xs text-muted print:text-xs">{edu.degree}</p>
            <p className="text-xs text-muted/70 print:text-xs">{edu.period}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

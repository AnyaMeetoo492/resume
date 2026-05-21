// Erwin Lejeune - 2026-02-15

import type { Volunteering } from "../types/resume";
import { Favicon } from "./Favicon";
import { Section } from "./Section";

interface VolunteeringsProps {
  volunteerings: Volunteering[];
}

/** Renders a condensed list of academic volunteerings. */
export function Volunteerings({ volunteerings }: VolunteeringsProps) {
  return (
    <Section title="Volunteerings">
      <ul className="space-y-2.5">
        {volunteerings.map((pub, idx) => (
          <li key={idx}>
            <p className="text-sm font-semibold text-primary leading-snug inline-flex items-start gap-1.5">
              {pub.url && <Favicon url={pub.url} size={13} className="mt-0.5" />}
              <span>
                {pub.url ? (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    {pub.title}
                  </a>
                ) : (
                  pub.title
                )}
              </span>
            </p>
            <p className="text-xs text-muted mt-0.5">
              {pub.description}
              <span className="mx-1.5 text-divider">&middot;</span>
              {pub.date}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

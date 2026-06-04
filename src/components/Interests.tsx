// Erwin Lejeune - 2026-02-15

import type { Interest } from "../types/resume";
import { Section } from "./Section";

interface InterestsProps {
  interests: Interest[];
}

/** Renders current interests as chips. */
export function Interests({ interests }: InterestsProps) {
  return (
    <Section title="Current Interests">
      <div className="flex flex-wrap gap-1.5">
        {interests.map((interest) => (
          <span
            key={interest.label}
            className="inline-block rounded-full bg-surface px-2.5 py-0.5 text-xs text-primary/80 border border-divider"
          >
            {interest.label}
          </span>
        ))}
      </div>
    </Section>
  );
}

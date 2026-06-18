// Erwin Lejeune - 2026-02-15

import { Section } from "./Section";

interface ProfessionalSummaryProps {
  summary: string;
  title: string;
}

/** Renders the professional summary / objective section. */
export function ProfessionalSummary({ summary, title }: ProfessionalSummaryProps) {
  return (
    <Section title={title}>
      <p className="text-sm leading-relaxed text-primary/85 text-justify">
        {summary}
      </p>
    </Section>
  );
}

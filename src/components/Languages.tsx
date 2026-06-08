import type { Language } from "../types/resume";
import { Section } from "./Section";

interface LanguagesProps {
  languages: Language[];
  title: string;
}

/** Renders languages in a compact sidebar format. */
export function Languages({ languages, title }: LanguagesProps) {
  return (
    <Section title={title}>
      <ul className="space-y-1.5">
        {languages.map((lang, idx) => (
          <li key={idx}>
            <p className="text-sm text-primary font-medium">
              {lang.name}
            </p>
            <p className="text-xs text-muted">{lang.level}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

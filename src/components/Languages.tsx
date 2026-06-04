import type { Language } from "../types/resume";
import { Section } from "./Section";

interface LanguagesProps {
  languages: Language[];
}

/** Renders languages in a compact sidebar format. */
export function Languages({ languages }: LanguagesProps) {
  return (
    <Section title="Langues">
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

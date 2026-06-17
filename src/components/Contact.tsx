import type { ContactInfo } from "../types/resume";
import { Section } from "./Section";
import { Mail, Globe, MapPin, Github, Linkedin } from "lucide-react";

interface ContactSectionProps {
  contact?: ContactInfo;
  title: string;
}

export function Contact({ contact = {}, title }: ContactSectionProps) {
  const iconSize = 13;
  const linkClass = "inline-flex items-center gap-1 hover:text-accent transition-colors";

  return (
    <Section title={title}>
      <div className="space-y-2 text-xs text-muted">
        
        {contact.email && (
          <a href={`mailto:${contact.email}`} className={linkClass}>
            <Mail size={iconSize} />
            {contact.email}
          </a>
        )}

        {contact.linkedin && (
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
            <Linkedin size={iconSize} />
            {contact.linkedin.replace(/^https?:\/\/(www\.)?/, "")}
          </a>
        )}

        {contact.github && (
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
            <Github size={iconSize} />
            {contact.github.replace(/^https?:\/\/(www\.)?/, "")}
          </a>
        )}

        {contact.portfolio && (
          <a href={contact.portfolio} target="_blank" rel="noopener noreferrer" className={linkClass}>
            <Globe size={iconSize} />
            {contact.portfolio.replace(/^https?:\/\/(www\.)?/, "")}
          </a>
        )}

        {contact.linktree && (
          <a href={contact.linktree} target="_blank" rel="noopener noreferrer" className={linkClass}>
            <Globe size={iconSize} />
            {contact.linktree.replace(/^https?:\/\/(www\.)?/, "")}
          </a>
        )}

        {contact.location && (
          <div className="inline-flex items-center gap-1">
            <MapPin size={iconSize} />
            {contact.location}
          </div>
        )}

      </div>
    </Section>
  );
}

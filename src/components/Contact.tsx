import type { ReactNode } from "react";
import type { ReactNode } from { Mail, Globe, MapPin, Github, Linkedin } from "lucide-react";
import type { ContactInfo } from "../types/resume";

interface ContactProps {
  contact?: ContactInfo;
}

export function Contact({ contact = {} }: ContactProps) {
  const linkClass = "hover:text-accent transition-colors";
  const iconSize = 13;

  const items: ReactNode[] = [];

  if (contact.email) {
    items.push(
      <a key="email" href={`mailto:${contact.email}`} className={`inline-flex items-center gap-1 ${linkClass}`}>
        <Mail size={iconSize} />
        {contact.email}
      </a>
    );
  }

  if (contact.portfolio) {
    items.push(
      <a key="portfolio" href={contact.portfolio} target="_blank" className={`inline-flex items-center gap-1 ${linkClass}`}>
        <Globe size={iconSize} />
        {contact.portfolio.replace(/^https?:\/\/(www\.)?/, "")}
      </a>
    );
  }

  if (contact.github) {
    items.push(
      <a key="github" href={contact.github} target="_blank" className={`inline-flex items-center gap-1 ${linkClass}`}>
        <Github size={iconSize} />
        {contact.github.replace(/^https?:\/\/(www\.)?/, "")}
      </a>
    );
  }

  if (contact.linkedin) {
    items.push(
      <a key="linkedin" href={contact.linkedin} target="_blank" className={`inline-flex items-center gap-1 ${linkClass}`}>
        <Linkedin size={iconSize} />
        {contact.linkedin.replace(/^https?:\/\/(www\.)?/, "")}
      </a>
    );
  }

  if (contact.linktree) {
    items.push(
      <a key="linktree" href={contact.linktree} target="_blank" className={`inline-flex items-center gap-1 ${linkClass}`}>
        <Globe size={iconSize} />
        {contact.linktree.replace(/^https?:\/\/(www\.)?/, "")}
      </a>
    );
  }

  return (
    <div className="text-xs text-muted flex flex-col gap-1">
      {items}

      {contact.location && (
        <div className="mt-1 inline-flex items-center gap-1">
          <MapPin size={iconSize} />
          {contact.location}
        </div>
      )}
    </div>
  );
}

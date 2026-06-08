// Erwin Lejeune - 2026-02-15

import type { ReactNode } from "react";
import { Mail, Globe, MapPin, Github, Linkedin, Linktree } from "lucide-react";
import type { ContactInfo } from "../types/resume";

interface HeaderProps {
  name: string;
  title: string;
  contact: ContactInfo;
  profileImage?: string;
}

/** Top section of the resume: profile picture on left, name/title/contact on right. */
export function Header({ name, title, contact, profileImage }: HeaderProps) {
  const linkClass = "hover:text-accent transition-colors";
  const iconSize = 13;

  // Build contact items dynamically so we only render what exists.
  const items: ReactNode[] = [];

  if (contact.email) {
    items.push(
      <a
        key="email"
        href={`mailto:${contact.email}`}
        className={`inline-flex items-center gap-1 ${linkClass}`}
      >
        <Mail size={iconSize} className="shrink-0" />
        {contact.email}
      </a>,
    );
  }
  if (contact.portfolio) {
    items.push(
      <a
        key="portfolio"
        href={contact.portfolio}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1 ${linkClass}`}
      >
        <Globe size={iconSize} className="shrink-0" />
        {contact.portfolio.replace(/^https?:\/\//, "")}
      </a>,
    );
  }
  if (contact.github) {
    items.push(
      <a
        key="github"
        href={`https://github.com/${contact.github}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1 ${linkClass}`}
      >
        <Github size={iconSize} className="shrink-0" />
        {contact.github}
      </a>,
    );
  }
  if (contact.linkedin) {
    items.push(
      <a
        key="linkedin"
        href={`https://linkedin.com/in/${contact.linkedin}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1 ${linkClass}`}
      >
        <Linkedin size={iconSize} className="shrink-0" />
        {contact.linkedin}
      </a>,
    );
  }
  if (contact.linktree) {
    items.push(
      <a
        key="linktree"
        href={`https://linktr.ee/${contact.linktree}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1 ${linkClass}`}
      >
        <Linktree size={iconSize} className="shrink-0" />
        {contact.linktree}
      </a>,
    );
  }
  if (contact.location) {
    items.push(
      <span key="location" className="inline-flex items-center gap-1">
        <MapPin size={iconSize} className="shrink-0" />
        {contact.location}
      </span>,
    );
  }

  return (
    <header className="mb-8 sm:mb-10 print:mb-6">
      <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8">
        {/* Profile picture on the left */}
        {profileImage && (
          <div className="flex-shrink-0">
            <img
              src={profileImage}
              alt={name}
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full shadow-md object-cover"
            />
          </div>
        )}

        {/* Text content on the right */}
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl print:text-4xl font-bold tracking-tight text-primary leading-tight">
            {name}
          </h1>
          <p className="mt-2 print:mt-1 text-base sm:text-lg print:text-base font-medium text-accent">
            {title}
          </p>

          <div className="mt-4 print:mt-3 flex flex-wrap justify-center sm:justify-start gap-y-1.5 text-xs sm:text-sm print:text-xs text-muted">
            {items.map((item, idx) => (
              <span key={idx} className="inline-flex items-center">
                {idx > 0 && (
                  <span aria-hidden className="mx-2 sm:mx-3 text-divider">
                    &middot;
                  </span>
                )}
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

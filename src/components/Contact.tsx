import { Section } from "./Section";
import { Mail, Globe, MapPin, Github, Linkedin } from "lucide-react";

interface ContactProps {
  contact: {
    email?: string;
    linkedin?: string;
    github?: string;
    website?: string;
    linktree?: string;
    location?: string;
  };
  title: string;
  qrCodeImage?: string;
}

export function Contact({ contact, title, qrCodeImage }: ContactProps) {
   const iconSize = 13;
   const linkClass = "inline-flex items-center gap-1 hover:text-accent transition-colors";
  
  return (
    <Section title={title}>
      <div className="flex items-start gap-4">
        {/* LEFT */}
        <div className="flex-1 space-y-2 text-sm">
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
              {contact.github.replace(/^https?:\/\/(www\.)?/, "")}=
            </a>
          )}

          {contact.website && (
            <a href={contact.website} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <Globe size={iconSize} />
              {contact.website.replace(/^https?:\/\/(www\.)?/, "")}
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
              <MapPin size={iconSize*2} />
              {contact.location}
            </div>
          )}
          
        </div>

        {/* RIGHT */}
        {qrCodeImage && (
          <div className="flex-shrink-0">
            <img
              src={qrCodeImage}
              alt="QR Code"
              className="w-20 h-20 object-cover"
            />
          </div>
        )}
      </div>
    </Section>
  );
}

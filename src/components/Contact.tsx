import { Section } from "./Section";
import { ContactInfo } from "./ContactInfo";

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
  return (
    <Section title={title}>
      <div className="flex items-start gap-4">
        {/* LEFT */}
        <div className="flex-1 space-y-2 text-sm">
          {contact.email && (
            <ContactInfo icon="📧">{contact.email}</ContactInfo>
          )}

          {contact.linkedin && (
            <ContactInfo icon="🔗">
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </ContactInfo>
          )}

          {contact.github && (
            <ContactInfo icon="💻">
              <a href={contact.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </ContactInfo>
          )}

          {contact.website && (
            <ContactInfo icon="🌐">
              <a href={contact.website} target="_blank" rel="noreferrer">
                Website
              </a>
            </ContactInfo>
          )}

          {contact.linktree && (
            <ContactInfo icon="🌐">
              <a href={contact.linktree} target="_blank" rel="noreferrer">
                {contact.linktree.replace("https://", "")}
              </a>
            </ContactInfo>
          )}

          {contact.location && (
            <ContactInfo icon="📍">{contact.location}</ContactInfo>
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

import { ContactInfo } from "./ContactInfo";

interface ContactProps {
  contact: {
    email?: string;
    linkedin?: string;
    github?: string;
    website?: string;
    location?: string;
  };
  title: string;
  qrCodeImage?: string;
}

export function Contact({ contact, title, qrCodeImage }: ContactProps) {
  return (
    <section className="mt-6">
      <h2 className="text-sm font-semibold mb-3">{title}</h2>

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

          {contact.linktree && (
            <ContactInfo icon="🌐">
              <a href={contact.linktree} target="_blank" rel="noreferrer">
                linktr.ee/anyameetoo
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

          {contact.location && (
            <ContactInfo icon="📍">{contact.location}</ContactInfo>
          )}
        </div>

        {/* RIGHT */}
        {qrCodeImage && (
          <div className="flex-shrink-0">
            <img src={qrCodeImage} className="w-20 h-20" />
          </div>
        )}
      </div>
    </section>
  );
}

import type { ContactInfo } from "../types/resume";
import { Section } from "./Section";
import { Mail, Globe, MapPin, Github, Linkedin } from "lucide-react";

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
        {/* LEFT: contact info */}
        <div className="flex-1 space-y-2 text-sm">
          {contact.email && (
            <div className="flex items-center gap-2">
              <span>📧</span>
              <span>{contact.email}</span>
            </div>
          )}

          {contact.linkedin && (
            <div className="flex items-center gap-2">
              <span>🔗</span>
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          )}

          {contact.github && (
            <div className="flex items-center gap-2">
              <span>💻</span>
              <a href={contact.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          )}

          {contact.website && (
            <div className="flex items-center gap-2">
              <span>🌐</span>
              <a href={contact.website} target="_blank" rel="noreferrer">
                Website
              </a>
            </div>
          )}

          {contact.location && (
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>{contact.location}</span>
            </div>
          )}
        </div>

        {/* RIGHT: QR code */}
        {qrCodeImage && (
          <div className="flex-shrink-0">
            <img
              src={qrCodeImage}
              alt="QR Code"
              className="w-24 h-24 object-cover rounded-sm shadow-sm"
            />
          </div>
        )}
      </div>
    </section>
  );
}

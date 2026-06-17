// Erwin Lejeune - 2026-02-15

import type { ReactNode } from "react";
import { Mail, Globe, MapPin, Github, Linkedin } from "lucide-react";

interface HeaderProps {
  name: string;
  title: string;
  profileImage?: string;
}

/** Top section of the resume: profile picture on left, name/title/contact on right. */
export function Header({ name, title, profileImage }: HeaderProps) {
  const linkClass = "hover:text-accent transition-colors";
  const iconSize = 13;

  // Build contact items dynamically so we only render what exists.


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
          <h1 className="text-2xl sm:text-3xl md:text-4xl print:text-3xl font-bold tracking-tight text-primary leading-tight">
            {name}
          </h1>
          <p className="mt-2 print:mt-1 text-base sm:text-lg print:text-base font-medium text-accent">
            {title}
          </p>
        </div>
      </div>
    </header>
  );
}

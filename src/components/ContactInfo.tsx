import React from "react";

interface ContactInfoProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

export function ContactInfo({ icon, children }: ContactInfoProps) {
  return (
    <div className="flex items-center gap-2">
      <span>{icon}</span>
      <span>{children}</span>
    </div>
  );
}

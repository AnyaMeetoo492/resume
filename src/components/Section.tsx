// Erwin Lejeune - 2026-02-15

import type { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

/** Reusable section wrapper with a consistent heading style. */
export function Section({ title, children, className = "" }: SectionProps) {
  return (
    <section className={`mb-8 print:mb-5 ${className}`}>
      <h2 className="text-sm print:text-xs font-bold uppercase tracking-widest text-accent border-b border-divider pb-1 print:pb-0.5 mb-4 print:mb-2">
        {title}
      </h2>
      {children}
    </section>
  );
}

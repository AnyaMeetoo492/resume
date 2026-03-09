// Erwin Lejeune - 2026-02-16

/**
 * Open browser print-to-PDF flow for the resume.
 *
 * This keeps text selectable and preserves real hyperlinks in the output
 * PDF, unlike rasterized screenshot-based generation.
 *
 * @param _element  Unused placeholder to keep call sites stable.
 * @param filename  Suggested PDF filename (used as temporary document title).
 */
export async function generateResumePdf(
  _element: HTMLElement,
  filename: string,
): Promise<void> {
  await document.fonts.ready;

  const previousTitle = document.title;
  document.title = filename.replace(/\.pdf$/i, "");

  // Wait one frame so title/style updates are applied before print dialog opens.
  await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
  window.print();

  // Restore page title after print dialog is triggered.
  setTimeout(() => {
    document.title = previousTitle;
  }, 0);
}

/**
 * Derive a kebab-cased PDF filename from a person's name.
 *
 * @example toResumeFilename("Erwin Lejeune") → "erwin-lejeune-resume.pdf"
 */
export function toResumeFilename(name: string): string {
  return `${name.toLowerCase().replace(/\s+/g, "-")}-resume.pdf`;
}

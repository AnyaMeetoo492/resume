// utils/pdf.ts

export async function generateResumePdf(
  _element: HTMLElement,
  filename: string,
): Promise<void> {
  await document.fonts.ready;

  const root = document.documentElement;
  const previousTitle = document.title;

  // Change le nom du fichier PDF
  document.title = filename.replace(/\.pdf$/i, "");

  // Active le mode export
  root.classList.add("pdf-export");

  let cleanedUp = false;
  const cleanup = () => {
    if (cleanedUp) return;
    cleanedUp = true;
    document.title = previousTitle;
    root.classList.remove("pdf-export");
  };

  // Cleanup automatique après impression
  window.addEventListener("afterprint", cleanup, { once: true });

  // ✅ Attente stable (corrige les bugs de layout)
  await new Promise((resolve) => setTimeout(resolve, 120));

  // Ouvre le print dialog
  window.print();

  // Fallback
  setTimeout(cleanup, 3000);
}

// Génération du nom fichier
export function toResumeFilename(name: string): string {
  return `${name.toLowerCase().replace(/\s+/g, "-")}-resume.pdf`;
}

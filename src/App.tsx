// Erwin Lejeune - 2026-02-15

import { useEffect, useRef, useState } from "react";
import { resumeFr } from "./data/resume.fr";
import { resumeEn } from "./data/resume.en";

import {
  DownloadButton,
  Header,
  ProfessionalSummary,
  WorkExperience,
  EducationSection,
  Volunteering,
  Skills,
  Interests,
  Languages,
  Projects,
  QRCode,
} from "./components";

import { generateResumePdf, toResumeFilename } from "./lib/generatePdf";

const labels = {
  fr: {
    summary: "Profil",
    experience: "Expériences Professionnelles",
    education: "Formations",
    skills: "Compétences",
    languages: "Langues",
    projects: "Projets",
    volunteering: "Bénévolat & Activités",
    interests: "Centres d’intérêts",
    download: "Télécharger le CV",
    contact: "Contact",
    qrcode: "Retrouvez mon profil :",
  },

  en: {
    summary: "Profile",
    experience: "Work Experience",
    education: "Education",
    skills: "Skills",
    languages: "Languages",
    projects: "Projects",
    volunteering: "Volunteering & Activities",
    interests: "Current Interests",
    download: "Download CV",
    contact: "Contact",
    qrcode: "Find my profile:",
  },
};


export default function App() {
  /** Language state */
  const [lang, setLang] = useState<"fr" | "en">("fr");

  /** Pick dataset */
  const resumeData = lang === "fr" ? resumeFr : resumeEn;

  const {
    name,
    title,
    summary,
    contact,
    experience,
    education,
    skills,
    interests,
    volunteering,
    languages,
    projects,
    profileImage,
    qrCodeImage,
  } = resumeData;

  const hasAutoDownloaded = useRef(false);
  const pageRef = useRef<HTMLDivElement>(null);

  /** Init language from URL */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");

    if (urlLang === "fr" || urlLang === "en") {
      setLang(urlLang);
    }
  }, []);

  /** Auto PDF */
  useEffect(() => {
    if (hasAutoDownloaded.current) return;

    const params = new URLSearchParams(window.location.search);
    if (!params.has("download")) return;

    hasAutoDownloaded.current = true;

    const timer = setTimeout(async () => {
      const page = pageRef.current;
      if (!page) return;

      await document.fonts.ready;

      await generateResumePdf(
        page,
        toResumeFilename(`${name}-${lang}`)
      );
    }, 500);

    return () => clearTimeout(timer);
  }, [name, lang]);

  /** Change language */
  const changeLang = (newLang: "fr" | "en") => {
    setLang(newLang);

    const params = new URLSearchParams(window.location.search);
    params.set("lang", newLang);
    window.history.replaceState({}, "", `?${params.toString()}`);
  };

  return (
    <>
      {/* Top bar */}
      <div className="flex justify-between items-center max-w-[1200px] mx-auto mb-4 px-4 print:hidden">
             <DownloadButton
                  name={`${name}-${lang}`}
                  title={labels[lang].download}
              />

        <div className="flex gap-2">
          <button
            onClick={() => changeLang("fr")}
            className={`px-3 py-1 rounded text-sm ${
              lang === "fr"
                ? "bg-black text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            FR
          </button>

          <button
            onClick={() => changeLang("en")}
            className={`px-3 py-1 rounded text-sm ${
              lang === "en"
                ? "bg-black text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            EN
          </button>
        </div>
      </div>

      {/* Page */}
      <div ref={pageRef} className="page">
        <div className="px-5 py-8 sm:px-10 sm:py-10 md:px-14 md:py-12 print:px-4 print:py-5">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] print:grid-cols-[1fr_250px] gap-x-10 print:gap-x-8 gap-y-2 print:gap-y-0">
            {/* Main column */}
            <div>
              <Header
                name={name}
                title={title}
                contact={contact}
                profileImage={profileImage}
              />
              
              <ProfessionalSummary
                summary={summary}
                title={labels[lang].summary}
              />
            
              <WorkExperience
                experience={experience}
                title={labels[lang].experience}
              />
            
              <Projects
                projects={projects}
                title={labels[lang].projects}
              />
            </div>
            
            {/* Sidebar */}
            <aside>
              <EducationSection
                education={education}
                title={labels[lang].education}
              />
            
              <Languages
                languages={languages}
                title={labels[lang].languages}
              />
            
              <Skills
                skills={skills}
                title={labels[lang].skills}
              />

              <Volunteering
                volunteering={volunteering}
                title={labels[lang].volunteering}
              />
            
              <Interests
                interests={interests}
                title={labels[lang].interests}
              />
            
              {qrCodeImage && (
                <QRCode imageUrl={qrCodeImage} alt="Contact QR Code" title={labels[lang].qrcode} />
              )}
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

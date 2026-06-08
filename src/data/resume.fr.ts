// Erwin Lejeune - 2026-02-15

import type { ResumeData } from "../types/resume";
import profilePic from "./profile.jpg";
import qrCode from "./qr_code.jpg";

export const resumeData: ResumeData = {
  name: "Anya Meetoo",
  title: "Étudiante en ingénierie informatique | IoT, développement logiciel, systèmes embarqués, robotique et IA | Diplôme prévu en septembre 2026",
  profileImage: profilePic,
  qrCodeImage: qrCode,
  summary:
    "Étudiante en ingénierie informatique à l’INSA Toulouse, spécialisée en systèmes embarqués et IoT. Passionnée par la programmation bas niveau, l’intégration matériel/logiciel et les systèmes temps réel. Expérience en C, C++, Python, RUST et Assembleur à travers des projets académiques et personnels en robotique, IA embarquée et objets connectés. Je recherche actuellement une opportunité en ingénierie logiciel embarqué en France à partir de septembre/octobre 2026.",
  
  contact: {
    email: "anyameetoo@gmail.com",
    portfolio: "https://github.com/AnyaMeetoo492",
    location: "Toulouse, France (ouverte à travailler en France)",
  },

  languages: [
    {
      name: "Anglais",
      level: "C1 (TOEIC 985/990)",
    },
    {
      name: "Français",
      level: "C1 (DALF)",
    },
    {
      name: "Créole mauricien",
      level: "C2 / Langue maternelle",
    },
  ],

  experience: [
    {
      company: "SCLE SFE",
      companyUrl: "https://www.scle.fr/",
      location: "Toulouse, France",
      role: "Stagiaire ingénieure logiciel (R&D)",
      period: "Mar 2026 - Présent",
      bullets: [
        {
          text: "Développement d’un module d’édition d’images système en C++/Qt pour le logiciel industriel ARKENS Studio utilisé par les clients de SCLE SFE dans des postes électriques haute tension.",
        },
        {
          text: "Amélioration de la personnalisation de l’interface de supervision en intégrant des éléments graphiques dynamiques basés sur SVG (étiquettes, lignes, polygones) mis à jour en fonction des paramètres.",
        },
        {
          text: "Travail avec l’équipe Configuration Systèmes R&D sur l’ensemble du cycle de vie logiciel : spécification, développement, tests et validation.",
        },
      ],
    },
    {
      company: "Qt Company",
      companyUrl: "https://www.qt.io/",
      location: "Hamburg, Allemagne",
      role: "Stagiaire ingénieure logiciel (Assurance qualité R&D)",
      period: "Juin 2025 - Sept 2025",
      bullets: [
        {
          text: "Création d’un dataset de crashs d’interfaces utilisateur à partir d’applications open source Qt en utilisant Python et des API REST.",
        },
        {
          text: "Reproduction et analyse de problèmes d’interface dans des environnements virtuels pour soutenir les outils de test automatisés.",
        },
        {
          text: "Contribution au projet de tests autonomes avec Python et C++, incluant refactorisation et revues de code.",
        },
      ],
    },
    {
      company: "Mauritius Telecom",
      companyUrl: "https://www.telecom.mu/",
      location: "Port Louis, Maurice",
      role: "Stagiaire ingénieure",
      period: "Juil 2024 - Août 2024",
      bullets: [
        {
          text: "Étude des architectures réseaux mobiles et fixes (4G/5G, FTTH, réseaux cœur IP).",
        },
        {
          text: "Développement d’un tableau de bord Power BI pour analyser des données de tours télécoms via des bases SQL.",
        },
      ],
    },
    {
      company: "SD Worx",
      companyUrl: "https://www.sdworx.com/",
      location: "Maurice",
      role: "Stagiaire logiciel",
      period: "Juil 2022",
      bullets: [
        {
          text: "Initiation au développement web full-stack (HTML, CSS, C#, SQL).",
        },
        {
          text: "Développement d’applications simples et acquisition d’expérience en bases de données et logique backend.",
        },
      ],
    },
  ],

  education: [
    {
      degree: "Diplôme d’ingénieur – Informatique (IR - Systèmes intelligents innovants)",
      institution: "INSA Toulouse",
      institutionUrl: "https://www.insa-toulouse.fr/",
      period: "2022 - 2026",
    },
    {
      degree: "Licence 1 – Informatique",
      institution: "Université Paul Sabatier Toulouse III",
      institutionUrl: "https://www.univ-tlse3.fr/",
      period: "2021 - 2022",
    },
    {
      degree: "Higher School Certificate – Mathématiques & Informatique",
      institution: "Loreto College Quatre Bornes",
      institutionUrl: "",
      period: "2014 - 2021",
    },
  ],

  publications: [
    {
      title: "Flocage inspiré des oiseaux basé sur une accélération décentralisée",
      venue: "IEEE/RSJ IROS 2024",
      date: "Octobre 2024",
      url: "https://www.researchgate.net/publication/387418977_Decentralized_Acceleration-Based_Bird-Inspired_Flocking",
    },
    {
      title: "Mesures de jitter en temps réel sous ROS2 : cas du pendule inversé",
      venue: "Preprint, 2021",
      date: "Mars 2021",
      url: "https://www.researchgate.net/publication/350353690_Real-time_Jitter_Measurements_under_ROS2_the_Inverted_Pendulum_case",
    },
    {
      title: "Panorama des solutions de planification de chemin multi-agents",
      venue: "Preprint, 2021",
      date: "Janvier 2021",
      url: "https://www.researchgate.net/publication/348716625_Survey_of_the_Multi-Agent_Pathfinding_Solutions",
    },
  ],

  skills: [
    {
      category: "Programmation",
      items: ["C", "C++", "Python", "Java", "Assembleur"],
    },
    {
      category: "Systèmes embarqués",
      items: ["STM32", "GPIO", "Timers", "Interrupts", "UART", "ADC", "PWM", "Intégration matériel/logiciel"],
    },
    {
      category: "Outils & logiciels",
      items: ["MATLAB", "Qt", "Vivado", "Eclipse", "IntelliJ IDEA", "Visual Studio Code"],
    },
    {
      category: "Développement & plateformes",
      items: ["GitHub", "GitLab", "Jira", "Confluence", "Linux"],
    },
  ],

  interests: [
    { label: "Systèmes embarqués" },
    { label: "IoT" },
    { label: "Robotique" },
    { label: "IA" },
    { label: "Traitement 3D" },
    { label: "Production musicale" },
  ],

  volunteering: [
    {
      title: "Les Enfoiros de l'INSA — Chanteuse leader et membre",
      description: "Organisation de concerts caritatifs",
      date: "2024 - 2025",
      url: "https://enfoiros.org/",
    },
    {
      title: "BEE Club — Membre",
      description: "Association d’étudiants internationaux",
      date: "2022 - 2024",
      url: "https://www.instagram.com/bee_insatoulouse/",
    },
    {
      title: "Psychedelic Trauma — Chanteuse",
      description: "Groupe de musique",
      date: "2023 - 2026",
      url: "",
    },
  ],

  projects: [
    {
      title: "Locomotion d’un robot quadrupède",
      tech: "FPGA · IA · Robotique · Systèmes embarqués",
      description:
        "Développement de systèmes de perception et de décision utilisant une caméra de profondeur pour un robot quadrupède autonome sous contraintes embarquées (énergie, performance).",
      date: "2025 - 2026",
      url: "",
    },
    {
      title: "Contrôle d’un voilier embarqué (STM32)",
      tech: "C · STM32 · GPIO · Timers · Interruptions · UART",
      description:
        "Implémentation de drivers bas niveau et de contrôle temps réel sur STM32 en manipulant directement les registres.",
      date: "2024 - 2025",
      url: "https://github.com/bongibault-romain/insa-voilier",
    },
    {
      title: "Capteur de gaz IoT intelligent",
      tech: "LoRa · Systèmes embarqués · KiCad · Node-RED",
      description:
        "Conception d’un système IoT complet, de la fabrication du capteur à la supervision des données sans fil.",
      date: "2025 - 2026",
      url: "https://github.com/MOSH-Insa-Toulouse/2025-2026-5ISS-MEETOO-MIRANVILLE-REVELLI",
    },
    {
      title: "Détection de chute par IA embarquée",
      tech: "Python · TensorFlow · CNN · Edge AI",
      description:
        "Conception et optimisation d’un modèle CNN pour une détection de chute en temps réel sous contraintes embarquées.",
      date: "2025 - 2026",
      url: "",
    },
    {
      title: "Traitement du signal – Laser Game",
      tech: "MATLAB · FFT · Traitement du signal",
      description:
        "Implémentation d’une détection fréquentielle basée sur FFT pour identifier plusieurs signaux en présence de bruit.",
      date: "2024",
      url: "https://github.com/AnyaMeetoo492/BE_CHTI",
    },
  ]
};

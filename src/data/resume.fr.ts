// Erwin Lejeune - 2026-02-15

import type { ResumeData } from "../types/resume";
import profilePic from "./profile.jpg";
import qrCode from "./qr_code.jpg";

export const resumeFr: ResumeData = {
  name: "Anya Meetoo",
  title:
    "Étudiante en génie informatique | IoT, développement logiciel, systèmes embarqués, robotique & IA | Diplôme prévu pour septembre 2026",
  profileImage: profilePic,
  qrCodeImage: qrCode,
  summary:
    "Étudiante en Génie Informatique & Réseaux à l’INSA Toulouse, spécialisée en objets connectés (IoT) et systèmes embarqués. Passionnée par la programmation bas niveau, l’intégration matériel/logiciel et les systèmes temps réel. Expérience en C, C++, Python, Rust et Assembleur à travers des projets académiques et personnels en robotique, IA embarquée et objets connectés. Actuellement à la recherche d’une opportunité en ingénierie logicielle embarquée en France à partir de septembre/octobre 2026.",

  contact: {
    email: "anyameetoo@gmail.com",
    linkedin: "https://www.linkedin.com/in/anyameetoo/",
    github: "https://www.github.com/AnyaMeetoo492",
    linktree: "https://www.linktr.ee/anyameetoo",
    location: "Toulouse, France (ouverte aux opportunités dans toute la France)",
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
      period: "Mars 2026 - Présent",
      bullets: [
        {
          text: "Développement d’un module d’édition d’images système en C++/Qt pour ARKENS Studio, un logiciel industriel utilisé par les clients de SCLE SFE dans les postes électriques haute tension.",
        },
        {
          text: "Amélioration de la personnalisation de l’interface en intégrant des éléments graphiques dynamiques basés sur SVG (labels, lignes, polygones) mis à jour selon les paramètres système.",
        },
        {
          text: "Collaboration avec l’équipe R&D configuration des systèmes sur l’ensemble du cycle logiciel : spécification, développement, tests et validation.",
        },
      ],
    },
    {
      company: "The Qt Company",
      companyUrl: "https://www.qt.io/",
      location: "Hambourg, Allemagne",
      role: "Stagiaire ingénieure logiciel (R&D Quality Assurance) - Stage ERASMUS",
      period: "Juin 2025 - Sept. 2025",
      bullets: [
        {
          text: "Création d’un jeu de données de crashs d’interface provenant d’applications Qt open-source à l’aide de Python et d’API REST.",
        },
        {
          text: "Reproduction et analyse de bugs UI dans des environnements virtualisés pour soutenir les outils de test automatisés.",
        },
        {
          text: "Contribution à des projets de tests autonomes en Python et C++, incluant refactorisation et revues de code.",
        },
      ],
    },
    {
      company: "Mauritius Telecom",
      companyUrl: "https://www.telecom.mu/",
      location: "Port Louis, Maurice",
      role: "Stagiaire réseaux mobiles et télécoms (QA)",
      period: "Juil. 2024 - Août 2024",
      bullets: [
        {
          text: "Étude des architectures réseaux mobiles et fixes (4G/5G, FTTH, réseaux IP cœur).",
        },
        {
          text: "Développement d’un tableau de bord Power BI pour l’analyse des données des antennes télécoms via bases SQL.",
        },
      ],
    },
    {
      company: "SD Worx",
      companyUrl: "https://www.sdworx.com/",
      location: "Maurice",
      role: "Stagiaire développeuse web",
      period: "Juil. 2022",
      bullets: [
        {
          text: "Introduction au développement web full-stack (HTML, CSS, C#, SQL).",
        },
        {
          text: "Développement de petites applications et découverte des bases de données et de la logique backend.",
        },
      ],
    },
  ],

  education: [
    {
      degree:
        "Diplôme d’ingénieur – Informatique (spécialité Systèmes Intelligents Innovants)",
      institution: "INSA Toulouse - IR/ISS",
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
      degree:
        "Baccalauréat – Physique, Mathématiques & Informatique",
      institution: "Loreto College Quatre Bornes",
      institutionUrl: "",
      period: "2014 - 2021",
    },
  ],

  publications: [
    {
      title:
        "Flocking inspiré des oiseaux basé sur une accélération décentralisée",
      venue: "IEEE/RSJ IROS 2024",
      date: "Octobre 2024",
      url: "https://www.researchgate.net/publication/387418977_Decentralized_Acceleration-Based_Bird-Inspired_Flocking",
    },
    {
      title:
        "Mesures de jitter en temps réel sous ROS2 : cas du pendule inversé",
      venue: "Prépublication, 2021",
      date: "Mars 2021",
      url: "https://www.researchgate.net/publication/350353690_Real-time_Jitter_Measurements_under_ROS2_the_Inverted_Pendulum_case",
    },
    {
      title:
        "Étude des solutions de pathfinding multi-agents",
      venue: "Prépublication, 2021",
      date: "Janvier 2021",
      url: "https://www.researchgate.net/publication/348716625_Survey_of_the_Multi-Agent_Pathfinding_Solutions",
    },
  ],

  skills: [
    {
      category: "Programmation",
      items: ["C", "C++", "Python", "Java", "Assembly", "RUST", "JavaScript", "HTML", "C#", "CSS", "SQL"],
    },
    {
      category: "Systèmes embarqués & IoT",
      items: [
        "STM32",
        "ESP",
        "Arduino",
        "FPGA",
        "IHM",
        "MQTT",
        "Node-Red",
        "BLE / Bluetooth",
        "LoRa",
        "ZigBee",
        "KiCAD",
        "RTOS",
        "Linux embarqué",
        "UART / SPI / I2C / Bus",
        "CI/CD",
      ],
    },
    {
      category: "Outils & logiciels",
      items: [
        "MATLAB",
        "Qt",
        "Docker",
        "Vivado",
        "Eclipse",
        "IntelliJ IDEA",
        "Visual Studio Code",
      ],
    },
    {
      category: "Développement & plateformes",
      items: ["GitHub", "GitLab", "Jira", "Confluence", "Linux", "Windows"],
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
      title: "Les Enfoiros de l’INSA — Chanteuse principale & membre",
      description: "Organisation de concerts caritatifs",
      date: "2024 - 2025",
      url: "https://enfoiros.org/",
    },
    {
      title: "BEE Club — Secrétaire & membre",
      description: "Bureau des étudiants internationaux de l’INSA Toulouse",
      date: "2022 - 2024",
      url: "https://www.instagram.com/bee_insatoulouse/",
    },
    {
      title: "Psychedelic Trauma — Chanteuse",
      description: "Groupe de musique pop/rock",
      date: "2023 - 2026",
      url: "",
    },
  ],

  projects: [
    {
      title:
        "Locomotion d’un robot quadrupède (projet de recherche encadré par le LAAS/CNRS & INSA Toulouse)",
      tech: "FPGA · IA · Robotique · Systèmes embarqués",
      description:
        "Développement de systèmes de perception et de prise de décision utilisant une FPGA et une caméra de profondeur pour un robot quadrupède autonome sous contraintes embarquées (énergie, performance).",
      date: "2025 - 2026",
      url: "",
    },
    {
      title: "Contrôle d’un voilier embarqué (STM32) - Projet étudiant INSA Toulouse",
      tech: "C · Assembleur · STM32 · contrôle via UART GPIO/Timers/Interruptions",
      description:
        "Implémentation de drivers bas niveau et contrôle temps réel sur STM32 via manipulation directe des registres pour piloter un voilier miniature.",
      date: "2024 - 2025",
      url: "https://github.com/bongibault-romain/insa-voilier",
    },
    {
      title: "Capteur de gaz IoT intelligent - Projet étudiant INSA Toulouse",
      tech: "LoRa · Systèmes embarqués/IoT · KiCad · Node-RED",
      description:
        "Conception d’un système IoT complet depuis le matériel capteur jusqu’à la surveillance des données sans fil (Arduino UNO avec communication LoRa).",
      date: "2025 - 2026",
      url: "https://github.com/MOSH-Insa-Toulouse/2025-2026-5ISS-MEETOO-MIRANVILLE-REVELLI",
    },
    {
      title: "Détection de chute embarquée avec IA - Projet étudiant INSA Toulouse",
      tech: "Python · TensorFlow · CNN · Edge AI",
      description:
        "Conception et optimisation d’un modèle CNN pour la détection de chutes en temps réel sous contraintes d’énergie et de stockage.",
      date: "2025 - 2026",
      url: "",
    },
    {
      title: "Traitement du signal dans un jeu de laser - Projet étudiant INSA Toulouse",
      tech: "MATLAB · FFT · Traitement du signal",
      description:
        "Implémentation d’une détection fréquentielle via FFT pour identifier plusieurs signaux dans un environnement bruité et attribuer des points à des cibles.",
      date: "2024",
      url: "https://github.com/AnyaMeetoo492/BE_CHTI",
    },
  ],
};

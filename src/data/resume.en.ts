// Erwin Lejeune - 2026-02-15

import type { ResumeData } from "../types/resume";
import profilePic from "./profile.jpg";
import qrCode from "./qr_code.jpg";

export const resumeEn: ResumeData = {
  name: "Anya Meetoo",
  title:
    "Computer Engineering Student | IoT, Software Development, Embedded Systems, Robotics & AI | Graduation expected September 2026",
  profileImage: profilePic,
  qrCodeImage: qrCode,
  summary:
    "Computer engineering student at INSA Toulouse, specializing in embedded systems and IoT. Passionate about low-level programming, hardware/software integration, and real-time systems. Experience in C, C++, Python, Rust, and Assembly through academic and personal projects in robotics, embedded AI, and connected devices. Currently seeking an embedded software engineering opportunity in France starting September/October 2026.",

  contact: {
    email: "anyameetoo@gmail.com",
    linkedin: "https://www.linkedin.com/in/anyameetoo/",
    portfolio: "https://github.com/AnyaMeetoo492",
    linktree: "https://linktr.ee/anyameetoo",
    location: "Toulouse, France (open to opportunities across France)",
  },

  languages: [
    {
      name: "English",
      level: "C1 (TOEIC 985/990)",
    },
    {
      name: "French",
      level: "C1 (DALF)",
    },
    {
      name: "Mauritian Creole",
      level: "C2 / Native",
    },
  ],

  experience: [
    {
      company: "SCLE SFE",
      companyUrl: "https://www.scle.fr/",
      location: "Toulouse, France",
      role: "Software Engineering Intern (R&D)",
      period: "Mar 2026 - Present",
      bullets: [
        {
          text: "Developed a system image editing module in C++/Qt for ARKENS Studio, an industrial software used by SCLE SFE clients in high-voltage electrical substations.",
        },
        {
          text: "Enhanced UI customization by integrating dynamic SVG-based graphical elements (labels, lines, polygons) updated according to system parameters.",
        },
        {
          text: "Collaborated with the Systems Configuration R&D team across the full software lifecycle: specification, development, testing, and validation.",
        },
      ],
    },
    {
      company: "The Qt Company",
      companyUrl: "https://www.qt.io/",
      location: "Hamburg, Germany",
      role: "Software Engineering Intern (R&D Quality Assurance) - ERASMUS Internship",
      period: "Jun 2025 - Sept 2025",
      bullets: [
        {
          text: "Built a dataset of UI crashes from open-source Qt applications using Python and REST APIs.",
        },
        {
          text: "Reproduced and analyzed UI issues in virtualized environments to support automated testing tools.",
        },
        {
          text: "Contributed to autonomous testing projects using Python and C++, including refactoring and code reviews.",
        },
      ],
    },
    {
      company: "Mauritius Telecom",
      companyUrl: "https://www.telecom.mu/",
      location: "Port Louis, Mauritius",
      role: "Engineering Intern",
      period: "Jul 2024 - Aug 2024",
      bullets: [
        {
          text: "Studied mobile and fixed network architectures (4G/5G, FTTH, core IP networks).",
        },
        {
          text: "Developed a Power BI dashboard to analyze telecom tower data using SQL databases.",
        },
      ],
    },
    {
      company: "SD Worx",
      companyUrl: "https://www.sdworx.com/",
      location: "Mauritius",
      role: "Software Intern",
      period: "Jul 2022",
      bullets: [
        {
          text: "Introduced to full-stack web development (HTML, CSS, C#, SQL).",
        },
        {
          text: "Developed simple applications and gained experience in databases and backend logic.",
        },
      ],
    },
  ],

  education: [
    {
      degree:
        "Engineering Degree – Computer Science (Innovative Intelligent Systems)",
      institution: "INSA Toulouse",
      institutionUrl: "https://www.insa-toulouse.fr/",
      period: "2022 - 2026",
    },
    {
      degree: "Bachelor Year 1 – Computer Science",
      institution: "Université Paul Sabatier Toulouse III",
      institutionUrl: "https://www.univ-tlse3.fr/",
      period: "2021 - 2022",
    },
    {
      degree: "Higher School Certificate – Mathematics & Computer Science",
      institution: "Loreto College Quatre Bornes",
      institutionUrl: "",
      period: "2014 - 2021",
    },
  ],

  publications: [
    {
      title:
        "Bird-Inspired Flocking Based on Decentralized Acceleration",
      venue: "IEEE/RSJ IROS 2024",
      date: "October 2024",
      url: "https://www.researchgate.net/publication/387418977_Decentralized_Acceleration-Based_Bird-Inspired_Flocking",
    },
    {
      title:
        "Real-Time Jitter Measurements under ROS2: The Inverted Pendulum Case",
      venue: "Preprint, 2021",
      date: "March 2021",
      url: "https://www.researchgate.net/publication/350353690_Real-time_Jitter_Measurements_under_ROS2_the_Inverted_Pendulum_case",
    },
    {
      title:
        "Survey of Multi-Agent Pathfinding Solutions",
      venue: "Preprint, 2021",
      date: "January 2021",
      url: "https://www.researchgate.net/publication/348716625_Survey_of_the_Multi-Agent_Pathfinding_Solutions",
    },
  ],

  skills: [
    {
      category: "Programming",
      items: ["C", "C++", "Python", "Java", "Assembly", "RUST", "JavaScript", "HTML", "C#", "CSS", "SQL"],
    },
    {
      category: "Embedded Systems & IoTs",
      items: [
        "STM32",
        "ESP",
        "Arduino",
        "FPGA",
        "MQTT",
        "Node-Red",
        "BLE / Bluetooth",
        "LoRa",
        "ZigBee", 
        "KiCAD",
        "RTOS",
        "Embedded Linux",
        "UART / SPI / I2C / Bus",
        "CI/CD",
      ],
    },
    {
      category: "Tools & Software",
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
      category: "Development & Platforms",
      items: ["GitHub", "GitLab", "Jira", "Confluence", "Linux", "Windows"],
    },
  ],

  interests: [
    { label: "Embedded Systems" },
    { label: "IoT" },
    { label: "Robotics" },
    { label: "AI" },
    { label: "3D Processing" },
    { label: "Music Production" },
  ],

  volunteering: [
    {
      title: "Les Enfoiros de l'INSA — Lead Singer & Member",
      description: "Organization of charity concerts",
      date: "2024 - 2025",
      url: "https://enfoiros.org/",
    },
    {
      title: "BEE Club — Secretary & Member",
      description: "International students' bureau of INSA Toulouse",
      date: "2022 - 2024",
      url: "https://www.instagram.com/bee_insatoulouse/",
    },
    {
      title: "Psychedelic Trauma — Singer",
      description: "Music band pop/rock",
      date: "2023 - 2026",
      url: "",
    },
  ],

  projects: [
    {
      title: "Quadruped Robot Locomotion (Research project under supervision of the LAAS/CNRS & INSA Toulouse)",
      tech: "FPGA · AI · Robotics · Embedded Systems",
      description:
        "Developed perception and researched decision-making systems using a depth camera for an autonomous quadruped robot under embedded constraints (energy, performance).",
      date: "2025 - 2026",
      url: "",
    },
    {
      title: "Embedded Sailboat Control (STM32) - Student Project INSA Toulouse",
      tech: "C · Assemnly · STM32 · control via UART GPIO/Timers/Interrupts",
      description:
        "Implemented low-level drivers and real-time control on STM32 using direct register manipulation.",
      date: "2024 - 2025",
      url: "https://github.com/bongibault-romain/insa-voilier",
    },
    {
      title: "Smart IoT Gas Sensor - Student Project INSA Toulouse",
      tech: "LoRa · Embedded Systems/IoTs · KiCad · Node-RED",
      description:
        "Designed a complete IoT system from sensor hardware development to wireless data monitoring.",
      date: "2025 - 2026",
      url: "https://github.com/MOSH-Insa-Toulouse/2025-2026-5ISS-MEETOO-MIRANVILLE-REVELLI",
    },
    {
      title: "Embedded Fall Detection with AI - Student Project INSA Toulouse",
      tech: "Python · TensorFlow · CNN · Edge AI",
      description:
        "Designed and optimized a CNN model for real-time fall detection under embedded constraints.",
      date: "2025 - 2026",
      url: "",
    },
    {
      title: "Signal Processing in a laser gun game - Student Project INSA Toulouse",
      tech: "MATLAB · FFT · Signal Processing",
      description:
        "Implemented frequency-based detection using FFT to identify multiple signals in noisy environments.",
      date: "2024",
      url: "https://github.com/AnyaMeetoo492/BE_CHTI",
    },
  ],
};

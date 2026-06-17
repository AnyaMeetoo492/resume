// Erwin Lejeune - 2026-02-15

import type { ResumeData } from "../types/resume";
import profilePic from "./profile.jpg";
import qrCode from "./qr_code.jpg";

export const resumeEn: ResumeData = {
  name: "Anya Meetoo",
  title:
    "Computer Science & Networks Engineering Student – IoT, Software Development, Embedded Systems, Robotics & AI – Expected Graduation: September 2026",
  profileImage: profilePic,
  qrCodeImage: qrCode,
  summary:
    "Computer Science and Networks Engineering student at INSA Toulouse, specializing in IoT and embedded systems. Interested in low-level programming, real-time systems, and hardware/software integration. Skilled in C, C++, Python, Rust, and Assembly through various projects. Currently seeking an opportunity in embedded software engineering / connected systems in France starting September/October 2026.",

  contact: {
    email: "anyameetoo@gmail.com",
    linkedin: "https://www.linkedin.com/in/anyameetoo/",
    github: "https://www.github.com/AnyaMeetoo492",
    linktree: "https://www.linktr.ee/anyameetoo",
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
      role: "Software Engineering Intern (R&D System Configuration)",
      period: "March 2026 - Present",
      bullets: [
        {
          text: "Developed a more ergonomic image editing module in C++/Qt for ARKENS Studio (industrial software for high-voltage substations), using dynamic SVG-based graphical elements (labels, lines, polygons) updated according to system parameters.",
        },
      ],
    },
    {
      company: "The Qt Company",
      companyUrl: "https://www.qt.io/",
      location: "Hamburg, Germany",
      role: "Software Engineering Intern (R&D Quality Assurance) – ERASMUS Internship",
      period: "June 2025 - Sept. 2025",
      bullets: [
        {
          text: "Built a dataset of UI crashes from open-source Qt applications using Python and REST APIs, reproduced and analyzed UI bugs in virtualized environments, and contributed to automated testing projects in Python and C++ (refactoring, code reviews).",
        },
      ],
    },
    {
      company: "Mauritius Telecom",
      companyUrl: "https://www.telecom.mu/",
      location: "Port Louis, Mauritius",
      role: "Mobile Networks & Telecommunications Intern (QA)",
      period: "July 2024 - Aug. 2024",
      bullets: [
        {
          text: "Studied mobile and fixed network architectures (4G/5G, FTTH, core IP networks) and developed a Power BI dashboard to analyze telecom antenna data using SQL databases.",
        },
      ],
    },
    {
      company: "SD Worx",
      companyUrl: "https://www.sdworx.com/",
      location: "Mauritius",
      role: "Web Development Intern",
      period: "July 2022",
      bullets: [
        {
          text: "Introduced to full-stack web development (HTML, CSS, C#, SQL) through small web application projects.",
        },
      ],
    },
  ],

  education: [
    {
      degree:
        "Engineering Degree in Computer Science & Networks (Intelligent and Innovative Systems specialization)",
      institution: "INSA Toulouse - IR/ISS",
      institutionUrl: "https://www.insa-toulouse.fr/",
      period: "2022 - 2026",
    },
    {
      degree: "First Year Bachelor's Degree – Computer Science",
      institution: "Université Paul Sabatier Toulouse III",
      institutionUrl: "https://www.univ-tlse3.fr/",
      period: "2021 - 2022",
    },
    {
      degree:
        "High School Diploma – Physics, Mathematics & Computer Science",
      institution: "Loreto College Quatre Bornes",
      institutionUrl: "",
      period: "2014 - 2021",
    },
  ],

  publications: [
    {
      title:
        "Decentralized Acceleration-Based Bird-Inspired Flocking",
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
      items: ["C", "C++", "Python", "Java", "Assembly", "Rust", "Ada", "JavaScript", "HTML", "C#", "CSS", "SQL"],
    },
    {
      category: "Embedded Systems & IoT",
      items: [
        "STM32",
        "ESP",
        "Arduino",
        "FPGA",
        "HMI",
        "MQTT",
        "Node-RED",
        "BLE / Bluetooth",
        "LoRa",
        "ZigBee",
        "KiCad",
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
      items: ["Git", "SVN", "GitHub", "GitLab", "Jira", "Confluence", "Linux", "Microsoft Windows"],
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
      title: "Les Enfoiros de l’INSA — Lead Singer & Member",
      description: "Organization of charity concerts",
      date: "2024 - 2025",
      url: "https://enfoiros.org/",
    },
    {
      title: "BEE Club — Secretary & Member",
      description: "International student association at INSA Toulouse",
      date: "2022 - 2024",
      url: "https://www.instagram.com/bee_insatoulouse/",
    },
    {
      title: "Psychedelic Trauma — Singer",
      description: "Pop/rock music band",
      date: "2023 - 2026",
      url: "",
    },
  ],

  projects: [
    {
      title:
        "Quadruped Robot Locomotion (LAAS/CNRS & INSA Toulouse)",
      tech: "FPGA · AI · Robotics · Embedded Systems",
      description:
        "Developed perception and decision-making systems using FPGA and depth camera for an autonomous quadruped robot under embedded constraints (energy and performance).",
      date: "2025 - 2026",
      url: "",
    },
    {
      title: "Embedded Sailboat Control (STM32)",
      tech: "C · Assembly · STM32 · UART GPIO/Timers/Interrupts",
      description:
        "Implemented low-level drivers and real-time control on STM32 using direct register manipulation to control a miniature sailboat.",
      date: "2024 - 2025",
      url: "https://github.com/bongibault-romain/insa-voilier",
    },
    {
      title: "Smart IoT Gas Sensor",
      tech: "LoRa · Embedded Systems/IoT · KiCad · Node-RED",
      description:
        "Designed a complete IoT system from hardware sensor to wireless data monitoring (Arduino UNO with LoRa communication).",
      date: "2025 - 2026",
      url: "https://github.com/MOSH-Insa-Toulouse/2025-2026-5ISS-MEETOO-MIRANVILLE-REVELLI",
    },
    {
      title: "Embedded Fall Detection with AI",
      tech: "Python · TensorFlow · CNN · Edge AI",
      description:
        "Designed and optimized a CNN model for real-time fall detection under energy and storage constraints.",
      date: "2025 - 2026",
      url: "",
    },
    {
      title: "Signal Processing for a Laser Game",
      tech: "MATLAB · FFT · Signal Processing",
      description:
        "Implemented frequency detection using FFT to identify multiple signals in a noisy environment and assign points to targets.",
      date: "2024",
      url: "https://github.com/AnyaMeetoo492/BE_CHTI",
    },
  ],
};

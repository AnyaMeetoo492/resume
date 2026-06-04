// Erwin Lejeune - 2026-02-15

import type { ResumeData } from "../types/resume";

export const resumeData: ResumeData = {
  name: "Anya Meetoo",
  title: "Computer Engineering Student | IoT, Robotics, Embedded Systems, AI | Graduating September 2026",
  summary:
    "Computer Engineering student at INSA Toulouse specializing in embedded systems and IoT. Passionate about low-level programming, hardware/software integration and real-time systems. Experience with C, C++, Python, RUST and Assembly through academic and personal projects in robotics, embedded AI and connected devices. I am currently seeking an embedded software engineering opportunity in France as from September/October 2026.",
  contact: {
    email: "anyameetoo@gmail.com",
    portfolio: "https://github.com/AnyaMeetoo492",
    location: "Toulouse, France (open to work in France)",
    profileImage: "profile.png", 
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
          text: "Developing a system image editing module in C++/Qt for industrial control software ARKENS Studio used by SCLE SFE Clients in high-voltage electrical substations for monitoring.",
        },
        { 
          text: "Enhanced monitoring (equipment on site) interface customization by integrating dynamic SVG-based graphical elements (labels, lines, polygons) that update as parameters change."        
        },
        {
          text: "Working with R&D Systems Configuration Team across the full software lifecycle: specification, development, testing, and validation.",
        },
      ],
    },
    {
      company: "Qt Company",
      companyUrl: "https://www.qt.io/",
      location: "Hamburg, Germany",
      role: "Software Engineering Intern (R&D Quality Assurance)",
      period: "Jun 2025 - Sep 2025",
      bullets: [
        {
          text: "Built a dataset of UI crashes from open-source Qt applications using Python and REST APIs.",
        },
        {
          text: "Reproduced and analyzed UI issues in virtual environments to support automated testing tools.",
        },
        {
          text: "Contributed to the Autonomous testing project with Python and C++, including code refactoring and reviews.",
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
          text: "Studied mobile and fixed network architectures (4G/5G, FTTH, IP core networks).",
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
          text: "Developed basic applications and gained experience with databases and backend logic.",
        },
      ],
    },
  ],

  education: [
    {
      degree: "Engineering Degree – Computer Science (IR - Innovative Smart Systems)",
      institution: "INSA Toulouse",
      institutionUrl: "https://www.insa-toulouse.fr/",
      period: "2022 - 2026",
    },
    {
      degree: "Bachelor 1 – Computer Science",
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
      title: "Decentralized Acceleration-Based Bird-Inspired Flocking",
      venue: "IEEE/RSJ IROS 2024",
      date: "October 2024",
      url: "https://www.researchgate.net/publication/387418977_Decentralized_Acceleration-Based_Bird-Inspired_Flocking",
    },
    {
      title: "Real-time Jitter Measurements under ROS2: the Inverted Pendulum Case",
      venue: "Preprint, 2021",
      date: "March 2021",
      url: "https://www.researchgate.net/publication/350353690_Real-time_Jitter_Measurements_under_ROS2_the_Inverted_Pendulum_case",
    },
    {
      title: "Survey of the Multi-Agent Pathfinding Solutions",
      venue: "Preprint, 2021",
      date: "January 2021",
      url: "https://www.researchgate.net/publication/348716625_Survey_of_the_Multi-Agent_Pathfinding_Solutions",
    },
  ],

  skills: [
    {
      category: "Programming",
      items: ["C", "C++", "Python", "Java", "Assembly"],
    },
    {
      category: "Embedded Systems",
      items: ["STM32", "GPIO", "Timers", "Interrupts", "UART", "ADC", "PWM", "Hardware/Software Integration"],
    },
    {
      category: "Tools & Software",
      items: ["MATLAB", "Qt", "Vivado", "Eclipse", "IntelliJ IDEA", "Visual Studio Code"],
    },
    {
      category: "Development & Platforms",
      items: ["GitHub", "GitLab", "Jira", "Confluence", "Linux"],
    },
  ],

   interests: [
    {
      label: "Embedded Systems",
    },
    {
      label: "IoT",
    },
    {
      label: "Robotics",
    },
    {
      label: "AI",
    },
    {
      label: "3D Processing",
    },
     {
      label: "Music Production",
    },
  ],
  
  volunteering: [
    {
      title: "Les Enfoiros de l’INSA — Singer Leader and Member",
      description: "Charity Concerts Organization",
      date: "2024 - 2025",
      url: "https://enfoiros.org/",
    },
    {
      title: "BEE Club — Member",
      description: "International Students Association",
      date: "2022 - 2024",
      url: "https://www.instagram.com/bee_insatoulouse/",
    },
    {
      title: "Psychedelic Trauma — Singer",
      description: "Music Group",
      date: "2023 - 2026",
      url: "",
    },
  ],

  projects: [
    {
      title: "Quadruped Robot Locomotion",
      tech: "FPGA · AI · Robotics · Embedded Systems",
      description:
        "Developed perception and decision systems using a depth camera for an autonomous quadruped robot under embedded constraints such as energy consumption.",
      date: "2025 - 2026",
      url: "",
    },
    {
      title: "Embedded Sailboat Control (STM32)",
      tech: "C · STM32 · GPIO · Timers · Interrupts · UART",
      description:
        "Implemented low-level drivers and real-time control on STM32 using direct register manipulation to operate a sailboat under physical constraints.",
      date: "2024 - 2025",
      url: "https://github.com/bongibault-romain/insa-voilier",
    },
    {
      title: "IoT Smart Gas Sensor",
      tech: "LoRa · Embedded Systems · KiCad · Node-RED",
      description:
        "Designed an end-to-end IoT system from a gas sensor fabrication to wireless data monitoring.",
      date: "2025 - 2026",
      url: "https://github.com/MOSH-Insa-Toulouse/2025-2026-5ISS-MEETOO-MIRANVILLE-REVELLI",
    },
    {
      title: "Embedded AI Fall Detection",
      tech: "Python · TensorFlow · CNN · Edge AI",
      description:
        "Built and optimized a CNN model for real-time fall detection under embedded constraints using a dataset library.",
      date: "2025 - 2026",
      url: "",
    },
    {
      title: "Laser Game Signal Processing",
      tech: "MATLAB · FFT · Signal Processing",
      description:
        "Implemented FFT-based frequency detection to identify multiple signals under noise and aliasing.",
      date: "2024",
      url: "https://github.com/AnyaMeetoo492/BE_CHTI",
    },
  ]
  
};

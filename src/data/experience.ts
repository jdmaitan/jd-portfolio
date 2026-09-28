export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  focus: string;
  technologies: string[];
  contribution: string;
  details: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Universidad de Alicante",
    role: "R&D Developer",
    period: "04/2025–07/2025",
    location: "Alicante, Spain",
    focus:
      "Backend-focused development for a web and mobile remote medical monitoring application.",
    technologies: [
      "C#",
      "ASP.NET Core",
      "REST APIs",
      "Clean Architecture",
      "NRules",
      "Quartz.NET",
      "Firebase",
      "Brevo",
      "Docker",
      "OpenAPI / Swagger",
      "xUnit",
      "MSTest",
      "Moq",
      "Angular / Ionic",
    ],
    contribution:
      "Led backend-focused development throughout the software development lifecycle, including business rules, background processing, notifications, API documentation, automated testing, and frontend integration support.",
    details: [
      "Configurable business-rules engine with NRules",
      "Scheduled processing with Quartz.NET",
      "Automated .NET tests with xUnit, MSTest, and Moq",
    ],
  },
  {
    company: "The Factory HKA",
    role: "Software Developer",
    period: "12/2019–09/2022",
    location: "Caracas, Venezuela",
    focus:
      "Commercial and internal software for fiscal operations across multiple countries.",
    technologies: [
      "C#",
      ".NET Framework",
      "Windows Forms",
      "ASP.NET Core",
      "WCF / SOAP",
      "MySQL",
      "SQLite",
      "ADO.NET",
      "Entity Framework Core",
      "SQL",
    ],
    contribution:
      "Developed and maintained desktop applications, internal tools, WCF/SOAP services, and ASP.NET Core REST services. Investigated production issues involving software, hardware, and serial communication.",
    details: [
      "Production Windows Forms application for the Panamanian fiscal market",
      "Desktop tools for testing and validating fiscal printers",
      "Implementation, debugging, testing, documentation, and deployment support",
    ],
  },
  {
    company: "The Factory HKA",
    role: "Firmware Developer",
    period: "09/2018–12/2019",
    location: "Caracas, Venezuela",
    focus: "Firmware development for fiscal printer modules.",
    technologies: ["C", "PIC microcontrollers", "ARM microcontrollers"],
    contribution:
      "Developed and debugged firmware, investigated hardware/software issues, and collaborated with firmware, laboratory, and quality teams to validate fiscal hardware behavior and regulatory requirements.",
    details: [
      "Functionality enhancements for PIC and ARM-based microcontrollers",
      "Testing and technical documentation",
    ],
  },
  {
    company: "Fundación Instituto de Ingeniería",
    role: "Engineering Intern",
    period: "07/2017–06/2018",
    location: "Caracas, Venezuela",
    focus: "Electrical engineering and digital control systems.",
    technologies: [
      "FPGA-based systems",
      "PID control",
      "Three-phase controlled rectification",
    ],
    contribution:
      "Contributed to the adaptation of a 60 kW AC/DC static converter control system by implementing digital control logic.",
    details: [],
  },
];

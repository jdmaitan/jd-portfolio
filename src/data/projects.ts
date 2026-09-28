export interface Project {
  title: string;
  eyebrow: string;
  description: string;
  problem: string;
  approach: string;
  decisions: string;
  technologies: string[];
  status: string;
  githubUrl?: string;
  liveUrl?: string;
  documentationUrl?: string;
  documentationLabel?: string;
  presentationUrl?: string;
  presentationLabel?: string;
}

export const projects: Project[] = [
  {
    title: "TrueSplit",
    eyebrow: "Personal project / In development",
    description:
      "A personal web application for splitting household supermarket expenses based on actual consumption rather than dividing the total equally.",
    problem:
      "Household supermarket expenses do not always reflect equal consumption, so a simple split can be inaccurate.",
    approach:
      "A web application for calculating each person's share from actual consumption rather than dividing the total equally.",
    decisions:
      "The deeper architecture, testing approach, and technical trade-offs will be documented as the project develops.",
    technologies: ["C#", ".NET", "ASP.NET Core", "React", "TypeScript", "SQL"],
    status: "In development",
  },
  {
    title: "Medical Monitoring Platform",
    eyebrow: "Professional R&D work / 2025",
    description:
      "A web and mobile remote medical monitoring application developed through the software development lifecycle. The linked dissertation provides the complete project documentation.",
    problem:
      "Support remote medical monitoring with backend functionality, configurable business rules, scheduled processing, and notifications.",
    approach:
      "Built backend functionality with ASP.NET Core and REST APIs, separated domain logic with NRules, and contributed to Angular/Ionic integration issues.",
    decisions:
      "Used Clean Architecture, Quartz.NET, Firebase, Brevo, Docker, OpenAPI/Swagger, and automated .NET tests to keep the application modular and supportable.",
    technologies: [
      "C#",
      "ASP.NET Core",
      "REST APIs",
      "Clean Architecture",
      "EF Core",
      "SQL Server",
      "NRules",
      "Quartz.NET",
      "Firebase",
      "Docker",
      "Testing",
    ],
    status: "Details to be added",
    documentationUrl: `${import.meta.env.BASE_URL}experience/UA_Medical_Remote_System_Thesis.pdf`,
    documentationLabel: "Read Thesis",
    presentationUrl: "https://canva.link/m7kuu6hkjqng6nk",
    presentationLabel: "View Presentation",
  },
  {
    title: "Previous .NET Work",
    eyebrow: "Commercial software / 2019–2022",
    description:
      "Commercial and internal software supporting fiscal operations across multiple countries, including desktop applications, services, and internal tools. The linked example is an application I developed independently while working at TFHKA.",
    problem:
      "Maintain and extend software used in fiscal operations, including tools for testing and validating fiscal printers.",
    approach:
      "Developed Windows Forms applications, ASP.NET Core REST services, and maintained WCF/SOAP services while working with existing MySQL and SQLite databases.",
    decisions:
      "Worked across implementation, debugging, testing, documentation, deployment support, and production troubleshooting, including software, hardware, and serial-communication issues.",
    technologies: [
      "C#",
      ".NET Framework",
      "WCF / SOAP",
      "SQL",
      "Desktop applications",
    ],
    status: "Details to be added",
    documentationUrl: `${import.meta.env.BASE_URL}experience/TFHKA_ImosoftExample.pdf`,
    documentationLabel: "View application example",
  },
];

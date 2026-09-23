export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  { label: "Languages", items: ["C#", "C", "TypeScript", "JavaScript", "SQL"] },
  {
    label: "Backend / .NET",
    items: [
      ".NET",
      ".NET Framework",
      "ASP.NET Core",
      "REST APIs",
      "WCF / SOAP",
      "Entity Framework Core",
      "ADO.NET",
      "Quartz.NET",
    ],
  },
  {
    label: "Frontend",
    items: ["React", "Angular", "Ionic", "HTML", "CSS", "Bootstrap"],
  },
  {
    label: "Databases",
    items: ["SQL Server", "MySQL", "SQLite", "Redis", "MongoDB"],
  },
  {
    label: "Quality & architecture",
    items: [
      "Unit testing",
      "Integration testing",
      "xUnit",
      "MSTest",
      "Moq",
      "SOLID",
      "Clean Architecture",
      "Design patterns",
    ],
  },
  {
    label: "Tools & infrastructure",
    items: ["Docker", "Git", "GitHub", "GitLab", "OpenAPI / Swagger", "CI/CD"],
  },
];

export const additionalKnowledge = [
  "Blazor",
  "WPF",
  "Microservices",
  "Domain Driven Design",
  "Behavior Driven Development",
  "Azure",
  "Azure DevOps",
  "Kubernetes",
  "GitHub Copilot",
];

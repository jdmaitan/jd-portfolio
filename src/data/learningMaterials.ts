export interface Book {
  title: string;
  edition?: number;
  authors: string[];
  year: number;
  publisher: string;
  category: string;
}

export interface OnlineResource {
  title: string;
  type: string;
  url?: string;
  provider?: string;
  date?: string;
  certification?: boolean;
}

export const books: Book[] = [
  {
    title: "Beginning Database Design Solutions",
    edition: 2,
    authors: ["Rod Stephens"],
    year: 2010,
    publisher: "John Wiley & Sons",
    category: "Databases",
  },
  {
    title: "Getting Started with SQL",
    authors: ["Thomas Nield"],
    year: 2016,
    publisher: "O'Reilly Media",
    category: "Databases",
  },
  {
    title: "Entity Framework Core in Action",
    edition: 2,
    authors: ["Jon P. Smith"],
    year: 2021,
    publisher: "Manning Publications",
    category: "Databases",
  },
  {
    title: "NoSQL Distilled",
    authors: ["Pramod J. Sadalage", "Martin Fowler"],
    year: 2012,
    publisher: "Addison-Wesley Professional",
    category: "Databases",
  },
  {
    title: "Pro Git",
    edition: 2,
    authors: ["Scott Chacon", "Ben Straub"],
    year: 2014,
    publisher: "Apress",
    category: "Version Control & UML",
  },
  {
    title: "Learning UML 2.0",
    authors: ["Russ Miles", "Kim Hamilton"],
    year: 2006,
    publisher: "O'Reilly Media",
    category: "Version Control & UML",
  },
  {
    title: "C# 12 in a Nutshell",
    authors: ["Joseph Albahari"],
    year: 2023,
    publisher: "O'Reilly Media",
    category: "C# / .NET",
  },
  {
    title: "Windows Forms in Action",
    edition: 2,
    authors: ["Erik Brown"],
    year: 2006,
    publisher: "Manning Publications",
    category: "C# / .NET",
  },
  {
    title: "Eloquent JavaScript",
    authors: ["Marijn Haverbeke"],
    year: 2018,
    publisher: "No Starch Press",
    category: "Web Fundamentals",
  },
  {
    title: "JavaScript & jQuery: Interactive Front-End Web Development",
    authors: ["Jon Duckett"],
    year: 2014,
    publisher: "Wiley",
    category: "Web Fundamentals",
  },
  {
    title: "Programming TypeScript",
    authors: ["Boris Cherny"],
    year: 2019,
    publisher: "O'Reilly Media",
    category: "Web Fundamentals",
  },
  {
    title: "HTML and CSS: Design and Build Websites",
    authors: ["Jon Duckett"],
    year: 2011,
    publisher: "Wiley",
    category: "Web Fundamentals",
  },
  {
    title: "Learning Web Design",
    authors: ["Jennifer Niederst Robbins"],
    year: 2018,
    publisher: "O'Reilly Media",
    category: "Web Fundamentals",
  },
  {
    title: "Unit Testing Principles, Practices, and Patterns",
    authors: ["Vladimir Khorikov"],
    year: 2020,
    publisher: "Manning Publications",
    category: "Testing",
  },
  {
    title: "Learning Angular",
    edition: 5,
    authors: ["Aristeidis Bampakos"],
    year: 2025,
    publisher: "Packt Publishing",
    category: "Frameworks",
  },
  {
    title: "Web Development with Blazor",
    edition: 3,
    authors: ["Jimmy Engström"],
    year: 2024,
    publisher: "Packt Publishing",
    category: "Frameworks",
  },
  {
    title: "ASP.NET Core in Action",
    edition: 3,
    authors: ["Andrew Lock"],
    year: 2023,
    publisher: "Manning Publications",
    category: "Frameworks",
  },
  {
    title: "Architecting Modern Web Applications with ASP.NET Core and Azure",
    authors: ["Microsoft Developer Division"],
    year: 2023,
    publisher: "Microsoft Corporation",
    category: "Frameworks",
  },
  {
    title: "An Atypical ASP.NET Core 6 Design Patterns Guide",
    authors: ["Carl-Hugo Marcotte", "Abdelhamid Zebdi"],
    year: 2022,
    publisher: "Packt Publishing",
    category: "Frameworks",
  },
  {
    title: "Domain-Driven Design",
    authors: ["Eric Evans"],
    year: 2003,
    publisher: "Addison-Wesley Professional",
    category: "Architecture & Design",
  },
  {
    title: "Software Architecture with C# 12 and .NET 8",
    authors: ["Gabriel Baptista", "Francesco Abbruzzese"],
    year: 2023,
    publisher: "Packt Publishing",
    category: "Architecture & Design",
  },
  {
    title: "Building Microservices",
    authors: ["Sam Newman"],
    year: 2021,
    publisher: "O'Reilly Media",
    category: "Architecture & Design",
  },
  {
    title: "Microservices in .NET",
    edition: 2,
    authors: ["Christian Horsdal"],
    year: 2021,
    publisher: "Manning Publications",
    category: "Architecture & Design",
  },
  {
    title:
      ".NET Microservices: Architecture for Containerized .NET Applications",
    authors: ["Microsoft Developer Division"],
    year: 2023,
    publisher: "Microsoft Corporation",
    category: "Architecture & Design",
  },
  {
    title: "Beginning Azure DevOps",
    authors: ["Adora Nwodo"],
    year: 2023,
    publisher: "John Wiley & Sons",
    category: "DevOps / Cloud / Containers",
  },
  {
    title: "Docker Deep Dive",
    authors: ["Nigel Poulton"],
    year: 2020,
    publisher: "Nigel Poulton",
    category: "DevOps / Cloud / Containers",
  },
  {
    title:
      "Containerized Docker Application Lifecycle with Microsoft Platform and Tools",
    authors: ["Microsoft Developer Division"],
    year: 2019,
    publisher: "Microsoft Corporation",
    category: "DevOps / Cloud / Containers",
  },
  {
    title:
      "Modernize Existing .NET Applications with Azure Cloud and Windows Containers",
    authors: ["Microsoft Developer Division"],
    year: 2022,
    publisher: "Microsoft Corporation",
    category: "DevOps / Cloud / Containers",
  },
  {
    title: "The Kubernetes Book 2026",
    authors: ["Nigel Poulton"],
    year: 2026,
    publisher: "Nigel Poulton",
    category: "DevOps / Cloud / Containers",
  },
  {
    title: "AI-Assisted Programming",
    authors: ["Tom Taulli"],
    year: 2024,
    publisher: "O'Reilly Media",
    category: "AI-Assisted Development",
  },
];

export const onlineResources: OnlineResource[] = [
  {
    title: "The Modern JavaScript Tutorial",
    type: "Website",
    url: "https://javascript.info",
  },
  {
    title: "Official React Learn Docs",
    type: "Website",
    url: "https://react.dev/learn",
  },
  {
    title: "Design and Implement Microsoft DevOps Solutions (AZ-400)",
    type: "Self-paced study",
    provider: "Microsoft Learn",
    date: "January 2026",
    certification: false,
  },
  {
    title: "Develop Solutions for Microsoft Azure (AZ-204)",
    type: "Self-paced study",
    provider: "Microsoft Learn",
    date: "January 2026",
    certification: false,
  },
  {
    title: "Introduction to Cloud Infrastructure (AZ-900)",
    type: "Self-paced study",
    provider: "Microsoft Learn",
    date: "December 2025",
    certification: false,
  },
];

export const bookCategories = [
  "C# / .NET",
  "Databases",
  "Web Fundamentals",
  "Frameworks",
  "Architecture & Design",
  "Testing",
  "DevOps / Cloud / Containers",
  "Version Control & UML",
  "AI-Assisted Development",
];

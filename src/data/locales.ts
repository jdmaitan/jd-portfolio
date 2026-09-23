export type Language = 'en' | 'es'

type ProjectCopy = {
  eyebrow: string
  description: string
  problem: string
  approach: string
  decisions: string
  documentationLabel?: string
  presentationLabel?: string
}

type ExperienceCopy = {
  role: string
  focus: string
  contribution: string
  details: string[]
}

type EducationCopy = {
  degree: string
  detail: string
}

export interface Locale {
  languageLabel: string
  languageSwitcherLabel: string
  homeLabel: string
  developerTitle: string
  locations: Record<string, string>
  navigation: Record<string, string>
  menu: { open: string; close: string }
  hero: {
    kicker: string
    titleFirst: string
    titleSecond: string
    description: string
    projects: string
    contact: string
    asideFirst: string
    asideSecond: string
    imageAlt: string
  }
  about: {
    number: string
    titleFirst: string
    titleSecond: string
    lead: string
    paragraphs: string[]
  }
  skills: {
    number: string
    titleFirst: string
    titleSecond: string
    groupLabels: Record<string, string>
    additionalKnowledge: string
  }
  selectedWork: {
    number: string
    titleFirst: string
    titleSecond: string
    labels: { problem: string; approach: string; decisions: string }
    ariaFor: string
    links: { github: string; liveDemo: string }
    projects: Record<string, ProjectCopy>
  }
  experience: {
    number: string
    titleFirst: string
    titleSecond: string
    technology: string
    contribution: string
    items: Record<string, ExperienceCopy>
  }
  education: {
    number: string
    title: string
    certifications: string
    credential: string
    items: Record<string, EducationCopy>
  }
  learning: {
    number: string
    titleFirst: string
    titleSecond: string
    note: string
    categoryLabels: Record<string, string>
    onlineResources: string
    websites: string
    selfPacedCourses: string
    selfPacedStudy: string
    editionLabel: string
  }
  journey: {
    number: string
    titleFirst: string
    titleSecond: string
    steps: string[]
  }
  contact: {
    eyebrow: string
    title: string
    description: string
    email: string
    phone: string
    linkedIn: string
    github: string
    cvEnglish: string
    cvSpanish: string
  }
  footer: { builtWith: string }
}

const english: Locale = {
  languageLabel: 'English',
  languageSwitcherLabel: 'Select language',
  homeLabel: 'José Daniel Maitán home',
  developerTitle: '.NET Developer',
  locations: { 'Alicante, Spain': 'Alicante, Spain', 'Caracas, Venezuela': 'Caracas, Venezuela' },
  navigation: {
    about: 'About',
    projects: 'Projects',
    experience: 'Experience',
    education: 'Education',
    'learning-materials': 'Self Learning',
    contact: 'Contact',
  },
  menu: { open: 'Open navigation menu', close: 'Close navigation menu' },
  hero: {
    kicker: '.NET Software developer / Buenos Aires + remote',
    titleFirst: 'Building useful systems',
    titleSecond: 'with deliberate tools.',
    description: 'I build web applications and backend systems with C#, ASP.NET Core, and modern web technologies.',
    projects: 'View projects',
    contact: 'Get in touch',
    asideFirst: 'Electrical engineering background.',
    asideSecond: 'Backend-first',
    imageAlt: 'Portrait of José Daniel Maitán, .NET Developer',
  },
  about: {
    number: '01 / 07',
    titleFirst: 'A practical path into',
    titleSecond: 'software.',
    lead: 'My route into software started with Electrical Engineering, then moved through firmware and embedded systems before settling into application development.',
    paragraphs: [
      'I have worked with C and microcontrollers, then moved into C# and .NET Framework desktop development, database-backed systems, and internal web/API work. My current focus is modern .NET, ASP.NET Core, REST APIs, and full-stack web development.',
      "I hold a Master's Degree in Web Applications and Services Development and bring an engineering background to building, debugging, testing, and maintaining reliable software.",
    ],
  },
  skills: {
    number: '02 / 07',
    titleFirst: 'Tools I use',
    titleSecond: 'and know.',
    groupLabels: {
      Languages: 'Languages',
      'Backend / .NET': 'Backend / .NET',
      Frontend: 'Frontend',
      Databases: 'Databases',
      'Quality & architecture': 'Quality & architecture',
      'Tools & infrastructure': 'Tools & infrastructure',
    },
    additionalKnowledge: 'Additional knowledge',
  },
  selectedWork: {
    number: '03 / 07',
    titleFirst: 'Selected',
    titleSecond: 'work.',
    labels: { problem: 'Problem', approach: 'Approach', decisions: 'Engineering decisions' },
    ariaFor: 'for',
    links: { github: 'GitHub', liveDemo: 'Live demo' },
    projects: {
      TrueSplit: {
        eyebrow: 'Personal project / In development',
        description: 'A personal web application for splitting household supermarket expenses based on actual consumption rather than dividing the total equally.',
        problem: 'Household supermarket expenses do not always reflect equal consumption, so a simple split can be inaccurate.',
        approach: "A web application for calculating each person's share from actual consumption rather than dividing the total equally.",
        decisions: 'The deeper architecture, testing approach, and technical trade-offs will be documented as the project develops.',
      },
      'Medical Monitoring Platform': {
        eyebrow: 'Professional R&D work / 2025',
        description: 'A web and mobile remote medical monitoring application developed through the software development lifecycle. The linked dissertation provides the complete project documentation.',
        problem: 'Support remote medical monitoring with backend functionality, configurable business rules, scheduled processing, and notifications.',
        approach: 'Built backend functionality with ASP.NET Core and REST APIs, separated domain logic with NRules, and contributed to Angular/Ionic integration issues.',
        decisions: 'Used Clean Architecture, Quartz.NET, Firebase, Brevo, Docker, OpenAPI/Swagger, and automated .NET tests to keep the application modular and supportable.',
        documentationLabel: 'Read Thesis',
        presentationLabel: 'View Presentation',
      },
      'Previous .NET Work': {
        eyebrow: 'Commercial software / 2019–2022',
        description: 'Commercial and internal software supporting fiscal operations across multiple countries, including desktop applications, services, and internal tools. The linked example is an application I developed independently while working at TFHKA.',
        problem: 'Maintain and extend software used in fiscal operations, including tools for testing and validating fiscal printers.',
        approach: 'Developed Windows Forms applications, ASP.NET Core REST services, and maintained WCF/SOAP services while working with existing MySQL and SQLite databases.',
        decisions: 'Worked across implementation, debugging, testing, documentation, deployment support, and production troubleshooting, including software, hardware, and serial-communication issues.',
        documentationLabel: 'View application example',
      },
    },
  },
  experience: {
    number: '04 / 07',
    titleFirst: 'Experience',
    titleSecond: 'in context.',
    technology: 'Technology',
    contribution: 'My contribution',
    items: {
      'Universidad de Alicante-R&D Developer': {
        role: 'R&D Developer',
        focus: 'Backend-focused development for a web and mobile remote medical monitoring application.',
        contribution: 'Led backend-focused development throughout the software development lifecycle, including business rules, background processing, notifications, API documentation, automated testing, and frontend integration support.',
        details: ['Configurable business-rules engine with NRules', 'Scheduled processing with Quartz.NET', 'Automated .NET tests with xUnit, MSTest, and Moq'],
      },
      'The Factory HKA-Software Developer': {
        role: 'Software Developer',
        focus: 'Commercial and internal software for fiscal operations across multiple countries.',
        contribution: 'Developed and maintained desktop applications, internal tools, WCF/SOAP services, and ASP.NET Core REST services. Investigated production issues involving software, hardware, and serial communication.',
        details: ['Production Windows Forms application for the Panamanian fiscal market', 'Desktop tools for testing and validating fiscal printers', 'Implementation, debugging, testing, documentation, and deployment support'],
      },
      'The Factory HKA-Firmware Developer': {
        role: 'Firmware Developer',
        focus: 'Firmware development for fiscal printer modules.',
        contribution: 'Developed and debugged firmware, investigated hardware/software issues, and collaborated with firmware, laboratory, and quality teams to validate fiscal hardware behavior and regulatory requirements.',
        details: ['Functionality enhancements for PIC and ARM-based microcontrollers', 'Testing and technical documentation'],
      },
      'Fundación Instituto de Ingeniería-Engineering Intern': {
        role: 'Engineering Intern',
        focus: 'Electrical engineering and digital control systems.',
        contribution: 'Contributed to the adaptation of a 60 kW AC/DC static converter control system by implementing digital control logic.',
        details: [],
      },
    },
  },
  education: {
    number: '05 / 07',
    title: 'Education & credentials.',
    certifications: 'Certifications',
    credential: 'View credential',
    items: {
      "Master's Degree in Web Applications and Services Development": {
        degree: "Master's Degree in Web Applications and Services Development",
        detail: 'Premio Extraordinario Curso Académico, awarded for the highest academic performance in the cohort.',
      },
      "Bachelor's Degree in Electrical Engineering": {
        degree: "Bachelor's Degree in Electrical Engineering",
        detail: 'Specialization in Electronics, Computing, and Control.',
      },
    },
  },
  learning: {
    number: '06 / 07',
    titleFirst: 'Self',
    titleSecond: 'Learning.',
    note: "Books, documentation, tutorials, and self-paced resources I've used for continued learning.",
    categoryLabels: {
      'C# / .NET': 'C# / .NET',
      Databases: 'Databases',
      'Web Fundamentals': 'Web Fundamentals',
      Frameworks: 'Frameworks',
      'Architecture & Design': 'Architecture & Design',
      Testing: 'Testing',
      'DevOps / Cloud / Containers': 'DevOps / Cloud / Containers',
      'Version Control & UML': 'Version Control & UML',
      'AI-Assisted Development': 'AI-Assisted Development',
    },
    onlineResources: 'Online Resources',
    websites: 'Websites',
    selfPacedCourses: 'Self Learning',
    selfPacedStudy: 'Self Learning',
    editionLabel: 'edition',
  },
  journey: {
    number: '07 / 07',
    titleFirst: 'Technical',
    titleSecond: 'journey.',
    steps: ['Electrical Engineering', 'Firmware / Embedded Development', 'C / Microcontrollers', 'C# / .NET Framework', 'Desktop Applications', 'ASP.NET Core / REST APIs', 'Modern Web Development', 'Full-stack development'],
  },
  contact: {
    eyebrow: 'A direct way to connect.',
    title: "Let's talk about software.",
    description: 'For professional opportunities, technical discussions, or questions about my experience, feel free to get in touch. This site provides additional context about my projects, technical decisions, and engineering experience.',
    email: 'jdmaitan@gmail.com',
    phone: '+54 11 3090-6572',
    linkedIn: 'LinkedIn',
    github: 'GitHub',
    cvEnglish: 'Download CV — English',
    cvSpanish: 'Descargar CV — Español',
  },
  footer: { builtWith: 'Built with React + TypeScript' },
}

const spanish: Locale = {
  languageLabel: 'Español',
  languageSwitcherLabel: 'Seleccionar idioma',
  homeLabel: 'Inicio de José Daniel Maitán',
  developerTitle: 'Desarrollador .NET',
  locations: { 'Alicante, Spain': 'Alicante, España', 'Caracas, Venezuela': 'Caracas, Venezuela' },
  navigation: { about: 'Sobre mí', projects: 'Proyectos', experience: 'Experiencia', education: 'Educación', 'learning-materials': 'Auto Aprendizaje', contact: 'Contacto' },
  menu: { open: 'Abrir menú de navegación', close: 'Cerrar menú de navegación' },
  hero: {
    kicker: 'Desarrollador de software .NET / Buenos Aires + remoto',
    titleFirst: 'Construyo sistemas útiles',
    titleSecond: 'con herramientas deliberadas.',
    description: 'Construyo aplicaciones web y sistemas backend con C#, ASP.NET Core y tecnologías web modernas.',
    projects: 'Ver proyectos',
    contact: 'Contactarme',
    asideFirst: 'Formación en ingeniería eléctrica.',
    asideSecond: 'Enfoque en backend',
    imageAlt: 'Retrato de José Daniel Maitán, desarrollador .NET',
  },
  about: {
    number: '01 / 07',
    titleFirst: 'Un camino práctico hacia el',
    titleSecond: 'software.',
    lead: 'Mi camino hacia el software comenzó con la Ingeniería Eléctrica y pasó por el firmware y los sistemas embebidos antes de centrarse en el desarrollo de aplicaciones.',
    paragraphs: [
      'He trabajado con C y microcontroladores, y luego pasé al desarrollo de aplicaciones de escritorio con C# y .NET Framework, sistemas respaldados por bases de datos y trabajo interno de web/APIs. Actualmente me enfoco en .NET moderno, ASP.NET Core, APIs REST y desarrollo web full-stack.',
      'Tengo un Máster en Desarrollo de Aplicaciones y Servicios Web y aporto una formación de ingeniería al desarrollo, depuración, pruebas y mantenimiento de software confiable.',
    ],
  },
  skills: {
    number: '02 / 07',
    titleFirst: 'Herramientas que uso',
    titleSecond: 'y conozco.',
    groupLabels: { Languages: 'Lenguajes', 'Backend / .NET': 'Backend / .NET', Frontend: 'Frontend', Databases: 'Bases de datos', 'Quality & architecture': 'Calidad y arquitectura', 'Tools & infrastructure': 'Herramientas e infraestructura' },
    additionalKnowledge: 'Conocimientos adicionales',
  },
  selectedWork: {
    number: '03 / 07',
    titleFirst: 'Trabajo',
    titleSecond: 'seleccionado.',
    labels: { problem: 'Problema', approach: 'Enfoque', decisions: 'Decisiones de ingeniería' },
    ariaFor: 'para',
    links: { github: 'GitHub', liveDemo: 'Demo en vivo' },
    projects: {
      TrueSplit: {
        eyebrow: 'Proyecto personal / En desarrollo',
        description: 'Una aplicación web personal para dividir los gastos de supermercado del hogar según el consumo real en lugar de repartir el total por partes iguales.',
        problem: 'Los gastos del supermercado no siempre reflejan un consumo igual, por lo que una división simple puede ser imprecisa.',
        approach: 'Una aplicación web para calcular la parte de cada persona según el consumo real en lugar de dividir el total por partes iguales.',
        decisions: 'La arquitectura detallada, el enfoque de pruebas y las decisiones técnicas se documentarán a medida que avance el proyecto.',
      },
      'Medical Monitoring Platform': {
        eyebrow: 'Trabajo profesional de I+D / 2025',
        description: 'Una aplicación web y móvil de monitoreo médico remoto desarrollada durante todo el ciclo de vida del software. La tesis enlazada contiene la documentación completa del proyecto.',
        problem: 'Dar soporte al monitoreo médico remoto mediante funcionalidad backend, reglas de negocio configurables, procesamiento programado y notificaciones.',
        approach: 'Desarrollé funcionalidad backend con ASP.NET Core y APIs REST, separé la lógica de dominio con NRules y colaboré resolviendo problemas de integración con Angular/Ionic.',
        decisions: 'Utilicé Clean Architecture, Quartz.NET, Firebase, Brevo, Docker, OpenAPI/Swagger y pruebas automatizadas de .NET para mantener la aplicación modular y sostenible.',
        documentationLabel: 'Leer tesis',
        presentationLabel: 'Ver presentación',
      },
      'Previous .NET Work': {
        eyebrow: 'Software comercial / 2019–2022',
        description: 'Software comercial e interno para operaciones fiscales en varios países, incluyendo aplicaciones de escritorio, servicios y herramientas internas. El ejemplo enlazado es una aplicación que desarrollé de forma independiente mientras trabajaba en TFHKA.',
        problem: 'Mantener y ampliar software utilizado en operaciones fiscales, incluyendo herramientas para probar y validar impresoras fiscales.',
        approach: 'Desarrollé aplicaciones Windows Forms, servicios REST con ASP.NET Core y mantuve servicios WCF/SOAP trabajando con bases de datos MySQL y SQLite existentes.',
        decisions: 'Trabajé en implementación, depuración, pruebas, documentación, soporte de despliegue y resolución de problemas en producción, incluyendo incidencias de software, hardware y comunicación serial.',
        documentationLabel: 'Ver ejemplo de aplicación',
      },
    },
  },
  experience: {
    number: '04 / 07',
    titleFirst: 'Experiencia',
    titleSecond: 'en contexto.',
    technology: 'Tecnologías',
    contribution: 'Mi contribución',
    items: {
      'Universidad de Alicante-R&D Developer': { role: 'Desarrollador de I+D', focus: 'Desarrollo enfocado en backend para una aplicación web y móvil de monitoreo médico remoto.', contribution: 'Lideré el desarrollo enfocado en backend durante todo el ciclo de vida del software, incluyendo reglas de negocio, procesamiento en segundo plano, notificaciones, documentación de APIs, pruebas automatizadas y soporte de integración frontend.', details: ['Motor configurable de reglas de negocio con NRules', 'Procesamiento programado con Quartz.NET', 'Pruebas automatizadas de .NET con xUnit, MSTest y Moq'] },
      'The Factory HKA-Software Developer': { role: 'Desarrollador de software', focus: 'Software comercial e interno para operaciones fiscales en varios países.', contribution: 'Desarrollé y mantuve aplicaciones de escritorio, herramientas internas, servicios WCF/SOAP y servicios REST con ASP.NET Core. Investigué problemas de producción relacionados con software, hardware y comunicación serial.', details: ['Aplicación Windows Forms de producción para el mercado fiscal panameño', 'Herramientas de escritorio para probar y validar impresoras fiscales', 'Implementación, depuración, pruebas, documentación y soporte de despliegue'] },
      'The Factory HKA-Firmware Developer': { role: 'Desarrollador de firmware', focus: 'Desarrollo de firmware para módulos de impresoras fiscales.', contribution: 'Desarrollé y depuré firmware, investigué problemas de hardware y software, y colaboré con los equipos de firmware, laboratorio y calidad para validar el comportamiento del hardware fiscal y los requisitos regulatorios.', details: ['Mejoras funcionales para microcontroladores PIC y ARM', 'Pruebas y documentación técnica'] },
      'Fundación Instituto de Ingeniería-Engineering Intern': { role: 'Pasante de Ingeniería', focus: 'Ingeniería eléctrica y sistemas de control digital.', contribution: 'Contribuí a la adaptación de un sistema de control para un convertidor estático AC/DC de 60 kW mediante la implementación de lógica de control digital.', details: [] },
    },
  },
  education: {
    number: '05 / 07',
    title: 'Educación y credenciales.',
    certifications: 'Certificaciones',
    credential: 'Ver credencial',
    items: {
      "Master's Degree in Web Applications and Services Development": { degree: 'Máster en Desarrollo de Aplicaciones y Servicios Web', detail: 'Premio Extraordinario Curso Académico, otorgado por el mayor rendimiento académico de la promoción.' },
      "Bachelor's Degree in Electrical Engineering": { degree: 'Grado en Ingeniería Eléctrica', detail: 'Especialización en Electrónica, Computación y Control.' },
    },
  },
  learning: {
    number: '06 / 07',
    titleFirst: 'Auto',
    titleSecond: 'Aprendizaje.',
    note: 'Libros, documentación, tutoriales y recursos autodidactas que he utilizado durante mi formación continua.',
    categoryLabels: { 'C# / .NET': 'C# / .NET', Databases: 'Bases de datos', 'Web Fundamentals': 'Fundamentos web', Frameworks: 'Frameworks', 'Architecture & Design': 'Arquitectura y diseño', Testing: 'Pruebas', 'DevOps / Cloud / Containers': 'DevOps / Cloud / Contenedores', 'Version Control & UML': 'Control de versiones y UML', 'AI-Assisted Development': 'Desarrollo asistido por IA' },
    onlineResources: 'Recursos en línea',
    websites: 'Sitios web',
    selfPacedCourses: 'Auto Aprendizaje',
    selfPacedStudy: 'Auto Aprendizaje',
    editionLabel: 'edición',
  },
  journey: {
    number: '07 / 07',
    titleFirst: 'Trayectoria',
    titleSecond: 'técnica.',
    steps: ['Ingeniería Eléctrica', 'Desarrollo de firmware / sistemas embebidos', 'C / Microcontroladores', 'C# / .NET Framework', 'Aplicaciones de escritorio', 'ASP.NET Core / APIs REST', 'Desarrollo web moderno', 'Desarrollo full-stack'],
  },
  contact: {
    eyebrow: 'Una forma directa de conectar.',
    title: 'Hablemos de software.',
    description: 'Para oportunidades profesionales, conversaciones técnicas o preguntas sobre mi experiencia, no dudes en contactarme. Este sitio ofrece contexto adicional sobre mis proyectos, decisiones técnicas y experiencia en ingeniería.',
    email: 'jdmaitan@gmail.com',
    phone: '+54 11 3090-6572',
    linkedIn: 'LinkedIn',
    github: 'GitHub',
    cvEnglish: 'Descargar CV — Inglés',
    cvSpanish: 'Descargar CV — Español',
  },
  footer: { builtWith: 'Desarrollado con React + TypeScript' },
}

export const locales: Record<Language, Locale> = { en: english, es: spanish }

import { PortfolioConfig } from "./portfolio.example";

// Language-specific content
const content = {
  en: {
    personal: {
      name: "Silvano Puccini",
      title: "Full Stack Developer in Training",
      subtitle: "Transforming business experience into digital solutions",
      greeting: "Hello, I'm",
      profilePhoto: "/perfil4x4diseño.png",
      cvUrl: "/cv-silvano-puccini.pdf",
    },
    about: {
      description:
        "Developer in training with over ten years of experience in commercial management, sales, and customer service. Currently studying University Technician in Computer Application Development (TUDAI) and Master's in Full Stack Web Development (Conquer Blocks). I combine technical knowledge in Full Stack development with experience in commercial leadership, remote team management, and process optimization.",
      experience:
        "I apply SOLID principles, agile methodologies, and development best practices to deliver user-centered digital solutions with real business impact. My background in sales and team coordination gives me a unique perspective to create applications that solve real business problems.",
      highlights: [
        {
          icon: "Briefcase",
          title: "10+ Years",
          description: "Business Experience",
        },
        {
          icon: "GraduationCap",
          title: "In Training",
          description: "Full Stack Developer",
        },
        {
          icon: "Lightbulb",
          title: "Modern Tech",
          description: "Latest Technologies",
        },
        {
          icon: "Target",
          title: "Business Focus",
          description: "Real Impact Solutions",
        },
      ],
    },
    projects: [
      {
        title: "FacturIA 2.0",
        description:
          "Invoice management system with automated billing, client tracking, and financial reports. Built with modern web technologies focusing on user experience and business efficiency.",
        image: "/projects/facturia.png",
        technologies: ["React", "TypeScript", "Python", "Django", "SQL"],
        github: "https://github.com/SilvanoPuccini/FacturIA-2.0",
        demo: "#",
      },
      {
        title: "More Projects Coming Soon",
        description:
          "Currently working on new Full Stack projects as part of my training. This portfolio will be updated with professional applications that showcase modern development practices and real business solutions.",
        image: "/projects/placeholder.jpg",
        technologies: ["React", "Python", "Django", "JavaScript", "SQL"],
        github: "https://github.com/SilvanoPuccini",
        demo: "#",
      },
    ],
    skills: {
      categories: [
        {
          title: "Frontend",
          skills: [
            { name: "HTML/CSS", level: 85 },
            { name: "JavaScript", level: 85 },
            { name: "React", level: 70 },
            { name: "TypeScript", level: 65 },
            { name: "WordPress", level: 95 },
          ],
        },
        {
          title: "Backend",
          skills: [
            { name: "Python", level: 85 },
            { name: "Django", level: 75 },
            { name: "Node.js", level: 80 },
            { name: "SQL", level: 85 },
            { name: "Java", level: 70 },
            { name: "Streamlit", level: 70 },
          ],
        },
        {
          title: "Tools & Methodologies",
          skills: [
            { name: "Git/GitHub", level: 80 },
            { name: "VSCode", level: 90 },
            { name: "Linux/WSL", level: 85 },
            { name: "Scrum/Kanban", level: 75 },
            { name: "SOLID Principles", level: 75 },
          ],
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Python",
        "Django",
        "Node.js",
        "SQL",
        "Git",
        "Linux",
        "Scrum",
        "WordPress",
      ],
    },
    meta: {
      title: "Silvano Puccini - Full Stack Developer in Training",
      description:
        "Portfolio of Silvano Puccini, Full Stack Developer in training with 10+ years of business experience. Combining commercial leadership with modern web development: React, Python, Django, TypeScript.",
      keywords: [
        "full stack developer",
        "web development",
        "portfolio",
        "react",
        "python",
        "django",
        "typescript",
        "career transition",
      ],
    },
  },
  es: {
    personal: {
      name: "Silvano Puccini",
      title: "Desarrollador Full Stack en Formación",
      subtitle: "Transformando experiencia comercial en soluciones digitales",
      greeting: "Hola, soy",
      profilePhoto: "/perfil4x4diseño.png",
      cvUrl: "/cv-silvano-puccini.pdf",
    },
    about: {
      description:
        "Desarrollador en formación con más de diez años de experiencia en gestión comercial, ventas y atención al cliente. Cursando la Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas (TUDAI) y el Máster en Desarrollo Web Full Stack (Conquer Blocks). Combino conocimientos técnicos en desarrollo Full Stack con experiencia en liderazgo comercial, gestión de equipos remotos y optimización de procesos.",
      experience:
        "Aplico principios SOLID, metodologías ágiles y buenas prácticas de desarrollo para entregar soluciones digitales centradas en el usuario y con impacto en negocio. Mi experiencia en ventas y coordinación de equipos me da una perspectiva única para crear aplicaciones que resuelven problemas reales de negocio.",
      highlights: [
        {
          icon: "Briefcase",
          title: "10+ Años",
          description: "Experiencia Comercial",
        },
        {
          icon: "GraduationCap",
          title: "En Formación",
          description: "Desarrollador Full Stack",
        },
        {
          icon: "Lightbulb",
          title: "Tecnología Moderna",
          description: "Últimas Tecnologías",
        },
        {
          icon: "Target",
          title: "Enfoque en Negocio",
          description: "Soluciones con Impacto",
        },
      ],
    },
    projects: [
      {
        title: "FacturIA 2.0",
        description:
          "Sistema de gestión de facturas con facturación automatizada, seguimiento de clientes e informes financieros. Construido con tecnologías web modernas enfocado en la experiencia de usuario y eficiencia del negocio.",
        image: "/projects/facturia.png",
        technologies: ["React", "TypeScript", "Python", "Django", "SQL"],
        github: "https://github.com/SilvanoPuccini/FacturIA-2.0",
        demo: "#",
      },
      {
        title: "Más Proyectos Próximamente",
        description:
          "Actualmente trabajando en nuevos proyectos Full Stack como parte de mi formación. Este portfolio será actualizado con aplicaciones profesionales que demuestren prácticas de desarrollo modernas y soluciones de negocio reales.",
        image: "/projects/placeholder.jpg",
        technologies: ["React", "Python", "Django", "JavaScript", "SQL"],
        github: "https://github.com/SilvanoPuccini",
        demo: "#",
      },
    ],
    skills: {
      categories: [
        {
          title: "Frontend",
          skills: [
            { name: "HTML/CSS", level: 85 },
            { name: "JavaScript", level: 85 },
            { name: "React", level: 70 },
            { name: "TypeScript", level: 65 },
            { name: "WordPress", level: 95 },
          ],
        },
        {
          title: "Backend",
          skills: [
            { name: "Python", level: 85 },
            { name: "Django", level: 75 },
            { name: "Node.js", level: 80 },
            { name: "SQL", level: 85 },
            { name: "Java", level: 70 },
            { name: "Streamlit", level: 70 },
          ],
        },
        {
          title: "Herramientas y Metodologías",
          skills: [
            { name: "Git/GitHub", level: 80 },
            { name: "VSCode", level: 90 },
            { name: "Linux/WSL", level: 85 },
            { name: "Scrum/Kanban", level: 75 },
            { name: "Principios SOLID", level: 75 },
          ],
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Python",
        "Django",
        "Node.js",
        "SQL",
        "Git",
        "Linux",
        "Scrum",
        "WordPress",
      ],
    },
    meta: {
      title: "Silvano Puccini - Desarrollador Full Stack en Formación",
      description:
        "Portfolio de Silvano Puccini, Desarrollador Full Stack en formación con más de 10 años de experiencia comercial. Combinando liderazgo empresarial con desarrollo web moderno: React, Python, Django, TypeScript.",
      keywords: [
        "desarrollador full stack",
        "desarrollo web",
        "portfolio",
        "react",
        "python",
        "django",
        "typescript",
        "transición de carrera",
      ],
    },
  },
};

// Main portfolio configuration (language-independent data)
export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Silvano Puccini",
    title: "Full Stack Developer in Training",
    subtitle: "Transforming business experience into digital solutions",
    greeting: "Hello, I'm",
    profilePhoto: "/perfil4x4.jpg",
    cvUrl: "/cv-silvano-puccini.pdf",
  },

  contact: {
    email: "silvano.jm.puccini@gmail.com",
    phone: "+54 249 4309584",
    location: "Pucón, Chile",
    social: {
      github: "https://github.com/SilvanoPuccini",
      linkedin: "https://linkedin.com/in/Silvano-Puccini",
    },
  },

  about: {
    description:
      "Developer in training with over ten years of experience in commercial management, sales, and customer service. Currently studying University Technician in Computer Application Development (TUDAI) and Master's in Full Stack Web Development (Conquer Blocks). I combine technical knowledge in Full Stack development with experience in commercial leadership, remote team management, and process optimization.",
    experience:
      "I apply SOLID principles, agile methodologies, and development best practices to deliver user-centered digital solutions with real business impact. My background in sales and team coordination gives me a unique perspective to create applications that solve real business problems.",
    highlights: [
      {
        icon: "Briefcase",
        title: "10+ Years",
        description: "Business Experience",
      },
      {
        icon: "GraduationCap",
        title: "In Training",
        description: "Full Stack Developer",
      },
      {
        icon: "Lightbulb",
        title: "Modern Tech",
        description: "Latest Technologies",
      },
      {
        icon: "Target",
        title: "Business Focus",
        description: "Real Impact Solutions",
      },
    ],
  },

  projects: [
    {
      title: "FacturIA 2.0",
      description:
        "Invoice management system with automated billing, client tracking, and financial reports. Built with modern web technologies focusing on user experience and business efficiency.",
      image: "/projects/facturia.jpg",
      technologies: ["React", "TypeScript", "Python", "Django", "SQL"],
      github: "https://github.com/SilvanoPuccini/FacturIA-2.0",
      demo: "#",
    },
    {
      title: "More Projects Coming Soon",
      description:
        "Currently working on new Full Stack projects as part of my training. This portfolio will be updated with professional applications that showcase modern development practices and real business solutions.",
      image: "/projects/placeholder.jpg",
      technologies: ["React", "Python", "Django", "JavaScript", "SQL"],
      github: "https://github.com/SilvanoPuccini",
      demo: "#",
    },
  ],

  skills: {
    categories: [
      {
        title: "Frontend",
        skills: [
          { name: "HTML/CSS", level: 85 },
          { name: "JavaScript", level: 85 },
          { name: "React", level: 70 },
          { name: "TypeScript", level: 65 },
          { name: "WordPress", level: 95 },
        ],
      },
      {
        title: "Backend",
        skills: [
          { name: "Python", level: 85 },
          { name: "Django", level: 75 },
          { name: "Node.js", level: 80 },
          { name: "SQL", level: 85 },
          { name: "Java", level: 70 },
          { name: "Streamlit", level: 70 },
        ],
      },
      {
        title: "Tools & Methodologies",
        skills: [
          { name: "Git/GitHub", level: 80 },
          { name: "VSCode", level: 90 },
          { name: "Linux/WSL", level: 85 },
          { name: "Scrum/Kanban", level: 75 },
          { name: "SOLID Principles", level: 75 },
        ],
      },
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Python",
      "Django",
      "Node.js",
      "SQL",
      "Git",
      "Linux",
      "Scrum",
      "WordPress",
    ],
  },

  footer: {
    copyright: "All rights reserved.",
    builtWith: "Built with using React & TypeScript",
  },

  meta: {
    title: "Silvano Puccini - Full Stack Developer in Training",
    description:
      "Portfolio of Silvano Puccini, Full Stack Developer in training with 10+ years of business experience. Combining commercial leadership with modern web development: React, Python, Django, TypeScript.",
    keywords: [
      "full stack developer",
      "web development",
      "portfolio",
      "react",
      "python",
      "django",
      "typescript",
      "career transition",
    ],
  },
};

// Export the content for use in components
export { content };

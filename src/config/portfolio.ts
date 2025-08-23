import { PortfolioConfig } from "./portfolio.example";

// Language-specific content
const content = {
  en: {
    personal: {
      name: "Silvano Puccini",
      title: "Desarrollador Web Full Stack",
      subtitle: "Mi portafolio",
      greeting: "Hello, I'm",
      profilePhoto: "/perfil4x4.jpg",
      cvUrl: "/cv-silvano-puccini.pdf",
    },
    about: {
      description: "{Resumen profesional}",
      experience:
        "Combino conocimientos técnicos en desarrollo Full Stack con experiencia en lideraz￾go comercial, gestión de equipos remotos y optimización de procesos. Aplico principios SOLID,",
      highlights: [
        {
          icon: "Code2",
          title: "5+ Years",
          description: "Professional Experience",
        },
        {
          icon: "Users",
          title: "20+ Projects",
          description: "Successfully Delivered",
        },
        {
          icon: "Lightbulb",
          title: "Modern Tech",
          description: "Latest Technologies",
        },
        {
          icon: "Award",
          title: "Quality Focus",
          description: "Best Practices",
        },
      ],
    },
    projects: [
      {
        title: "Project Name",
        description:
          "Describe your project here. What it does, what problems it solves, and what technologies you used.",
        image: "/project-image.jpg",
        technologies: ["React", "TypeScript", "Node.js"],
        github: "https://github.com/SilvanoPuccini/project",
        demo: "https://project-demo.vercel.app",
      },
      // Add more projects as needed
    ],
    skills: {
      categories: [
        {
          title: "Frontend",
          skills: [
            { name: "React", level: 95 },
            { name: "TypeScript", level: 90 },
            { name: "Next.js", level: 85 },
            { name: "Tailwind CSS", level: 88 },
            { name: "Vue.js", level: 75 },
          ],
        },
        {
          title: "Backend",
          skills: [
            { name: "Node.js", level: 88 },
            { name: "Python", level: 82 },
            { name: "PostgreSQL", level: 85 },
            { name: "MongoDB", level: 80 },
            { name: "GraphQL", level: 78 },
          ],
        },
        {
          title: "Tools & Others",
          skills: [
            { name: "AWS", level: 85 },
            { name: "Docker", level: 82 },
            { name: "Git", level: 92 },
            { name: "Jest", level: 88 },
            { name: "Figma", level: 75 },
          ],
        },
      ],
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "AWS",
        "Docker",
        "PostgreSQL",
        "MongoDB",
        "GraphQL",
        "Jest",
        "Tailwind CSS",
        "Next.js",
        "Vue.js",
      ],
    },
    meta: {
      title: "Silvano Puccini - Full Stack",
      description:
        "Personal portfolio of Silvano Puccini, a full stack specializing in modern web technologies.",
      keywords: [
        "full stack",
        "web development",
        "portfolio",
        "react",
        "typescript",
      ],
    },
  },
  es: {
    personal: {
      name: "Silvano Puccini",
      title: "Full Stack",
      subtitle: "Mi portafolio",
      greeting: "Hola, soy",
      profilePhoto: "/perfil4x4.jpg",
      cvUrl: "/cv-silvano-puccini.pdf",
    },
    about: {
      description:
        "Combino conocimientos técnicos en desarrollo Full Stack con experiencia en lideraz￾go comercial, gestión de equipos remotos y optimización de procesos. Aplico principios SOLID,",
      experience: "en el usuario y con impacto en negocio.",
      highlights: [
        {
          icon: "Code2",
          title: "5+ Años",
          description: "Experiencia Profesional",
        },
        {
          icon: "Users",
          title: "20+ Proyectos",
          description: "Entregados Exitosamente",
        },
        {
          icon: "Lightbulb",
          title: "Tecnología Moderna",
          description: "Últimas Tecnologías",
        },
        {
          icon: "Award",
          title: "Enfoque en Calidad",
          description: "Mejores Prácticas",
        },
      ],
    },
    projects: [
      {
        title: "Nombre del Proyecto",
        description:
          "Describe tu proyecto aquí. Qué hace, qué problemas resuelve y qué tecnologías usaste.",
        image: "/project-image.jpg",
        technologies: ["React", "TypeScript", "Node.js"],
        github: "https://github.com/SilvanoPuccini/project",
        demo: "https://project-demo.vercel.app",
      },
      // Agrega más proyectos según sea necesario
    ],
    skills: {
      categories: [
        {
          title: "Frontend",
          skills: [
            { name: "React", level: 95 },
            { name: "TypeScript", level: 90 },
            { name: "Next.js", level: 85 },
            { name: "Tailwind CSS", level: 88 },
            { name: "Vue.js", level: 75 },
          ],
        },
        {
          title: "Backend",
          skills: [
            { name: "Node.js", level: 88 },
            { name: "Python", level: 82 },
            { name: "PostgreSQL", level: 85 },
            { name: "MongoDB", level: 80 },
            { name: "GraphQL", level: 78 },
          ],
        },
        {
          title: "Herramientas y Otros",
          skills: [
            { name: "AWS", level: 85 },
            { name: "Docker", level: 82 },
            { name: "Git", level: 92 },
            { name: "Jest", level: 88 },
            { name: "Figma", level: 75 },
          ],
        },
      ],
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "AWS",
        "Docker",
        "PostgreSQL",
        "MongoDB",
        "GraphQL",
        "Jest",
        "Tailwind CSS",
        "Next.js",
        "Vue.js",
      ],
    },
    meta: {
      title: "Silvano Puccini - Full Stack",
      description:
        "Portfolio personal de Silvano Puccini, un full stack especializado en tecnologías web modernas.",
      keywords: [
        "full stack",
        "desarrollo web",
        "portfolio",
        "react",
        "typescript",
      ],
    },
  },
};

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Silvano Puccini",
    title: "Full Stack",
    subtitle: "Mi portafolio",
    greeting: "Hello, I'm",
    profilePhoto: "/perfil4x4.jpg",
    cvUrl: "/cv-silvano-puccini.pdf", // Optional - update this path
  },

  contact: {
    email: "silvano.jm.puccini@gmail.com",
    phone: "+54 249 4309584",
    location: "Pucón, Chile",
    social: {
      github: "https://github.com/SilvanoPuccini",
      linkedin: "https://linkedin.com/in/Silvano-Puccini",
      // Optional - update if different
      // Optional - update if different
    },
  },

  about: {
    description: "{Resumen profesional}",
    experience:
      "Combino conocimientos técnicos en desarrollo Full Stack con experiencia en lideraz￾go comercial, gestión de equipos remotos y optimización de procesos. Aplico principios SOLID,",
    highlights: [
      {
        icon: "Code2",
        title: "5+ Years",
        description: "Professional Experience",
      },
      {
        icon: "Users",
        title: "20+ Projects",
        description: "Successfully Delivered",
      },
      {
        icon: "Lightbulb",
        title: "Modern Tech",
        description: "Latest Technologies",
      },
      {
        icon: "Award",
        title: "Quality Focus",
        description: "Best Practices",
      },
    ],
  },

  projects: [
    {
      title: "Project Name",
      description:
        "Describe your project here. What it does, what problems it solves, and what technologies you used.",
      image: "/project-image.jpg",
      technologies: ["React", "TypeScript", "Node.js"],
      github: "https://github.com/SilvanoPuccini/project",
      demo: "https://project-demo.vercel.app",
    },
    // Add more projects as needed
  ],

  skills: {
    categories: [
      {
        title: "Frontend",
        skills: [
          { name: "React", level: 95 },
          { name: "TypeScript", level: 90 },
          { name: "Next.js", level: 85 },
          { name: "Tailwind CSS", level: 88 },
          { name: "Vue.js", level: 75 },
        ],
      },
      {
        title: "Backend",
        skills: [
          { name: "Node.js", level: 88 },
          { name: "Python", level: 82 },
          { name: "PostgreSQL", level: 85 },
          { name: "MongoDB", level: 80 },
          { name: "GraphQL", level: 78 },
        ],
      },
      {
        title: "Tools & Others",
        skills: [
          { name: "AWS", level: 85 },
          { name: "Docker", level: 82 },
          { name: "Git", level: 92 },
          { name: "Jest", level: 88 },
          { name: "Figma", level: 75 },
        ],
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "AWS",
      "Docker",
      "PostgreSQL",
      "MongoDB",
      "GraphQL",
      "Jest",
      "Tailwind CSS",
      "Next.js",
      "Vue.js",
    ],
  },

  footer: {
    copyright: "All rights reserved.",
    builtWith: "Built with using React & TypeScript",
  },

  meta: {
    title: "Silvano Puccini - Full Stack",
    description:
      "Personal portfolio of Silvano Puccini, a full stack specializing in modern web technologies.",
    keywords: [
      "full stack",
      "web development",
      "portfolio",
      "react",
      "typescript",
    ],
  },
};

// Export the content for use in components
export { content };

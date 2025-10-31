import { PortfolioConfig } from "./portfolio.example";

// Language-specific content
const content = {
  en: {
    personal: {
      name: "Silvano Puccini",
      title: "Full Stack Developer",
      subtitle: "Building modern web solutions",
      greeting: "Hello, I'm",
      profilePhoto: "/perfil4x4.jpg",
      cvUrl: "/cv-silvano-puccini.pdf",
    },
    about: {
      description:
        "I combine technical expertise in Full Stack development with experience in commercial leadership, remote team management, and process optimization. I apply SOLID principles and best practices to deliver scalable, user-focused solutions with real business impact.",
      experience:
        "With over 5 years of professional experience, I've successfully delivered 20+ projects using modern technologies. I specialize in building high-performance web applications with focus on clean architecture, testing, and continuous delivery.",
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
        title: "E-Commerce Platform",
        description:
          "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built with modern architecture patterns and microservices.",
        image: "/project-image.jpg",
        technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
        github: "https://github.com/SilvanoPuccini/ecommerce-project",
        demo: "https://ecommerce-demo.vercel.app",
      },
      {
        title: "Task Management System",
        description:
          "Collaborative task management application with real-time updates, team collaboration features, and advanced filtering. Implements clean architecture and TDD.",
        image: "/project-image.jpg",
        technologies: ["Next.js", "TypeScript", "MongoDB", "GraphQL", "Jest"],
        github: "https://github.com/SilvanoPuccini/task-manager",
        demo: "https://task-manager-demo.vercel.app",
      },
      {
        title: "Analytics Dashboard",
        description:
          "Real-time analytics dashboard with data visualization, custom reports, and export functionality. Optimized for performance with large datasets.",
        image: "/project-image.jpg",
        technologies: ["React", "TypeScript", "AWS", "Recharts", "Tailwind"],
        github: "https://github.com/SilvanoPuccini/analytics-dashboard",
        demo: "https://analytics-demo.vercel.app",
      },
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
      title: "Silvano Puccini - Full Stack Developer",
      description:
        "Personal portfolio of Silvano Puccini, a Full Stack Developer specializing in modern web technologies, React, TypeScript, and Node.js.",
      keywords: [
        "full stack developer",
        "web development",
        "portfolio",
        "react",
        "typescript",
        "node.js",
      ],
    },
  },
  es: {
    personal: {
      name: "Silvano Puccini",
      title: "Desarrollador Full Stack",
      subtitle: "Construyendo soluciones web modernas",
      greeting: "Hola, soy",
      profilePhoto: "/perfil4x4.jpg",
      cvUrl: "/cv-silvano-puccini.pdf",
    },
    about: {
      description:
        "Combino conocimientos técnicos en desarrollo Full Stack con experiencia en liderazgo comercial, gestión de equipos remotos y optimización de procesos. Aplico principios SOLID y mejores prácticas para entregar soluciones escalables, enfocadas en el usuario y con impacto real en el negocio.",
      experience:
        "Con más de 5 años de experiencia profesional, he entregado exitosamente más de 20 proyectos utilizando tecnologías modernas. Me especializo en construir aplicaciones web de alto rendimiento con enfoque en arquitectura limpia, testing y entrega continua.",
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
        title: "Plataforma E-Commerce",
        description:
          "Solución e-commerce full-stack con gestión de inventario en tiempo real, procesamiento de pagos y panel de administración. Construida con patrones de arquitectura moderna y microservicios.",
        image: "/project-image.jpg",
        technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
        github: "https://github.com/SilvanoPuccini/ecommerce-project",
        demo: "https://ecommerce-demo.vercel.app",
      },
      {
        title: "Sistema de Gestión de Tareas",
        description:
          "Aplicación colaborativa de gestión de tareas con actualizaciones en tiempo real, funciones de colaboración en equipo y filtrado avanzado. Implementa arquitectura limpia y TDD.",
        image: "/project-image.jpg",
        technologies: ["Next.js", "TypeScript", "MongoDB", "GraphQL", "Jest"],
        github: "https://github.com/SilvanoPuccini/task-manager",
        demo: "https://task-manager-demo.vercel.app",
      },
      {
        title: "Dashboard de Analíticas",
        description:
          "Dashboard de analíticas en tiempo real con visualización de datos, reportes personalizados y funcionalidad de exportación. Optimizado para rendimiento con grandes conjuntos de datos.",
        image: "/project-image.jpg",
        technologies: ["React", "TypeScript", "AWS", "Recharts", "Tailwind"],
        github: "https://github.com/SilvanoPuccini/analytics-dashboard",
        demo: "https://analytics-demo.vercel.app",
      },
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
      title: "Silvano Puccini - Desarrollador Full Stack",
      description:
        "Portfolio personal de Silvano Puccini, un Desarrollador Full Stack especializado en tecnologías web modernas, React, TypeScript y Node.js.",
      keywords: [
        "desarrollador full stack",
        "desarrollo web",
        "portfolio",
        "react",
        "typescript",
        "node.js",
      ],
    },
  },
};

// Main portfolio configuration (language-independent data)
export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Silvano Puccini",
    title: "Full Stack Developer",
    subtitle: "Building modern web solutions",
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
      "I combine technical expertise in Full Stack development with experience in commercial leadership, remote team management, and process optimization. I apply SOLID principles and best practices to deliver scalable, user-focused solutions with real business impact.",
    experience:
      "With over 5 years of professional experience, I've successfully delivered 20+ projects using modern technologies. I specialize in building high-performance web applications with focus on clean architecture, testing, and continuous delivery.",
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
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built with modern architecture patterns and microservices.",
      image: "/project-image.jpg",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
      github: "https://github.com/SilvanoPuccini/ecommerce-project",
      demo: "https://ecommerce-demo.vercel.app",
    },
    {
      title: "Task Management System",
      description:
        "Collaborative task management application with real-time updates, team collaboration features, and advanced filtering. Implements clean architecture and TDD.",
      image: "/project-image.jpg",
      technologies: ["Next.js", "TypeScript", "MongoDB", "GraphQL", "Jest"],
      github: "https://github.com/SilvanoPuccini/task-manager",
      demo: "https://task-manager-demo.vercel.app",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time analytics dashboard with data visualization, custom reports, and export functionality. Optimized for performance with large datasets.",
      image: "/project-image.jpg",
      technologies: ["React", "TypeScript", "AWS", "Recharts", "Tailwind"],
      github: "https://github.com/SilvanoPuccini/analytics-dashboard",
      demo: "https://analytics-demo.vercel.app",
    },
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
    title: "Silvano Puccini - Full Stack Developer",
    description:
      "Personal portfolio of Silvano Puccini, a Full Stack Developer specializing in modern web technologies, React, TypeScript, and Node.js.",
    keywords: [
      "full stack developer",
      "web development",
      "portfolio",
      "react",
      "typescript",
      "node.js",
    ],
  },
};

// Export the content for use in components
export { content };

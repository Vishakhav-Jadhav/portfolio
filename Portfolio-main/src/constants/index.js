import { FaGithub, FaLinkedin } from "react-icons/fa";
export const myProjects = [
  {
    id: 1,
    title: "Car Agency Website",
    description:
      "A modern, responsive car dealership website built for showcasing vehicle listings, pricing, and booking requests.",
    subDescription: [
      "Created a fully responsive UI using React.js and Tailwind CSS.",
      "Integrated dynamic components such as car filters, booking forms, and detail pages.",
      "Added JSON-based data handling to simulate backend API responses.",
      "Improved overall UI/UX with animations and reusable components.",
    ],
    image: "/assets/projects/car-agency.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react_icon.jpg" },
      { id: 2, name: "TailwindCSS", path: "/assets/logos/tailwind-css-.png" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.jpg" },
    ],
  },

  {
    id: 2,
    title: "CRM Dashboard",
    description:
      "A complete CRM dashboard with analytics, charts, customer tracking, and product management.",
    subDescription: [
      "Designed dashboard UI using React.js, TailwindCSS, and chart libraries.",
      "Implemented sections such as Customers, Orders, Products, and Reports.",
      "Created reusable components including tables, modals, and filters.",
      "Integrated JSON-based mock APIs for CRUD operations.",
    ],
    image: "/assets/projects/crm-dashboard.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react_icon.jpg" },
      { id: 2, name: "TailwindCSS", path: "/assets/logos/tailwind-css-.png" },
      { id: 3, name: "TypeScript", path: "/assets/logos/typescript.png" },
    ],
  },

  {
    id: 3,
    title: "Army Project UI (Defense Dashboard)",
    description:
      "A secure, structured UI designed for internal defense-related workflows and data visualization.",
    subDescription: [
      "Created high-precision UI components with a clean, militaristic design theme.",
      "Designed role-based sections for reports, maps, and alert systems.",
      "Built dynamic tables, alerts, logs, and secure navigation flows.",
      "Focused on performance optimization and usability for real-world use.",
    ],
    image: "/assets/projects/army-dashboard.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react_icon.jpg" },
      { id: 2, name: "TailwindCSS", path: "/assets/logos/tailwind-css-.png" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.jpg" },
    ],
  },

  {
    id: 4,
    title: "Company Website",
    description:
      "A professional multi-page company portfolio website for branding, services, and contact management.",
    subDescription: [
      "Built using modern responsive UI layouts with React.js and TailwindCSS.",
      "Created sections: Home, Services, Portfolio, Testimonials, Careers, Contact.",
      "Optimized for SEO and performance.",
      "Deployed using Vercel with smooth animations and optimized assets.",
    ],
    image: "/assets/projects/company-site.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react_icon.jpg" },
      { id: 2, name: "TailwindCSS", path: "/assets/logos/tailwind-css-.png" },
      { id: 3, name: "Vercel", path: "/assets/logos/vesrsel.avif" },
    ],
  },

  {
    id: 5,
    title: "AI Research Agent",
    description:
      "An AI agent designed to auto-generate structured research reports using LLMs.",
    subDescription: [
      "Built using Python, LangChain, and Google Colab.",
      "Automates research workflows and produces detailed formatted reports.",
      "Integrated external APIs and embeddings for contextual intelligence.",
      "Created for Marva AI LLP during AI/ML internship.",
    ],
    image: "/assets/projects/ai-agent.jpg",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.png" },
      { id: 2, name: "Python", path: "/assets/logos/python.png" },
      { id: 3, name: "Python", path: "/assets/logos/python.png" },
    ],
  },

  {
    id: 6,
    title: "Indian Classical Music RAG Chatbot",
    description:
      "A RAG-based chatbot capable of answering theory questions and generating swar notations.",
    subDescription: [
      "Built using embeddings, transformers, and vector storage.",
      "Integrated PDF knowledge base of ragas, taals, and music theory.",
      "Created JSON-based swar notation generator with custom Bhairav rules.",
      "Improved contextual accuracy using retrieval-augmented generation.",
    ],
    image: "/assets/projects/music-ai.jpg",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.png" },
    
    ],
  },

  {
    id: 7,
    title: "PDF Analyzer Bot",
    description:
      "An AI-powered PDF question-answering bot that extracts content and answers user queries.",
    subDescription: [
      "Built using LangChain, Python, and embeddings.",
      "Allows users to upload PDFs and ask natural language questions.",
      "Enhances context search using similarity models.",
      "Integrated into a Streamlit web interface.",
    ],
    image: "/assets/projects/pdf-bot.jpg",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.png" },
      { id: 2, name: "Python", path: "/assets/logos/python.png" },
      { id: 3, name: "Streamlit", path: "/assets/logos/streamlit.png" },
    ],
  },
];

export const mySocials = [

  {
    name: "Linkedin",
    href: "https://linkedin.com/in/vishakha-jadhav-0b0a98251",
    icon: FaLinkedin,
  },
  {
    name: "Github",
    href: "https://github.com/Vishakhav-Jadhav",
    icon: FaGithub,
  },
];

export const experiences = [
  {
    title: "Front-End Developer Intern",
    job: "A3M NextGen Pvt Ltd",
    date: "June 2023 – August 2023",
    contents: [
      "Learned and applied fundamentals of HTML, CSS, JavaScript, and React.js.",
      "Built responsive layouts, cards, and UI components using Tailwind CSS.",
      "Developed an e-commerce website with product catalog and shopping cart.",
      "Created a real-time weather app using third-party APIs.",
      "Designed and deployed a personal portfolio website.",
    ],
  },
  {
    title: "Front-End Developer Intern (2nd Term)",
    job: "A3M NextGen Pvt Ltd",
    date: "June 2023 – August 2023",
    contents: [
      "Worked on advanced UI development and improved understanding of React and TailwindCSS.",
      "Enhanced multiple client projects by improving responsiveness and usability.",
      "Gained deeper practical experience through real-world front-end tasks.",
    ],
  },
  {
    title: "AI/ML Intern",
    job: "Marva AI LLP",
    date: "January 2024 – May 2024",
    contents: [
      "Developed an AI Research Agent using Python and LLMs to automate structured report generation.",
      "Built a RAG chatbot for Indian Classical Music capable of answering theory-based questions and generating swar notations.",
      "Created a PDF Analyzer Bot for natural-language PDF querying.",
      "Worked with embeddings, transformers, and contextual search to improve accuracy.",
    ],
  },
  {
  title: "Web Developer",
  job: "Ajinkya Creation Pvt Ltd, Aundh",
  date: "2025 – present",
  contents: [
    "Built dashboards, websites, and internal tools using React, Next.js, and TailwindCSS.",
    "Developed UIs for Warehouse Management, Army Dashboard, CRM, EMS, and Car Agency systems.",
    "Improved SBD Infratech and company websites with modern UI/UX and SEO optimization.",
    "Enhanced performance, responsiveness, and branding across all projects.",
    "Tech Stack: React, Next.js, Tailwind, TypeScript, shadcn UI, Framer Motion."
  ],
}
  
];
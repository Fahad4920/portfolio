export interface Experience {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export const experiences: Experience[] = [
  {
    role: "Web Developer Intern",
    company: "SabzLand",
    period: "June 2024 - September 2024",
    points: [
      "Led frontend development for internal projects using React.js and modern JavaScript, ensuring 100% component reusability.",
      "Integrated secure REST APIs, handling data transformations and state management using React hooks.",
      "Crafted fully responsive UIs matching complex design systems, improving mobile usability scores by 25%.",
      "Optimized load times and rendering performance by implementing code splitting, lazy loading, and asset minification."
    ]
  },
  {
  role: "Web Developer Intern",
  company: "Cosmotech Technologies",
  period: "June 2025 - August 2025",
  points: [
    "Developed responsive websites and landing pages using HTML5, CSS3, JavaScript, and WordPress.",
    "Assisted in customizing Odoo ERP modules and implementing client-specific business requirements.",
    "Integrated REST APIs to enable seamless communication between frontend applications and backend services.",
    "Collaborated with developers using Git in an Agile development environment, participating in code reviews and bug fixing.",
    "Improved website responsiveness, usability, and cross-browser compatibility for client projects."
  ]
},
{
  role: "Software Developer",
  company: "TechnikNest",
  period: "September 2024 - Present", 
  points: [
    "Developed full-stack web applications using React.js, Node.js, Express.js, and MongoDB.",
    "Designed and implemented RESTful APIs, authentication workflows, and database operations to support scalable application features.",
    "Created reusable frontend components and responsive user interfaces while ensuring seamless integration with backend services.",
    "Deployed and maintained applications on Vercel, resolved production issues, and improved application performance through debugging and optimization.",
    "Collaborated with developers using Git and Agile practices, contributing to code reviews, feature planning, and continuous product improvements."
  ]
}
];

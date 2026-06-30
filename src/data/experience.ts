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
    period: "January 2024 - April 2024",
    points: [
      "Developed and maintained highly responsive client-facing websites using HTML5, CSS3, and JavaScript frameworks.",
      "Worked closely with Odoo ERP modules, customizing client portals and database schemas using Python.",
      "Integrated third-party and custom REST APIs to connect legacy database systems with external SaaS services.",
      "Collaborated in a remote agile team using Git, conducting code reviews and ensuring seamless version control integration.",
      "Designed and deployed customized WordPress sites, creating custom themes and custom plugins as required by business requirements."
    ]
  }
];

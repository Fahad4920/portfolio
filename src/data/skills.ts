export interface Skill {
  name: string;
  level: number; // 0-100 proficiency
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5/CSS3", level: 95 },
      { name: "Bootstrap", level: 85 }
    ]
  },
  {
    title: "Backend Development",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "REST APIs", level: 95 },
      { name: "JWT Authentication", level: 90 }
    ]
  },
  {
    title: "Databases",
    icon: "Database",
    skills: [
      { name: "MongoDB", level: 88 },
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 80 }
    ]
  },
  {
    title: "Tools & DevOps",
    icon: "Cpu",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Vercel", level: 90 },
      { name: "Postman", level: 95 },
      { name: "GitHub Actions", level: 80 },
      { name: "WordPress", level: 85 },
      { name: "Odoo ERP", level: 75 }
    ]
  },
  {
    title: "Programming Languages",
    icon: "Code",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "C++", level: 75 }
    ]
  }
];

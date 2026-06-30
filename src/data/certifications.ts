export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url: string;
}

export const certifications: Certification[] = [
  {
    title: "Google IT Automation with Python Professional Certificate",
    issuer: "Google (via Coursera)",
    date: "2024",
    credentialId: "G-IT-AUTO-PYTHON-492",
    url: "https://www.coursera.org/account/accomplishments/specialization/professional-certificate/..."
  },
  {
    title: "Google IT Support Professional Certificate",
    issuer: "Google (via Coursera)",
    date: "2023",
    credentialId: "G-IT-SUPPORT-PROF-492",
    url: "https://www.coursera.org/account/accomplishments/specialization/professional-certificate/..."
  },
  {
    title: "Full Stack Web Development Certification",
    issuer: "SabzLand Academy",
    date: "2024",
    credentialId: "SL-WDEV-2024-08",
    url: "https://sabzland.com/verify/..."
  }
];

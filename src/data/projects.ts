export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  features: string[];
  challenges: string[];
  githubUrl: string;
  liveUrl?: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'iot';
}

export const projects: Project[] = [
  {
    id: "life-line-monitor",
    title: "Life Line Monitor",
    description: "An IoT-enabled real-time patient health monitoring system integrating hardware sensors with a web-based dashboard.",
    longDescription: "Life Line Monitor is a comprehensive health-tracking solution designed to monitor patients' vital signs in real-time. It connects physical sensors measuring heart rate, body temperature, and oxygen saturation to a cloud database, which then streams live telemetry to a responsive web interface for medical practitioners.",
    image: "/images/projects/lifeline.jpg",
    techStack: ["React.js", "Node.js", "Express.js", "Socket.io", "MongoDB", "Arduino", "C++"],
    features: [
      "Real-time vitals streaming using WebSockets",
      "Interactive graphs and historical data analysis",
      "Automated SMS/Email alerts for abnormal vital signs",
      "Role-based access control for doctors, nurses, and patients"
    ],
    challenges: [
      "Challenge: Reducing latency in telemetry transmission.",
      "Solution: Optimized the Socket.io connection pool and designed an efficient data buffer on the IoT client to send packets only when significant delta occurred, reducing network load by 40%."
    ],
    githubUrl: "https://github.com/fahad4920/life-line-monitor",
    liveUrl: "https://lifeline-ecg.vercel.app",
    category: "iot"
  },
  {
  id: "internship-management-system",
  title: "University Internship Management System",
  description:
    "A full-stack web application that digitizes and manages the complete internship lifecycle for university students, faculty coordinators, and industry supervisors.",
  longDescription:
    "The University Internship Management System was developed to streamline internship administration by replacing manual record-keeping with a centralized digital platform. The system enables students to apply for internships, upload required documents, track application status, and submit progress reports. Faculty coordinators can review applications, assign supervisors, monitor student progress, and evaluate internship performance, while administrators can efficiently manage internship records, organizations, and generate reports through a secure dashboard.",
  image: "/images/projects/internship-management-system.jpg",
  techStack: [
    "React.js","Next.js","Tailwind CSS","Express.js","MongoDB","JWT Authentication"],
  features: [
    "Role-based authentication for Students, Faculty Coordinators, and Administrators",
    "Online internship application and approval workflow",
    "Secure document upload for resumes, offer letters, and completion certificates",
    "Real-time internship status tracking and progress monitoring",
    "Internship record management with advanced search and filtering",
    "Performance evaluation and feedback management",
    "Analytics dashboard with internship statistics and reports",
    "Responsive interface optimized for desktop and mobile devices"
  ],
  challenges: [
    "Challenge: Designing a role-based access control system while maintaining a secure and intuitive user experience for different user types.",
    "Solution: Implemented JWT-based authentication with role-based authorization, protected API routes, and modular dashboard components, ensuring secure access and efficient management of internship data."
  ],
  githubUrl: "https://github.com/fahad4920/internship-management-system",
  liveUrl: "https://internship-portal.vercel.app",
  category: "fullstack"
},
  {
    id: "ai-chatbot",
  title: "Intellect AI Chatbot",
  description:"A ChatGPT-inspired AI chatbot powered by the OpenAI ChatGPT API, delivering real-time conversational responses through a modern and responsive interface.",
  longDescription:"Intellect AI Chatbot is a ChatGPT-inspired web application that enables users to interact with OpenAI's language models in real time. The application provides a clean, intuitive chat interface with support for conversation history, markdown rendering, syntax-highlighted code blocks, and a fully responsive design for desktop and mobile devices. The project focuses on delivering a fast, user-friendly AI chat experience while showcasing modern frontend development practices.",
  image: "/images/projects/chatbot.jpg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Gemini API", "Pinecone"],
    features: [
    "Real-time AI conversations powered by the OpenAI ChatGPT API",
    "Markdown rendering with syntax-highlighted code blocks",
    "Conversation history management",
    "Responsive design for desktop, tablet, and mobile devices",
    "Smooth typing animations for AI responses",
    "Dark and light mode support",
    "Clean and intuitive ChatGPT-inspired user interface",
    "Optimized performance with modern React architecture"
    ],
    challenges: [
      "Challenge: Building a responsive chat interface capable of handling asynchronous AI responses while maintaining a seamless user experience.",
      "Solution: Implemented efficient state management, optimized API request handling, and reusable React components to ensure smooth interactions and minimal UI re-rendering."
    ],
    githubUrl: "https://github.com/fahad4920/ai-chatbot",
    liveUrl: "https://chatgpt.com/",
    category: "frontend"
  },
  {
    id: "alba-review-web",
    title: "Alba Review Web",
    description: "A scalable business review and rating platform optimized for fast indexing, SEO, and interactive communities.",
    longDescription: "Alba Review is a custom platform allowing users to find, evaluate, and review businesses across various domains. It is engineered from the ground up for search engine optimization (SEO), fast loading speeds, and high-performance server-side rendering.",
    image: "/images/projects/albareview.jpg",
    techStack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
    features: [
      "Advanced Elasticsearch-based business and review search",
      "Full SEO optimization using structured metadata schemas",
      "Spam review detection algorithm and reporting flag workflow",
      "Interactive dashboard for business owners to respond to reviews"
    ],
    challenges: [
      "Challenge: Optimizing slow page loads caused by intensive query operations on highly rated businesses.",
      "Solution: Implemented Redis caching for hot review streams and utilized Next.js Incremental Static Regeneration (ISR) to pre-render highly frequented profile pages."
    ],
    githubUrl: "https://github.com/fahad4920/alba-review",
    category: "fullstack"
  },
  {
    id: "realtime-chat",
    title: "Nexus Chat Application",
    description: "A production-grade instant messaging app featuring private channels, media sharing, and presence indicators.",
    longDescription: "Nexus Chat is a full-featured communication platform built for high-throughput, low-latency exchanges. It features direct messages, custom rooms, typing indicators, read receipts, and user presence indicators, mimicking Slack and WhatsApp.",
    image: "/images/projects/chat.jpg",
    techStack: ["React.js", "Tailwind CSS", "Node.js", "Socket.io", "Express.js", "MongoDB"],
    features: [
      "Instant message delivery and multi-room functionality",
      "Real-time user presence tracking (online, offline, away)",
      "Typing indicators and dynamic read receipts",
      "Full search across historic channel transcripts"
    ],
    challenges: [
      "Challenge: Storing and indexing millions of messages while ensuring fast query times.",
      "Solution: Structured MongoDB database with compound indexes on room ID and message timestamp, paired with infinite scroll loading on the frontend."
    ],
    githubUrl: "https://github.com/fahad4920/nexus-chat",
    category: "backend"
  },
  {
    id: "arduino-iot-solutions",
    title: "Arduino IoT Solutions",
    description: "A suite of embedded firmware and control dashboards designed for smart automation systems.",
    longDescription: "This repository houses various micro-controller projects including smart home relays, automated irrigation valves, and remote climate monitoring modules. Includes ESP8266/ESP32 Wi-Fi firmware and custom Web dashboard interfaces.",
    image: "/images/projects/arduino.jpg",
    techStack: ["Arduino SDK", "C++", "ESP8266/ESP32", "MQTT", "HTML/CSS", "Bootstrap"],
    features: [
      "Firmware for ESP32 with automatic Wi-Fi reconnection logic",
      "Low-overhead data transmission via MQTT protocol",
      "Web portal hosted directly on ESP32 flash storage for setup",
      "Sleep-mode optimization to extend battery lifespan to 6+ months"
    ],
    challenges: [
      "Challenge: Handling unreliable network connections in rural deployments.",
      "Solution: Built an offline-buffer storage system using the micro-controller's EEPROM/SPIFFS file system to cache telemetry until a connection is restored."
    ],
    githubUrl: "https://github.com/fahad4920/arduino-iot-automation",
    category: "iot"
  }
];

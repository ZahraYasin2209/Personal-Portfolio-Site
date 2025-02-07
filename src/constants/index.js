import {
  robot,
  bubble,
  javascript,
  bootstrap,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  python,
  mySql,
  git,
  figma,
  canva,
  java,
  LoopTogether,
  NeuraMind,
  mediconnect,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "skills",
    title: "SKills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "mySql",
    icon: mySql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "canva",
    icon: canva,
  },
];

const experiences = [
  {
    title: "Frontend Web Development",
    icon: reactjs,
    iconBg: "#383E56",
    date: "April 2022 - Present",
    points: [
      "Frontend Development: Expertise in HTML, CSS, JavaScript, React.js, ensuring responsive, dynamic, and interactive web applications.",
      "Frameworks: Familiar with Bootstrap and Tailwind CSS for responsive and customizable UI design in web applications.",
      "API Integration: Experience with RESTful APIs and third-party API integrations to enhance web functionality.",
      "State Management: Proficiency in Redux and Context API for efficient data handling and application state management.",
      "Database Management: Knowledge of MySQL, Oracle and MongoDB for handling both structured and unstructured data.",
    ],
  },
  {
    title: "UI/UX Designing",
    icon: figma,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "UI/UX Design: Crafting intuitive, user-friendly designs with Figma and Canva, with a focus on usability, accessibility, and aesthetic appeal.",
      "Web Design: Designing modern, visually engaging layouts, branding, and digital assets that elevate the user experience.",
      "Prototyping & Wireframing: Creating interactive prototypes and wireframes to map user journeys and interface flow.",
      "Typography & Color Theory: Strong understanding of visual hierarchy, color psychology, and branding principles for impactful designs.",
    ],
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    icon: robot,
    iconBg: "#383E56",
    date: "June 2024 - Present",
    points: [
      "AI and ML Concepts: Familiarity with machine learning models and AI-driven applications, including chatbot integration.",
      "Natural Language Processing (NLP): Experience with speech-to-text, text-to-speech, and AI-based content generation.",
      "Computer Vision: Basic awareness of image processing techniques and object detection.",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: git,
    iconBg: "#E6DEDD",
    date: "March 2022 - Present",
    points: [
      "Version Control: Familiar with Git and GitHub for efficient collaboration and version control.",
      "Project Management: Hands-on experience with Agile methodologies and tools like Jira and Notion for task tracking and organization.",
      "Testing & Debugging: Familiar with Jest and unit testing to ensure quality and application reliability.",
      "Hosting & Deployment: Experience in deploying web applications with Vercel, Netlify, and GitHub Pages.",
    ],
  },
  {
    title: "Soft Skills & Collaboration",
    icon: bubble,
    iconBg: "#383E56",
    date: "Dec 2021 - Present",
    points: [
      "Problem-Solving and Critical Thinking: Strong ability to analyze challenges and devise effective solutions.",
      "Teamwork and Communication: Excellent collaboration skills for working with cross-functional teams, including developers, designers, and stakeholders.",
      "Continuous Learning: Passionate about exploring emerging technologies and expanding skillsets to stay ahead in the field.",
    ],
  },
];

const projects = [
  {
    name: "Loop Together",
    description:
      "Loop Together: A Carpool Scheduling Platform for Daily Commutes is a web-based carpooling platform that enables users to easily schedule, manage, and connect with daily commuters for efficient and eco-friendly transportation.",

    tags: [
      {
        name: "reactjs",
        color: "text-blue-300",
      },
      {
        name: "nodejs",
        color: "text-green-300",
      },
      {
        name: "tailwind",
        color: "text-orange-300",
      },
      {
        name: "mongodb",
        color: "text-red-300",
      },
    ],
    image: LoopTogether,
    source_code_link: "https://github.com/zahrayasin2209",
  },
  {
    name: "NeuraMind",
    description:
      "NeuraMind is an AI-powered platform, designed to offer personalized, real-time assistance. It provides efficient task management, and simplifies complex queries, enhancing user productivity and accessibility.",

    tags: [
      {
        name: "reactjs",
        color: "text-blue-300",
      },
      {
        name: "tailwind",
        color: "text-orange-300",
      },
      {
        name: "geminiapi",
        color: "text-green-300",
      },
    ],
    image: NeuraMind,
    source_code_link:
      "https://neura-mind-ai-powered-knowledge-and-assistance-platform.vercel.app/",
  },
  {
    name: "Mediconnect",
    description:
      "MediConnect is a web-based platform designed to streamline healthcare interactions. It connects patients, doctors, and administrators, enabling efficient management of records, appointments, and reports for a seamless experience.",
    tags: [
      {
        name: "javaservlets",
        color: "text-blue-300",
      },
      {
        name: "css",
        color: "text-green-300",
      },
      {
        name: "javascript",
        color: "text-orange-300",
      },
      {
        name: "mysql",
        color: "text-red-300",
      },
    ],
    image: mediconnect,
    source_code_link: "https://github.com/ZahraYasin2209/Mediconnect",
  },
];

export { technologies, experiences, projects };

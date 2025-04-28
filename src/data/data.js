// ... import other images

export const workExperience = [
  {
    company: "Power Digital Marketing",
    position: "Junior Software Engineer",
    duration: "August 2022 - January 2025",
    description:
      "Developed and maintained a full-stack expense tracking app with AI integration for receipt scanning, real-time budget tracking, data visualization, and user authentication.",
    technologies: [
      "TypeScript",
      "React.js",
      "Redux Toolkit",
      "GraphQL",
      "AWS",
      "Storybook",
      "Material-UI",
      "React Testing Library",
    ],
    image: "powerdigitalmarketing",
    location: "San Diego, CA (Remote)",
    responsibilities: [
      "Leveraged TypeScript and React, along with UI libraries, to create responsive data visualization components, presenting complex business data for a $100M+ company in diverse formats.",
      "Optimized data fetching by implementing Redux Toolkit caching, reducing network requests and achieving 5x quicker load times compared to fresh API calls.",
      "Developed an AI-powered chat interface enabling real-time client performance analysis with sub-10-second query response times, empowering faster, data-driven decisions.",
      "Enhanced UI consistency by migrating to and contributing to a custom, reusable Material-UI-based library with 30+ components, resulting in more efficient and cohesive UI development.",
      "Accelerated development cycles by pioneering the use of Retool for rapid prototyping and training team members, streamlining the delivery of initial product features.",
      "Proactively tested and debugged all implementations prior to QA handoff, ensuring a higher level of code quality and contributing to a more efficient development workflow.",
    ],
  },
];

export const featuredProject = {
  name: "Flow",
  description:
    "Constructed a full-stack expense tracking app featuring AI integration for receipt scanning with 95% accuracy, real-time budget tracking across 10+ categories, data visualization, and user authentication.",
  technologies: [
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Supabase",
  ],
  images: ["flow.png", "flow2.png", "flow3.png", "flow4.png"],
  demo: "https://flow-ivory-rho.vercel.app/",
  code: "https://github.com/anthonypang/flow",
};

export const projectItems = [
  {
    name: "Klimate - Weather Dashboard",
    description:
      "Created a responsive weather app delivering real-time geolocation-based updates, hourly forecasts, favorite city management, and recent search history",
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "OpenWeather API",
    ],
    image: "klimate.png",
    link: "https://klimate-inky.vercel.app/",
  },
  {
    name: "Github Finder - Database Search",
    description:
      "Engineered a web app that allows users to search and explore GitHub profiles, showcasing key details such as repositories, followers, and activity, with results for 9M+ profiles loading in under 1 second.",
    technologies: ["React.js", "JavaScript", "GitHub API"],
    image: "githubfinder.png",
    link: "https://githubfinder-anthonypang.netlify.app/",
  },
  {
    name: "Wi-Five - Study Spot Finder",
    description:
      "As part of a 5-person team, built a data-driven web app covering 30+ buildings, using Google Maps and Wi-Fi traffic analysis to identify and display optimal study locations, maximizing study effectiveness.",
    technologies: ["React.js", "JavaScript", "SCSS", "Google Maps API"],
    image: "wifive.png",
    link: "https://github.com/nburkhim/Wi-Five-Project",
  },
  {
    name: "SportsKings - Connections App",
    description:
      "Built a full-stack web application featuring a RESTful API. Leveraging the MVC design pattern and CRUD operations, the application enables users to connect with others based on shared interests.",
    technologies: ["JavaScript", "Express.js", "Node.js", "MongoDB"],
    image: "sportskings.png",
    link: "https://github.com/anthonypang/SportsKings",
  },
  {
    name: "Keeper",
    description:
      "A sleek, note-taking application built with React that allows users to create, edit, and delete notes. Features include a dynamic note input form and real-time note updating saved to local state.",
    technologies: ["React.js", "JavaScript"],
    image: "keeper.png",
    link: "https://keeper-anthonypang.netlify.app/",
  },
  {
    name: "Task Tracker",
    description:
      "A React-based task tracking application designed to help users organize and manage their daily tasks efficiently. Features include task creation, editing, and deletion, as well as the ability to mark tasks.",
    technologies: ["React.js", "JavaScript"],
    image: "tasktracker.png",
    link: "https://clever-speculoos-362101.netlify.app/",
  },
];

export const skillItems = [
  {
    skill: "JavaScript",
    image: "JavaScript-logo",
  },
  {
    skill: "TypeScript",
    image: "typescript",
  },
  {
    skill: "React",
    image: "react",
  },

  {
    skill: "Node.js",
    image: "node",
  },

  {
    skill: "Git",
    image: "git",
  },
  {
    skill: "HTML",
    image: "html5",
  },
  {
    skill: "CSS",
    image: "css3",
  },
];

export const navItems = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

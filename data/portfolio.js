// ============================================================
//  ALL PORTFOLIO CONTENT LIVES HERE.
//  Edit this file to update the site — no need to touch components.
// ============================================================

export const SITE = {
  name: "Awesh Kumar",
  title: "Awesh Kumar — Software Engineer",
  description:
    "Awesh Kumar is a Java and Spring Boot software engineer building digital banking systems on Temenos T24, Infinity and Fabric.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://aweshkumar.vercel.app",
};

export const PROFILE = {
  email: "aweshkumar0346@gmail.com",
  phone: "+92 370 1684085",
  linkedin: "https://www.linkedin.com/in/aweshkumar-05169424b",
  github: "https://github.com/aweshkumar0346",
  resume: "/Awesh_Kumar_Resume.pdf", // file in /public — replace it with your latest CV
  photo: "/awesh-kumar.jpg", // file in /public — 720×960 (3:4) works best
};

export const NAV = [
  ["/about", "About"],
  ["/experience", "Experience"],
  ["/projects", "Projects"],
  ["/skills", "Skills"],
  ["/education", "Education"],
  ["/contact", "Contact"],
];

// Lines that cycle in the hero
export const ROLES = [
  "Java backend engineer",
  "Spring Boot developer",
  "Temenos integration engineer",
  "Microservices developer",
  "Full-stack builder",
];

// The "API response" window in the hero. [className, text] — k = key, s = string, p = punctuation
export const API_LINES = [
  [["p", "{"]],
  [["k", '  "role"'], ["p", ": "], ["s", '"Associate Software Engineer"'], ["p", ","]],
  [["k", '  "company"'], ["p", ": "], ["s", '"Xpert Digital"'], ["p", ","]],
  [["k", '  "platforms"'], ["p", ": ["], ["s", '"T24"'], ["p", ", "], ["s", '"Infinity"'], ["p", ", "], ["s", '"Fabric"'], ["p", "],"]],
  [["k", '  "stack"'], ["p", ": ["], ["s", '"Java"'], ["p", ", "], ["s", '"Spring Boot"'], ["p", ", "], ["s", '"SQL"'], ["p", "],"]],
  [["k", '  "markets"'], ["p", ": ["], ["s", '"MENA"'], ["p", ", "], ["s", '"Europe"'], ["p", "],"]],
  [["k", '  "openToRemote"'], ["p", ": "], ["s", "true"], ["p", ","]],
  [["k", '  "based"'], ["p", ": "], ["s", '"Karachi, PK"']],
  [["p", "}"]],
];

export const STATS = [
  ["3", "Temenos platforms: T24, Infinity, Fabric"],
  ["2+ yrs", "Freelancing on Fiverr"],
  ["2", "Markets served: MENA & EU"],
  ["4+", "Full-stack projects"],
];

export const JOBS = [
  {
    title: "Associate Software Engineer",
    org: "Xpert Digital · Karachi",
    when: "Nov 2025 — Present",
    current: true,
    client: { flag: "🇱🇹", name: "Artea Bank, Lithuania", note: "European digital banking implementation on the Temenos ecosystem" },
    points: [
      "Build and maintain Core Java backend services that power digital and core banking features on Temenos Fabric, Transact (T24) and Infinity.",
      "Design and expose RESTful APIs that connect Temenos Fabric with internal services and external banking systems.",
      "Integrate Temenos Transact (T24) with Temenos Infinity through Fabric services for seamless data exchange.",
      "Consume and integrate third-party APIs for banking operations, customer services and external communication.",
      "Implement business logic and transaction workflows for the Deposits, Accounts and Utilities modules.",
      "Write and optimise SQL, validate data and tune database operations.",
    ],
    platforms: ["Temenos Transact (T24)", "Temenos Infinity", "Temenos Fabric"],
    modules: ["Deposits", "Accounts", "Utilities"],
  },
  {
    title: "Software Development Trainee Engineer",
    org: "Techlogix · Karachi",
    when: "Sep 2025 — Nov 2025",
    points: [
      "Worked on banking-sector projects across both frontend and backend.",
      "Contributed to applications built on Oracle Banking Digital Experience (OBDX), supporting digital banking workflows and customer-facing features.",
      "Implemented backend services and RESTful APIs with Java and Spring Boot.",
      "Built responsive interfaces with HTML, CSS, JavaScript and Knockout.js, following the MVVM pattern for dynamic data binding.",
      "Integrated frontend components with backend APIs for consistent data flow and user experience.",
    ],
    platforms: ["Oracle OBDX", "Spring Boot", "Knockout.js"],
  },
  {
    title: "Professional Freelancer",
    org: "Fiverr · Remote",
    when: "Mar 2024 — Present",
    points: [
      "Deliver software development projects for clients worldwide as a freelancer on Fiverr, alongside full-time work.",
    ],
  },
  {
    title: "Student Lab Assistant — Data Structures",
    org: "FAST NUCES · Karachi",
    when: "Aug 2024 — Jan 2025",
    points: [
      "Helped students understand linked lists, trees and core algorithms.",
      "Guided hands-on coding sessions to build programming and problem-solving skills.",
    ],
  },
  {
    title: "Teaching Assistant — Programming Fundamentals",
    org: "FAST NUCES · Karachi",
    when: "Aug 2023 — Aug 2024",
    points: [
      "Mentored students in C: loops, arrays and pointers.",
      "Ran coding workshops, gave one-on-one support and evaluated assignments.",
    ],
  },
];

// Each project gets its own page at /projects/<slug>. Add a GitHub link in `repo` to show a "View code" button.
export const PROJECTS = [
  {
    slug: "help-com", name: "Help.com", tag: "Final year project", icon: "heart", color: "#2DD4BF", feat: true, repo: "",
    desc: "A social welfare platform that connects donors and volunteers with NGOs. JWT-secured REST APIs power donations and volunteer coordination, and Google Maps surfaces nearby NGOs and events.",
    short: "Donations, volunteers and NGO discovery on a map.",
    stack: ["React", "Spring Boot", "MySQL", "Hibernate", "JWT", "Google Maps API", "Maven"],
    highlights: [
      "Donation management for NGOs and donors",
      "Volunteer coordination for events and causes",
      "Secure RESTful APIs with JWT authentication",
      "Location-based discovery of NGOs and events with the Google Maps API",
      "Relational MySQL schema mapped with Hibernate",
    ],
    arch: [["React frontend", "Donor, volunteer and NGO screens"], ["Spring Boot REST API", "JWT authentication and business logic"], ["Hibernate / JPA", "Object–relational mapping"], ["MySQL", "Donations, users, NGOs and events"]],
    facts: [["Type", "Final year project"], ["Role", "Full-stack developer"], ["Build", "Maven"]],
  },
  {
    slug: "lms", name: "Learning Management System", tag: "Full stack", icon: "book", color: "#22B8D8", repo: "",
    desc: "A platform that streamlines course delivery and student engagement, with role-based access for educational institutions.",
    short: "Course delivery with role-based access.",
    stack: ["Java 17", "Spring Boot", "Spring Security", "Hibernate", "PostgreSQL", "Maven"],
    highlights: ["Course delivery and student engagement features", "Role-based access control with Spring Security", "Persistence with Spring Data JPA and Hibernate", "PostgreSQL relational data model"],
    arch: [["Web client", "Course and student views"], ["Spring Boot + Spring Security", "Authentication and role-based access"], ["JPA / Hibernate", "Data access layer"], ["PostgreSQL", "Courses, users and enrolments"]],
    facts: [["Type", "Personal project"], ["Language", "Java 17"], ["Build", "Maven"]],
  },
  {
    slug: "inventory", name: "Inventory Management", tag: "Retail", icon: "box", color: "#F5B942", repo: "",
    desc: "A retail inventory system with real-time order tracking, secure user management and dynamic media file handling.",
    short: "Real-time order tracking for retail.",
    stack: ["Spring Boot", "Hibernate", "MySQL", "JavaScript", "Maven"],
    highlights: ["Real-time order tracking", "Secure user management", "Dynamic media file handling for products", "MySQL persistence through Hibernate"],
    arch: [["JavaScript frontend", "Inventory and order screens"], ["Spring Boot", "Orders, users and media handling"], ["Hibernate", "ORM layer"], ["MySQL", "Products, orders and users"]],
    facts: [["Type", "Personal project"], ["Domain", "Retail"], ["Build", "Maven"]],
  },
  {
    slug: "quiz-master", name: "Quiz Master", tag: "Game", icon: "bulb", color: "#2DD4BF", repo: "",
    desc: "An interactive quiz game written in C with multi-category questions, lifelines and high-score tracking.",
    short: "A terminal quiz game written in C.",
    stack: ["C", "C standard library"],
    highlights: ["Multi-category question bank", "Lifelines to help players", "High-score tracking", "Written in plain C with the standard library"],
    arch: [["Terminal interface", "Menus and prompts"], ["Game logic in C", "Questions, lifelines and scoring"], ["High-score tracking", "Keeps the best results"]],
    facts: [["Type", "Early project"], ["Language", "C"], ["Tools", "GitHub, VS Code"]],
  },
];

export const FILTERS = ["All", "Spring Boot", "React", "MySQL", "PostgreSQL", "C"];

// [group name, colour, items]
export const SKILLS = [
  ["Backend", "#2DD4BF", ["Java", "Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate", "Spring Cloud", "Microservices", "Kafka", "Redis"]],
  ["Banking platforms", "#F5B942", ["Temenos Transact (T24)", "Temenos Infinity", "Temenos Fabric", "Oracle OBDX", "Core banking integration"]],
  ["Frontend", "#22B8D8", ["React", "Next.js", "Angular", "JavaScript", "Knockout.js", "JSF", "Thymeleaf", "HTML", "CSS", "Bootstrap"]],
  ["Databases", "#F5B942", ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "Indexing", "Query tuning"]],
  ["Security & APIs", "#2DD4BF", ["Spring Security", "JWT", "CORS", "REST", "OpenAPI 3.0", "Swagger UI", "Postman"]],
  ["Testing & DevOps", "#22B8D8", ["JUnit 5", "Mockito", "Docker", "Maven", "Gradle", "Git", "GitHub", "Linux"]],
  ["Tools", "#2DD4BF", ["IntelliJ IDEA", "VS Code", "DBeaver", "SQL Developer", "Sourcetree", "Jupyter"]],
  ["Foundations", "#F5B942", ["OOP", "SOLID", "Design patterns", "MVC & MVVM", "DSA", "System design", "Python", "C / C++"]],
  ["Languages", "#22B8D8", ["English — professional working", "Urdu — full professional"]],
];

// Scrolling bar under the menu
export const MARQUEE = ["Java", "Spring Boot", "Microservices", "Temenos T24", "REST APIs", "Kafka", "Redis", "PostgreSQL", "Spring Security", "Docker", "React", "Next.js", "Oracle", "JWT", "MySQL", "JUnit 5", "Mockito"];

export const DEGREE = {
  title: "BS Computer Science",
  meta: "FAST NUCES, Karachi — Sep 2021 to Jun 2025",
  note: "Concentrations in enterprise backend systems and Java application development.",
  coursework: ["Data structures", "Design & analysis of algorithms", "Object-oriented programming", "Database systems", "Parallel & distributed computing", "Software design & analysis", "Software engineering", "Web programming", "Artificial intelligence", "Information security", "IS audit & control", "Blockchain & cryptocurrency", "Graph theory", "Fundamentals of accounting", "International business"],
};

export const EARLIER_EDU = [
  ["Intermediate, Pre-Engineering", "Kainat College", "2019 – 2021"],
  ["Matric, Science", "Paradise Public Higher Secondary School", "2017 – 2019"],
];

export const LANGUAGES = [
  ["English", "Professional working proficiency"],
  ["Urdu", "Full professional proficiency"],
];

// [icon, title, description]
export const AWARDS = [
  ["medal", "Dean's List, June 2025", "Academic excellence with a 3.67 semester GPA."],
  ["trophy", "Runner-up, Speed Programming", "Developers Day 2022–23, FAST NUCES."],
];

// ---------- About page ----------
export const ABOUT = {
  short:
    "I'm a software engineer in Karachi building the backend of digital banking — Java, Spring Boot and the APIs that keep money moving correctly.",
  paragraphs: [
    "I work as an Associate Software Engineer at Xpert Digital on enterprise banking projects in the Temenos ecosystem: Transact (T24), Infinity and Fabric. Most of my day is Core Java services, REST APIs that connect systems which were never designed to talk to each other, and SQL that has to be right the first time, because it moves real money.",
    "Before that I trained at Techlogix on banking projects built with Oracle Banking Digital Experience, working on both the Spring Boot backend and the Knockout.js frontend. That mix is how I like to work: I understand the screen the customer sees as well as the service behind it.",
    "I studied Computer Science at FAST NUCES Karachi and graduated in 2025 with Dean's List recognition. For two years I was a teaching assistant for Programming Fundamentals in C and a lab assistant for Data Structures, which taught me to explain hard ideas simply — still the most useful skill I have in code reviews. My final year project, Help.com, connected donors and volunteers with NGOs on a map.",
    "Alongside full-time work I've been freelancing on Fiverr since 2024 and I keep building side projects. I'm most interested in microservices, cloud and fintech, and I follow blockchain and crypto closely.",
  ],
  values: [
    ["Clean, maintainable code", "I'd rather write something the next engineer can read than something clever. Clear names, small classes, and the patterns the team already uses."],
    ["Security by default", "In banking there is no 'we'll add auth later'. Spring Security, JWT, validated input and least-privilege access from the first commit."],
    ["Learn the domain first", "A deposit, an account and a utility payment each have rules. Understanding them before coding prevents most bugs."],
    ["Explain it simply", "Two years of teaching taught me that if I can't explain a design in plain words, I don't understand it well enough yet."],
  ],
  interests: ["Microservices", "Cloud", "FinTech", "Blockchain & crypto", "System design", "Mentoring"],
  facts: [
    ["Now", "Associate Software Engineer, Xpert Digital"],
    ["Based in", "Karachi, Pakistan"],
    ["Open to", "Remote roles and freelance work"],
    ["Education", "BS Computer Science, FAST NUCES '25"],
    ["Languages", "English, Urdu"],
  ],
};

// Contact form "purpose" options: [id, emoji, label]
export const PURPOSES = [
  ["job", "💼", "Job opportunity"],
  ["freelance", "🛠️", "Freelance project"],
  ["collab", "🤝", "Collaboration"],
  ["mentor", "🎓", "Mentoring / advice"],
  ["hi", "👋", "Just saying hi"],
];

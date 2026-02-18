export const profile = {
  name: "Xavier Holley",
  role: "Software Developer",
  discipline: "B.S. in Computer Information Systems",
  summary:
    "I build full-stack applications from concept to deployment, focused on reliability, scalability, and real user value.",
};

export const about = [
  "I am a Software Developer with a B.S. in Computer Information Systems and hands-on experience building full-stack web applications from concept to deployment. Through academic and project work, I have designed responsive frontends, developed RESTful backend services, and worked with relational databases to deliver reliable, user-focused solutions. I prioritize clean architecture, maintainable code, and performance, and I enjoy translating business requirements into practical technical systems. My goal is to contribute to high-impact engineering teams where I can continue building scalable products and improving the user experience through thoughtful software design.",
];

export const projects = [
  {
    title: "Campus Finds",
    description:
      "Student-to-student (C2C) marketplace web app for college campuses where users can buy, sell, and trade items such as textbooks, electronics, furniture, and clothing.",
    highlights: [
      "User registration/login with Remember Me support and session persistence",
      "Profile management with editable details and profile image upload",
      "Listing creation, search, and category filtering for Books, Electronics, Clothing, and Furniture",
      "Responsive interface built with Tailwind CSS and custom styles",
      "Collaborative team delivery with defined frontend and backend responsibilities",
    ],
    github: "https://github.com/XHolley/CampusFinds.git",
    stack: ["React", "Next.js", "Tailwind CSS", "Git/GitHub"],
  },
  {
    title: "Job Tracker",
    description:
      "Employer-friendly Java console application that keeps job applications organized with a clean, testable architecture.",
    highlights: [
      "Add and manage jobs with company, role, location, and notes",
      "Sort records by most recent updates",
      "Update pipeline status (Saved, Applied, Interview, Offer, Rejected)",
      "Search across company, role, location, and notes",
      "Generate status summaries to identify pipeline bottlenecks",
      "Run with javac *.java and java JobTrackerApp",
    ],
    github: "https://github.com/XHolley/java-job-tracker.git",
    stack: ["Java", "Object-Oriented Programming", "CLI", "Testing"],
  },
  {
    title: "Personal Finance Analyzer",
    description:
      "Portfolio-grade Python project that imports bank CSV data, auto-categorizes transactions, computes monthly trends, generates SVG charts, and emits budget alerts.",
    highlights: [
      "Flexible CSV ingestion (Amount or Debit/Credit formats)",
      "Rule-based auto-categorization with customizable keyword rules",
      "Monthly analytics: income, expenses, net, savings rate",
      "Budget alerts for total monthly spend and category overspend",
      "Report artifacts: CSV outputs, SVG charts, Markdown summary",
      "Unit tests for parser, categorization, and end-to-end pipeline",
    ],
    github: "https://github.com/XHolley/python-portfolio-projects.git",
    stack: ["Python", "Pandas", "SQL", "Data Visualization"],
  },
  {
    title: "NFL Injury Analytics",
    description:
      "Python-based analytics and machine learning project that evaluates NFL injury trends and risk factors using integrated injury, play-by-play, and schedule datasets.",
    highlights: [
      "Automated data acquisition and integration using nfl_data_py",
      "Feature engineering across play context, weather, surface, role, and injury attributes",
      "Exploratory analysis and trend visualization with matplotlib and seaborn",
      "Predictive modeling workflow with scikit-learn and feature selection",
      "Documented, reproducible pipeline through Jupyter notebooks and saved artifacts",
    ],
    github: "https://github.com/XHolley/NFL-Injury-analytics.git",
    stack: ["Python", "nfl_data_py", "scikit-learn", "Pandas", "Jupyter"],
  },
];

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "SQL",
  "PostgreSQL",
  "REST APIs",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Git/GitHub",
  "Responsive Web Design",
  "Database Design",
  "System Analysis",
  "Debugging & Testing",
  "Agile/Scrum Collaboration",
];

export const education = {
  school: "Lander University",
  degree: "Bachelor of Science in Computer Information Systems",
  minor: "Business Administration",
  graduation: "May 2025",
  gpa: "2.98",
  honors: [
    "NAACP President, Lander University (2022)",
    "Computer Information Systems Symposium Award (May 2025)",
    "The National Society of Leadership and Success (Fall 2022)",
    "President's List (2021)",
  ],
  coursework: [
    {
      code: "CIS 230",
      title: "Computer Programming Principles I",
      focus: "Foundational programming concepts",
      details:
        "Studied fundamental programming principles including variables, control structures, loops, methods, and object-oriented design. Developed structured programs emphasizing problem-solving, debugging techniques, and logical thinking. Gained hands-on experience writing and testing applications using modern programming languages.",
    },
    {
      code: "CIS 231",
      title: "Computer Programming Principles II",
      focus: "Advanced programming and data structures",
      details:
        "Built upon foundational programming concepts with deeper exploration of object-oriented programming, recursion, file handling, and data structures such as arrays and lists. Designed multi-class applications and implemented modular, maintainable code following software development best practices.",
    },
    {
      code: "CIS 240",
      title: "Introduction to Data Communications",
      focus: "Networking fundamentals",
      details:
        "Explored the principles of computer networking, including network topologies, protocols, IP addressing, routing, and data transmission. Studied the OSI and TCP/IP models and analyzed how data flows across modern networks. Gained practical understanding of network security and infrastructure design.",
    },
    {
      code: "CIS 250",
      title: "Introduction to E-Commerce",
      focus: "Digital business systems",
      details:
        "Examined the technological and business foundations of e-commerce systems. Studied online payment systems, web-based business models, cybersecurity risks, and digital marketing strategies. Evaluated how information systems support online transactions and scalable web applications.",
    },
    {
      code: "CIS 320",
      title: "Information Systems and Practice",
      focus: "Systems analysis and business integration",
      details:
        "Analyzed how information systems support organizational strategy and operations. Studied the systems development life cycle (SDLC), requirements gathering, process modeling, and business process improvement. Applied analytical skills to evaluate real-world system implementations.",
    },
    {
      code: "CIS 330",
      title: "Software Development: Fundamentals and Techniques",
      focus: "Applied software engineering",
      details:
        "Designed and developed software applications using structured development methodologies. Emphasized version control, testing strategies, documentation, and collaborative development practices. Applied industry-standard techniques to build scalable, maintainable software solutions.",
    },
    {
      code: "CIS 360",
      title: "Database Design",
      focus: "Database modeling and SQL",
      details:
        "Designed relational databases using entity-relationship (ER) modeling and normalization techniques (UNF to 3NF). Implemented databases using SQL for data definition (DDL), manipulation (DML), and advanced queries. Developed practical skills in schema design, data integrity, and optimization.",
    },
    {
      code: "CIS 498",
      title: "Design and Implementation in Emerging Environments",
      focus: "Capstone development project",
      details:
        "Completed a senior-level capstone project involving full-cycle software development. Designed, implemented, and deployed a working application using modern frameworks and technologies. Applied project management principles, team collaboration, and real-world problem-solving to deliver a production-ready system.",
    },
    {
      code: "CIS 499",
      title: "Project Implementation and Management",
      focus: "Capstone project leadership and deployment",
      details:
        "Led or contributed to the implementation phase of a large-scale project. Managed timelines, coordinated team tasks, documented technical processes, and delivered a finalized solution meeting stakeholder requirements. Strengthened skills in leadership, technical communication, and project execution.",
    },
  ],
};

export const additionalExperience = [
  {
    title: "Warehouse/Delivery Driver (Logistics)",
    company: "Optimum Staffing",
    location: "Aiken, SC",
    dates: "May 2025 - November 2025",
    highlights: [
      "Managed time-sensitive warehouse and delivery workflows while maintaining accuracy and reliability.",
      "Supported day-to-day logistics operations and adapted quickly to changing route and inventory needs.",
    ],
  },
  {
    title: "Online Grocery Pickup Associate",
    company: "Walmart",
    location: "Greenwood, SC",
    dates: "September 2024 - May 2025",
    highlights: [
      "Handled high-volume order fulfillment with strong attention to speed, accuracy, and customer satisfaction.",
      "Collaborated across teams to resolve order issues and keep operations moving efficiently.",
    ],
  },
  {
    title: "Warehouse/Delivery Driver",
    company: "Weinberger's Furniture & Mattress Showcase",
    location: "Augusta, GA",
    dates: "May 2024 - August 2024",
    highlights: [
      "Coordinated product handling and deliveries with care for quality and on-time service.",
      "Worked directly with customers during delivery to ensure clear communication and professional support.",
    ],
  },
  {
    title: "Customer Sales Representative",
    company: "AutoZone",
    location: "Greenwood, SC",
    dates: "January 2022 - September 2024",
    highlights: [
      "Assisted customers with product selection and problem-solving in a fast-paced retail environment.",
      "Built communication, teamwork, and ownership skills by balancing service quality with daily operational tasks.",
    ],
  },
];

export const contact = {
  email: "xHolley200@gmail.com",
  github: "https://github.com/XHolley",
  linkedin: "https://www.linkedin.com/in/xavier-holley-52199a212/",
};

import {
  karto,
  natgashub,
  labmate,
  homescape,
  bytecraft,
  mimihotels,
  greencross,
  prachini,
  mridul,
  mridulNoir,
  varun,
  varunNoir,
  developer3d,
  karto3d,
  malariadetectionsystem,
  malariadetectionsystem1,
  malariadetectionsystem2,
  ponggame,
  portfolio,
  about,
  achievements as achievementsPreview,
  testimonials as testimonialsPreview,
  project as projectPreview,
  skills as skillsPreview,
  contact as contactPreview,
  backend,
  creator,
  mobile,
  web,
  github,
  coursera,
  hr,
  cp,
  fcc,
  ideas,
  concepts,
  designs,
  code,
} from "../assets";

export const personalInfo = {
  name: "Varun Kapoor",
  fullName: "Varun Kapoor",
  shortName: "Varun",
  role: "Full Stack .NET Developer",
  subRole: "Azure Cloud Services • Microservices Architect • ASP.NET Core • SQL Server",
  bio: "Results-driven Full Stack .NET Developer with 4+ years of experience building scalable enterprise applications using ASP.NET Core, C#, MVC, Microservices, and Microsoft Azure. Experienced in designing RESTful APIs, event-driven systems, CI/CD pipelines, and high-performance SQL Server solutions for cloud-native applications. Strong expertise in Azure Functions, Service Bus, authentication systems, and distributed architecture.",
  location: "Mohali, Punjab, India",
  email: "varun.kapoor.222244@gmail.com",
  phone: "+91-9872566208",
  whatsapp: "+919872566208",
  github: "https://github.com/varun-debuggg",
  linkedin: "https://www.linkedin.com/in/varun-debuggg",
  portfolio: "https://varun-kapoor-portfolio.vercel.app",
  kartoUrl: "https://karto.online",
  kartoPlayStore: "https://play.google.com/store/apps",
  resumeLink: "https://drive.google.com/file/d/1JXxclNaQDOGD9BauEy1jS9XDYk5QsaMa/view?usp=sharing",
  photo: varun,
  photoNoir: varunNoir,
  photo3d: developer3d,
  firstName: "VARUN",
  lastName: "KAPOOR",
};

export const navLinks = [
  { id: "hero", title: "Home" },
  { id: "about", title: "About" },
  { id: "karto-spotlight", title: "Karto (Major)" },
  { id: "projects", title: "Projects" },
  { id: "experience", title: "Experience" },
  { id: "skills", title: "Skills" },
  { id: "education", title: "Education" },
  { id: "contact", title: "Contact" },
];

export const services = [
  {
    title: "Full Stack .NET & C#",
    subtitle: "ASP.NET Core • .NET 6/7/8 • Web API • MVC",
    description: "Architecting cloud-native enterprise platforms, high-throughput RESTful Web APIs, and clean MVC layered architectures with LINQ, Entity Framework, and Dapper.",
    icon: backend,
  },
  {
    title: "Azure Cloud & Serverless",
    subtitle: "Azure Functions • Service Bus • App Service • Key Vault",
    description: "Designing event-driven asynchronous pipelines with Azure Service Bus, serverless compute via Azure Functions, Key Vault security, and Azure DevOps CI/CD pipelines.",
    icon: web,
  },
  {
    title: "Microservices & Distributed Systems",
    subtitle: "Event-Driven • Pub/Sub • Clean Architecture • SOLID",
    description: "Decoupling complex domain logic across 100+ microservices, leveraging CQRS, repository patterns, JWT/OAuth2 RBAC, and resilient message queues.",
    icon: mobile,
  },
  {
    title: "High-Performance Databases",
    subtitle: "SQL Server • Cosmos DB • Azure SQL • Query Tuning",
    description: "Tuning complex relational schemas, stored procedures, indexing, and partitioning to reduce database query latency by up to 40 percent.",
    icon: creator,
  },
];

export const experiences = [
  {
    title: "Full Stack .NET Developer",
    company_name: "Midtown Software",
    date: "March 2023 – Present",
    iconBg: "#0f172a",
    badge: "Current Role",
    location: "Mohali, India",
    points: [
      "Architected and delivered cloud-native solutions across 3 enterprise client engagements using .NET Core, ASP.NET MVC, Azure App Service, and Microservices, improving system reliability and deployment velocity.",
      "Engineered and tuned SQL Server schemas, indexing strategies, and query performance for high-traffic applications, reducing average query latency by up to 40 percent.",
      "Built and maintained 10+ RESTful Web API endpoints integrated with Azure Functions and Azure Service Bus for event-driven, asynchronous processing pipelines.",
      "Drove Agile/Scrum delivery across 2-week sprint cycles, including code reviews and cross-functional collaboration with QA and DevOps teams to ensure quality releases."
    ],
    tech: ["C#", ".NET Core/.NET 8", "ASP.NET Web API", "Microservices", "SQL Server", "Azure App Service", "Azure Functions", "Azure Storage", "Azure AI Speech SDK", "MVC"]
  },
  {
    title: "Full Stack .NET Developer",
    company_name: "CS INFOTECH",
    date: "July 2022 – Feb 2023",
    iconBg: "#111827",
    badge: "Full-Time",
    location: "Mohali, India",
    points: [
      "Developed and maintained 5+ full-stack web applications using ASP.NET Core MVC, REST APIs, delivering feature releases across consistent 2-week Agile sprint cycles.",
      "Built secure RESTful API endpoints with JWT/OAuth2 token-based authentication, enforcing role-based access control (RBAC) across 15+ services.",
      "Partnered with frontend teams on 3 Angular-based SPAs, ensuring smooth API integration, responsive UI, and optimized data loading patterns."
    ],
    tech: ["C#", ".NET Core", "ASP.NET Web API", "Microservices", "SQL Server", "MVC", "JWT", "REST APIs", "Angular"]
  }
];

export const education = [
  {
    degree: "Master of Science in Information Technology (M.Sc IT)",
    institution: "Guru Nanak Dev University",
    location: "Punjab, India",
    period: "2022 – 2024",
    grade: "65.6 %",
    highlights: ["Distributed Systems", "Cloud Computing & Microsoft Azure", "Advanced Database Management", "Software Architecture & Design Patterns"]
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Guru Nanak Dev University",
    location: "Punjab, India",
    period: "2019 – 2022",
    grade: "79.4 % (First Division with Distinction)",
    highlights: ["Data Structures & Algorithms", "Relational Database Design (SQL Server)", "Object-Oriented Programming (C# / .NET)", "Web Technologies & Systems Analysis"]
  }
];

export const achievements = [
  {
    title: ["Microsoft Certified: Azure Developer Associate (AZ-204)"],
    company_name: "Microsoft",
    icon: coursera,
    iconBg: "#0078d4",
    date: "In Progress",
    points: [
      "Designing, building, testing, and maintaining cloud applications and services on Microsoft Azure",
      "Azure Functions serverless compute, Azure Service Bus messaging, and Azure Cosmos DB storage"
    ],
    credential: ["https://learn.microsoft.com/en-us/credentials/certifications/azure-developer/"],
  },
  {
    title: ["Microsoft Azure Cosmos DB Developer Specialty"],
    company_name: "Microsoft",
    icon: cp,
    iconBg: "#008ad7",
    date: "Certified",
    points: [
      "Designing NoSQL database solutions and distributed data modeling",
      "Optimizing partition keys, indexing policies, and low-latency global replication"
    ],
    credential: ["https://learn.microsoft.com/en-us/credentials/certifications/azure-cosmos-db-developer-specialty/"],
  },
  {
    title: ["SQL (Advanced) & Problem Solving"],
    company_name: "HackerRank",
    icon: hr,
    iconBg: "#E6DEDD",
    date: "Certified",
    points: [
      "Advanced SQL Query Optimization, Stored Procedures, and Index Tuning",
      "Complex Joins, Window Functions, and High-Throughput Aggregations"
    ],
    credential: [
      "https://www.hackerrank.com/certificates/633d92ea00fe",
    ],
  },
  {
    title: ["Clean Architecture & Microservices in .NET"],
    company_name: "Enterprise Architecture",
    icon: fcc,
    iconBg: "#383E56",
    date: "Professional",
    points: [
      "Event-Driven Architecture, CQRS, and Repository Design Patterns",
      "SOLID Principles, CI/CD Pipeline Automation, and Docker Containerization"
    ],
    credential: [
      "https://github.com/themridul03",
    ],
  },
];

export const projects = [
  {
    name: "Karto – On-Demand Delivery Platform",
    isMajor: true,
    category: "major",
    subCategory: "Mobile & Hyperlocal Full-Stack",
    tagline: "Hyperlocal multi-role on-demand delivery ecosystem live on Google Play",
    description:
      "Engineered a production-ready, multi-role delivery platform supporting customer, vendor, rider, and admin workflows. Implemented secure authentication, real-time GPS order tracking, Razorpay payment processing, Firebase notifications, media uploads, and Google Play Store deployment.",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Express.js", color: "pink-text-gradient" },
      { name: "PostgreSQL", color: "violet-text-gradient" },
      { name: "Prisma ORM", color: "orange-text-gradient" },
      { name: "Socket.io", color: "ruby-text-gradient" },
      { name: "Firebase", color: "orange-text-gradient" },
      { name: "Razorpay", color: "blue-text-gradient" },
      { name: "Google Play", color: "green-text-gradient" },
    ],
    image: karto3d,
    images: [karto3d, karto],
    source_code_link: "https://github.com/themridul03/Portfolio",
    live_demo_link: "https://karto.online",
    play_store_link: "https://play.google.com/store/apps",
    metrics: {
      stars: 248,
      forks: 54,
      views: "14.2K",
      users: "Active on Play Store",
    },
    features: [
      "Engineered complete multi-role architecture: Customer App, Vendor Dashboard, Rider Delivery App, and Admin Control Tower.",
      "Real-time GPS order tracking and driver dispatch powered by bidirectional Socket.io WebSockets with <150ms latency.",
      "Integrated secure end-to-end payment gateway via Razorpay with instant webhook reconciliation and refund handling.",
      "Firebase Cloud Messaging (FCM) integration for transactional push notifications, order status alerts, and promotional broadcasts.",
      "PostgreSQL database with Prisma ORM featuring optimized indexing, connection pooling, and sub-10ms query execution.",
      "Deployed and verified on Google Play Console, adhering to strict Android guidelines and security practices."
    ],
  },
  {
    name: "NatGasHub – Pipeline Management Platform",
    isMajor: true,
    category: "enterprise",
    subCategory: "Enterprise SaaS • Cloud-Native .NET",
    tagline: "Natural gas pipeline transportation, contracts, scheduling & tariff management",
    description:
      "Enhanced an enterprise SaaS platform for pipeline transportation, contracts, scheduling, trading, invoicing, reporting, and utility-tariff management. Built with C#, .NET Core, ASP.NET Web API, Microservices, SQL Server, Entity Framework, Identity Framework, Azure Services, and .NET MVC.",
    tags: [
      { name: "C#", color: "violet-text-gradient" },
      { name: ".NET Core", color: "ruby-text-gradient" },
      { name: "ASP.NET Web API", color: "blue-text-gradient" },
      { name: "Microservices", color: "orange-text-gradient" },
      { name: "SQL Server", color: "blue-text-gradient" },
      { name: "Entity Framework", color: "pink-text-gradient" },
      { name: "Azure Services", color: "green-text-gradient" },
      { name: ".NET MVC", color: "ruby-text-gradient" },
    ],
    image: natgashub,
    images: [natgashub],
    source_code_link: "https://github.com/themridul03",
    live_demo_link: "https://github.com/themridul03",
    metrics: {
      stars: 194,
      forks: 38,
      views: "9.8K",
      efficiency: "40% Latency Cut",
    },
    features: [
      "Tuned SQL queries, indexing strategies, and stored procedures, reducing API response time and database latency by 40 percent.",
      "Designed a real-time, event-driven solution that queries millions of SQL records to deliver customized user watchlists.",
      "Applied clean MVC architecture to orchestrate data flow between MVC UI, SQL Server, and microservice application layers.",
      "Engineered automated tariff schedules, multi-role nomination workflows, and interstate transmission telemetry."
    ],
  },
  {
    name: "Enercross – Distributed Energy Architecture",
    isMajor: true,
    category: "enterprise",
    subCategory: "Enterprise Microservices • Azure Cloud",
    tagline: "Event-driven distributed energy management running 100+ microservices on Azure",
    description:
      "Integrated Azure Service Bus to enable seamless, reliable messaging between distributed services. Developed, deployed, and managed over 100 microservices for the solution, ensuring seamless interaction and complex business logic execution.",
    tags: [
      { name: "C#", color: "violet-text-gradient" },
      { name: ".NET Core", color: "ruby-text-gradient" },
      { name: "ASP.NET Web API", color: "blue-text-gradient" },
      { name: "Microservices", color: "orange-text-gradient" },
      { name: "Azure Service Bus", color: "green-text-gradient" },
      { name: "CosmosDB", color: "pink-text-gradient" },
      { name: "MVC", color: "ruby-text-gradient" },
    ],
    image: natgashub,
    images: [natgashub],
    source_code_link: "https://github.com/themridul03",
    live_demo_link: "https://github.com/themridul03",
    metrics: {
      stars: 188,
      forks: 35,
      views: "10.4K",
      scale: "100+ Microservices",
    },
    features: [
      "Integrated Azure Service Bus to enable seamless, reliable messaging between distributed services.",
      "Developed, deployed, and managed over 100 microservices for the solution, ensuring seamless interaction and complex business logic execution.",
      "Built RESTful APIs and microservices to decouple frontend-backend concerns, enabling independent scalability and future-proof architecture.",
      "Leveraged Azure Cosmos DB for low-latency multi-region data storage, query partitioning, and high availability."
    ],
  },
  {
    name: "Labmate 8001 ERP & DICOM Webviewer",
    isMajor: true,
    category: "enterprise",
    subCategory: "Healthcare ERP • Clinical Imaging",
    tagline: "Laboratory automation, specimen tracking & zero-footprint web DICOM viewer",
    description:
      "Developed laboratory ERP workflows and healthcare imaging features covering inventory, clients, automation, and real-time data tracking. Utilized C#, .NET Core, Node.js, Vue.js, JavaScript, jQuery, AJAX, and Bootstrap.",
    tags: [
      { name: "C#", color: "violet-text-gradient" },
      { name: ".NET Core", color: "ruby-text-gradient" },
      { name: "Vue.js", color: "green-text-gradient" },
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "DICOM 3.0", color: "pink-text-gradient" },
      { name: "SQL Server", color: "orange-text-gradient" },
    ],
    image: labmate,
    images: [labmate],
    source_code_link: "https://github.com/themridul03",
    live_demo_link: "https://github.com/themridul03",
    metrics: {
      stars: 156,
      forks: 31,
      views: "6.4K",
      precision: "DICOM 3.0 Ready",
    },
    features: [
      "Zero-footprint web DICOM viewer for interactive viewing of radiography, CT, and MRI medical scans in browser.",
      "Diagnostic radiology toolset: Window Width/Window Level (WW/WL), caliper measurement, ROI calculation, and LUT inversion.",
      "Automated clinical instrument interfacing (Mindray, Sysmex hematology & biochemistry analyzers) via bidirectional serial/TCP-IP.",
      "End-to-end specimen workflow tracking from sample barcoding and accessioning to automated doctor PDF report dispatch."
    ],
  },
  {
    name: "Medivue AI – Malaria Cell Detection",
    isMajor: false,
    category: "ai",
    subCategory: "Deep Learning • Healthcare AI",
    tagline: "AI-powered malaria detection from blood smear images using computer vision",
    description:
      "AI-powered malaria detection from blood smear images using deep learning and computer vision. Built with React, Supabase, FastAPI, and Keras for hospital workflows with patient management, PDF report generation, and real-time analytics.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "FastAPI", color: "green-text-gradient" },
      { name: "Keras / CNN", color: "ruby-text-gradient" },
      { name: "Supabase", color: "pink-text-gradient" },
      { name: "Python", color: "orange-text-gradient" },
    ],
    image: malariadetectionsystem,
    images: [
      malariadetectionsystem,
      malariadetectionsystem1,
      malariadetectionsystem2,
    ],
    source_code_link: "https://github.com/themridul03/MedivueAI",
    live_demo_link: "https://medivue-ai.vercel.app/",
    metrics: {
      stars: 172,
      forks: 41,
      views: "8.1K",
      accuracy: "97.4%",
    },
    features: [
      "Custom-trained Keras convolutional neural network classifying parasitized vs uninfected thin blood smear cells.",
      "High-throughput asynchronous FastAPI backend serving inference predictions in under 200 milliseconds.",
      "Automated clinical PDF report generation formatted with cell confidence score and pathologist verification signature.",
      "Real-time hospital analytics dashboard powered by Supabase with patient history tracking and infection rate statistics."
    ],
  },
  {
    name: "HomeScape – AI Real Estate Business",
    isMajor: false,
    category: "ai",
    subCategory: "Next.js • TypeScript • AI Valuation",
    tagline: "A real estate business platform powered by artificial intelligence",
    description:
      "A next-generation real estate business platform powered by AI property valuation, smart match algorithms, dynamic spatial filtering, and 3D virtual tour discovery. Built with TypeScript, React, and modern Tailwind CSS.",
    tags: [
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "React.js", color: "green-text-gradient" },
      { name: "Next.js", color: "violet-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
      { name: "AI Valuation", color: "orange-text-gradient" },
    ],
    image: homescape,
    images: [homescape],
    source_code_link: "https://github.com/themridul03/HomeScape",
    live_demo_link: "https://home-scape-five.vercel.app/",
    metrics: {
      stars: 138,
      forks: 27,
      views: "6.9K",
      matchRate: "98% AI Match",
    },
    features: [
      "AI property valuation engine estimating fair market price, capital appreciation projections, and rental yield.",
      "Interactive 3D virtual tour integration allowing prospective buyers to explore luxury estates remotely.",
      "Smart recommendation algorithm matching users to homes based on commute, lifestyle, budget, and school ratings.",
      "Ultra-responsive responsive UI with server-side rendering for optimal speed and search engine visibility."
    ],
  },
  {
    name: "Paddle-Pop – Real-Time Multiplayer Pong",
    isMajor: false,
    category: "web",
    subCategory: "WebSockets • Real-Time Multiplayer",
    tagline: "Fast, smooth, competitive real-time multiplayer Pong with AI duel",
    description:
      "A modern real-time multiplayer Pong game featuring smooth gameplay, responsive controls, live scoring, and exciting online paddle battles. Features three modes: Online Duel with friends, local duel on the same screen, and intelligent AI opponent.",
    tags: [
      { name: "Socket.io", color: "blue-text-gradient" },
      { name: "Express.js", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "HTML5 Canvas", color: "orange-text-gradient" },
    ],
    image: ponggame,
    images: [ponggame],
    source_code_link: "https://github.com/themridul03/Paddle-Pop",
    live_demo_link: "https://paddle-pop-1.onrender.com/",
    metrics: {
      stars: 118,
      forks: 23,
      views: "4.8K",
      latency: "<20ms",
    },
    features: [
      "Ultra-low latency multiplayer synchronization over WebSockets with server reconciliation and client interpolation.",
      "Three engaging game modes: Matchmaking Online, Same-Screen Dual Keyboard Duel, and Adaptive AI Bot.",
      "Smooth physics calculations for ball angle reflection, paddle velocity momentum, and spin trajectory.",
      "Score tracking, sound effect cues, particle bursts, and winner celebration screen."
    ],
  },
  {
    name: "ByteCraft – Online Code Compiler",
    isMajor: false,
    category: "web",
    subCategory: "Developer Tools • Live Sandbox",
    tagline: "Online HTML, CSS, JavaScript compiler and interactive playground",
    description:
      "An online HTML, CSS, and JavaScript compiler and live playground. Allows developers to write code, test front-end components, inspect console output, and view immediate hot-reloaded results in an isolated sandbox.",
    tags: [
      { name: "JavaScript", color: "ruby-text-gradient" },
      { name: "HTML5", color: "orange-text-gradient" },
      { name: "CSS3", color: "blue-text-gradient" },
      { name: "Live Sandbox", color: "green-text-gradient" },
      { name: "React", color: "violet-text-gradient" },
    ],
    image: bytecraft,
    images: [bytecraft],
    source_code_link: "https://github.com/themridul03/ByteCraft",
    live_demo_link: "https://byte-craft-snowy.vercel.app/",
    metrics: {
      stars: 104,
      forks: 19,
      views: "4.2K",
      fps: "60 FPS Sandbox",
    },
    features: [
      "Instant live code evaluation with debounced hot-reloading for HTML5, CSS3, and JavaScript.",
      "Secure sandboxed iframe runtime environment protecting parent window against infinite loops or DOM contamination.",
      "Integrated developer virtual console capturing console.log, warnings, syntax errors, and object dumps.",
      "Responsive code editor layout with split view options, full-screen preview toggle, and template presets."
    ],
  },
  {
    name: "MIMI-Hotels & HotelAPi",
    isMajor: false,
    category: "fullstack",
    subCategory: "Hospitality Management • REST API",
    tagline: "Luxury hotel booking engine and high-performance RESTful API backend",
    description:
      "A complete hotel booking and reservation system paired with HotelAPi, a high-performance RESTful backend. Handles room inventory, guest reservations, calendar date-range lookups, and luxury suite checkout.",
    tags: [
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "REST APIs", color: "pink-text-gradient" },
      { name: "React", color: "violet-text-gradient" },
      { name: "Tailwind CSS", color: "orange-text-gradient" },
    ],
    image: mimihotels,
    images: [mimihotels],
    source_code_link: "https://github.com/themridul03/MIMI-Hotels",
    live_demo_link: "https://mimi-hotels.vercel.app/",
    metrics: {
      stars: 126,
      forks: 22,
      views: "5.5K",
      api: "HotelAPi Backend",
    },
    features: [
      "Full-featured HotelAPi backend providing endpoints for room categories, pricing, bookings, and customer reviews.",
      "Interactive calendar date-picker with real-time room availability validation preventing duplicate reservations.",
      "Luxury boutique UI highlighting room amenities, high-res galleries, guest reviews, and breakfast add-ons.",
      "Automated booking confirmation and digital reservation voucher generation."
    ],
  },
  {
    name: "Green Cross Hospital",
    isMajor: false,
    category: "web",
    subCategory: "Healthcare Web • Patient Portal",
    tagline: "Modern hospital management, doctor scheduling & OPD appointment portal",
    description:
      "A healthcare hospital management platform providing doctor directory, specialty departments (Cardiology, Neurology, Pediatrics, Orthopedics), online OPD slot booking, and emergency assistance.",
    tags: [
      { name: "JavaScript", color: "orange-text-gradient" },
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "OPD Booking", color: "ruby-text-gradient" },
    ],
    image: greencross,
    images: [greencross],
    source_code_link: "https://github.com/themridul03/Green-Cross-Hospital",
    live_demo_link: "https://green-cross-hospital.vercel.app/",
    metrics: {
      stars: 94,
      forks: 17,
      views: "3.7K",
      emergency: "24/7 Hotline",
    },
    features: [
      "Doctor specialty directory with credentials, years of experience, and next available appointment slot.",
      "Online OPD appointment booking engine with slot reservation and instant appointment SMS/email notification.",
      "Emergency hotline triage banner with one-tap ambulance dispatch and hospital GPS location navigator.",
      "Accessible, clean healthcare UI built with semantic HTML and responsive Tailwind styling."
    ],
  },
  {
    name: "Prachini Coffee Shop",
    isMajor: false,
    category: "web",
    subCategory: "Artisan Cafe • E-Commerce",
    tagline: "Artisan coffee roastery and modern online cafe ordering web app",
    description:
      "A boutique coffee shop web application offering artisan single-origin roasts, customizable brew profiles, dynamic shopping cart calculations, and animated checkout flow. Built with TypeScript, React, and Tailwind CSS.",
    tags: [
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "React.js", color: "orange-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
      { name: "E-Commerce", color: "green-text-gradient" },
    ],
    image: prachini,
    images: [prachini],
    source_code_link: "https://github.com/themridul03/PrachiniCoffeeShop",
    live_demo_link: "https://prachini-coffee-shop.vercel.app/",
    metrics: {
      stars: 86,
      forks: 15,
      views: "3.1K",
      taste: "Single-Origin",
    },
    features: [
      "Artisan coffee catalog with detailed flavor notes, origin elevation, bean roast level (Light/Medium/Dark).",
      "Dynamic shopping cart with milk customization (Oat, Almond, Whole), espresso shot add-ons, and coupon codes.",
      "Fluid micro-animations and warm coffee aesthetic designed with responsive Tailwind CSS.",
      "Integrated fast checkout simulation with order summary and delivery ETA tracker."
    ],
  },
];

export const testimonials = [
  {
    testimonial:
      "Varun architected our cloud-native ASP.NET Core microservices with incredible speed and rock-solid reliability. His database optimizations alone reduced our query bottlenecks by 40%.",
    name: "Engineering Lead",
    designation: "VP of Engineering",
    company: "Midtown Software",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
  },
  {
    testimonial:
      "Working with Varun on Karto was a game-changer. He single-handedly developed the React Native mobile apps, real-time Socket.io tracking, and got our product successfully live on Google Play.",
    name: "Product Manager",
    designation: "Founder & Product Lead",
    company: "Karto Hyperlocal",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
  },
  {
    testimonial:
      "Varun's deep mastery over .NET, SQL Server, and full-stack integration allowed us to deliver complex laboratory ERP workflows and DICOM imaging ahead of schedule. Truly exceptional developer!",
    name: "Operations Director",
    designation: "Chief Technical Architect",
    company: "Busysoft Systems",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
  },
];

export const words = [
  { text: "Ideas", imgPath: ideas, font: "Arial, sans-serif" },
  {
    text: "Concepts",
    imgPath: concepts,
    font: "'Courier New', Courier, monospace",
  },
  {
    text: "Designs",
    imgPath: designs,
    font: "'Times New Roman', Times, serif",
  },
  { text: "Code", imgPath: code, font: "'Fira Mono', monospace" },
  {
    text: "Ideas",
    imgPath: ideas,
    font: "'Comic Sans MS', cursive, sans-serif",
  },
  { text: "Concepts", imgPath: concepts, font: "'Roboto', sans-serif" },
  { text: "Designs", imgPath: designs, font: "'Georgia', serif" },
  { text: "Code", imgPath: code, font: "'Source Code Pro', monospace" },
];

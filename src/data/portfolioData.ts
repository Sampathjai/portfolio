import { Project, Service, ProcessStep } from '../types';

export const PERSONAL_INFO = {
  name: "Sampath Kumar",
  title: "Freelance Full-Stack Developer",
  tagline: "Custom CRM, ERP & Web Application Developer",
  bio: "Sampath Kumar is a freelance full-stack developer based in Trichy, Tamil Nadu, building custom web applications, CRM systems, ERP software and business management solutions for businesses in Tamil Nadu and beyond.",
  location: "Trichy (Tiruchirappalli), Tamil Nadu, India (Available Worldwide)",
  email: "sampathkumarjofficial@gmail.com",
  phone: "+91 9361091456",
  whatsapp: "https://wa.me/919361091456",
  linkedin: "https://www.linkedin.com/in/sampath-kumar1/",
  github: "https://github.com/Sampathjai",
  instagram: "https://www.instagram.com/itz_sampath__/",
  twitter: "https://x.com/sampath09917883",
  status: "Available for Custom CRM, ERP & Full-Stack Contracts",
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Web & Software Apps", value: "30+" },
    { label: "Client Satisfaction", value: "100%" },
    { label: "Lighthouse Score", value: "98+" }
  ],
  skills: [
    { name: "React.js & Next.js Architecture", level: 96 },
    { name: "Node.js & Express API Development", level: 95 },
    { name: "PostgreSQL, MongoDB & Supabase", level: 94 },
    { name: "Custom Business CRMs & Sales Pipelines", level: 96 },
    { name: "Enterprise ERP & Inventory Software", level: 94 },
    { name: "TypeScript & Prisma ORM", level: 92 },
    { name: "Tailwind CSS & Responsive UI Design", level: 95 }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "shankar-jewellery-erp",
    title: "Shankar Jewellery ERP",
    subtitle: "Custom Jewellery Business Management & ERP System",
    category: "fullstack",
    description: "Full-stack jewellery business management system designed to simplify gold/silver inventory management, retail & wholesale GST billing, customer ledgers, and sales reporting.",
    longDescription: "Shankar Jewellery ERP is a specialized business management platform engineered for jewellery retail and wholesale operations. It addresses manual bookkeeping challenges by providing real-time gold, silver, and diamond itemization with custom purity values (22K, 18K, 916), GST-compliant invoice generation, customer credit ledgers, payment tracking, and daily metal rate adjustments.",
    tags: ["React.js", "Node.js", "PostgreSQL", "Supabase", "Prisma", "Tailwind CSS"],
    image: "./shankar-jewellery-erp.jpg",
    screenshots: [
      { url: "./shankar-jewellery-erp.jpg", caption: "Shankar Jewellery ERP Dashboard & Billing Interface" },
      { url: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop", caption: "Gold & Silver Stock Inventory Management Module" }
    ],
    liveUrl: "https://shankar-jewellery-erp.vercel.app/",
    githubUrl: "https://github.com/Sampathjai/Jewellery-ERP",
    featured: true,
    metrics: "GST Compliant Gold & Silver ERP",
    summary: {
      clientOrProject: "Shankar Jewellery Retail & Wholesale",
      industry: "Jewellery Retail, Wholesale & Billing",
      projectType: "Full-Stack Enterprise ERP",
      role: "Full-Stack Software Developer",
      technology: "React.js, Node.js, PostgreSQL, Supabase",
      status: "Production Deployed"
    },
    challenge: "Jewellery businesses deal with complex inventory tracking involving gold/silver weight in grams/milligrams, fluctuating daily market metal rates, multi-purity itemization (22K, 18K, 916), retail GST invoice calculations, and wholesale customer credit ledgers. Manual bookkeeping was slow, error-prone, and inefficient for daily transactions.",
    solution: "Engineered a centralized jewellery ERP application that unifies gold, silver, and diamond stock management, daily metal rate adjustments, automated GST invoice generation for retail and wholesale orders, customer credit ledgers, and real-time financial reporting.",
    featuresList: [
      { iconName: "Database", title: "Gold & Silver Itemization", description: "Categorize inventory by metal type, custom purity values (22K, 18K, 916, Silver 92.5), weight in grams, and stone charges." },
      { iconName: "Layout", title: "GST Billing & Invoicing", description: "Generate instant retail and wholesale invoices with automated SGST/CGST breakdown, making charges, and discount calculations." },
      { iconName: "Zap", title: "Customer Ledgers & Credit", description: "Track customer transaction histories, pending scheme payments, credit balances, and payment receipts." },
      { iconName: "Sparkles", title: "Daily Rate Adjustments", description: "Update gold and silver per-gram rates in real time, automatically recalculating active catalog prices and invoice quotes." },
      { iconName: "Box", title: "Multi-Category Stock Control", description: "Track stock movements across ornaments, coins, bars, and custom order items with low-inventory alerts." },
      { iconName: "CheckCircle2", title: "Financial Reports", description: "Generate daily sales summaries, monthly revenue analytics, and GST tax export reports." }
    ],
    modules: [
      { step: "01", title: "Authentication & Role Security", description: "Secure staff login with role-based access for billing operators, inventory managers, and store owners." },
      { step: "02", title: "Inventory Itemization", description: "Add and manage ornaments with detailed gross weight, net weight, wastage percentage, and stone value." },
      { step: "03", title: "Retail & Wholesale Billing", description: "Fast point-of-sale checkout for walk-in customers and wholesale partners with print-ready invoices." },
      { step: "04", title: "Customer Ledgers & Payments", description: "Manage customer credit accounts, installment schemes, and receipt histories." },
      { step: "05", title: "Financial Analytics & Export", description: "Monitor daily revenue, gold weight sold vs in stock, and export monthly GST accounting statements." }
    ],
    techStackDetailed: {
      frontend: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "Express API"],
      database: ["PostgreSQL", "Supabase", "Prisma ORM"],
      deployment: ["Vercel", "GitHub Actions"]
    },
    roleDescription: "Designed database schema, developed REST API endpoints, built responsive React frontend components, implemented multi-unit weight and GST billing calculations, and deployed the production system.",
    implementationHighlights: [
      "Built precise multi-decimal floating point math logic for gold weight (grams/milligrams) and metal purity conversions.",
      "Engineered automated GST invoice calculation algorithms handling making charges, wastage, and stone valuations.",
      "Designed relational database tables in PostgreSQL via Prisma ORM to connect inventory items, sales orders, and customer ledger entries."
    ],
    outcome: "The system centralizes core jewellery shop operations into a single digital platform, eliminating manual paper ledger errors and streamlining retail billing and wholesale customer tracking."
  },
  {
    id: "cad-point-crm",
    title: "CAD-POINT",
    subtitle: "Engineering CAD & Drafting CRM Portal",
    category: "fullstack",
    description: "Engineering CAD software resource portal and CRM platform providing architectural layout previews, 2D/3D blueprint assets, technical specification downloads, and lead capture.",
    longDescription: "CAD-POINT is a specialized engineering web platform designed for CAD designers, drafters, and architects. It centralizes 2D/3D blueprint asset downloads, technical specification sheets, drafting tools resources, and customer lead management pipelines.",
    tags: ["React.js", "TypeScript", "Node.js", "Railway", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop",
    screenshots: [
      { url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop", caption: "CAD Blueprint Download Portal & Drafting Specifications Interface" }
    ],
    liveUrl: "https://cad-point-production.up.railway.app",
    githubUrl: "https://github.com/Sampathjai/CAD-POINT.git",
    featured: true,
    metrics: "Used by Engineering Designers",
    summary: {
      clientOrProject: "CAD-POINT Engineering Solutions",
      industry: "Architecture & Engineering CAD",
      projectType: "Custom CRM & Asset Portal",
      role: "Full-Stack Developer",
      technology: "React.js, TypeScript, Node.js, Railway",
      status: "Production Live"
    },
    challenge: "Engineering CAD designers and architects needed a structured web platform to browse 2D/3D architectural blueprint layouts, download technical drafting spec sheets, and submit custom engineering design inquiries.",
    solution: "Developed a responsive web portal and CRM pipeline enabling designers to categorize blueprint assets, preview technical specs, download drafting files, and capture incoming client project inquiries.",
    featuresList: [
      { iconName: "Layout", title: "Blueprint Asset Catalog", description: "Structured categorization of architectural 2D/3D DWG/DXF layout previews and CAD assets." },
      { iconName: "Database", title: "Technical Spec Downloads", description: "Secure resource repository for downloading drafting specifications and engineering CAD templates." },
      { iconName: "Zap", title: "Lead & Inquiry Management", description: "Custom CRM lead capture pipeline for collecting client design requirements and project briefs." },
      { iconName: "Box", title: "Search & Filtering", description: "Filter architectural blueprints by category, drafting software version, and project scope." }
    ],
    modules: [
      { step: "01", title: "Catalog Browsing", description: "Explore architectural drafting assets and structural design blueprints." },
      { step: "02", title: "Spec Sheet Downloads", description: "Access downloadable CAD tool files and technical specification PDFs." },
      { step: "03", title: "Inquiry Capture", description: "Submit custom CAD design requirements directly to the engineering team." }
    ],
    techStackDetailed: {
      frontend: ["React.js", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Express API"],
      database: ["PostgreSQL"],
      deployment: ["Railway"]
    },
    roleDescription: "Architected frontend UI layout, implemented file download management, integrated lead capture forms, and deployed application on Railway server.",
    implementationHighlights: [
      "Engineered structured asset categorization for architectural drawing files.",
      "Implemented responsive UI design tailored for desktop drafting displays and mobile viewports."
    ],
    outcome: "Provides engineering designers and architectural clients with a streamlined portal for accessing blueprint assets and submitting custom design contracts."
  },
  {
    id: "ridetogether",
    title: "RideTogether",
    subtitle: "Commuter Carpooling & Route Sharing Platform",
    category: "fullstack",
    description: "Commuter ride-sharing web application integrated with Leaflet maps, passenger matching algorithms, and real-time route coordination.",
    longDescription: "RideTogether is a community carpooling web application built to connect daily commuters. Features Leaflet map routing, driver-rider matching workflows, cost-sharing calculations, and responsive mobile-first UI.",
    tags: ["React.js", "Leaflet Maps", "JavaScript", "Node.js", "CSS3"],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1000&auto=format&fit=crop",
    screenshots: [
      { url: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1000&auto=format&fit=crop", caption: "RideTogether Route Coordination & Leaflet Map Interface" }
    ],
    liveUrl: "https://project-ridetogether.netlify.app/",
    githubUrl: "https://github.com/Sampathjai",
    featured: true,
    metrics: "Leaflet Interactive Mapping",
    summary: {
      clientOrProject: "RideTogether Commuter Platform",
      industry: "Transportation & Carpooling",
      projectType: "Full-Stack Web Application",
      role: "Full-Stack Web Developer",
      technology: "React.js, Leaflet Maps, JavaScript",
      status: "Production Live"
    },
    challenge: "Daily urban commuters experience high fuel costs and heavy traffic congestion. They required a simple route-sharing web platform to coordinate shared commutes and visualize routes on interactive maps.",
    solution: "Built a responsive carpooling application integrated with Leaflet interactive maps allowing drivers to post departure times, plot trip routes, and connect with passengers along shared commute paths.",
    featuresList: [
      { iconName: "Sparkles", title: "Interactive Route Plotting", description: "Visualize pickup points, drop-off locations, and commute paths using Leaflet maps." },
      { iconName: "Layout", title: "Commute Trip Creation", description: "Drivers can create recurring daily commute trips with seat availability and cost contribution." },
      { iconName: "Zap", title: "Passenger Requests", description: "Passengers can search active commute routes along their destination path and request ride seats." }
    ],
    modules: [
      { step: "01", title: "Route Mapping", description: "Plot starting location, destination, and waypoints on OpenStreetMap via Leaflet." },
      { step: "02", title: "Trip Listings", description: "Browse available rides categorized by departure time and commute radius." },
      { step: "03", title: "Seat Reservation", description: "Connect drivers and passengers to coordinate shared travel costs." }
    ],
    techStackDetailed: {
      frontend: ["React.js", "Leaflet Maps API", "CSS3"],
      backend: ["Node.js", "Express"],
      deployment: ["Netlify"]
    },
    roleDescription: "Implemented Leaflet map integration, built route searching UI components, and managed application state and mobile responsiveness.",
    implementationHighlights: [
      "Integrated Leaflet mapping library for rendering interactive commute routes.",
      "Designed mobile-first UI for commuters using smartphone viewports on the go."
    ],
    outcome: "Enables daily commuters to discover shared ride routes, reduce individual transit expenses, and coordinate shared travel."
  },
  {
    id: "nineteen06",
    title: "Nineteen 06 Bakery",
    subtitle: "Gourmet Bakery E-Commerce & WhatsApp Ordering Portal",
    category: "frontend",
    description: "Artisanal bakery product catalog & direct WhatsApp ordering web application featuring customizable weight options and rich visual branding.",
    longDescription: "Designed and built a high-converting web menu and order funnel for Nineteen 06 bakery. Features product variant pricing (250g, 500g, 750g), direct WhatsApp order generation, and elegant mobile-optimized layouts.",
    tags: ["React.js", "JavaScript", "WhatsApp API", "E-Commerce Menu", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1000&auto=format&fit=crop",
    screenshots: [
      { url: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1000&auto=format&fit=crop", caption: "Nineteen 06 Bakery Product Menu & Direct Order Funnel" }
    ],
    liveUrl: "https://nineteen06.netlify.app/",
    githubUrl: "https://github.com/Sampathjai",
    featured: true,
    metrics: "Direct WhatsApp Order Conversions",
    summary: {
      clientOrProject: "Nineteen 06 Gourmet Bakery",
      industry: "Food & Bakery E-Commerce",
      projectType: "Frontend Web Application",
      role: "Frontend Developer",
      technology: "React.js, JavaScript, WhatsApp API",
      status: "Production Live"
    },
    challenge: "The bakery needed an elegant digital menu where customers could select baked items by weight variants and place instant orders directly without complex checkout forms.",
    solution: "Engineered a fast, mobile-friendly product catalog with weight selector buttons (250g, 500g, 750g) and automated WhatsApp order link generation.",
    featuresList: [
      { iconName: "Layout", title: "Variant Pricing", description: "Dynamic price calculation based on selected cake weight variants." },
      { iconName: "Zap", title: "Direct WhatsApp Checkout", description: "Formulates structured order text and redirects customers directly to WhatsApp chat." }
    ],
    techStackDetailed: {
      frontend: ["React.js", "JavaScript", "Tailwind CSS"],
      deployment: ["Netlify"]
    },
    roleDescription: "Designed product menu UI, implemented variant price calculation state, and integrated WhatsApp API order link generator.",
    outcome: "Streamlined online bakery ordering, enabling customers to select variants and place orders in seconds."
  },
  {
    id: "travelroute-buddy",
    title: "TravelRoute Buddy",
    subtitle: "Trip & Route Planner Web Application",
    category: "frontend",
    description: "Interactive travel itinerary & route optimization web application featuring Mapbox GL maps, real-time location planning, and custom travel schedules.",
    longDescription: "Engineered an intuitive travel route planner allowing users to plot custom trips, visualize interactive map routes with Mapbox GL, customize daily itineraries, and export travel schedules across mobile and desktop devices.",
    tags: ["React.js", "Mapbox GL", "Geolocation", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1000&auto=format&fit=crop",
    screenshots: [
      { url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1000&auto=format&fit=crop", caption: "TravelRoute Buddy Mapbox GL Map & Itinerary Planner" }
    ],
    liveUrl: "https://travelroute-buddy.vercel.app/",
    githubUrl: "https://github.com/Sampathjai",
    featured: true,
    metrics: "Mapbox GL Route Optimization",
    summary: {
      clientOrProject: "TravelRoute Buddy App",
      industry: "Travel & Itinerary Planning",
      projectType: "Frontend Web Application",
      role: "Frontend Developer",
      technology: "React.js, Mapbox GL, TypeScript",
      status: "Production Live"
    },
    challenge: "Travelers required an interactive map interface to organize multi-day travel itineraries and visualize custom driving routes.",
    solution: "Built a Mapbox GL route optimization tool featuring waypoint markers, custom trip schedules, and responsive UI layouts.",
    featuresList: [
      { iconName: "Sparkles", title: "Mapbox GL Integration", description: "3D map visualization with interactive route waypoints." }
    ],
    techStackDetailed: {
      frontend: ["React.js", "Mapbox GL", "TypeScript", "Tailwind CSS"],
      deployment: ["Vercel"]
    },
    roleDescription: "Implemented Mapbox GL map component, created itinerary builder state, and styled responsive dark glass layout.",
    outcome: "Provides travelers with an intuitive tool for planning travel routes and managing daily schedules."
  }
];

export const SERVICES: Service[] = [
  {
    id: "custom-crm",
    iconName: "Layout",
    title: "Custom CRM Development",
    description: "I build custom CRM systems that help businesses manage leads, customers, follow-ups, sales activities, and business workflows in one place.",
    features: [
      "Custom Lead & Customer Pipeline Management",
      "Automated Follow-ups & WhatsApp Notifications",
      "Role-Based Access Control & Sales Tracking",
      "Executive Revenue Analytics Dashboards"
    ],
    badge: "High ROI"
  },
  {
    id: "custom-erp",
    iconName: "Database",
    title: "Custom ERP Development",
    description: "I develop custom ERP and business management systems tailored to specific business workflows, multi-department inventory, and accounting.",
    features: [
      "Multi-Department Resource & Workflow Control",
      "Real-Time Purchase Order & Stock Synchronization",
      "Financial Ledger & GST Accounting Integration",
      "Custom Reporting & Internal Audit Logs"
    ],
    badge: "Enterprise Grade"
  },
  {
    id: "business-management",
    iconName: "Zap",
    title: "Business Management Software",
    description: "Custom software for customer management, inventory, sales, payments, reporting, and operational workflow automation.",
    features: [
      "Operational Routine & Task Automation",
      "Staff Assignment & Time Log Dashboards",
      "Automated Client Invoicing & Payment Tracking",
      "Centralized Operations Analytics"
    ]
  },
  {
    id: "jewellery-software",
    iconName: "Sparkles",
    title: "Jewellery Business Software / ERP",
    description: "Specialized ERP software for jewellery retail and wholesale businesses to itemize gold, silver, and diamond stock with custom purity tracking.",
    features: [
      "Gold, Silver & Diamond Itemization (22K, 18K, 916)",
      "GST-Compliant Retail & Wholesale Invoicing",
      "Customer Ledgers & Payment Scheme Tracking",
      "Real-Time Metal Rate Adjustment & Stock Alerts"
    ],
    badge: "Specialized Niche"
  },
  {
    id: "web-app-development",
    iconName: "Box",
    title: "Web Application Development",
    description: "Scalable, feature-rich web applications built with React.js, Next.js, TypeScript, Node.js, PostgreSQL, and secure API backends.",
    features: [
      "Dynamic Dashboard & Admin Panel Interfaces",
      "Real-Time Data Updates & Webhook Integrations",
      "Secure User Authentication & Session Management",
      "Cross-Platform Desktop & Mobile Responsiveness"
    ]
  },
  {
    id: "fullstack-development",
    iconName: "Database",
    title: "Full-Stack Development",
    description: "End-to-end full-stack software development from relational database architecture (PostgreSQL, MongoDB) to polished web applications.",
    features: [
      "Database Schema Design & Query Optimization",
      "Robust REST & GraphQL API Endpoints",
      "Typesafe React & Node.js Architecture",
      "Cloud Deployment & Server Optimization"
    ]
  },
  {
    id: "business-automation",
    iconName: "Zap",
    title: "Business Automation Solutions",
    description: "Automate repetitive business processes, data entry, notification alerts, and third-party API integrations to save time.",
    features: [
      "Automated Customer Follow-up Triggers",
      "Third-Party API Integration (Payment, SMS, CRM)",
      "Automated Data Export & Inventory Sync Rules",
      "Error-Free Workflow Pipeline Automation"
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Requirement Audit",
    description: "We map out your business workflow, CRM requirements, inventory logic, and software goals.",
    details: ["Workflow Architecture Mapping", "Database & API Schema Design", "Project Timeline & Scope"]
  },
  {
    step: "02",
    title: "UI & System Prototyping",
    description: "I design interactive CRM wireframes, ERP dashboards, and full-stack software prototypes.",
    details: ["Interactive Dashboard Wireframes", "Database & Role Permission Specs", "Proof-of-Concept Prototype"]
  },
  {
    step: "03",
    title: "Full-Stack Development",
    description: "Writing clean, typed modular code with real-time database sync, API endpoints, and responsive UI components.",
    details: ["TypeScript + React.js Engineering", "Node.js & Database Architecture", "Security & Role Access Controls"]
  },
  {
    step: "04",
    title: "Deployment & Training",
    description: "Production deployment with database backups, custom domain configuration, and step-by-step team walkthrough.",
    details: ["Production Build & Server Deployment", "Team Onboarding & Walkthrough", "Post-Launch Maintenance Support"]
  }
];

export const TESTIMONIALS: any[] = [];

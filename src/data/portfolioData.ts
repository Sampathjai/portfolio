import { Project, Service, ProcessStep } from '../types';

export const PERSONAL_INFO = {
  name: "Sampath Kumar",
  title: "Freelance Full-Stack & 3D Interactive Developer",
  tagline: "Custom CRM, ERP & Web Application Developer",
  bio: "Sampath Kumar is a freelance full-stack developer building custom CRM, ERP, business management software, websites, and web applications for businesses in Tamil Nadu, India, and worldwide.",
  location: "Trichy (Tiruchirappalli), Tamil Nadu, India (Available Worldwide)",
  email: "sampathkumarjofficial@gmail.com",
  phone: "+91 9361091456",
  whatsapp: "https://wa.me/919361091456",
  linkedin: "https://www.linkedin.com/in/sampath-kumar1/",
  github: "https://github.com/Sampathjai",
  instagram: "https://www.instagram.com/itz_sampath__/",
  twitter: "https://x.com/sampath09917883",
  status: "Available for Custom CRM, ERP & Freelance Web Projects",
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Web & Software Apps", value: "30+" },
    { label: "Client Satisfaction", value: "100%" },
    { label: "Lighthouse Score", value: "98+" }
  ],
  skills: [
    { name: "Custom Business CRMs & Lead Pipelines", level: 96 },
    { name: "Enterprise ERP & Inventory Software", level: 94 },
    { name: "React, TypeScript & Node.js Architecture", level: 96 },
    { name: "PostgreSQL & Database Systems", level: 92 },
    { name: "3D WebGL (Three.js & React Three Fiber)", level: 90 },
    { name: "Tailwind CSS & Responsive UI Design", level: 95 }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "shankar-jewellery-erp",
    title: "Shankar Jewellery ERP - Business Management System",
    category: "fullstack",
    description: "Full-stack jewellery business management system designed to simplify gold/silver inventory management, retail & wholesale GST billing, customer ledgers, and sales analytics.",
    longDescription: "Shankar Jewellery ERP is a comprehensive full-stack business management platform built specifically for jewellery retail and wholesale operations. It centralizes inventory tracking for Gold, Silver, and Diamond items with custom purity configurations (22K, 18K, 916), streamlines GST invoice generation, manages customer credit ledgers, and provides real-time financial reporting.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    image: "./shankar-jewellery-erp.jpg",
    liveUrl: "https://shankar-jewellery-erp.vercel.app/",
    githubUrl: "https://github.com/Sampathjai/Jewellery-ERP",
    featured: true,
    metrics: "Gold & Silver GST Billing ERP"
  },
  {
    id: "cad-point",
    title: "CAD-POINT - Engineering CAD & Drafting CRM Portal",
    category: "fullstack",
    description: "Engineering CAD software resource portal and CRM platform providing architectural layout previews, 2D/3D blueprint assets, technical specification downloads, and lead capture.",
    longDescription: "CAD-POINT is a specialized web platform for engineering CAD designers and architects. Features structured blueprint asset categorization, downloadable technical files, lead management pipelines, technical spec sheets, and responsive drafting tools UI.",
    tags: ["React", "TypeScript", "Node.js", "Railway", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop",
    liveUrl: "https://cad-point-production.up.railway.app",
    githubUrl: "https://github.com/Sampathjai/CAD-POINT.git",
    featured: true,
    metrics: "Used by Engineering Designers"
  },
  {
    id: "travelroute-buddy",
    title: "TravelRoute Buddy - Trip & Route Planner",
    category: "frontend",
    description: "Interactive travel itinerary & route optimization web application featuring Mapbox GL maps, real-time location planning, and custom travel schedules.",
    longDescription: "Engineered an intuitive travel route planner allowing users to plot custom trips, visualize interactive map routes with Mapbox GL, customize daily itineraries, and export travel schedules across mobile and desktop devices.",
    tags: ["React", "Mapbox GL", "Geolocation", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1000&auto=format&fit=crop",
    liveUrl: "https://travelroute-buddy.vercel.app/",
    githubUrl: "https://github.com/Sampathjai",
    featured: true,
    metrics: "Mapbox GL Route Optimization"
  },
  {
    id: "ride-together",
    title: "RideTogether - Commuter Carpooling & Route Sharing",
    category: "fullstack",
    description: "Commuter ride-sharing web application integrated with Leaflet maps, passenger matching algorithms, and real-time route coordination.",
    longDescription: "A community-focused carpooling platform designed to connect daily commuters. Features Leaflet map routing, driver-rider matching workflows, cost-sharing calculations, and responsive mobile-first UI.",
    tags: ["React", "Leaflet Maps", "JavaScript", "Real-Time Tracking", "CSS3"],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1000&auto=format&fit=crop",
    liveUrl: "https://project-ridetogether.netlify.app/",
    githubUrl: "https://github.com/Sampathjai",
    featured: true,
    metrics: "Leaflet Interactive Mapping"
  },
  {
    id: "nineteen06",
    title: "Nineteen 06 - Gourmet Bakery E-Commerce Store",
    category: "frontend",
    description: "Artisanal bakery product catalog & direct WhatsApp ordering web application featuring customizable weight options and rich visual branding.",
    longDescription: "Designed and built a high-converting web menu and order funnel for Nineteen 06 bakery. Features product variant pricing (250g, 500g, 750g), direct WhatsApp order generation, and elegant mobile-optimized layouts.",
    tags: ["React", "JavaScript", "WhatsApp API", "E-Commerce Menu", "CSS Grid"],
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1000&auto=format&fit=crop",
    liveUrl: "https://nineteen06.netlify.app/",
    githubUrl: "https://github.com/Sampathjai",
    featured: true,
    metrics: "Direct WhatsApp Order Conversions"
  }
];

export const SERVICES: Service[] = [
  {
    id: "custom-crm",
    iconName: "Layout",
    title: "Custom CRM Development",
    description: "Tailor-made CRM platforms engineered around your exact sales pipeline, lead management rules, customer tracking, and automated email/WhatsApp alerts.",
    features: [
      "Custom Lead & Customer Pipeline Management",
      "Automated Email & WhatsApp Triggers",
      "Role-Based Team Access Control & Security",
      "Executive Sales & Revenue Dashboards"
    ],
    badge: "High Conversion"
  },
  {
    id: "custom-erp",
    iconName: "Database",
    title: "Custom ERP Development",
    description: "Full-stack enterprise resource planning (ERP) software that unifies multi-department business operations, inventory, order processing, and accounting.",
    features: [
      "Multi-Department Resource & Workflow Control",
      "Real-Time Purchase Order & Stock Synchronization",
      "Financial Ledger & GST Accounting Integration",
      "Custom Business Reporting & Audit Logs"
    ],
    badge: "Enterprise Grade"
  },
  {
    id: "business-management",
    iconName: "Zap",
    title: "Business Management Software",
    description: "Custom management software designed to automate daily operational routines, staff assignments, task tracking, and client billing.",
    features: [
      "Operational Task & Workflow Automation",
      "Staff Assignment & Time Log Dashboards",
      "Automated Invoice Generation & Payment Tracking",
      "Centralized Business Analytics & Reports"
    ]
  },
  {
    id: "jewellery-software",
    iconName: "Sparkles",
    title: "Jewellery Business Software",
    description: "Specialized ERP and point-of-sale software for jewellery retail and wholesale shops to itemize gold, silver, and diamond stock with custom purity tracking.",
    features: [
      "Gold, Silver & Diamond Itemization & Purity (22K, 18K, 916)",
      "GST-Compliant Retail & Wholesale Invoice Generation",
      "Customer Credit Ledgers & Scheme Payment Tracking",
      "Real-Time Metal Rate Adjustment & Stock Alerts"
    ],
    badge: "Specialized Solution"
  },
  {
    id: "website-development",
    iconName: "Layout",
    title: "Website Development",
    description: "High-performance, SEO-optimized business websites engineered with modern HTML5, Tailwind CSS, React, and interactive UI components.",
    features: [
      "Mobile Responsive & Pixel-Perfect Layouts",
      "Speed Optimized for 95+ Google Lighthouse Scores",
      "On-Page Technical SEO & Schema Markup",
      "Contact Lead Capture & WhatsApp Integration"
    ]
  },
  {
    id: "web-app-development",
    iconName: "Box",
    title: "Web Application Development",
    description: "Scalable, feature-rich web applications built with React, TypeScript, Node.js, and secure REST/GraphQL API backends.",
    features: [
      "Dynamic Dashboard & Admin Panel Interfaces",
      "Real-Time Data Updates & Webhook Integrations",
      "Secure User Authentication & Session Management",
      "Cross-Platform Browser & Mobile Compatibility"
    ]
  },
  {
    id: "fullstack-development",
    iconName: "Database",
    title: "Full-Stack Development",
    description: "End-to-end full-stack software development from relational database architecture (PostgreSQL, MySQL) to polished frontend web applications.",
    features: [
      "Database Schema Design & Query Optimization",
      "Robust REST & GraphQL API Endpoints",
      "Typesafe React & TypeScript Frontend Architecture",
      "Cloud Deployment & Continuous Integration"
    ]
  },
  {
    id: "business-automation",
    iconName: "Zap",
    title: "Business Automation Solutions",
    description: "Automate repetitive business processes, data entry, notification alerts, and third-party API integrations to save time and prevent manual errors.",
    features: [
      "Automated WhatsApp & Email Customer Follow-ups",
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
    details: ["TypeScript + React Engineering", "Node.js & PostgreSQL Backend", "Security & Role Access Controls"]
  },
  {
    step: "04",
    title: "Deployment & Training",
    description: "Production deployment with database backups, custom domain configuration, and step-by-step team walkthrough.",
    details: ["Production Build & Server Deployment", "Team Onboarding & Walkthrough", "Post-Launch Maintenance Support"]
  }
];

export const TESTIMONIALS: any[] = [];


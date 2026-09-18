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
    title: "Shankar Jewellery ERP - Business Management System",
    category: "fullstack",
    description: "Full-stack jewellery business management system designed to simplify gold/silver inventory management, retail & wholesale GST billing, customer ledgers, and sales reporting.",
    longDescription: "Shankar Jewellery ERP is a specialized business management platform engineered for jewellery retail and wholesale businesses. It addresses manual bookkeeping challenges by providing real-time gold, silver, and diamond itemization with custom purity values (22K, 18K, 916), GST-compliant invoice generation, customer credit ledgers, payment tracking, and daily metal rate adjustments.",
    tags: ["React.js", "Node.js", "PostgreSQL", "Supabase", "Prisma", "Tailwind CSS"],
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
    longDescription: "CAD-POINT is an engineering web portal designed for CAD designers and architects. It centralizes 2D/3D blueprint asset downloads, technical specification sheets, drafting tools resources, and customer lead management pipelines.",
    tags: ["React.js", "TypeScript", "Node.js", "Railway", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop",
    liveUrl: "https://cad-point-production.up.railway.app",
    githubUrl: "https://github.com/Sampathjai/CAD-POINT.git",
    featured: true,
    metrics: "Used by Engineering Designers"
  },
  {
    id: "ride-together",
    title: "RideTogether - Commuter Carpooling & Route Sharing",
    category: "fullstack",
    description: "Commuter ride-sharing web application integrated with Leaflet maps, passenger matching algorithms, and real-time route coordination.",
    longDescription: "RideTogether is a community carpooling web application built to connect daily commuters. Features Leaflet map routing, driver-rider matching workflows, cost-sharing calculations, and responsive mobile-first UI.",
    tags: ["React.js", "Leaflet Maps", "JavaScript", "Node.js", "CSS3"],
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
    tags: ["React.js", "JavaScript", "WhatsApp API", "E-Commerce Menu", "Tailwind CSS"],
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

import { Project, Service, Testimonial, ProcessStep } from '../types';

export const PERSONAL_INFO = {
  name: "Sampath Kumar J",
  title: "Senior Web & 3D Interactive Developer",
  tagline: "Building Immersive 3D WebGL Experiences, Custom Business CRMs & Real-Time Inventory Management Systems.",
  bio: "I'm a senior Web & Frontend Developer who helps businesses grow by building high-converting 3D web experiences alongside powerful custom software solutions—including tailored CRMs, real-time inventory management platforms, and interactive React web applications.",
  location: "India (Available Worldwide for Remote Contracts)",
  email: "sampathkumarsampath2002@gmail.com",
  phone: "+91 9361091456",
  whatsapp: "https://wa.me/919361091456",
  linkedin: "https://www.linkedin.com/in/sampath-kumar1/",
  github: "https://github.com/Sampathjai",
  instagram: "https://www.instagram.com/itz_sampath__/",
  twitter: "https://x.com/sampath09917883",
  status: "Available for Q3/Q4 Freelance Projects & Custom Web Contracts",
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Web Applications", value: "30+" },
    { label: "Client Satisfaction", value: "100%" },
    { label: "Lighthouse Performance", value: "98+" }
  ],
  skills: [
    { name: "Three.js / React Three Fiber / WebGL", level: 92 },
    { name: "React, TypeScript & Next.js Architecture", level: 96 },
    { name: "Custom Business CRMs & Lead Pipelines", level: 94 },
    { name: "Real-Time Inventory & Warehouse Systems", level: 92 },
    { name: "Map Integration (Mapbox GL & Leaflet)", level: 92 },
    { name: "Tailwind CSS, Framer Motion & Scroll FX", level: 95 }
  ]
};

export const PROJECTS: Project[] = [
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
    id: "cad-point",
    title: "CAD-POINT - Engineering CAD & Drafting Portal",
    category: "fullstack",
    description: "Engineering CAD software resource and design drafting portal providing architectural layout previews, 2D/3D blueprint assets, and CAD tooling resources.",
    longDescription: "Developed a specialized engineering web platform for CAD designers and architects. Features structured blueprint categorization, file resource downloads, technical spec sheets, and responsive drafting tools UI.",
    tags: ["React", "TypeScript", "CAD Tools", "Architectural UI", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop",
    liveUrl: "https://github.com/Sampathjai/CAD-POINT.git",
    githubUrl: "https://github.com/Sampathjai/CAD-POINT.git",
    featured: true,
    metrics: "Used by Engineering Designers"
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
  },
  {
    id: "omni-crm",
    title: "OmniCRM - Custom Business CRM Platform",
    category: "fullstack",
    description: "All-in-one business CRM featuring pipeline management, lead scoring, automated email workflows, and client portals.",
    longDescription: "Engineered a custom enterprise CRM system allowing sales teams to track deals across stages, automate customer follow-ups, schedule meetings, and generate real-time revenue analytics dashboards with custom role-based permissions.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    liveUrl: "https://sampathjai.github.io/Frontend/",
    githubUrl: "https://github.com/Sampathjai",
    featured: true,
    metrics: "3.5x Faster Deal Closing Rate"
  },
  {
    id: "stock-sync-inventory",
    title: "StockSync - Smart Inventory & Warehouse System",
    category: "fullstack",
    description: "Real-time multi-warehouse inventory tracker with barcode scanning support, automated reorder thresholds, and supplier logs.",
    longDescription: "A comprehensive inventory management system built to eliminate stockouts and overstocking. Features real-time stock sync across multiple fulfillment locations, purchase order creation, batch/lot tracking, and automated stock alert webhooks.",
    tags: ["React", "TypeScript", "Node.js", "WebSockets", "Chart.js"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
    liveUrl: "https://sampathjai.github.io/Frontend/",
    githubUrl: "https://github.com/Sampathjai",
    featured: false,
    metrics: "Zero Stockout Overhead Reported"
  },
  {
    id: "3d-configurator",
    title: "3D Product Configurator & E-Commerce CRM",
    category: "3d",
    description: "Real-time WebGL 3D product visualizer seamlessly connected to live inventory stock levels and CRM lead capture.",
    longDescription: "Combines 60 FPS 3D WebGL rendering with e-commerce inventory sync. When users customize products, real-time stock availability is verified instantly and lead data is submitted directly to the client's custom CRM.",
    tags: ["React Three Fiber", "Three.js", "TypeScript", "Inventory API"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    liveUrl: "https://sampathjai.github.io/Frontend/",
    githubUrl: "https://github.com/Sampathjai",
    featured: false,
    metrics: "+42% Conversion Rate Increase"
  }
];

export const SERVICES: Service[] = [
  {
    id: "3d-web",
    iconName: "Box",
    title: "3D & Interactive Web Experiences",
    description: "Transform plain websites into memorable, immersive 3D digital experiences using Three.js and WebGL shaders.",
    features: [
      "Interactive 3D Hero Scenes & Canvas Effects",
      "WebGL Shader Animations & Particle Systems",
      "GLTF / GLB Model Optimization & Draco Compression",
      "Smooth Scroll Parallax & Physics Simulations"
    ],
    badge: "Highest Impact"
  },
  {
    id: "crm-systems",
    iconName: "Layout",
    title: "Custom CRM Business Software",
    description: "Tailor-made CRM platforms designed for your specific business workflow, client tracking, and automated sales pipelines.",
    features: [
      "Custom Lead & Client Management Pipelines",
      "Automated Email & WhatsApp Notification Triggers",
      "Role-Based Access Control & Team Collaboration",
      "Executive Revenue Analytics & Reporting Dashboards"
    ],
    badge: "High ROI Solution"
  },
  {
    id: "inventory-mgmt",
    iconName: "Zap",
    title: "Inventory & Warehouse Management",
    description: "Real-time stock tracking systems that prevent stockouts, automate purchase orders, and sync multi-location inventory.",
    features: [
      "Multi-Warehouse Real-Time Stock Tracking",
      "Low-Stock Automated Alerts & Supplier Workflows",
      "Barcode & QR Code Scanner Integration",
      "Sales & Stock Analytics Visualization"
    ]
  },
  {
    id: "frontend-arch",
    iconName: "Sparkles",
    title: "Frontend Architecture & Web Applications",
    description: "Production-ready, scalable React & TypeScript web applications engineered for performance and clean maintainability.",
    features: [
      "Custom Design System & Component Library",
      "Map Integration (Mapbox GL & Leaflet)",
      "Lighthouse Score 95+ Optimization",
      "Responsive Layouts across all Screen Sizes"
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Requirement Audit",
    description: "We map out your business workflow, CRM requirements, inventory logic, and 3D visual goals.",
    details: ["Workflow Architecture Mapping", "Database & API Schema Design", "Project Timeline & Scope"]
  },
  {
    step: "02",
    title: "UI & System Prototyping",
    description: "I design interactive CRM wireframes, inventory dashboards, and 3D proof-of-concept models.",
    details: ["Interactive Dashboard Wireframes", "Three.js / WebGL Proof of Concept", "Role-Based Access Specs"]
  },
  {
    step: "03",
    title: "Frontend Development & Motion",
    description: "Writing clean, typed modular code with scroll animations, real-time database sync, and 3D shaders.",
    details: ["TypeScript + React Engineering", "Database & Webhook Setup", "Framer Motion Scroll Effects"]
  },
  {
    step: "04",
    title: "Deployment & Training",
    description: "Deployment to Vercel/Netlify/AWS with database backups, domain setup, and team walkthrough.",
    details: ["Production Build & CDN Optimization", "Team Onboarding & Documentation", "Post-Launch Maintenance Support"]
  }
];

export const TESTIMONIALS: Testimonial[] = [];

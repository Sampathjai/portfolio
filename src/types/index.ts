export interface ProjectFeature {
  iconName: string;
  title: string;
  description: string;
}

export interface ProjectModule {
  step: string;
  title: string;
  description: string;
}

export interface ProjectSummary {
  clientOrProject: string;
  industry: string;
  projectType: string;
  role: string;
  technology: string;
  status: string;
}

export interface ProjectTechStack {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  deployment?: string[];
}

export interface ProjectScreenshot {
  url: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: '3d' | 'fullstack' | 'frontend' | 'mobile';
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  screenshots?: ProjectScreenshot[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  metrics?: string;

  // Dedicated Case Study Fields
  summary?: ProjectSummary;
  challenge?: string;
  solution?: string;
  featuresList?: ProjectFeature[];
  modules?: ProjectModule[];
  techStackDetailed?: ProjectTechStack;
  roleDescription?: string;
  implementationHighlights?: string[];
  outcome?: string;
}

export interface Service {
  id: string;
  iconName: string;
  title: string;
  description: string;
  features: string[];
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string[];
}

export interface Project {
  id: string;
  title: string;
  category: '3d' | 'fullstack' | 'frontend' | 'mobile';
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  metrics?: string;
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


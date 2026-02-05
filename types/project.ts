export interface ComplexityScore {
  authentication: 'Basic' | 'Intermediate' | 'Advanced';
  dataManagement: 'Simple' | 'Complex' | 'Enterprise';
  dashboard: 'Standard' | 'Advanced' | 'Enterprise Level';
}

export interface DashboardAsset {
  type: 'admin' | 'manager' | 'user' | 'analytics';
  title: string;
  imagePath: string;
  description?: string;
}

export interface Feature {
  title: string;
  description: string;
  category: 'management' | 'collaboration' | 'analytics' | 'automation';
}

export interface Project {
  // Basic Information
  title: string;
  slug: string;
  description: string;
  systemType: string;
  organizationContext: string;
  
  // Technical Details
  roles: string[];
  techStack: string[];
  architectureSummary: string;
  
  // Visual Assets
  thumbnail?: string;
  dashboards: DashboardAsset[];
  screenshots?: string[];
  
  // Features and Capabilities
  features: Feature[];
  modules: string[];
  challenges: string[];
  
  // Links
  liveDemo?: string;
  github?: string;
  
  // Metrics
  complexityScore: ComplexityScore;
  
  // Content
  problemContext: string;
  outcome: string;
  mdxContent?: string;
}

export interface ProjectSummary {
  title: string;
  slug: string;
  description: string;
  systemType: string;
  techStack: string[];
  thumbnail?: string;
  complexityScore?: ComplexityScore;
}

export interface ProjectDetail extends Project {
  content: string; // MDX content
}

export interface CapabilityExample {
  projectTitle: string;
  projectSlug: string;
  implementation: string;
  screenshot?: string;
}

export interface SystemCapability {
  id: string;
  title: string;
  description: string;
  category: 
    | 'multi-role' 
    | 'admin-panels' 
    | 'analytics' 
    | 'notifications' 
    | 'messaging' 
    | 'financial-tracking';
  examples: CapabilityExample[];
  technicalDetails: string[];
}

export interface CTAButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface PricingInfo {
  type: 'fixed' | 'hourly' | 'project-based';
  range?: string;
  details?: string;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  process: ProcessStep[];
  deliverables: string[];
  timeline?: string;
  pricing?: PricingInfo;
  cta: CTAButton;
}

import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'full-stack-platform',
    title: 'Full-Stack Platform Development',
    tagline: 'End-to-end system development from concept to deployment',
    description: 'Complete platform development including frontend interfaces, backend APIs, database design, authentication systems, and deployment infrastructure. Ideal for organizations needing comprehensive digital solutions.',
    features: [
      'Custom React/Next.js frontend with responsive design',
      'Node.js/Express backend with RESTful APIs',
      'MongoDB or Firebase database architecture',
      'JWT-based authentication with role management',
      'Real-time features with WebSocket integration',
      'Cloud deployment on Vercel or similar platforms',
      'Comprehensive testing and documentation',
    ],
    process: [
      {
        step: 1,
        title: 'Discovery & Planning',
        description: 'Requirements gathering, technical feasibility analysis, and project roadmap creation',
      },
      {
        step: 2,
        title: 'Architecture Design',
        description: 'System architecture, database schema, API design, and technology stack selection',
      },
      {
        step: 3,
        title: 'Development Sprints',
        description: 'Iterative development with regular demos and feedback incorporation',
      },
      {
        step: 4,
        title: 'Testing & QA',
        description: 'Comprehensive testing including unit tests, integration tests, and user acceptance testing',
      },
      {
        step: 5,
        title: 'Deployment & Handoff',
        description: 'Production deployment, documentation delivery, and knowledge transfer',
      },
    ],
    deliverables: [
      'Source Code',
      'Technical Documentation',
      'API Documentation',
      'Deployment Guide',
      'User Manual',
      'Test Suite',
    ],
    timeline: '8-16 weeks',
    pricing: {
      type: 'project-based',
      range: 'Custom Quote',
      details: 'Based on project scope and complexity',
    },
    cta: {
      text: 'Discuss Your Project',
      href: '/contact',
      variant: 'primary',
    },
  },
  {
    id: 'admin-dashboard',
    title: 'Admin Dashboard Systems',
    tagline: 'Powerful control panels for system management',
    description: 'Custom admin dashboards with data visualization, user management, content moderation, and system configuration capabilities. Perfect for organizations needing centralized control interfaces.',
    features: [
      'Intuitive admin interface with data tables and charts',
      'User management with role-based permissions',
      'Content moderation and approval workflows',
      'Real-time analytics and reporting',
      'Bulk operations and data export',
      'Activity logging and audit trails',
      'Responsive design for mobile management',
    ],
    process: [
      {
        step: 1,
        title: 'Requirements Analysis',
        description: 'Identify admin needs, user roles, and key management functions',
      },
      {
        step: 2,
        title: 'UI/UX Design',
        description: 'Dashboard layout design, navigation structure, and workflow optimization',
      },
      {
        step: 3,
        title: 'Backend Integration',
        description: 'API development for data management and admin operations',
      },
      {
        step: 4,
        title: 'Frontend Development',
        description: 'Dashboard implementation with charts, tables, and interactive controls',
      },
      {
        step: 5,
        title: 'Testing & Launch',
        description: 'Security testing, performance optimization, and production deployment',
      },
    ],
    deliverables: [
      'Admin Dashboard',
      'API Endpoints',
      'User Documentation',
      'Security Audit Report',
      'Deployment Package',
    ],
    timeline: '6-10 weeks',
    pricing: {
      type: 'project-based',
      range: 'Custom Quote',
      details: 'Depends on features and integrations',
    },
    cta: {
      text: 'Get Started',
      href: '/contact',
      variant: 'primary',
    },
  },
  {
    id: 'saas-mvp',
    title: 'SaaS MVP Development',
    tagline: 'Launch your SaaS product quickly and efficiently',
    description: 'Rapid development of minimum viable products for SaaS startups. Focus on core features, user authentication, subscription management, and scalable architecture to validate your business idea.',
    features: [
      'Core feature implementation focused on value proposition',
      'User authentication and onboarding flow',
      'Subscription and payment integration (Stripe)',
      'User dashboard and account management',
      'Email notifications and user communication',
      'Analytics integration for user tracking',
      'Scalable architecture for future growth',
    ],
    process: [
      {
        step: 1,
        title: 'MVP Scoping',
        description: 'Define core features, user flows, and success metrics',
      },
      {
        step: 2,
        title: 'Rapid Prototyping',
        description: 'Quick wireframes and clickable prototypes for validation',
      },
      {
        step: 3,
        title: 'Agile Development',
        description: 'Two-week sprints with continuous deployment and feedback',
      },
      {
        step: 4,
        title: 'Beta Testing',
        description: 'User testing, bug fixes, and feature refinement',
      },
      {
        step: 5,
        title: 'Launch Support',
        description: 'Production launch, monitoring setup, and initial support',
      },
    ],
    deliverables: [
      'MVP Application',
      'User Documentation',
      'Admin Panel',
      'Analytics Setup',
      'Launch Checklist',
      'Support Plan',
    ],
    timeline: '6-12 weeks',
    pricing: {
      type: 'project-based',
      range: 'Custom Quote',
      details: 'Optimized for startup budgets',
    },
    cta: {
      text: 'Launch Your MVP',
      href: '/contact',
      variant: 'primary',
    },
  },
  {
    id: 'institutional-system',
    title: 'Institutional System Development',
    tagline: 'Enterprise solutions for educational and government organizations',
    description: 'Custom systems for universities, government agencies, and large organizations. Includes project management, academic platforms, workflow automation, and compliance-focused solutions.',
    features: [
      'Multi-level user hierarchies and permissions',
      'Workflow automation and approval processes',
      'Document management and version control',
      'Reporting and compliance features',
      'Integration with existing systems',
      'Audit trails and activity logging',
      'Training and support documentation',
    ],
    process: [
      {
        step: 1,
        title: 'Stakeholder Consultation',
        description: 'Meet with all stakeholders to understand organizational needs',
      },
      {
        step: 2,
        title: 'Compliance Review',
        description: 'Ensure system meets regulatory and institutional requirements',
      },
      {
        step: 3,
        title: 'Phased Development',
        description: 'Incremental development with regular stakeholder reviews',
      },
      {
        step: 4,
        title: 'User Training',
        description: 'Comprehensive training for administrators and end users',
      },
      {
        step: 5,
        title: 'Ongoing Support',
        description: 'Post-launch support and maintenance plan',
      },
    ],
    deliverables: [
      'Custom System',
      'Admin Training',
      'User Training Materials',
      'Technical Documentation',
      'Compliance Report',
      'Maintenance Plan',
    ],
    timeline: '12-20 weeks',
    pricing: {
      type: 'project-based',
      range: 'Custom Quote',
      details: 'Enterprise pricing based on scope',
    },
    cta: {
      text: 'Schedule Consultation',
      href: '/contact',
      variant: 'primary',
    },
  },
  {
    id: 'web-application',
    title: 'Web Application Engineering',
    tagline: 'Custom web applications tailored to your business needs',
    description: 'Development of specialized web applications including e-commerce platforms, booking systems, content management, collaboration tools, and business automation solutions.',
    features: [
      'Custom business logic implementation',
      'Third-party API integrations',
      'Payment processing and transactions',
      'File upload and media management',
      'Search and filtering capabilities',
      'Email and notification systems',
      'Performance optimization and caching',
    ],
    process: [
      {
        step: 1,
        title: 'Business Analysis',
        description: 'Understand business processes and automation opportunities',
      },
      {
        step: 2,
        title: 'Technical Planning',
        description: 'Architecture design, technology selection, and integration planning',
      },
      {
        step: 3,
        title: 'Iterative Development',
        description: 'Build features incrementally with regular client feedback',
      },
      {
        step: 4,
        title: 'Integration Testing',
        description: 'Test all integrations and business workflows thoroughly',
      },
      {
        step: 5,
        title: 'Deployment & Training',
        description: 'Launch application and train users on key features',
      },
    ],
    deliverables: [
      'Web Application',
      'Integration Documentation',
      'User Guide',
      'API Documentation',
      'Deployment Package',
      'Support Documentation',
    ],
    timeline: '8-14 weeks',
    pricing: {
      type: 'project-based',
      range: 'Custom Quote',
      details: 'Based on features and integrations',
    },
    cta: {
      text: 'Start Your Project',
      href: '/contact',
      variant: 'primary',
    },
  },
];

// Utility function to get all services
export function getAllServices(): Service[] {
  return services;
}

// Utility function to get a service by ID
export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}

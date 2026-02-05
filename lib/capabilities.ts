import type { SystemCapability } from '@/types';

export const systemCapabilities: SystemCapability[] = [
  {
    id: 'multi-role-systems',
    title: 'Multi-Role Authentication Systems',
    description: 'Complex role-based access control systems with hierarchical permissions, enabling different user types to access appropriate features and data based on their organizational role.',
    category: 'multi-role',
    technicalDetails: [
      'JWT-based authentication with role-specific token claims',
      'Middleware-level permission checking and route protection',
      'Dynamic UI rendering based on user role and permissions',
      'Session management with secure token refresh mechanisms',
    ],
    examples: [
      {
        projectTitle: 'Government Project Management System',
        projectSlug: 'government-project-management-system',
        implementation: 'Three-tier role system (Admin, Project Manager, Team Member) with hierarchical access control. Admins manage system-wide settings, Project Managers control project resources, and Team Members access assigned tasks.',
      },
      {
        projectTitle: 'HU Connect',
        projectSlug: 'hu-connect',
        implementation: 'Three-level moderation system (Admin, Moderator, Student User) with reputation-based privileges. Admins have full platform control, Moderators manage content quality, and Students earn privileges through reputation.',
      },
      {
        projectTitle: 'HU Freshman',
        projectSlug: 'hu-freshman',
        implementation: 'Dual-role system (Admin, Student) where Admins manage exam content and AI parameters, while Students access personalized learning dashboards and performance analytics.',
      },
    ],
  },
  {
    id: 'admin-control-panels',
    title: 'Admin Control Panels',
    description: 'Comprehensive administrative dashboards providing system oversight, user management, content moderation, and configuration controls for platform administrators.',
    category: 'admin-panels',
    technicalDetails: [
      'Real-time data visualization with charts and metrics',
      'CRUD operations for all system entities',
      'Bulk actions and batch processing capabilities',
      'Audit logging and activity tracking',
    ],
    examples: [
      {
        projectTitle: 'Government Project Management System',
        projectSlug: 'government-project-management-system',
        implementation: 'Enterprise-level admin dashboard with user management, project approval workflows, system-wide analytics, resource allocation oversight, and comprehensive reporting tools.',
      },
      {
        projectTitle: 'ShopVerse',
        projectSlug: 'shop-verse',
        implementation: 'E-commerce admin console with product management, order processing, inventory control, sales analytics, and customer management capabilities.',
      },
      {
        projectTitle: 'HU Connect',
        projectSlug: 'hu-connect',
        implementation: 'Platform administration dashboard with system configuration, user management, content oversight, moderation queue management, and platform-wide analytics.',
      },
    ],
  },
  {
    id: 'analytics-dashboards',
    title: 'Analytics Dashboards',
    description: 'Data-driven analytics interfaces providing insights into user behavior, system performance, and business metrics through visualizations and reports.',
    category: 'analytics',
    technicalDetails: [
      'Aggregated data queries with optimized database indexing',
      'Real-time metrics calculation and caching',
      'Interactive charts and data visualization',
      'Exportable reports in multiple formats',
    ],
    examples: [
      {
        projectTitle: 'HU Freshman',
        projectSlug: 'hu-freshman',
        implementation: 'Academic performance analytics with GPA tracking, study pattern analysis, exam performance trends, AI usage metrics, and predictive success indicators.',
      },
      {
        projectTitle: 'Government Project Management System',
        projectSlug: 'government-project-management-system',
        implementation: 'Project performance analytics tracking KPIs, budget utilization, timeline adherence, team productivity, and resource allocation efficiency.',
      },
      {
        projectTitle: 'HU Connect',
        projectSlug: 'hu-connect',
        implementation: 'Community engagement metrics with Q&A activity tracking, reputation analytics, content quality metrics, and user contribution patterns.',
      },
    ],
  },
  {
    id: 'notification-systems',
    title: 'Notification Systems',
    description: 'Real-time notification infrastructure delivering instant updates to users about relevant events, actions, and system changes.',
    category: 'notifications',
    technicalDetails: [
      'WebSocket-based real-time push notifications',
      'Event-driven notification triggers',
      'User preference management for notification types',
      'Notification history and read/unread tracking',
    ],
    examples: [
      {
        projectTitle: 'Government Project Management System',
        projectSlug: 'government-project-management-system',
        implementation: 'Socket.io-powered real-time notifications for project updates, task assignments, deadline reminders, approval requests, and team collaboration events.',
      },
      {
        projectTitle: 'HU Connect',
        projectSlug: 'hu-connect',
        implementation: 'Instant alerts for new answers, comments, mentions, reputation changes, and content moderation actions with customizable notification preferences.',
      },
    ],
  },
  {
    id: 'messaging-systems',
    title: 'Messaging & Collaboration Systems',
    description: 'Communication infrastructure enabling real-time collaboration, threaded discussions, and team coordination within platform ecosystems.',
    category: 'messaging',
    technicalDetails: [
      'Real-time message delivery with WebSocket connections',
      'Threaded conversation support',
      'Rich text formatting and media attachments',
      'Message history and search capabilities',
    ],
    examples: [
      {
        projectTitle: 'HU Connect',
        projectSlug: 'hu-connect',
        implementation: 'Q&A discussion system with threaded comments, rich text formatting, code snippet support, and real-time collaborative problem-solving.',
      },
      {
        projectTitle: 'Government Project Management System',
        projectSlug: 'government-project-management-system',
        implementation: 'Team collaboration workspace with real-time updates, project discussions, task comments, and document sharing capabilities.',
      },
    ],
  },
  {
    id: 'financial-tracking',
    title: 'Financial Tracking Systems',
    description: 'Payment processing, transaction management, and financial analytics systems handling monetary operations securely and accurately.',
    category: 'financial-tracking',
    technicalDetails: [
      'Secure payment gateway integration (Stripe)',
      'Transaction logging and audit trails',
      'Order lifecycle management',
      'Revenue analytics and reporting',
    ],
    examples: [
      {
        projectTitle: 'ShopVerse',
        projectSlug: 'shop-verse',
        implementation: 'Complete e-commerce financial system with Stripe payment processing, order management, transaction history, refund handling, and sales analytics.',
      },
      {
        projectTitle: 'Government Project Management System',
        projectSlug: 'government-project-management-system',
        implementation: 'Budget tracking system monitoring project expenditures, resource costs, budget allocation, and financial reporting for government accountability.',
      },
    ],
  },
];

// Utility function to get all system capabilities
export function getAllCapabilities(): SystemCapability[] {
  return systemCapabilities;
}

// Utility function to get a capability by ID
export function getCapabilityById(id: string): SystemCapability | undefined {
  return systemCapabilities.find((capability) => capability.id === id);
}

// Utility function to get capabilities by category
export function getCapabilitiesByCategory(
  category: SystemCapability['category']
): SystemCapability[] {
  return systemCapabilities.filter((capability) => capability.category === category);
}

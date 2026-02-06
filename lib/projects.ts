import type { Project } from '@/types';

export const projects: Project[] = [
  {
    title: 'Government Project Management System',
    slug: 'government-project-management-system',
    description: 'Institutional project and workflow platform for the Ethiopian Ministry of Innovation and Technology, enabling multi-level project tracking, resource allocation, and performance monitoring across government initiatives.',
    systemType: 'Institutional Project & Workflow Platform',
    organizationContext: 'Ethiopian Ministry of Innovation and Technology',
    roles: ['Admin', 'Project Manager', 'Team Member'],
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT Auth', 'Socket.io'],
    architectureSummary: 'Three-tier architecture with role-based access control, real-time collaboration features, and comprehensive project lifecycle management from initiation to completion.',
    thumbnail: '/images/projects/gov-pm-thumbnail.jpg',
    dashboards: [
      {
        type: 'admin',
        title: 'System Administration Dashboard',
        imagePath: '/images/dashboards/gov-pm-admin.jpg',
        description: 'Complete system oversight with user management, project approval workflows, and system-wide analytics.',
      },
      {
        type: 'manager',
        title: 'Project Manager Dashboard',
        imagePath: '/images/dashboards/gov-pm-manager.jpg',
        description: 'Project tracking, team coordination, resource allocation, and milestone management interface.',
      },
      {
        type: 'user',
        title: 'Team Member Dashboard',
        imagePath: '/images/dashboards/gov-pm-user.jpg',
        description: 'Task management, progress reporting, and collaboration workspace for team members.',
      },
    ],
    features: [
      {
        title: 'Multi-Level Project Hierarchy',
        description: 'Organize projects with programs, sub-projects, and tasks with dependency tracking.',
        category: 'management',
      },
      {
        title: 'Resource Allocation System',
        description: 'Assign and track human resources, budgets, and equipment across projects.',
        category: 'management',
      },
      {
        title: 'Real-Time Collaboration',
        description: 'Socket.io-powered live updates, notifications, and team communication.',
        category: 'collaboration',
      },
      {
        title: 'Performance Analytics',
        description: 'Track project KPIs, budget utilization, timeline adherence, and team productivity.',
        category: 'analytics',
      },
      {
        title: 'Automated Reporting',
        description: 'Generate scheduled reports for stakeholders with customizable metrics and formats.',
        category: 'automation',
      },
    ],
    modules: [
      'User Management & Authentication',
      'Project Creation & Configuration',
      'Task Assignment & Tracking',
      'Resource Management',
      'Budget Tracking',
      'Document Management',
      'Reporting & Analytics',
      'Notification System',
    ],
    challenges: [
      'Implementing complex role-based permissions with hierarchical access control',
      'Designing scalable data models for nested project structures',
      'Ensuring real-time synchronization across multiple concurrent users',
      'Building comprehensive audit trails for government compliance',
    ],
    liveDemo: 'https://government-pm-system.vercel.app',
    github: undefined,
    complexityScore: {
      authentication: 'Advanced',
      dataManagement: 'Enterprise',
      dashboard: 'Enterprise Level',
    },
    problemContext: 'Government ministries struggled with fragmented project tracking across departments, leading to budget overruns, missed deadlines, and poor visibility into project status. Manual reporting consumed significant administrative time.',
    outcome: 'Deployed system now manages 50+ concurrent government projects, reducing administrative overhead by 40% and improving project delivery timelines by 25%. Real-time dashboards provide ministry leadership with instant visibility into all initiatives.',
  },
  {
    title: 'HU Freshman – AI Academic Performance Companion',
    slug: 'hu-freshman',
    description: 'AI-powered academic performance optimization platform for Haramaya University freshmen, featuring mock exams, personalized study assistance, GPA tracking, and daily motivation systems.',
    systemType: 'Academic Performance Optimization & AI Study Platform',
    organizationContext: 'Haramaya University Freshman Academic Support System',
    roles: ['Admin', 'Student'],
    techStack: ['React', 'Node.js', 'Express', 'Firebase', 'AI Integration', 'Authentication System'],
    architectureSummary: 'Full-stack platform with AI-powered study assistant, comprehensive exam simulation engine, and personalized learning analytics to support freshman academic success.',
    thumbnail: '/images/projects/hu-freshman-thumbnail.jpg',
    dashboards: [
      {
        type: 'admin',
        title: 'Academic Administration Dashboard',
        imagePath: '/images/dashboards/hu-freshman-admin.jpg',
        description: 'Manage exam content, monitor student performance trends, and configure AI assistant parameters.',
      },
      {
        type: 'user',
        title: 'Student Learning Dashboard',
        imagePath: '/images/dashboards/hu-freshman-student.jpg',
        description: 'Personalized study interface with GPA tracking, exam history, AI tutor access, and progress visualization.',
      },
      {
        type: 'analytics',
        title: 'Exam Content Management',
        imagePath: '/images/dashboards/hu-freshman-analytics.jpg',
        description: 'Comprehensive past exam contents organized as Mid, Final, and CoC exams based on years for easy access and preparation.',
      },
    ],
    features: [
      {
        title: 'Mock Exam Engine',
        description: 'Comprehensive exam simulation with timed tests, instant grading, and detailed performance analysis.',
        category: 'management',
      },
      {
        title: 'AI Study Assistant',
        description: 'Intelligent tutoring system providing personalized explanations, study recommendations, and concept clarification.',
        category: 'automation',
      },
      {
        title: 'GPA Calculator & Tracker',
        description: 'Real-time GPA calculation with semester tracking, grade predictions, and academic goal setting.',
        category: 'analytics',
      },
      {
        title: 'Daily Motivation System',
        description: 'Personalized motivational content, study reminders, and achievement celebrations to maintain engagement.',
        category: 'collaboration',
      },
      {
        title: 'Performance Analytics',
        description: 'Detailed insights into study patterns, weak areas, improvement trends, and comparative benchmarks.',
        category: 'analytics',
      },
    ],
    modules: [
      'User Authentication & Profiles',
      'Mock Exam Management',
      'AI Study Assistant Integration',
      'GPA Calculation Engine',
      'Performance Tracking',
      'Motivation & Engagement System',
      'Analytics & Reporting',
      'Content Management',
    ],
    challenges: [
      'Integrating AI capabilities while maintaining response speed and accuracy',
      'Designing adaptive exam difficulty based on student performance',
      'Building engaging motivation system that drives consistent platform usage',
      'Ensuring data privacy for sensitive academic performance information',
    ],
    liveDemo: 'https://hu-freshman.vercel.app',
    github: undefined,
    complexityScore: {
      authentication: 'Intermediate',
      dataManagement: 'Complex',
      dashboard: 'Advanced',
    },
    problemContext: 'Haramaya University freshmen faced high failure rates due to inadequate study resources, lack of personalized academic support, and difficulty adapting to university-level coursework. Traditional tutoring was expensive and not scalable.',
    outcome: 'Platform serves 500+ freshman students with 85% reporting improved exam performance. AI assistant handles 1000+ study queries weekly, and mock exam usage correlates with 30% improvement in actual exam scores.',
  },
  {
    title: 'HU Connect – University Knowledge Platform',
    slug: 'hu-connect',
    description: 'Professional community-driven Q&A platform designed specifically for Haramaya University students, empowering freshers to find trustworthy guidance on university life, academics, and campus navigation directly from experienced seniors and peers.',
    systemType: 'Community Q&A Knowledge System',
    organizationContext: 'Haramaya University Students Platform',
    roles: ['Admin', 'Moderator', 'Student User'],
    techStack: ['React', 'Node.js', 'MySQL', 'Express', 'Real-time Notifications'],
    architectureSummary: 'Modern Q&A platform with peer-verified answers, smart categorization, reputation system, and real-time notifications to bridge the knowledge gap between freshers and experienced students.',
    thumbnail: '/images/projects/hu-connect-thumbnail.jpg',
    dashboards: [
      {
        type: 'admin',
        title: 'Platform Administration Dashboard',
        imagePath: '/images/dashboards/hu-connect-admin.jpg',
        description: 'System configuration, user management, content oversight, and platform analytics.',
      },
      {
        type: 'manager',
        title: 'Moderator Dashboard',
        imagePath: '/images/dashboards/hu-connect-moderator.jpg',
        description: 'Content moderation queue, flag management, user reputation oversight, and quality control tools.',
      },
      {
        type: 'user',
        title: 'Student Dashboard',
        imagePath: '/images/dashboards/hu-connect-student.jpg',
        description: 'Personalized feed, reputation tracking, saved questions, and contribution history.',
      },
    ],
    features: [
      {
        title: 'Peer-Verified Q&A',
        description: 'Ask questions and get answers from students who have been there, with accepted answers to reward top contributors.',
        category: 'collaboration',
      },
      {
        title: 'Smart Categorization',
        description: 'Tag questions by department or topic (Academics, Campus Life, Side Hustles) for easy discovery and navigation.',
        category: 'management',
      },
      {
        title: 'Voting & Reputation System',
        description: 'Community-driven quality control through upvotes/downvotes and reputation-based privileges to identify trusted contributors.',
        category: 'management',
      },
      {
        title: 'Real-time Notifications',
        description: 'Socket.io-powered instant alerts for answers, comments, mentions, and reputation changes.',
        category: 'collaboration',
      },
      {
        title: 'Content Moderation',
        description: 'Robust reporting and admin system ensuring community safety and quality with flagging and review workflows.',
        category: 'management',
      },
    ],
    modules: [
      'User Authentication & Profiles',
      'Question & Answer System',
      'Voting & Reputation Engine',
      'Moderation Workflow',
      'Notification System',
      'Search & Filtering',
      'Tag Management',
      'Analytics Dashboard',
    ],
    challenges: [
      'Designing reputation algorithm that accurately reflects contribution quality',
      'Building scalable real-time notification system for thousands of users',
      'Implementing effective spam prevention and content quality controls',
      'Balancing moderation efficiency with community self-governance',
    ],
    liveDemo: 'https://hu-connect.vercel.app',
    github: undefined,
    complexityScore: {
      authentication: 'Intermediate',
      dataManagement: 'Complex',
      dashboard: 'Advanced',
    },
    problemContext: 'Haramaya University freshers struggled to find trustworthy guidance on university life, academics, and campus navigation. Information was scattered across disorganized Telegram groups, making it difficult for new students to get reliable answers from experienced seniors. The knowledge gap between freshers and seniors created unnecessary confusion and anxiety during the critical transition period.',
    outcome: 'Platform successfully bridges the knowledge gap with 2000+ active students and 5000+ peer-verified answers. Average response time of 2 hours ensures freshers get timely guidance. Reputation system identifies trusted contributors, and 90% of questions receive at least one quality answer. Real-time notifications keep the community engaged and responsive.',
  },
  {
    title: 'ShopVerse – Full Stack E-commerce Platform',
    slug: 'shop-verse',
    description: 'Complete e-commerce transaction platform with product catalog management, shopping cart, payment processing via Stripe, order management, and comprehensive admin controls.',
    systemType: 'E-commerce Transaction Platform',
    organizationContext: 'Full-stack Commercial System Simulation',
    roles: ['Admin', 'Customer'],
    techStack: ['React', 'Firebase', 'Node.js', 'Stripe API', 'Global State Management'],
    architectureSummary: 'Modern e-commerce architecture with Firebase backend, Stripe payment integration, real-time inventory management, and responsive customer-facing storefront.',
    thumbnail: '/images/projects/shopverse-thumbnail.jpg',
    dashboards: [
      {
        type: 'admin',
        title: 'Commerce Administration Panel',
        imagePath: '/images/dashboards/shopverse-admin.jpg',
        description: 'Product management, order processing, inventory control, and sales analytics.',
      },
      {
        type: 'user',
        title: 'Customer Shopping Interface',
        imagePath: '/images/dashboards/shopverse-customer.jpg',
        description: 'Product browsing, cart management, checkout process, and order history.',
      },
      {
        type: 'analytics',
        title: 'Sales Analytics Dashboard',
        imagePath: '/images/dashboards/shopverse-analytics.jpg',
        description: 'Revenue tracking, product performance, customer behavior analysis, and conversion metrics.',
      },
    ],
    features: [
      {
        title: 'Product Catalog Management',
        description: 'Complete product CRUD with categories, variants, pricing, inventory tracking, and image management.',
        category: 'management',
      },
      {
        title: 'Shopping Cart System',
        description: 'Persistent cart with quantity management, price calculations, and discount code support.',
        category: 'management',
      },
      {
        title: 'Payment Processing',
        description: 'Secure Stripe integration with multiple payment methods, order confirmation, and receipt generation.',
        category: 'automation',
      },
      {
        title: 'Order Management',
        description: 'Complete order lifecycle tracking from placement to fulfillment with status updates.',
        category: 'management',
      },
      {
        title: 'Customer Accounts',
        description: 'User profiles with order history, saved addresses, and wishlist functionality.',
        category: 'management',
      },
    ],
    modules: [
      'User Authentication (Firebase)',
      'Product Management',
      'Shopping Cart',
      'Checkout & Payment (Stripe)',
      'Order Processing',
      'Inventory Management',
      'Customer Profiles',
      'Admin Dashboard',
    ],
    challenges: [
      'Implementing secure payment processing with Stripe API integration',
      'Managing real-time inventory synchronization across concurrent transactions',
      'Building responsive UI that works seamlessly across all device sizes',
      'Handling edge cases in checkout flow (payment failures, inventory conflicts)',
    ],
    liveDemo: 'https://shop-verse-brown.vercel.app',
    github: undefined,
    complexityScore: {
      authentication: 'Advanced',
      dataManagement: 'Complex',
      dashboard: 'Advanced',
    },
    problemContext: 'Need to demonstrate full-stack e-commerce capabilities including payment processing, inventory management, and admin controls. Required building a production-ready platform that handles real transactions securely.',
    outcome: 'Fully functional e-commerce platform deployed on Vercel with Stripe test mode integration. Demonstrates complete transaction flow from product browsing to payment confirmation, with admin panel for product and order management.',
  },
];

// Utility function to get all projects
export function getAllProjects(): Project[] {
  return projects;
}

// Utility function to get a project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

// Utility function to get project slugs for static generation
export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

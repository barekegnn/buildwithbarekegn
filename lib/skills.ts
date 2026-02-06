import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend Engineering',
    skills: [
      {
        name: 'JavaScript',
        level: 'expert',
        projects: [
          'government-project-management-system',
          'hu-freshman',
          'hu-connect',
          'shop-verse',
        ],
        icon: '🟨',
        description: 'Modern ES6+ JavaScript with async/await, destructuring, and functional programming',
        yearsOfExperience: 3,
        relatedSkills: ['TypeScript', 'Node.js'],
      },
      {
        name: 'React',
        level: 'expert',
        projects: [
          'government-project-management-system',
          'hu-freshman',
          'hu-connect',
          'shop-verse',
        ],
        icon: '⚛️',
        description: 'Building complex, scalable user interfaces with React hooks, context, and modern patterns',
        yearsOfExperience: 3,
        relatedSkills: ['JavaScript', 'JSX', 'Component Architecture'],
      },
      {
        name: 'Next.js',
        level: 'advanced',
        projects: ['shop-verse'],
        icon: '▲',
        description: 'Server-side rendering, static generation, and full-stack React applications',
        yearsOfExperience: 2,
        relatedSkills: ['React', 'TypeScript', 'API Routes'],
      },
      {
        name: 'TypeScript',
        level: 'advanced',
        projects: [
          'government-project-management-system',
          'hu-freshman',
          'hu-connect',
          'shop-verse',
        ],
        icon: '📘',
        description: 'Type-safe JavaScript development with interfaces, generics, and advanced types',
        yearsOfExperience: 2,
        relatedSkills: ['JavaScript', 'Type Systems'],
      },
      {
        name: 'Tailwind CSS',
        level: 'expert',
        projects: [
          'government-project-management-system',
          'hu-freshman',
          'hu-connect',
          'shop-verse',
        ],
        icon: '🎨',
        description: 'Utility-first CSS framework for rapid UI development',
        yearsOfExperience: 3,
        relatedSkills: ['CSS', 'Responsive Design'],
      },
      {
        name: 'Bootstrap',
        level: 'advanced',
        projects: [],
        icon: '🅱️',
        description: 'Responsive web design with Bootstrap components',
        yearsOfExperience: 3,
        relatedSkills: ['CSS', 'Responsive Design'],
      },
    ],
  },
  {
    category: 'Backend Engineering',
    skills: [
      {
        name: 'Node.js',
        level: 'expert',
        projects: [
          'government-project-management-system',
          'hu-freshman',
          'hu-connect',
          'shop-verse',
        ],
        icon: '🟢',
        description: 'Server-side JavaScript runtime for building scalable network applications',
        yearsOfExperience: 3,
        relatedSkills: ['JavaScript', 'Express', 'API Development'],
      },
      {
        name: 'Express',
        level: 'expert',
        projects: [
          'government-project-management-system',
          'hu-freshman',
          'hu-connect',
        ],
        icon: '🚂',
        description: 'RESTful API development with middleware, routing, and error handling',
        yearsOfExperience: 3,
        relatedSkills: ['Node.js', 'REST APIs'],
      },
      {
        name: 'RESTful APIs',
        level: 'expert',
        projects: [
          'government-project-management-system',
          'hu-freshman',
          'hu-connect',
          'shop-verse',
        ],
        icon: '🔌',
        description: 'Designing and implementing REST API architectures with proper HTTP methods and status codes',
        yearsOfExperience: 3,
        relatedSkills: ['Express', 'API Design', 'HTTP'],
      },
    ],
  },
  {
    category: 'Database Systems',
    skills: [
      {
        name: 'MongoDB',
        level: 'expert',
        projects: [
          'government-project-management-system',
          'hu-freshman',
          'hu-connect',
        ],
        icon: '🍃',
        description: 'NoSQL database design with aggregation pipelines, indexing, and schema design',
        yearsOfExperience: 3,
        relatedSkills: ['Mongoose', 'Database Design'],
      },
      {
        name: 'MySQL',
        level: 'intermediate',
        projects: [],
        icon: '🐬',
        description: 'Relational database design, queries, and optimization',
        yearsOfExperience: 2,
        relatedSkills: ['SQL', 'Database Design'],
      },
      {
        name: 'PostgreSQL',
        level: 'intermediate',
        projects: [],
        icon: '🐘',
        description: 'Advanced relational database with complex queries and transactions',
        yearsOfExperience: 1,
        relatedSkills: ['SQL', 'Database Design'],
      },
      {
        name: 'Firebase',
        level: 'advanced',
        projects: ['shop-verse'],
        icon: '🔥',
        description: 'Real-time database, authentication, and cloud functions',
        yearsOfExperience: 2,
        relatedSkills: ['Firestore', 'Cloud Functions'],
      },
      {
        name: 'Supabase',
        level: 'intermediate',
        projects: [],
        icon: '⚡',
        description: 'Open-source Firebase alternative with PostgreSQL backend',
        yearsOfExperience: 1,
        relatedSkills: ['PostgreSQL', 'Real-time'],
      },
      {
        name: 'Database Design',
        level: 'advanced',
        projects: [
          'government-project-management-system',
          'hu-freshman',
          'hu-connect',
          'shop-verse',
        ],
        icon: '📊',
        description: 'Schema design, normalization, indexing strategies, and query optimization',
        yearsOfExperience: 3,
        relatedSkills: ['MongoDB', 'SQL', 'Data Modeling'],
      },
    ],
  },
  {
    category: 'Authentication Systems',
    skills: [
      {
        name: 'JWT',
        level: 'expert',
        projects: [
          'government-project-management-system',
          'hu-freshman',
          'hu-connect',
        ],
        icon: '🔐',
        description: 'JSON Web Token authentication with secure token generation and validation',
        yearsOfExperience: 3,
        relatedSkills: ['Authentication', 'Security'],
      },
      {
        name: 'OAuth',
        level: 'intermediate',
        projects: [],
        icon: '🔑',
        description: 'Third-party authentication with OAuth 2.0 providers',
        yearsOfExperience: 1,
        relatedSkills: ['Authentication', 'Security'],
      },
      {
        name: 'NextAuth',
        level: 'intermediate',
        projects: [],
        icon: '🛡️',
        description: 'Authentication for Next.js applications with multiple providers',
        yearsOfExperience: 1,
        relatedSkills: ['Next.js', 'OAuth'],
      },
      {
        name: 'BetterAuth',
        level: 'beginner',
        projects: [],
        icon: '✨',
        description: 'Modern authentication library for TypeScript applications',
        yearsOfExperience: 1,
        relatedSkills: ['TypeScript', 'Authentication'],
      },
      {
        name: 'Role-Based Access Control',
        level: 'expert',
        projects: [
          'government-project-management-system',
          'hu-freshman',
          'hu-connect',
          'shop-verse',
        ],
        icon: '👥',
        description: 'Implementing hierarchical permission systems with role-based access',
        yearsOfExperience: 3,
        relatedSkills: ['JWT', 'Security', 'Authorization'],
      },
    ],
  },
  {
    category: 'System Design',
    skills: [
      {
        name: 'System Architecture',
        level: 'advanced',
        projects: [
          'government-project-management-system',
          'hu-freshman',
          'hu-connect',
          'shop-verse',
        ],
        icon: '🏗️',
        description: 'Designing scalable, maintainable system architectures with proper separation of concerns',
        yearsOfExperience: 3,
        relatedSkills: ['Design Patterns', 'Scalability'],
      },
      {
        name: 'API Design',
        level: 'advanced',
        projects: [
          'government-project-management-system',
          'hu-freshman',
          'hu-connect',
          'shop-verse',
        ],
        icon: '🔗',
        description: 'RESTful API design with proper endpoints, versioning, and documentation',
        yearsOfExperience: 3,
        relatedSkills: ['REST APIs', 'HTTP'],
      },
      {
        name: 'Microservices',
        level: 'intermediate',
        projects: [],
        icon: '🧩',
        description: 'Distributed system architecture with independent, scalable services',
        yearsOfExperience: 1,
        relatedSkills: ['System Architecture', 'APIs'],
      },
      {
        name: 'Real-time Systems',
        level: 'advanced',
        projects: [
          'government-project-management-system',
          'hu-connect',
        ],
        icon: '⚡',
        description: 'WebSocket-based real-time communication and live updates',
        yearsOfExperience: 2,
        relatedSkills: ['Socket.io', 'WebSockets'],
      },
    ],
  },
  {
    category: 'Deployment & DevOps',
    skills: [
      {
        name: 'Vercel',
        level: 'advanced',
        projects: ['shop-verse'],
        icon: '▲',
        description: 'Deploying Next.js applications with automatic deployments and preview environments',
        yearsOfExperience: 2,
        relatedSkills: ['Next.js', 'CI/CD'],
      },
      {
        name: 'Git',
        level: 'expert',
        projects: [
          'government-project-management-system',
          'hu-freshman',
          'hu-connect',
          'shop-verse',
        ],
        icon: '📦',
        description: 'Version control with branching strategies, pull requests, and collaboration workflows',
        yearsOfExperience: 4,
        relatedSkills: ['GitHub', 'Version Control'],
      },
      {
        name: 'CI/CD',
        level: 'intermediate',
        projects: ['shop-verse'],
        icon: '🔄',
        description: 'Continuous integration and deployment pipelines for automated testing and deployment',
        yearsOfExperience: 2,
        relatedSkills: ['Git', 'Automation'],
      },
      {
        name: 'Docker',
        level: 'intermediate',
        projects: [],
        icon: '🐳',
        description: 'Containerization for consistent development and deployment environments',
        yearsOfExperience: 1,
        relatedSkills: ['DevOps', 'Deployment'],
      },
      {
        name: 'Cloud Deployment',
        level: 'advanced',
        projects: [
          'government-project-management-system',
          'hu-freshman',
          'hu-connect',
          'shop-verse',
        ],
        icon: '☁️',
        description: 'Deploying applications to cloud platforms with scalability and monitoring',
        yearsOfExperience: 2,
        relatedSkills: ['Vercel', 'DevOps'],
      },
    ],
  },
];

// Utility function to get all skill categories
export function getAllSkillCategories(): SkillCategory[] {
  return skillCategories;
}

// Utility function to get skills by category
export function getSkillsByCategory(category: string): SkillCategory | undefined {
  return skillCategories.find((sc) => sc.category === category);
}

// Utility function to get all skills (flattened)
export function getAllSkills() {
  return skillCategories.flatMap((category) => category.skills);
}

// Utility function to get skills by project slug
export function getSkillsByProject(projectSlug: string) {
  return getAllSkills().filter((skill) => skill.projects.includes(projectSlug));
}

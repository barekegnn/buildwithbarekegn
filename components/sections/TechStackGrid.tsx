import React from 'react';
import { Card } from '@/components/ui';

interface TechCategory {
  name: string;
  technologies: string[];
  icon: string;
}

const techStack: TechCategory[] = [
  {
    name: 'Frontend Systems',
    icon: '⚛️',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    name: 'Backend Architecture',
    icon: '⚙️',
    technologies: ['Node.js', 'Express', 'RESTful APIs', 'WebSockets', 'Microservices'],
  },
  {
    name: 'Databases',
    icon: '🗄️',
    technologies: ['MongoDB', 'Firebase', 'PostgreSQL', 'Redis', 'Database Design'],
  },
  {
    name: 'DevOps',
    icon: '🚀',
    technologies: ['Vercel', 'Git', 'CI/CD', 'Docker', 'Cloud Deployment'],
  },
  {
    name: 'Auth Systems',
    icon: '🔐',
    technologies: ['JWT', 'OAuth', 'Role-Based Access', 'Session Management', 'Security'],
  },
  {
    name: 'API Integration',
    icon: '🔌',
    technologies: ['Stripe', 'AI APIs', 'Third-party Services', 'Webhooks', 'API Design'],
  },
];

export const TechStackGrid: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Tech <span className="text-gradient">Authority</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Full-stack expertise across modern technologies and frameworks
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((category, index) => (
            <Card key={index} hover>
              {/* Category Icon and Name */}
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>

              {/* Technologies List */}
              <ul className="space-y-2">
                {category.technologies.map((tech, techIndex) => (
                  <li
                    key={techIndex}
                    className="flex items-center text-sm text-gray-400"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {tech}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Card } from '@/components/ui';

const approaches = [
  {
    step: '01',
    title: 'Problem Analysis',
    description: 'Deep dive into user needs, system requirements, and institutional challenges to define clear objectives.',
  },
  {
    step: '02',
    title: 'Architecture Design',
    description: 'Design scalable system architecture with role-based access, data flow planning, and security layers.',
  },
  {
    step: '03',
    title: 'Backend Modeling',
    description: 'Build robust data models, API endpoints, and business logic with comprehensive validation.',
  },
  {
    step: '04',
    title: 'Deployment Strategy',
    description: 'Implement CI/CD pipelines, environment configuration, and production-ready infrastructure.',
  },
  {
    step: '05',
    title: 'Monitoring',
    description: 'Set up analytics, error tracking, performance monitoring, and user feedback systems.',
  },
];

export const EngineeringApproach: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Engineering <span className="text-gradient">Approach</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A systematic methodology for building production-grade systems
          </p>
        </div>

        {/* Approach Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {approaches.map((approach, index) => (
            <Card key={index} className="text-center">
              <div className="text-4xl font-bold text-gradient mb-4">
                {approach.step}
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {approach.title}
              </h3>
              <p className="text-sm text-gray-400">
                {approach.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

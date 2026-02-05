'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui';
import { fadeInUp, staggerContainer, getAnimationProps } from '@/lib/animations';

interface Metric {
  value: string;
  label: string;
  description: string;
}

const metrics: Metric[] = [
  {
    value: '4',
    label: 'Production Projects',
    description: 'Complex institutional platforms deployed and actively used',
  },
  {
    value: '10+',
    label: 'Multi-Role Auth Systems',
    description: 'Admin, Manager, Student, Customer role implementations',
  },
  {
    value: '8+',
    label: 'Admin Dashboards',
    description: 'Enterprise-level control panels and management interfaces',
  },
  {
    value: '6+',
    label: 'Analytics Platforms',
    description: 'Performance tracking and data visualization systems',
  },
];

export const MetricsGrid: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          {...staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          {metrics.map((metric, index) => (
            <motion.div key={index} {...getAnimationProps(fadeInUp)}>
              <Card hover className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">
                {metric.value}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {metric.label}
              </h3>
              <p className="text-sm text-gray-400">
                {metric.description}
              </p>
            </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

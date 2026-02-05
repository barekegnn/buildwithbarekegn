'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { getAllProjects } from '@/lib/projects';
import { ProjectCard } from './ProjectCard';
import { fadeInUp, staggerContainer, getAnimationProps } from '@/lib/animations';

export const FeaturedProjects: React.FC = () => {
  const projects = getAllProjects();

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          {...getAnimationProps(fadeInUp)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Systems</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Production-ready platforms built for real-world institutional challenges
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          {...staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              variant="standard"
              showComplexity={true}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

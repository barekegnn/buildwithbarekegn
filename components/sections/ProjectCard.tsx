'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, Badge } from '@/components/ui';
import type { ProjectSummary } from '@/types';
import { scaleOnHover, getAnimationProps } from '@/lib/animations';

interface ProjectCardProps {
  project: ProjectSummary;
  variant?: 'featured' | 'standard';
  showComplexity?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  variant = 'standard',
  showComplexity = false,
}) => {
  const isFeatured = variant === 'featured';

  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div {...getAnimationProps(scaleOnHover)}>
        <Card 
          hover 
          className={`h-full transition-all duration-300 ${
            isFeatured ? 'lg:col-span-2' : ''
          }`}
        >
        <div className="flex flex-col h-full">
          {/* Project Title */}
          <h3 className={`font-bold mb-2 ${isFeatured ? 'text-2xl' : 'text-xl'}`}>
            {project.title}
          </h3>

          {/* System Type */}
          <p className="text-sm text-blue-400 mb-3">
            {project.systemType}
          </p>

          {/* Description */}
          <p className={`text-gray-400 mb-4 flex-grow ${isFeatured ? 'text-base' : 'text-sm'}`}>
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, isFeatured ? 6 : 4).map((tech, index) => (
              <Badge key={index} variant="accent">
                {tech}
              </Badge>
            ))}
            {project.techStack.length > (isFeatured ? 6 : 4) && (
              <Badge variant="muted">
                +{project.techStack.length - (isFeatured ? 6 : 4)} more
              </Badge>
            )}
          </div>

          {/* Complexity Score (optional) */}
          {showComplexity && project.complexityScore && (
            <div className="pt-4 border-t border-gray-800">
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <p className="text-gray-500 mb-1">Auth</p>
                  <p className="text-gray-300">{project.complexityScore.authentication}</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Data</p>
                  <p className="text-gray-300">{project.complexityScore.dataManagement}</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Dashboard</p>
                  <p className="text-gray-300">{project.complexityScore.dashboard}</p>
                </div>
              </div>
            </div>
          )}

          {/* View Project Link */}
          <div className="mt-4 text-blue-400 text-sm font-medium flex items-center">
            View Project
            <svg
              className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </Card>
      </motion.div>
    </Link>
  );
};

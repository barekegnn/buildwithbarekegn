import React from 'react';
import Link from 'next/link';
import { Card, Badge } from '@/components/ui';
import type { Skill } from '@/types';

interface SkillsGroupProps {
  category: string;
  skills: Skill[];
}

const levelColors = {
  beginner: 'bg-gray-600/20 text-gray-400 border-gray-500/30',
  intermediate: 'bg-blue-600/20 text-blue-400 border-blue-500/30',
  advanced: 'bg-purple-600/20 text-purple-400 border-purple-500/30',
  expert: 'bg-green-600/20 text-green-400 border-green-500/30',
};

const levelLabels = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
  expert: 'Expert',
};

export const SkillsGroup: React.FC<SkillsGroupProps> = ({ category, skills }) => {
  return (
    <div className="mb-12">
      {/* Category Header */}
      <h2 className="text-2xl font-bold mb-6">
        {category}
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <Card key={index} hover>
            {/* Skill Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center">
                {skill.icon && (
                  <span className="text-2xl mr-3">{skill.icon}</span>
                )}
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
              <div className={`px-2 py-1 rounded text-xs font-medium border ${levelColors[skill.level]}`}>
                {levelLabels[skill.level]}
              </div>
            </div>

            {/* Description */}
            {skill.description && (
              <p className="text-sm text-gray-400 mb-4">
                {skill.description}
              </p>
            )}

            {/* Years of Experience */}
            {skill.yearsOfExperience && (
              <div className="text-sm text-gray-500 mb-3">
                {skill.yearsOfExperience} {skill.yearsOfExperience === 1 ? 'year' : 'years'} of experience
              </div>
            )}

            {/* Projects Using This Skill */}
            {skill.projects.length > 0 && (
              <div className="mb-3">
                <div className="text-xs text-gray-500 mb-2">
                  Used in {skill.projects.length} project{skill.projects.length !== 1 ? 's' : ''}
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.projects.map((projectSlug, idx) => (
                    <Link
                      key={idx}
                      href={`/projects/${projectSlug}`}
                      className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Badge>{projectSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</Badge>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Related Skills */}
            {skill.relatedSkills && skill.relatedSkills.length > 0 && (
              <div>
                <div className="text-xs text-gray-500 mb-2">Related Skills</div>
                <div className="flex flex-wrap gap-1">
                  {skill.relatedSkills.map((relatedSkill, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded bg-gray-800/50 text-gray-400"
                    >
                      {relatedSkill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

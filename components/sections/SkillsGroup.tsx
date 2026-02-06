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
    <div className="mb-8">
      {/* Category Header */}
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <span className="text-gradient">{category}</span>
        <span className="ml-3 text-sm text-gray-500">({skills.length} skills)</span>
      </h2>

      {/* Skills Grid - More compact, better balanced */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <Card key={index} hover className="p-4">
            {/* Skill Header - Compact */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {skill.icon && (
                  <span className="text-xl">{skill.icon}</span>
                )}
                <h3 className="text-base font-semibold">{skill.name}</h3>
              </div>
              <div className={`px-2 py-0.5 rounded text-xs font-medium border ${levelColors[skill.level]}`}>
                {levelLabels[skill.level]}
              </div>
            </div>

            {/* Years of Experience - Prominent */}
            {skill.yearsOfExperience && (
              <div className="text-sm font-medium text-blue-400 mb-2">
                {skill.yearsOfExperience} {skill.yearsOfExperience === 1 ? 'year' : 'years'} experience
              </div>
            )}

            {/* Description - Shorter */}
            {skill.description && (
              <p className="text-xs text-gray-400 mb-3 line-clamp-2">
                {skill.description}
              </p>
            )}

            {/* Projects - Compact */}
            {skill.projects.length > 0 && (
              <div className="text-xs text-gray-500 mb-2">
                Used in {skill.projects.length} project{skill.projects.length !== 1 ? 's' : ''}
              </div>
            )}

            {/* Related Skills - Compact */}
            {skill.relatedSkills && skill.relatedSkills.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {skill.relatedSkills.slice(0, 3).map((relatedSkill, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-1.5 py-0.5 rounded bg-gray-800/50 text-gray-500"
                  >
                    {relatedSkill}
                  </span>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { getAllSkillCategories } from '@/lib/skills';
import { Badge } from '@/components/ui';

export default function SkillsPage() {
  const skillCategories = getAllSkillCategories();
  const [activeFilter, setActiveFilter] = useState<string>('All');

  // Get all unique categories
  const categories = ['All', ...skillCategories.map(cat => cat.category)];

  // Filter skills based on active category
  const filteredSkills = activeFilter === 'All' 
    ? skillCategories.flatMap(cat => cat.skills)
    : skillCategories.find(cat => cat.category === activeFilter)?.skills || [];

  return (
    <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Modern technologies I use to build exceptional products
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid - Badge Style */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800 transition-all duration-200 cursor-pointer">
                {skill.icon && (
                  <span className="text-xl">{skill.icon}</span>
                )}
                <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                  {skill.name}
                </span>
                {skill.yearsOfExperience && (
                  <span className="text-xs text-blue-400 ml-1">
                    {skill.yearsOfExperience}y
                  </span>
                )}
              </div>

              {/* Tooltip on Hover */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-xs text-gray-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                {skill.description}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                  <div className="border-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-panel p-4 text-center">
            <div className="text-2xl font-bold text-gradient mb-1">
              {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}
            </div>
            <div className="text-xs text-gray-400">Total Skills</div>
          </div>
          <div className="glass-panel p-4 text-center">
            <div className="text-2xl font-bold text-gradient mb-1">
              {skillCategories.reduce(
                (acc, cat) => acc + cat.skills.filter(s => s.level === 'expert').length,
                0
              )}
            </div>
            <div className="text-xs text-gray-400">Expert Level</div>
          </div>
          <div className="glass-panel p-4 text-center">
            <div className="text-2xl font-bold text-gradient mb-1">
              {skillCategories.reduce(
                (acc, cat) => acc + cat.skills.filter(s => s.level === 'advanced').length,
                0
              )}
            </div>
            <div className="text-xs text-gray-400">Advanced Level</div>
          </div>
          <div className="glass-panel p-4 text-center">
            <div className="text-2xl font-bold text-gradient mb-1">
              {skillCategories.length}
            </div>
            <div className="text-xs text-gray-400">Categories</div>
          </div>
        </div>
      </div>
    </main>
  );
}

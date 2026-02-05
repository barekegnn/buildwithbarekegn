import React from 'react';
import { Card } from '@/components/ui';

interface DashboardItem {
  title: string;
  category: 'admin' | 'analytics' | 'control';
  description: string;
  project: string;
}

const dashboards: DashboardItem[] = [
  {
    title: 'Project Management Dashboard',
    category: 'admin',
    description: 'Enterprise-level project tracking with resource allocation and timeline management',
    project: 'Government PM System',
  },
  {
    title: 'Academic Performance Analytics',
    category: 'analytics',
    description: 'Student performance tracking with AI-powered insights and GPA predictions',
    project: 'HU Freshman',
  },
  {
    title: 'Content Moderation Panel',
    category: 'control',
    description: 'Multi-level moderation system with flagging, review workflows, and quality control',
    project: 'HU Connect',
  },
  {
    title: 'E-commerce Admin Console',
    category: 'admin',
    description: 'Product management, order processing, inventory control, and sales analytics',
    project: 'ShopVerse',
  },
  {
    title: 'User Management System',
    category: 'control',
    description: 'Role-based access control with user permissions and activity monitoring',
    project: 'Government PM System',
  },
  {
    title: 'Community Engagement Metrics',
    category: 'analytics',
    description: 'Q&A platform analytics with reputation tracking and content quality metrics',
    project: 'HU Connect',
  },
];

const categoryColors = {
  admin: 'from-blue-600/20 to-blue-400/20 border-blue-500/30',
  analytics: 'from-purple-600/20 to-purple-400/20 border-purple-500/30',
  control: 'from-green-600/20 to-green-400/20 border-green-500/30',
};

const categoryLabels = {
  admin: 'Admin Panel',
  analytics: 'Analytics Dashboard',
  control: 'Control Panel',
};

export const DashboardGallery: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Dashboard <span className="text-gradient">Showcase</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Enterprise-level admin panels, analytics dashboards, and control interfaces built for production
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboards.map((dashboard, index) => (
            <Card 
              key={index} 
              hover
              className={`bg-gradient-to-br ${categoryColors[dashboard.category]} border`}
            >
              {/* Category Badge */}
              <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-900/50 mb-3">
                {categoryLabels[dashboard.category]}
              </div>

              {/* Dashboard Title */}
              <h3 className="text-lg font-semibold mb-2">
                {dashboard.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 mb-4">
                {dashboard.description}
              </p>

              {/* Project Reference */}
              <div className="text-xs text-gray-500">
                From: <span className="text-blue-400">{dashboard.project}</span>
              </div>

              {/* Placeholder for dashboard image */}
              <div className="mt-4 aspect-video bg-gray-900/50 rounded-lg flex items-center justify-center border border-gray-800">
                <svg
                  className="w-12 h-12 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z"
                  />
                </svg>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

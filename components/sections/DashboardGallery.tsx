import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui';

interface DashboardItem {
  title: string;
  category: 'admin' | 'analytics' | 'control' | 'ecommerce';
  description: string;
  project: string;
  projectSlug: string;
  imagePath: string;
}

const dashboards: DashboardItem[] = [
  {
    title: 'Government Project Management',
    category: 'admin',
    description: 'Enterprise-level admin dashboard with project tracking, resource allocation, and real-time analytics',
    project: 'Ministry of Innovation & Technology',
    projectSlug: 'government-project-management-system',
    imagePath: '/images/MinT-dashboards/gov-pm-admin.jpg',
  },
  {
    title: 'Analytics & Reporting Dashboard',
    category: 'analytics',
    description: 'Advanced analytics platform with data visualization, performance metrics, and predictive insights',
    project: 'Government PM System',
    projectSlug: 'government-project-management-system',
    imagePath: '/images/MinT-dashboards/gov-pm-analytics.jpg',
  },
  {
    title: 'Academic Performance System',
    category: 'analytics',
    description: 'AI-powered academic analytics with GPA tracking, exam management, and student performance insights',
    project: 'HU Freshman App',
    projectSlug: 'hu-freshman',
    imagePath: '/images/FreshApp-dashboards/admin panael.jpg',
  },
  {
    title: 'E-commerce Admin Console',
    category: 'ecommerce',
    description: 'Full-featured e-commerce dashboard with product management, order tracking, and sales analytics',
    project: 'ShopVerse Platform',
    projectSlug: 'shop-verse',
    imagePath: '/images/ShopVerse-dashboards/admin-dashboard.jpg',
  },
  {
    title: 'Community Moderation Panel',
    category: 'control',
    description: 'Advanced content moderation system with user management, tag organization, and quality control',
    project: 'HU Connect Platform',
    projectSlug: 'hu-connect',
    imagePath: '/images/HuConnect-dashboards/admin-dashboard.jpg',
  },
  {
    title: 'Budget & Financial Tracking',
    category: 'admin',
    description: 'Comprehensive financial management with budget allocation, expense tracking, and financial reporting',
    project: 'Government PM System',
    projectSlug: 'government-project-management-system',
    imagePath: '/images/MinT-dashboards/gov-pm-budget.jpg',
  },
];

const categoryColors = {
  admin: 'from-blue-600/20 to-blue-400/20 border-blue-500/30',
  analytics: 'from-purple-600/20 to-purple-400/20 border-purple-500/30',
  control: 'from-green-600/20 to-green-400/20 border-green-500/30',
  ecommerce: 'from-orange-600/20 to-orange-400/20 border-orange-500/30',
};

const categoryLabels = {
  admin: 'Admin Panel',
  analytics: 'Analytics Dashboard',
  control: 'Control Panel',
  ecommerce: 'E-commerce',
};

export const DashboardGallery: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Production-Grade <span className="text-gradient">Dashboard Systems</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Real admin panels, analytics platforms, and control interfaces from deployed production systems
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dashboards.map((dashboard, index) => (
            <Link 
              key={index}
              href={`/projects/${dashboard.projectSlug}`}
              className="group"
            >
              <Card 
                hover
                className={`bg-gradient-to-br ${categoryColors[dashboard.category]} border h-full transition-all duration-300 group-hover:scale-[1.02]`}
              >
                {/* Dashboard Image */}
                <div className="relative aspect-video bg-gray-900/50 rounded-lg overflow-hidden mb-4 border border-gray-800">
                  <Image
                    src={dashboard.imagePath}
                    alt={dashboard.title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Category Badge */}
                <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-900/50 mb-3">
                  {categoryLabels[dashboard.category]}
                </div>

                {/* Dashboard Title */}
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  {dashboard.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                  {dashboard.description}
                </p>

                {/* Project Reference */}
                <div className="text-xs text-gray-500 flex items-center gap-2">
                  <span>From:</span>
                  <span className="text-blue-400 font-medium">{dashboard.project}</span>
                  <svg 
                    className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            <span>Explore All Projects & Dashboards</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

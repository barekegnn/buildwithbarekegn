'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { getAllCapabilities } from '@/lib/capabilities';
import Link from 'next/link';

export default function SystemsPage() {
  const capabilities = getAllCapabilities();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(capabilities.map(c => c.category)))];
  
  const categoryLabels: Record<string, string> = {
    'All': 'All',
    'multi-role': 'Multi-Role',
    'admin-panels': 'Admin Panels',
    'analytics': 'Analytics',
    'notifications': 'Notifications',
    'messaging': 'Messaging',
    'financial-tracking': 'Financial',
  };

  // Filter capabilities
  const filteredCapabilities = activeCategory === 'All' 
    ? capabilities 
    : capabilities.filter(c => c.category === activeCategory);

  const categoryIcons: Record<string, string> = {
    'multi-role': '🔐',
    'admin-panels': '⚙️',
    'analytics': '📊',
    'notifications': '🔔',
    'messaging': '💬',
    'financial-tracking': '💰',
  };

  return (
    <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Systems <span className="text-gradient">Showcase</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Cross-project engineering capabilities proven in production
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {categoryLabels[category] || category}
            </button>
          ))}
        </div>

        {/* Capabilities Grid - Compact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCapabilities.map((capability) => (
            <div
              key={capability.id}
              className="glass-panel p-6 rounded-lg hover:border-blue-500/50 transition-all duration-200"
            >
              {/* Icon & Title */}
              <div className="flex items-start gap-3 mb-4">
                <span className="text-3xl">{categoryIcons[capability.category]}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1">{capability.title}</h3>
                  <p className="text-xs text-gray-400 line-clamp-2">{capability.description}</p>
                </div>
              </div>

              {/* Technical Highlights */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-500 mb-2">Key Features</h4>
                <div className="flex flex-wrap gap-1">
                  {capability.technicalDetails.slice(0, 3).map((detail, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-gray-800/50 text-gray-400 border border-gray-700"
                      title={detail}
                    >
                      {detail.split(' ').slice(0, 3).join(' ')}...
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Examples */}
              <div>
                <h4 className="text-xs font-semibold text-gray-500 mb-2">
                  Used in {capability.examples.length} Project{capability.examples.length !== 1 ? 's' : ''}
                </h4>
                <div className="space-y-2">
                  {capability.examples.map((example, index) => (
                    <Link
                      key={index}
                      href={`/projects/${example.projectSlug}`}
                      className="block text-xs text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      → {example.projectTitle}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          <div className="glass-panel p-4 text-center">
            <div className="text-2xl font-bold text-gradient mb-1">6</div>
            <div className="text-xs text-gray-400">Capabilities</div>
          </div>
          <div className="glass-panel p-4 text-center">
            <div className="text-2xl font-bold text-gradient mb-1">4</div>
            <div className="text-xs text-gray-400">Projects</div>
          </div>
          <div className="glass-panel p-4 text-center">
            <div className="text-2xl font-bold text-gradient mb-1">15+</div>
            <div className="text-xs text-gray-400">Examples</div>
          </div>
          <div className="glass-panel p-4 text-center">
            <div className="text-2xl font-bold text-gradient mb-1">12+</div>
            <div className="text-xs text-gray-400">User Roles</div>
          </div>
          <div className="glass-panel p-4 text-center">
            <div className="text-2xl font-bold text-gradient mb-1">8+</div>
            <div className="text-xs text-gray-400">Dashboards</div>
          </div>
          <div className="glass-panel p-4 text-center">
            <div className="text-2xl font-bold text-gradient mb-1">100%</div>
            <div className="text-xs text-gray-400">Production</div>
          </div>
        </div>

        {/* Technical Approach */}
        <div className="glass-panel p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Technical <span className="text-gradient">Approach</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-2">🏗️</span>
                Architecture Principles
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Modular, scalable system design
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Security-first authentication
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Real-time data synchronization
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Performance optimization
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-2">⚡</span>
                Development Standards
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 text-purple-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  TypeScript for type safety
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 text-purple-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  RESTful API design patterns
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 text-purple-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Comprehensive error handling
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 text-purple-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Responsive, accessible UI
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

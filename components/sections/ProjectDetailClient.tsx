'use client';

import React, { useState } from 'react';
import { Button, Card, Badge } from '@/components/ui';
import { trackExternalLink, trackCTAClick } from '@/lib/analytics';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { Project } from '@/types';

interface ExternalLinkButtonProps {
  href: string;
  type: 'demo' | 'github';
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function ExternalLinkButton({ href, type, variant = 'primary', children }: ExternalLinkButtonProps) {
  const handleClick = () => {
    trackExternalLink(href, type);
  };

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      <Button variant={variant}>
        {children}
      </Button>
    </a>
  );
}

interface CTAButtonProps {
  href: string;
  ctaName: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function CTAButton({ href, ctaName, variant = 'primary', children }: CTAButtonProps) {
  const handleClick = () => {
    trackCTAClick(ctaName, 'Project Detail Page');
  };

  return (
    <a href={href} onClick={handleClick}>
      <Button variant={variant}>
        {children}
      </Button>
    </a>
  );
}

interface ProjectDetailClientProps {
  project: Project;
  mdxContent: any;
}

export function ProjectDetailClient({ project, mdxContent }: ProjectDetailClientProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📋' },
    { id: 'dashboards', label: 'Dashboards', icon: '📊' },
    { id: 'features', label: 'Features', icon: '⚡' },
    { id: 'architecture', label: 'Architecture', icon: '🏗️' },
  ];

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-800 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-fadeIn">
            <Card>
              <h3 className="text-xl font-bold mb-3">Problem Context</h3>
              <p className="text-gray-300 leading-relaxed text-sm">{project.problemContext}</p>
            </Card>

            <Card className="bg-gradient-to-br from-green-600/10 to-blue-600/10 border border-green-500/20">
              <h3 className="text-xl font-bold mb-3">Outcome & Impact</h3>
              <p className="text-gray-300 leading-relaxed text-sm">{project.outcome}</p>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold mb-3">Engineering Challenges</h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start text-gray-300 text-sm">
                    <svg className="w-5 h-5 mr-2 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {challenge}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        )}

        {/* Dashboards Tab */}
        {activeTab === 'dashboards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
            {project.dashboards.map((dashboard, index) => (
              <Card key={index} hover className="group">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold">{dashboard.title}</h3>
                  <Badge className="text-xs">{dashboard.type}</Badge>
                </div>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">{dashboard.description}</p>
                
                <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 group-hover:border-blue-500/50 transition-all duration-200">
                  <img 
                    src={dashboard.imagePath} 
                    alt={dashboard.title}
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Features Tab */}
        {activeTab === 'features' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
            {project.features.map((feature, index) => (
              <Card key={index} hover>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <Badge className="text-xs">{feature.category}</Badge>
                </div>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        )}

        {/* Architecture Tab */}
        {activeTab === 'architecture' && (
          <div className="space-y-6 animate-fadeIn">
            <Card>
              <h3 className="text-xl font-bold mb-3">System Architecture</h3>
              <p className="text-gray-300 leading-relaxed text-sm mb-6">{project.architectureSummary}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-gray-400">System Modules</h4>
                  <ul className="space-y-2">
                    {project.modules.map((module, index) => (
                      <li key={index} className="flex items-start text-gray-300 text-sm">
                        <svg className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {module}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import { Card, Badge } from '@/components/ui';
import type { SystemCapability } from '@/types';

interface SystemCapabilityCardProps {
  capability: SystemCapability;
}

const categoryColors = {
  'multi-role': 'from-blue-600/20 to-blue-400/20 border-blue-500/30',
  'admin-panels': 'from-purple-600/20 to-purple-400/20 border-purple-500/30',
  'analytics': 'from-green-600/20 to-green-400/20 border-green-500/30',
  'notifications': 'from-yellow-600/20 to-yellow-400/20 border-yellow-500/30',
  'messaging': 'from-pink-600/20 to-pink-400/20 border-pink-500/30',
  'financial-tracking': 'from-indigo-600/20 to-indigo-400/20 border-indigo-500/30',
};

const categoryLabels = {
  'multi-role': 'Multi-Role Systems',
  'admin-panels': 'Admin Control Panels',
  'analytics': 'Analytics Dashboards',
  'notifications': 'Notification Systems',
  'messaging': 'Messaging Systems',
  'financial-tracking': 'Financial Tracking',
};

export const SystemCapabilityCard: React.FC<SystemCapabilityCardProps> = ({ capability }) => {
  return (
    <Card className={`bg-gradient-to-br ${categoryColors[capability.category]} border`}>
      {/* Category Badge */}
      <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-900/50 mb-4">
        {categoryLabels[capability.category]}
      </div>

      {/* Capability Title */}
      <h3 className="text-2xl font-bold mb-3">
        {capability.title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 mb-6">
        {capability.description}
      </p>

      {/* Technical Details */}
      {capability.technicalDetails.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-400 mb-3">Technical Implementation</h4>
          <ul className="space-y-2">
            {capability.technicalDetails.map((detail, index) => (
              <li key={index} className="flex items-start text-sm text-gray-300">
                <svg
                  className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Project Examples */}
      <div>
        <h4 className="text-sm font-semibold text-gray-400 mb-3">
          Implemented In {capability.examples.length} Project{capability.examples.length !== 1 ? 's' : ''}
        </h4>
        <div className="space-y-4">
          {capability.examples.map((example, index) => (
            <div
              key={index}
              className="glass-panel p-4 rounded-lg hover:bg-white/5 transition-colors"
            >
              {/* Project Title with Link */}
              <Link
                href={`/projects/${example.projectSlug}`}
                className="text-blue-400 hover:text-blue-300 font-medium mb-2 inline-flex items-center group"
              >
                {example.projectTitle}
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
              </Link>

              {/* Implementation Details */}
              <p className="text-sm text-gray-400">
                {example.implementation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

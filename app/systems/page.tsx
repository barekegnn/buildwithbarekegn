import { Metadata } from 'next';
import { getAllCapabilities } from '@/lib/capabilities';
import { SystemCapabilityCard } from '@/components/sections/SystemCapabilityCard';

export const metadata: Metadata = {
  title: 'Systems Showcase',
  description: 'Cross-project engineering capabilities demonstrating expertise in multi-role authentication, admin control panels, analytics dashboards, notification systems, messaging infrastructure, and financial tracking.',
  openGraph: {
    title: 'Systems Showcase | Barekegn Asefa - Systems Engineer',
    description: 'Cross-project engineering capabilities demonstrating expertise in multi-role authentication, admin control panels, analytics dashboards, notification systems, messaging infrastructure, and financial tracking.',
    type: 'website',
  },
};

export default function SystemsPage() {
  const capabilities = getAllCapabilities();

  return (
    <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Systems <span className="text-gradient">Showcase</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Cross-project engineering capabilities demonstrating consistent expertise in building 
            complex systems. Each capability is implemented across multiple production projects, 
            showcasing depth of technical knowledge and architectural consistency.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {capabilities.map((capability) => (
            <SystemCapabilityCard key={capability.id} capability={capability} />
          ))}
        </div>

        {/* Summary Stats */}
        <div className="glass-panel p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Engineering <span className="text-gradient">Capabilities</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">6</div>
              <div className="text-sm text-gray-400">System Capabilities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">4</div>
              <div className="text-sm text-gray-400">Production Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">15+</div>
              <div className="text-sm text-gray-400">Implementation Examples</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">12+</div>
              <div className="text-sm text-gray-400">User Roles Managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">8+</div>
              <div className="text-sm text-gray-400">Admin Dashboards</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">100%</div>
              <div className="text-sm text-gray-400">Production Ready</div>
            </div>
          </div>
        </div>

        {/* Technical Approach */}
        <div className="mt-16 glass-panel p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">
            Technical <span className="text-gradient">Approach</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">Architecture Principles</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Modular, scalable system design
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Security-first authentication
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Real-time data synchronization
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Performance optimization
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">Development Standards</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-purple-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  TypeScript for type safety
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-purple-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  RESTful API design patterns
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-purple-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Comprehensive error handling
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-purple-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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

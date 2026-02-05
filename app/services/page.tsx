import { Metadata } from 'next';
import { getAllServices } from '@/lib/services';
import { ServiceCard } from '@/components/sections/ServiceCard';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Professional development services including full-stack platform development, admin dashboard systems, SaaS MVP development, institutional system development, and custom web application engineering.',
  openGraph: {
    title: 'Services | Barekegn Asefa - Systems Engineer',
    description: 'Professional development services including full-stack platform development, admin dashboard systems, SaaS MVP development, institutional system development, and custom web application engineering.',
    type: 'website',
  },
};

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Development <span className="text-gradient">Services</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Professional full-stack development services for startups, institutions, and enterprises. 
            From MVP development to complex institutional systems, delivering production-ready solutions 
            with comprehensive documentation and support.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Why Work With Me */}
        <div className="glass-panel p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Why Work <span className="text-gradient">With Me</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold mb-2">Production Focus</h3>
              <p className="text-sm text-gray-400">
                Every project is built with production deployment in mind, ensuring scalability and maintainability
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📚</div>
              <h3 className="text-lg font-semibold mb-2">Comprehensive Documentation</h3>
              <p className="text-sm text-gray-400">
                Detailed technical documentation, API docs, and user guides for seamless handoff and maintenance
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-lg font-semibold mb-2">Collaborative Approach</h3>
              <p className="text-sm text-gray-400">
                Regular communication, iterative feedback, and transparent progress tracking throughout development
              </p>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="glass-panel p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Technology <span className="text-gradient">Stack</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl mb-2">⚛️</div>
              <div className="text-sm font-medium">React & Next.js</div>
            </div>
            <div>
              <div className="text-3xl mb-2">🟢</div>
              <div className="text-sm font-medium">Node.js & Express</div>
            </div>
            <div>
              <div className="text-3xl mb-2">🍃</div>
              <div className="text-sm font-medium">MongoDB & Firebase</div>
            </div>
            <div>
              <div className="text-3xl mb-2">📘</div>
              <div className="text-sm font-medium">TypeScript</div>
            </div>
            <div>
              <div className="text-3xl mb-2">🎨</div>
              <div className="text-sm font-medium">Tailwind CSS</div>
            </div>
            <div>
              <div className="text-3xl mb-2">🔐</div>
              <div className="text-sm font-medium">JWT & OAuth</div>
            </div>
            <div>
              <div className="text-3xl mb-2">▲</div>
              <div className="text-sm font-medium">Vercel Deployment</div>
            </div>
            <div>
              <div className="text-3xl mb-2">📦</div>
              <div className="text-sm font-medium">Git & CI/CD</div>
            </div>
          </div>
        </div>

        {/* Process Overview */}
        <div className="glass-panel p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Development <span className="text-gradient">Process</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Initial Consultation</h3>
                  <p className="text-sm text-gray-400">
                    Free consultation to discuss your project goals, requirements, and technical feasibility
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Proposal & Planning</h3>
                  <p className="text-sm text-gray-400">
                    Detailed project proposal with timeline, milestones, and pricing
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Iterative Development</h3>
                  <p className="text-sm text-gray-400">
                    Regular sprints with demos, feedback incorporation, and progress updates
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Testing & Refinement</h3>
                  <p className="text-sm text-gray-400">
                    Comprehensive testing, bug fixes, and performance optimization
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center font-bold mr-4">
                  5
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Deployment & Handoff</h3>
                  <p className="text-sm text-gray-400">
                    Production deployment, documentation delivery, and knowledge transfer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center glass-panel p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start <span className="text-gradient">Your Project?</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with a production-ready solution. 
            Schedule a free consultation to explore your project requirements.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
          >
            Schedule Free Consultation
          </a>
        </div>
      </div>
    </main>
  );
}

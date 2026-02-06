'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { getAllServices } from '@/lib/services';
import Link from 'next/link';

export default function ServicesPage() {
  const services = getAllServices();
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Development <span className="text-gradient">Services</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Fast, production-ready solutions for startups and enterprises
          </p>
        </div>

        {/* Services Grid - Compact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="glass-panel p-6 rounded-lg hover:border-blue-500/50 transition-all duration-200 cursor-pointer"
              onClick={() => toggleService(service.id)}
            >
              {/* Service Header */}
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-blue-400 mb-3">{service.tagline}</p>
                <p className="text-sm text-gray-400 line-clamp-2">{service.description}</p>
              </div>

              {/* Timeline & Pricing */}
              <div className="flex gap-4 mb-4 text-sm">
                <div className="flex-1">
                  <div className="text-xs text-gray-500 mb-1">Timeline</div>
                  <div className="font-medium text-blue-400">{service.timeline}</div>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-500 mb-1">Pricing</div>
                  <div className="font-medium text-purple-400">Custom</div>
                </div>
              </div>

              {/* Expand/Collapse Indicator */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  {expandedService === service.id ? 'Click to collapse' : 'Click for details'}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                    expandedService === service.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Expanded Content */}
              {expandedService === service.id && (
                <div className="mt-6 pt-6 border-t border-gray-700/50 space-y-4">
                  {/* Key Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 5).map((feature, index) => (
                        <li key={index} className="flex items-start text-xs text-gray-300">
                          <svg className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Deliverables</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map((deliverable, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 rounded-full bg-gray-800/50 text-gray-300 border border-gray-700"
                        >
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={service.cta.href}
                    className="block w-full text-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {service.cta.text}
                  </Link>
                </div>
              )}
            </div>
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

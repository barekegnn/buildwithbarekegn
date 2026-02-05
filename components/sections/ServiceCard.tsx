import React from 'react';
import Link from 'next/link';
import { Card, Button } from '@/components/ui';
import type { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Card hover className="h-full flex flex-col">
      {/* Service Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
        <p className="text-blue-400 text-sm mb-3">{service.tagline}</p>
        <p className="text-gray-300">{service.description}</p>
      </div>

      {/* Features */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features</h4>
        <ul className="space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-300">
              <svg
                className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Engagement Process */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-400 mb-3">Engagement Process</h4>
        <div className="space-y-3">
          {service.process.map((step, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-sm font-bold mr-3">
                {step.step}
              </div>
              <div>
                <div className="font-medium text-sm mb-1">{step.title}</div>
                <div className="text-xs text-gray-400">{step.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deliverables */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-400 mb-3">Deliverables</h4>
        <div className="flex flex-wrap gap-2">
          {service.deliverables.map((deliverable, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full bg-gray-800/50 text-gray-300 border border-gray-700"
            >
              {deliverable}
            </span>
          ))}
        </div>
      </div>

      {/* Timeline & Pricing */}
      <div className="mb-6 flex gap-4">
        {service.timeline && (
          <div className="flex-1">
            <div className="text-xs text-gray-500 mb-1">Timeline</div>
            <div className="text-sm font-medium">{service.timeline}</div>
          </div>
        )}
        {service.pricing && (
          <div className="flex-1">
            <div className="text-xs text-gray-500 mb-1">Pricing</div>
            <div className="text-sm font-medium">
              {service.pricing.range || service.pricing.type}
            </div>
          </div>
        )}
      </div>

      {/* CTA Button */}
      <div className="mt-auto">
        <Link href={service.cta.href}>
          <Button variant={service.cta.variant} className="w-full">
            {service.cta.text}
          </Button>
        </Link>
      </div>
    </Card>
  );
};

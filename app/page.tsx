'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { MetricsGrid } from '@/components/sections/MetricsGrid';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { EngineeringApproach } from '@/components/sections/EngineeringApproach';
import { DashboardGallery } from '@/components/sections/DashboardGallery';
import { TechStackGrid } from '@/components/sections/TechStackGrid';
import { Button } from '@/components/ui';
import Link from 'next/link';
import { trackCTAClick } from '@/lib/analytics';

export default function Home() {
  const handleCTAClick = (ctaName: string) => {
    trackCTAClick(ctaName, 'Home Page - Final CTA');
  };

  return (
    <>
      <HeroSection />
      <MetricsGrid />
      <FeaturedProjects />
      <EngineeringApproach />
      <DashboardGallery />
      <TechStackGrid />
      
      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Let's Build Systems <span className="text-gradient">That Scale</span>
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Ready to transform your vision into a production-ready platform? 
            Let's discuss how we can build scalable systems together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                variant="primary"
                onClick={() => handleCTAClick('Start a Project')}
              >
                Start a Project
              </Button>
            </Link>
            <Link href="/services">
              <Button 
                variant="secondary"
                onClick={() => handleCTAClick('View Services')}
              >
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

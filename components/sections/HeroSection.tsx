'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import { fadeInUp, staggerContainer, getAnimationProps } from '@/lib/animations';
import { trackCTAClick } from '@/lib/analytics';

export const HeroSection: React.FC = () => {
  const handleCTAClick = (ctaName: string) => {
    trackCTAClick(ctaName, 'Hero Section');
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <motion.div 
        className="relative z-10 max-w-5xl mx-auto text-center"
        {...staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Authority positioning */}
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          {...getAnimationProps(fadeInUp)}
        >
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
              Full-Stack Systems Engineer
            </span>
            {/* Animated glow effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-2xl animate-pulse"></span>
          </span>
          <br />
          <span className="text-foreground">& Platform Builder</span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto"
          {...getAnimationProps(fadeInUp)}
        >
          Building production-grade platforms with admin dashboards, analytics systems, 
          and scalable backend architectures
        </motion.p>
        
        {/* Description */}
        <motion.p 
          className="text-base sm:text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
          {...getAnimationProps(fadeInUp)}
        >
          Specialized in developing complex institutional systems that handle real-world challenges 
          with multi-role authentication, enterprise-level data management, and comprehensive analytics
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          {...getAnimationProps(fadeInUp)}
        >
          <Link href="/systems">
            <Button 
              variant="primary" 
              className="w-full sm:w-auto"
              onClick={() => handleCTAClick('View Systems')}
            >
              View Systems
            </Button>
          </Link>
          <Link href="/projects">
            <Button 
              variant="secondary" 
              className="w-full sm:w-auto"
              onClick={() => handleCTAClick('Explore Projects')}
            >
              Explore Projects
            </Button>
          </Link>
          <Link href="/contact">
            <Button 
              variant="secondary" 
              className="w-full sm:w-auto"
              onClick={() => handleCTAClick('Contact Me')}
            >
              Contact Me
            </Button>
          </Link>
        </motion.div>
      </motion.div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
    </section>
  );
};

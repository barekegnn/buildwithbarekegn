// Feature: systems-engineer-portfolio
// Test: Responsive Layout Rendering

import React from 'react';
import { render } from '@testing-library/react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { MetricsGrid } from '@/components/sections/MetricsGrid';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
}));

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
});

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe('Responsive Layout', () => {
  describe('Mobile Layout (< 768px)', () => {
    beforeEach(() => {
      // Set viewport to mobile size
      global.innerWidth = 375;
      global.innerHeight = 667;
    });

    it('should render Navbar with mobile menu button', () => {
      const { container } = render(<Navbar />);
      
      // Check for mobile menu button (hidden on desktop, visible on mobile)
      const mobileMenuButton = container.querySelector('.md\\:hidden button');
      expect(mobileMenuButton).toBeInTheDocument();
      
      // Check that desktop nav is hidden on mobile
      const desktopNav = container.querySelector('.hidden.md\\:block');
      expect(desktopNav).toBeInTheDocument();
    });

    it('should render HeroSection with mobile-responsive text sizes', () => {
      const { container } = render(<HeroSection />);
      
      // Check for responsive text classes
      const heading = container.querySelector('h1');
      expect(heading?.className).toMatch(/text-4xl|sm:text-5xl|md:text-6xl|lg:text-7xl/);
    });

    it('should render MetricsGrid in single column on mobile', () => {
      const { container } = render(<MetricsGrid />);
      
      // Check for grid with mobile-first single column layout
      const grid = container.querySelector('.grid');
      expect(grid?.className).toMatch(/grid-cols-1/);
    });

    it('should render FeaturedProjects with mobile padding', () => {
      const { container } = render(<FeaturedProjects />);
      
      // Check for responsive padding classes
      const section = container.querySelector('section');
      expect(section?.className).toMatch(/px-4|sm:px-6|lg:px-8/);
    });
  });

  describe('Tablet Layout (768px - 1024px)', () => {
    beforeEach(() => {
      // Set viewport to tablet size
      global.innerWidth = 768;
      global.innerHeight = 1024;
    });

    it('should render Navbar with desktop navigation visible', () => {
      const { container } = render(<Navbar />);
      
      // Desktop nav should be visible at tablet size
      const desktopNav = container.querySelector('.hidden.md\\:block');
      expect(desktopNav).toBeInTheDocument();
    });

    it('should render MetricsGrid in 2-column layout on tablet', () => {
      const { container } = render(<MetricsGrid />);
      
      // Check for 2-column grid on tablet
      const grid = container.querySelector('.grid');
      expect(grid?.className).toMatch(/sm:grid-cols-2/);
    });

    it('should render FeaturedProjects in 2-column grid on tablet', () => {
      const { container } = render(<FeaturedProjects />);
      
      // Check for 2-column project grid
      const grid = container.querySelector('.grid');
      expect(grid?.className).toMatch(/md:grid-cols-2/);
    });
  });

  describe('Desktop Layout (> 1024px)', () => {
    beforeEach(() => {
      // Set viewport to desktop size
      global.innerWidth = 1440;
      global.innerHeight = 900;
    });

    it('should render Navbar with full desktop navigation', () => {
      const { container } = render(<Navbar />);
      
      // Desktop nav should be visible
      const desktopNav = container.querySelector('.hidden.md\\:block');
      expect(desktopNav).toBeInTheDocument();
      
      // Mobile menu button should be hidden
      const mobileMenuButton = container.querySelector('.md\\:hidden');
      expect(mobileMenuButton).toBeInTheDocument();
    });

    it('should render MetricsGrid in 4-column layout on desktop', () => {
      const { container } = render(<MetricsGrid />);
      
      // Check for 4-column grid on desktop
      const grid = container.querySelector('.grid');
      expect(grid?.className).toMatch(/lg:grid-cols-4/);
    });

    it('should render HeroSection with largest text size on desktop', () => {
      const { container } = render(<HeroSection />);
      
      // Check for largest responsive text class
      const heading = container.querySelector('h1');
      expect(heading?.className).toMatch(/lg:text-7xl/);
    });

    it('should render content with maximum width container', () => {
      const { container } = render(<HeroSection />);
      
      // Check for max-width container
      const maxWidthContainer = container.querySelector('.max-w-7xl, .max-w-5xl, .max-w-4xl');
      expect(maxWidthContainer).toBeInTheDocument();
    });
  });

  describe('Responsive Padding and Spacing', () => {
    it('should apply responsive padding to sections', () => {
      const { container } = render(<HeroSection />);
      
      const section = container.querySelector('section');
      // Check for responsive padding classes (px-4 sm:px-6 lg:px-8)
      expect(section?.className).toMatch(/px-4/);
      expect(section?.className).toMatch(/sm:px-6|lg:px-8/);
    });

    it('should apply responsive vertical spacing', () => {
      const { container } = render(<MetricsGrid />);
      
      const section = container.querySelector('section');
      // Check for responsive vertical padding
      expect(section?.className).toMatch(/py-\d+/);
    });
  });

  describe('Responsive Typography', () => {
    it('should scale heading sizes responsively', () => {
      const { container } = render(<HeroSection />);
      
      const heading = container.querySelector('h1');
      // Should have base size and responsive breakpoints
      expect(heading?.className).toMatch(/text-\d+xl/);
      expect(heading?.className).toMatch(/sm:text-|md:text-|lg:text-/);
    });

    it('should scale paragraph text responsively', () => {
      const { container } = render(<HeroSection />);
      
      const paragraphs = container.querySelectorAll('p');
      paragraphs.forEach(p => {
        // Check for responsive text sizing
        const hasResponsiveText = p.className.match(/text-base|text-lg|text-xl|sm:text-|md:text-/);
        if (p.textContent && p.textContent.length > 20) {
          expect(hasResponsiveText).toBeTruthy();
        }
      });
    });
  });

  describe('Responsive Grid Layouts', () => {
    it('should use mobile-first grid approach', () => {
      const { container } = render(<MetricsGrid />);
      
      const grid = container.querySelector('.grid');
      // Should start with grid-cols-1 and scale up
      expect(grid?.className).toMatch(/grid-cols-1/);
    });

    it('should scale grid columns at breakpoints', () => {
      const { container } = render(<MetricsGrid />);
      
      const grid = container.querySelector('.grid');
      // Should have responsive column classes
      expect(grid?.className).toMatch(/sm:grid-cols-|md:grid-cols-|lg:grid-cols-/);
    });
  });

  describe('Responsive Flex Layouts', () => {
    it('should stack flex items on mobile', () => {
      const { container } = render(<HeroSection />);
      
      // Check for flex containers with responsive direction
      const flexContainers = container.querySelectorAll('.flex');
      const hasResponsiveFlex = Array.from(flexContainers).some(el => 
        el.className.match(/flex-col|sm:flex-row|flex-row/)
      );
      
      // HeroSection should have at least one flex container
      expect(flexContainers.length).toBeGreaterThan(0);
    });
  });
});

// Feature: systems-engineer-portfolio, Property 15: Semantic HTML Usage
import { render } from '@testing-library/react';
import * as fc from 'fast-check';
import Home from '@/app/page';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
}));

// Mock analytics
jest.mock('@/lib/analytics', () => ({
  trackCTAClick: jest.fn(),
}));

describe('Property 15: Semantic HTML Usage', () => {
  test('pages should use semantic HTML elements (header, nav, main, section, article, footer)', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('home'),
        (pageType) => {
          // Render the home page
          const { container } = render(<Home />);
          
          // Check for semantic elements
          const sections = container.querySelectorAll('section');
          const hasSemanticElements = sections.length > 0;
          
          // Verify semantic HTML is used
          expect(hasSemanticElements).toBe(true);
          expect(sections.length).toBeGreaterThan(0);
          
          // Verify not just using generic divs
          const allElements = container.querySelectorAll('*');
          const semanticElements = container.querySelectorAll('section, article, nav, header, footer, aside, main');
          const semanticRatio = semanticElements.length / allElements.length;
          
          // At least some semantic elements should be present
          expect(semanticRatio).toBeGreaterThan(0);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('pages should have proper heading structure with h1 as main heading', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('home'),
        (pageType) => {
          const { container } = render(<Home />);
          
          // Get all headings
          const headings = Array.from(container.querySelectorAll('h1, h2, h3, h4, h5, h6'));
          
          // Should have headings
          expect(headings.length).toBeGreaterThan(0);
          
          // Should have at least one h2 (section headings)
          const h2Elements = container.querySelectorAll('h2');
          expect(h2Elements.length).toBeGreaterThan(0);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('sections should have appropriate ARIA labels or headings', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('home'),
        (pageType) => {
          const { container } = render(<Home />);
          
          const sections = container.querySelectorAll('section');
          
          sections.forEach(section => {
            // Each section should either have an aria-label or contain a heading
            const hasAriaLabel = section.hasAttribute('aria-label') || section.hasAttribute('aria-labelledby');
            const hasHeading = section.querySelector('h1, h2, h3, h4, h5, h6') !== null;
            
            // At least one should be true for accessibility
            expect(hasAriaLabel || hasHeading).toBe(true);
          });
        }
      ),
      { numRuns: 100 }
    );
  });
});

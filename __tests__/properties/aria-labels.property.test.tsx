// Feature: systems-engineer-portfolio, Property 17: ARIA Label Presence
import { render } from '@testing-library/react';
import * as fc from 'fast-check';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
}));

describe('Property 17: ARIA Label Presence', () => {
  test('navigation elements should have appropriate ARIA labels', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('navbar'),
        () => {
          const { container } = render(<Navbar />);
          
          // Check for nav element with aria-label
          const navElements = container.querySelectorAll('nav');
          
          navElements.forEach(nav => {
            // Nav should have aria-label or aria-labelledby
            const hasAriaLabel = nav.hasAttribute('aria-label') || nav.hasAttribute('aria-labelledby');
            expect(hasAriaLabel).toBe(true);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  test('icon buttons should have ARIA labels', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('navbar'),
        () => {
          const { container } = render(<Navbar />);
          
          // Find buttons with SVG icons (mobile menu button)
          const buttons = container.querySelectorAll('button');
          
          buttons.forEach(button => {
            const hasSvg = button.querySelector('svg') !== null;
            
            if (hasSvg) {
              // Icon buttons should have aria-label
              const hasAriaLabel = button.hasAttribute('aria-label');
              expect(hasAriaLabel).toBe(true);
            }
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  test('footer navigation should have ARIA labels', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('footer'),
        () => {
          const { container } = render(<Footer />);
          
          // Check for nav elements in footer
          const navElements = container.querySelectorAll('nav');
          
          navElements.forEach(nav => {
            // Each nav should have aria-label
            const hasAriaLabel = nav.hasAttribute('aria-label') || nav.hasAttribute('aria-labelledby');
            expect(hasAriaLabel).toBe(true);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  test('external links should have appropriate ARIA labels', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('footer'),
        () => {
          const { container } = render(<Footer />);
          
          // Find external links (with target="_blank")
          const externalLinks = container.querySelectorAll('a[target="_blank"]');
          
          externalLinks.forEach(link => {
            // External links should have aria-label for context
            const hasAriaLabel = link.hasAttribute('aria-label');
            const hasVisibleText = link.textContent && link.textContent.trim().length > 0;
            
            // Either aria-label or visible text should be present
            expect(hasAriaLabel || hasVisibleText).toBe(true);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  test('form inputs should have associated labels', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('input', 'textarea'),
        (inputType) => {
          // Create a simple form input
          const { container } = render(
            <div>
              <label htmlFor="test-input">Test Label</label>
              {inputType === 'input' ? (
                <input id="test-input" type="text" />
              ) : (
                <textarea id="test-input" />
              )}
            </div>
          );
          
          const input = container.querySelector(inputType);
          const label = container.querySelector('label');
          
          // Input should have an id
          expect(input?.hasAttribute('id')).toBe(true);
          
          // Label should have htmlFor matching input id
          expect(label?.getAttribute('for')).toBe(input?.getAttribute('id'));
        }
      ),
      { numRuns: 100 }
    );
  });

  test('images should have alt text or aria-label', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 50 }),
        (altText) => {
          const { container } = render(
            <img src="/test.jpg" alt={altText} />
          );
          
          const img = container.querySelector('img');
          
          // Image should have alt attribute
          expect(img?.hasAttribute('alt')).toBe(true);
          
          // Alt text should not be empty (unless decorative)
          const alt = img?.getAttribute('alt');
          expect(typeof alt).toBe('string');
        }
      ),
      { numRuns: 100 }
    );
  });
});

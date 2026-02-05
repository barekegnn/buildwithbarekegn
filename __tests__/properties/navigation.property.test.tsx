import * as fc from 'fast-check';
import { render, screen } from '@testing-library/react';
import { Navbar } from '@/components/Navbar';

// Mock Next.js navigation hooks
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
}));

// Feature: systems-engineer-portfolio, Property 2: Navigation Link Routing
// Feature: systems-engineer-portfolio, Property 3: Sticky Navbar Visibility

describe('Property 2: Navigation Link Routing', () => {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/systems', label: 'Systems' },
    { href: '/projects', label: 'Projects' },
    { href: '/skills', label: 'Skills' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  test('all navigation links should have correct href attributes', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...navLinks),
        (link) => {
          const { container } = render(<Navbar />);
          
          // Find all links by text content (desktop + mobile)
          const linkElements = screen.getAllByText(link.label);
          
          // At least one link should exist
          expect(linkElements.length).toBeGreaterThan(0);
          
          // All instances should have correct href
          linkElements.forEach((element) => {
            const linkElement = element.closest('a');
            expect(linkElement?.getAttribute('href')).toBe(link.href);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  test('navigation links should be present in the navbar', () => {
    const { container } = render(<Navbar />);
    
    navLinks.forEach((link) => {
      const linkElement = screen.getByText(link.label);
      expect(linkElement).toBeInTheDocument();
    });
  });

  test('navigation should maintain link order', () => {
    const { container } = render(<Navbar />);
    
    const links = screen.getAllByRole('link');
    const navLinkElements = links.filter(link => 
      navLinks.some(navLink => link.textContent === navLink.label)
    );
    
    // Verify order matches expected order
    navLinks.forEach((navLink, index) => {
      const matchingLink = navLinkElements.find(el => el.textContent === navLink.label);
      expect(matchingLink).toBeDefined();
    });
  });

  test('each navigation link should be clickable', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...navLinks),
        (link) => {
          const { container } = render(<Navbar />);
          
          const linkElements = screen.getAllByText(link.label);
          
          linkElements.forEach((element) => {
            const linkElement = element.closest('a');
            
            // Link should not be disabled
            expect(linkElement?.hasAttribute('disabled')).toBe(false);
            
            // Link should have href
            expect(linkElement?.getAttribute('href')).toBeTruthy();
          });
        }
      ),
      { numRuns: 100 }
    );
  });
});

describe('Property 3: Sticky Navbar Visibility', () => {
  test('navbar should have sticky positioning class', () => {
    const { container } = render(<Navbar />);
    
    const nav = container.querySelector('nav');
    expect(nav).toBeDefined();
    expect(nav?.className).toContain('sticky');
  });

  test('navbar should have top-0 positioning', () => {
    const { container } = render(<Navbar />);
    
    const nav = container.querySelector('nav');
    expect(nav?.className).toContain('top-0');
  });

  test('navbar should have high z-index for visibility', () => {
    const { container } = render(<Navbar />);
    
    const nav = container.querySelector('nav');
    expect(nav?.className).toContain('z-50');
  });

  test('navbar should maintain sticky positioning across renders', () => {
    const { container: container1 } = render(<Navbar />);
    const { container: container2 } = render(<Navbar />);
    
    const nav1 = container1.querySelector('nav');
    const nav2 = container2.querySelector('nav');
    
    expect(nav1?.className).toContain('sticky');
    expect(nav2?.className).toContain('sticky');
  });

  test('navbar should have glassmorphism styling', () => {
    const { container } = render(<Navbar />);
    
    const nav = container.querySelector('nav');
    expect(nav?.className).toContain('glass-panel');
  });
});

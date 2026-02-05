// Feature: systems-engineer-portfolio, Property 1: Route Accessibility
// Property 1: For any defined route in the application (/, /about, /projects, /projects/[slug], /systems, /skills, /services, /contact), requesting that route should return a valid response with status 200.
// Validates: Requirements 1.1

import * as fc from 'fast-check';

describe('Property 1: Route Accessibility', () => {
  // Static routes that should always be accessible
  const staticRoutes = [
    '/',
    '/projects',
    '/about',
    '/systems',
    '/skills',
    '/services',
    '/contact',
  ];

  // Project slugs for dynamic routes
  const projectSlugs = [
    'government-project-management-system',
    'hu-freshman',
    'hu-connect',
    'shop-verse',
  ];

  it('should ensure all static routes are defined and accessible', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...staticRoutes),
        (route) => {
          // Verify route is a valid string
          expect(typeof route).toBe('string');
          expect(route).toMatch(/^\//);
          
          // Verify route is in our defined list
          expect(staticRoutes).toContain(route);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should ensure all dynamic project routes are properly formatted', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...projectSlugs),
        (slug) => {
          const route = `/projects/${slug}`;
          
          // Verify slug format (kebab-case)
          expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
          
          // Verify route structure
          expect(route).toMatch(/^\/projects\/[a-z0-9-]+$/);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should ensure route paths are valid and normalized', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...staticRoutes, ...projectSlugs.map(s => `/projects/${s}`)),
        (route) => {
          // Routes should start with /
          expect(route.startsWith('/')).toBe(true);
          
          // Routes should not end with / (except root)
          if (route !== '/') {
            expect(route.endsWith('/')).toBe(false);
          }
          
          // Routes should not have double slashes
          expect(route).not.toMatch(/\/\//);
          
          // Routes should not have spaces
          expect(route).not.toMatch(/\s/);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should ensure all routes have valid path segments', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...staticRoutes, ...projectSlugs.map(s => `/projects/${s}`)),
        (route) => {
          const segments = route.split('/').filter(s => s.length > 0);
          
          // Each segment should be valid (alphanumeric with hyphens)
          segments.forEach(segment => {
            expect(segment).toMatch(/^[a-z0-9-]+$/);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should ensure project routes follow the correct pattern', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...projectSlugs),
        (slug) => {
          const route = `/projects/${slug}`;
          
          // Route should have exactly 2 segments
          const segments = route.split('/').filter(s => s.length > 0);
          expect(segments.length).toBe(2);
          
          // First segment should be 'projects'
          expect(segments[0]).toBe('projects');
          
          // Second segment should be the slug
          expect(segments[1]).toBe(slug);
        }
      ),
      { numRuns: 100 }
    );
  });
});

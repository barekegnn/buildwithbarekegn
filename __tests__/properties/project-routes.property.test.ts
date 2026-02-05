// Feature: systems-engineer-portfolio, Property 4: Dynamic Project Route Resolution
// Property 4: For any valid project slug, navigating to /projects/[slug] should display the project data matching that slug.
// Validates: Requirements 3.1

import * as fc from 'fast-check';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects';

describe('Property 4: Dynamic Project Route Resolution', () => {
  const validSlugs = getAllProjectSlugs();

  it('should resolve project data for any valid slug', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...validSlugs),
        (slug) => {
          const project = getProjectBySlug(slug);
          
          // Project should be found
          expect(project).toBeDefined();
          expect(project).not.toBeNull();
          
          // Project slug should match the requested slug
          expect(project?.slug).toBe(slug);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should return undefined for invalid slugs', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 50 }).filter(s => !validSlugs.includes(s)),
        (invalidSlug) => {
          const project = getProjectBySlug(invalidSlug);
          
          // Invalid slug should return undefined
          expect(project).toBeUndefined();
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should ensure slug format consistency', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...validSlugs),
        (slug) => {
          // Slug should be in kebab-case format
          expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
          
          // Slug should not have uppercase letters
          expect(slug).toBe(slug.toLowerCase());
          
          // Slug should not have spaces
          expect(slug).not.toMatch(/\s/);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should generate valid route paths for all slugs', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...validSlugs),
        (slug) => {
          const route = `/projects/${slug}`;
          
          // Route should be properly formatted
          expect(route).toMatch(/^\/projects\/[a-z0-9-]+$/);
          
          // Route should not have double slashes
          expect(route).not.toMatch(/\/\//);
        }
      ),
      { numRuns: 100 }
    );
  });
});

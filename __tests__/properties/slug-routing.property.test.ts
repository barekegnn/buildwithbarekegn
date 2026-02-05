import * as fc from 'fast-check';
import { getAllProjects, getProjectBySlug, getAllProjectSlugs } from '@/lib/projects';
import { mdxFileExists } from '@/lib/mdx';

// Feature: systems-engineer-portfolio, Property 11: Slug-Based Route Generation

describe('Property 11: Slug-Based Route Generation', () => {
  const projects = getAllProjects();
  const projectSlugs = getAllProjectSlugs();

  test('every project slug should generate a valid route path', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...projectSlugs),
        (slug: string) => {
          const routePath = `/projects/${slug}`;
          
          // Route path should be well-formed
          expect(routePath).toMatch(/^\/projects\/[a-z0-9-]+$/);
          
          // Project should be retrievable by slug
          const project = getProjectBySlug(slug);
          expect(project).toBeDefined();
          expect(project?.slug).toBe(slug);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('every project with a slug should have accessible data', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...projects),
        (project) => {
          const retrievedProject = getProjectBySlug(project.slug);
          
          expect(retrievedProject).toBeDefined();
          expect(retrievedProject?.title).toBe(project.title);
          expect(retrievedProject?.slug).toBe(project.slug);
          expect(retrievedProject?.description).toBe(project.description);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('every project slug should have corresponding MDX content', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...projectSlugs),
        (slug: string) => {
          const hasMDX = mdxFileExists(slug);
          expect(hasMDX).toBe(true);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('slug-based route should be deterministic', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...projectSlugs),
        (slug: string) => {
          // Multiple calls should return the same project
          const project1 = getProjectBySlug(slug);
          const project2 = getProjectBySlug(slug);
          
          expect(project1).toEqual(project2);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('all project slugs should be unique', () => {
    const slugSet = new Set(projectSlugs);
    expect(slugSet.size).toBe(projectSlugs.length);
  });

  test('project slugs should follow URL-safe naming conventions', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...projectSlugs),
        (slug: string) => {
          // Should only contain lowercase letters, numbers, and hyphens
          expect(slug).toMatch(/^[a-z0-9-]+$/);
          
          // Should not start or end with hyphen
          expect(slug).not.toMatch(/^-/);
          expect(slug).not.toMatch(/-$/);
          
          // Should not have consecutive hyphens
          expect(slug).not.toMatch(/--/);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('invalid slugs should not return project data', () => {
    fc.assert(
      fc.property(
        fc.string().filter(s => !projectSlugs.includes(s) && s.length > 0),
        (invalidSlug: string) => {
          const project = getProjectBySlug(invalidSlug);
          expect(project).toBeUndefined();
        }
      ),
      { numRuns: 100 }
    );
  });

  test('getAllProjectSlugs should return complete list', () => {
    const slugs = getAllProjectSlugs();
    const projectsFromData = getAllProjects();
    
    // Should have same length
    expect(slugs.length).toBe(projectsFromData.length);
    
    // Every project should have its slug in the list
    projectsFromData.forEach((project) => {
      expect(slugs).toContain(project.slug);
    });
  });

  test('route generation should be consistent across calls', () => {
    const slugs1 = getAllProjectSlugs();
    const slugs2 = getAllProjectSlugs();
    
    expect(slugs1).toEqual(slugs2);
  });
});

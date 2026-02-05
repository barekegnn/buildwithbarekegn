import * as fc from 'fast-check';
import { getAllProjects, getProjectBySlug, getAllProjectSlugs } from '@/lib/projects';
import type { Project } from '@/types';

// Feature: systems-engineer-portfolio, Property 8: Project Data Structure Validation

describe('Property 8: Project Data Structure Validation', () => {
  const projects = getAllProjects();

  test('all projects should contain required fields', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...projects),
        (project: Project) => {
          // Basic Information
          expect(project.title).toBeDefined();
          expect(typeof project.title).toBe('string');
          expect(project.title.length).toBeGreaterThan(0);

          expect(project.slug).toBeDefined();
          expect(typeof project.slug).toBe('string');
          expect(project.slug.length).toBeGreaterThan(0);

          expect(project.description).toBeDefined();
          expect(typeof project.description).toBe('string');
          expect(project.description.length).toBeGreaterThan(0);

          expect(project.systemType).toBeDefined();
          expect(typeof project.systemType).toBe('string');

          expect(project.organizationContext).toBeDefined();
          expect(typeof project.organizationContext).toBe('string');

          // Technical Details
          expect(Array.isArray(project.roles)).toBe(true);
          expect(project.roles.length).toBeGreaterThan(0);

          expect(Array.isArray(project.techStack)).toBe(true);
          expect(project.techStack.length).toBeGreaterThan(0);

          expect(project.architectureSummary).toBeDefined();
          expect(typeof project.architectureSummary).toBe('string');

          // Visual Assets
          expect(Array.isArray(project.dashboards)).toBe(true);

          // Features and Capabilities
          expect(Array.isArray(project.features)).toBe(true);
          expect(Array.isArray(project.modules)).toBe(true);
          expect(Array.isArray(project.challenges)).toBe(true);

          // Metrics
          expect(project.complexityScore).toBeDefined();
          expect(project.complexityScore.authentication).toBeDefined();
          expect(project.complexityScore.dataManagement).toBeDefined();
          expect(project.complexityScore.dashboard).toBeDefined();

          // Content
          expect(project.problemContext).toBeDefined();
          expect(typeof project.problemContext).toBe('string');

          expect(project.outcome).toBeDefined();
          expect(typeof project.outcome).toBe('string');
        }
      ),
      { numRuns: 100 }
    );
  });

  test('all project slugs should be in kebab-case format', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...projects),
        (project: Project) => {
          const kebabCaseRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
          expect(project.slug).toMatch(kebabCaseRegex);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('all project tech stacks should contain valid technology names', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...projects),
        (project: Project) => {
          project.techStack.forEach((tech) => {
            expect(typeof tech).toBe('string');
            expect(tech.length).toBeGreaterThan(0);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  test('all project roles should be non-empty strings', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...projects),
        (project: Project) => {
          project.roles.forEach((role) => {
            expect(typeof role).toBe('string');
            expect(role.length).toBeGreaterThan(0);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  test('all project dashboards should have valid types', () => {
    const validDashboardTypes = ['admin', 'manager', 'user', 'analytics'];
    
    fc.assert(
      fc.property(
        fc.constantFrom(...projects),
        (project: Project) => {
          project.dashboards.forEach((dashboard) => {
            expect(validDashboardTypes).toContain(dashboard.type);
            expect(dashboard.title).toBeDefined();
            expect(typeof dashboard.title).toBe('string');
            expect(dashboard.imagePath).toBeDefined();
            expect(typeof dashboard.imagePath).toBe('string');
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  test('all project features should have valid categories', () => {
    const validCategories = ['management', 'collaboration', 'analytics', 'automation'];
    
    fc.assert(
      fc.property(
        fc.constantFrom(...projects),
        (project: Project) => {
          project.features.forEach((feature) => {
            expect(feature.title).toBeDefined();
            expect(typeof feature.title).toBe('string');
            expect(feature.description).toBeDefined();
            expect(typeof feature.description).toBe('string');
            expect(validCategories).toContain(feature.category);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  test('complexity scores should have valid values', () => {
    const validAuth = ['Basic', 'Intermediate', 'Advanced'];
    const validData = ['Simple', 'Complex', 'Enterprise'];
    const validDashboard = ['Standard', 'Advanced', 'Enterprise Level'];
    
    fc.assert(
      fc.property(
        fc.constantFrom(...projects),
        (project: Project) => {
          expect(validAuth).toContain(project.complexityScore.authentication);
          expect(validData).toContain(project.complexityScore.dataManagement);
          expect(validDashboard).toContain(project.complexityScore.dashboard);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('getProjectBySlug should return correct project', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...getAllProjectSlugs()),
        (slug: string) => {
          const project = getProjectBySlug(slug);
          expect(project).toBeDefined();
          expect(project?.slug).toBe(slug);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('getProjectBySlug should return undefined for invalid slugs', () => {
    fc.assert(
      fc.property(
        fc.string().filter(s => !getAllProjectSlugs().includes(s)),
        (invalidSlug: string) => {
          const project = getProjectBySlug(invalidSlug);
          expect(project).toBeUndefined();
        }
      ),
      { numRuns: 100 }
    );
  });

  test('getAllProjectSlugs should return all project slugs', () => {
    const slugs = getAllProjectSlugs();
    const projects = getAllProjects();
    
    expect(slugs.length).toBe(projects.length);
    
    projects.forEach((project) => {
      expect(slugs).toContain(project.slug);
    });
  });
});

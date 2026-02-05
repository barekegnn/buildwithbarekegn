// Feature: systems-engineer-portfolio, Property 5: Project Data Completeness
// Property 5: For any project displayed on a project detail page, all required fields (title, system category, organization, tech stack, complexity score) should be present in the rendered output.
// Validates: Requirements 3.2, 3.3, 3.4, 3.6, 3.7, 3.8

import * as fc from 'fast-check';
import { getAllProjects } from '@/lib/projects';
import type { Project } from '@/types';

describe('Property 5: Project Data Completeness', () => {
  const projects = getAllProjects();

  it('should ensure all projects have required basic fields', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...projects),
        (project: Project) => {
          // Title is required and non-empty
          expect(project.title).toBeDefined();
          expect(project.title.length).toBeGreaterThan(0);
          
          // System type is required and non-empty
          expect(project.systemType).toBeDefined();
          expect(project.systemType.length).toBeGreaterThan(0);
          
          // Organization context is required and non-empty
          expect(project.organizationContext).toBeDefined();
          expect(project.organizationContext.length).toBeGreaterThan(0);
          
          // Description is required and non-empty
          expect(project.description).toBeDefined();
          expect(project.description.length).toBeGreaterThan(0);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should ensure all projects have tech stack with at least one technology', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...projects),
        (project: Project) => {
          // Tech stack is required
          expect(project.techStack).toBeDefined();
          expect(Array.isArray(project.techStack)).toBe(true);
          
          // Tech stack should have at least one technology
          expect(project.techStack.length).toBeGreaterThan(0);
          
          // Each technology should be a non-empty string
          project.techStack.forEach(tech => {
            expect(typeof tech).toBe('string');
            expect(tech.length).toBeGreaterThan(0);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should ensure all projects have complete complexity scores', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...projects),
        (project: Project) => {
          // Complexity score is required
          expect(project.complexityScore).toBeDefined();
          
          // Authentication complexity is required
          expect(project.complexityScore.authentication).toBeDefined();
          expect(['Basic', 'Intermediate', 'Advanced']).toContain(
            project.complexityScore.authentication
          );
          
          // Data management complexity is required
          expect(project.complexityScore.dataManagement).toBeDefined();
          expect(['Simple', 'Complex', 'Enterprise']).toContain(
            project.complexityScore.dataManagement
          );
          
          // Dashboard complexity is required
          expect(project.complexityScore.dashboard).toBeDefined();
          expect(['Standard', 'Advanced', 'Enterprise Level']).toContain(
            project.complexityScore.dashboard
          );
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should ensure all projects have roles defined', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...projects),
        (project: Project) => {
          // Roles array is required
          expect(project.roles).toBeDefined();
          expect(Array.isArray(project.roles)).toBe(true);
          
          // Should have at least one role
          expect(project.roles.length).toBeGreaterThan(0);
          
          // Each role should be a non-empty string
          project.roles.forEach(role => {
            expect(typeof role).toBe('string');
            expect(role.length).toBeGreaterThan(0);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should ensure all projects have features defined', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...projects),
        (project: Project) => {
          // Features array is required
          expect(project.features).toBeDefined();
          expect(Array.isArray(project.features)).toBe(true);
          
          // Should have at least one feature
          expect(project.features.length).toBeGreaterThan(0);
          
          // Each feature should have required fields
          project.features.forEach(feature => {
            expect(feature.title).toBeDefined();
            expect(feature.title.length).toBeGreaterThan(0);
            
            expect(feature.description).toBeDefined();
            expect(feature.description.length).toBeGreaterThan(0);
            
            expect(feature.category).toBeDefined();
            expect(['management', 'collaboration', 'analytics', 'automation']).toContain(
              feature.category
            );
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should ensure all projects have dashboards defined', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...projects),
        (project: Project) => {
          // Dashboards array is required
          expect(project.dashboards).toBeDefined();
          expect(Array.isArray(project.dashboards)).toBe(true);
          
          // Should have at least one dashboard
          expect(project.dashboards.length).toBeGreaterThan(0);
          
          // Each dashboard should have required fields
          project.dashboards.forEach(dashboard => {
            expect(dashboard.type).toBeDefined();
            expect(['admin', 'manager', 'user', 'analytics']).toContain(dashboard.type);
            
            expect(dashboard.title).toBeDefined();
            expect(dashboard.title.length).toBeGreaterThan(0);
            
            expect(dashboard.imagePath).toBeDefined();
            expect(dashboard.imagePath.length).toBeGreaterThan(0);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should ensure all projects have modules and challenges', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...projects),
        (project: Project) => {
          // Modules array is required
          expect(project.modules).toBeDefined();
          expect(Array.isArray(project.modules)).toBe(true);
          expect(project.modules.length).toBeGreaterThan(0);
          
          // Challenges array is required
          expect(project.challenges).toBeDefined();
          expect(Array.isArray(project.challenges)).toBe(true);
          expect(project.challenges.length).toBeGreaterThan(0);
          
          // Problem context is required
          expect(project.problemContext).toBeDefined();
          expect(project.problemContext.length).toBeGreaterThan(0);
          
          // Outcome is required
          expect(project.outcome).toBeDefined();
          expect(project.outcome.length).toBeGreaterThan(0);
        }
      ),
      { numRuns: 100 }
    );
  });
});

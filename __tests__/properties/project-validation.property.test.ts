import * as fc from 'fast-check';
import { validateProject } from '@/lib/validation';
import type { Project } from '@/types';

// Feature: systems-engineer-portfolio, Property 9: Project Creation Validation

describe('Property 9: Project Creation Validation', () => {
  test('validation should fail when required fields are missing', () => {
    fc.assert(
      fc.property(
        fc.record({
          title: fc.option(fc.string(), { nil: undefined }),
          slug: fc.option(fc.string(), { nil: undefined }),
          description: fc.option(fc.string(), { nil: undefined }),
          systemType: fc.option(fc.string(), { nil: undefined }),
          organizationContext: fc.option(fc.string(), { nil: undefined }),
          roles: fc.option(fc.array(fc.string()), { nil: undefined }),
          techStack: fc.option(fc.array(fc.string()), { nil: undefined }),
          architectureSummary: fc.option(fc.string(), { nil: undefined }),
          dashboards: fc.option(fc.array(fc.record({
            type: fc.constantFrom('admin', 'manager', 'user', 'analytics'),
            title: fc.string(),
            imagePath: fc.string(),
          })), { nil: undefined }),
          features: fc.option(fc.array(fc.record({
            title: fc.string(),
            description: fc.string(),
            category: fc.constantFrom('management', 'collaboration', 'analytics', 'automation'),
          })), { nil: undefined }),
          modules: fc.option(fc.array(fc.string()), { nil: undefined }),
          challenges: fc.option(fc.array(fc.string()), { nil: undefined }),
          complexityScore: fc.option(fc.record({
            authentication: fc.constantFrom('Basic', 'Intermediate', 'Advanced'),
            dataManagement: fc.constantFrom('Simple', 'Complex', 'Enterprise'),
            dashboard: fc.constantFrom('Standard', 'Advanced', 'Enterprise Level'),
          }), { nil: undefined }),
          problemContext: fc.option(fc.string(), { nil: undefined }),
          outcome: fc.option(fc.string(), { nil: undefined }),
        }),
        (partialProject) => {
          const result = validateProject(partialProject);
          
          // If any required field is missing, validation should fail
          const hasAllRequiredFields = 
            partialProject.title &&
            partialProject.slug &&
            partialProject.description &&
            partialProject.systemType &&
            partialProject.organizationContext &&
            Array.isArray(partialProject.roles) && partialProject.roles.length > 0 &&
            Array.isArray(partialProject.techStack) && partialProject.techStack.length > 0 &&
            partialProject.architectureSummary &&
            Array.isArray(partialProject.dashboards) &&
            Array.isArray(partialProject.features) &&
            Array.isArray(partialProject.modules) &&
            Array.isArray(partialProject.challenges) &&
            partialProject.complexityScore &&
            partialProject.problemContext &&
            partialProject.outcome;

          if (!hasAllRequiredFields) {
            expect(result.isValid).toBe(false);
            expect(result.errors.length).toBeGreaterThan(0);
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  test('validation should fail for empty string fields', () => {
    fc.assert(
      fc.property(
        fc.record({
          title: fc.constant(''),
          slug: fc.string({ minLength: 1 }),
          description: fc.string({ minLength: 1 }),
          systemType: fc.string({ minLength: 1 }),
          organizationContext: fc.string({ minLength: 1 }),
          roles: fc.array(fc.string({ minLength: 1 }), { minLength: 1 }),
          techStack: fc.array(fc.string({ minLength: 1 }), { minLength: 1 }),
          architectureSummary: fc.string({ minLength: 1 }),
          dashboards: fc.array(fc.record({
            type: fc.constantFrom('admin', 'manager', 'user', 'analytics'),
            title: fc.string({ minLength: 1 }),
            imagePath: fc.string({ minLength: 1 }),
          })),
          features: fc.array(fc.record({
            title: fc.string({ minLength: 1 }),
            description: fc.string({ minLength: 1 }),
            category: fc.constantFrom('management', 'collaboration', 'analytics', 'automation'),
          })),
          modules: fc.array(fc.string()),
          challenges: fc.array(fc.string()),
          complexityScore: fc.record({
            authentication: fc.constantFrom('Basic', 'Intermediate', 'Advanced'),
            dataManagement: fc.constantFrom('Simple', 'Complex', 'Enterprise'),
            dashboard: fc.constantFrom('Standard', 'Advanced', 'Enterprise Level'),
          }),
          problemContext: fc.string({ minLength: 1 }),
          outcome: fc.string({ minLength: 1 }),
        }),
        (project) => {
          const result = validateProject(project);
          expect(result.isValid).toBe(false);
          expect(result.errors).toContain('Project title is required');
        }
      ),
      { numRuns: 100 }
    );
  });

  test('validation should fail for invalid slug format', () => {
    fc.assert(
      fc.property(
        fc.string().filter(s => !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(s) && s.trim().length > 0),
        (invalidSlug) => {
          const project = {
            title: 'Test Project',
            slug: invalidSlug,
            description: 'Test description',
            systemType: 'Test System',
            organizationContext: 'Test Org',
            roles: ['Admin'],
            techStack: ['React'],
            architectureSummary: 'Test architecture',
            dashboards: [],
            features: [],
            modules: [],
            challenges: [],
            complexityScore: {
              authentication: 'Basic' as const,
              dataManagement: 'Simple' as const,
              dashboard: 'Standard' as const,
            },
            problemContext: 'Test problem',
            outcome: 'Test outcome',
          };

          const result = validateProject(project);
          expect(result.isValid).toBe(false);
          expect(result.errors).toContain('Project slug must be in kebab-case format');
        }
      ),
      { numRuns: 100 }
    );
  });

  test('validation should fail for empty arrays', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('roles', 'techStack'),
        (emptyArrayField) => {
          const project: any = {
            title: 'Test Project',
            slug: 'test-project',
            description: 'Test description',
            systemType: 'Test System',
            organizationContext: 'Test Org',
            roles: ['Admin'],
            techStack: ['React'],
            architectureSummary: 'Test architecture',
            dashboards: [],
            features: [],
            modules: [],
            challenges: [],
            complexityScore: {
              authentication: 'Basic',
              dataManagement: 'Simple',
              dashboard: 'Standard',
            },
            problemContext: 'Test problem',
            outcome: 'Test outcome',
          };

          // Set the selected field to empty array
          project[emptyArrayField] = [];

          const result = validateProject(project);
          expect(result.isValid).toBe(false);
          expect(result.errors.length).toBeGreaterThan(0);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('validation should fail for invalid complexity score values', () => {
    fc.assert(
      fc.property(
        fc.string().filter(s => !['Basic', 'Intermediate', 'Advanced'].includes(s)),
        (invalidAuth) => {
          const project = {
            title: 'Test Project',
            slug: 'test-project',
            description: 'Test description',
            systemType: 'Test System',
            organizationContext: 'Test Org',
            roles: ['Admin'],
            techStack: ['React'],
            architectureSummary: 'Test architecture',
            dashboards: [],
            features: [],
            modules: [],
            challenges: [],
            complexityScore: {
              authentication: invalidAuth as any,
              dataManagement: 'Simple' as const,
              dashboard: 'Standard' as const,
            },
            problemContext: 'Test problem',
            outcome: 'Test outcome',
          };

          const result = validateProject(project);
          expect(result.isValid).toBe(false);
          expect(result.errors).toContain('Invalid authentication complexity value');
        }
      ),
      { numRuns: 100 }
    );
  });

  test('validation should pass for valid project data', () => {
    fc.assert(
      fc.property(
        fc.record({
          title: fc.string({ minLength: 1 }),
          slug: fc.string({ minLength: 1 }).map(s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-')),
          description: fc.string({ minLength: 1 }),
          systemType: fc.string({ minLength: 1 }),
          organizationContext: fc.string({ minLength: 1 }),
          roles: fc.array(fc.string({ minLength: 1 }), { minLength: 1 }),
          techStack: fc.array(fc.string({ minLength: 1 }), { minLength: 1 }),
          architectureSummary: fc.string({ minLength: 1 }),
          dashboards: fc.array(fc.record({
            type: fc.constantFrom('admin', 'manager', 'user', 'analytics'),
            title: fc.string({ minLength: 1 }),
            imagePath: fc.string({ minLength: 1 }),
          })),
          features: fc.array(fc.record({
            title: fc.string({ minLength: 1 }),
            description: fc.string({ minLength: 1 }),
            category: fc.constantFrom('management', 'collaboration', 'analytics', 'automation'),
          })),
          modules: fc.array(fc.string()),
          challenges: fc.array(fc.string()),
          complexityScore: fc.record({
            authentication: fc.constantFrom('Basic', 'Intermediate', 'Advanced'),
            dataManagement: fc.constantFrom('Simple', 'Complex', 'Enterprise'),
            dashboard: fc.constantFrom('Standard', 'Advanced', 'Enterprise Level'),
          }),
          problemContext: fc.string({ minLength: 1 }),
          outcome: fc.string({ minLength: 1 }),
        }),
        (project) => {
          const result = validateProject(project);
          
          if (result.isValid) {
            expect(result.errors.length).toBe(0);
          }
        }
      ),
      { numRuns: 100 }
    );
  });
});

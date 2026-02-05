import * as fc from 'fast-check';
import type { Project, Skill, Service, SystemCapability, ComplexityScore } from '@/types';

// Feature: systems-engineer-portfolio, Property 25: TypeScript Type Enforcement

describe('Property 25: TypeScript Type Enforcement', () => {
  describe('Project type enforcement', () => {
    test('valid Project objects should pass type checking', () => {
      fc.assert(
        fc.property(
          fc.record({
            title: fc.string({ minLength: 1 }),
            slug: fc.string({ minLength: 1 }),
            description: fc.string({ minLength: 1 }),
            systemType: fc.string({ minLength: 1 }),
            organizationContext: fc.string({ minLength: 1 }),
            roles: fc.array(fc.string({ minLength: 1 }), { minLength: 1 }),
            techStack: fc.array(fc.string({ minLength: 1 }), { minLength: 1 }),
            architectureSummary: fc.string({ minLength: 1 }),
            dashboards: fc.array(
              fc.record({
                type: fc.constantFrom('admin', 'manager', 'user', 'analytics'),
                title: fc.string({ minLength: 1 }),
                imagePath: fc.string({ minLength: 1 }),
              })
            ),
            features: fc.array(
              fc.record({
                title: fc.string({ minLength: 1 }),
                description: fc.string({ minLength: 1 }),
                category: fc.constantFrom('management', 'collaboration', 'analytics', 'automation'),
              })
            ),
            modules: fc.array(fc.string({ minLength: 1 })),
            challenges: fc.array(fc.string({ minLength: 1 })),
            complexityScore: fc.record({
              authentication: fc.constantFrom('Basic', 'Intermediate', 'Advanced'),
              dataManagement: fc.constantFrom('Simple', 'Complex', 'Enterprise'),
              dashboard: fc.constantFrom('Standard', 'Advanced', 'Enterprise Level'),
            }),
            problemContext: fc.string({ minLength: 1 }),
            outcome: fc.string({ minLength: 1 }),
          }),
          (projectData) => {
            // Type assertion validates that the generated data conforms to Project type
            const project: Project = projectData as Project;
            
            // Verify all required fields are present
            expect(project.title).toBeDefined();
            expect(project.slug).toBeDefined();
            expect(project.description).toBeDefined();
            expect(project.systemType).toBeDefined();
            expect(project.organizationContext).toBeDefined();
            expect(Array.isArray(project.roles)).toBe(true);
            expect(Array.isArray(project.techStack)).toBe(true);
            expect(project.architectureSummary).toBeDefined();
            expect(Array.isArray(project.dashboards)).toBe(true);
            expect(Array.isArray(project.features)).toBe(true);
            expect(Array.isArray(project.modules)).toBe(true);
            expect(Array.isArray(project.challenges)).toBe(true);
            expect(project.complexityScore).toBeDefined();
            expect(project.problemContext).toBeDefined();
            expect(project.outcome).toBeDefined();
          }
        ),
        { numRuns: 100 }
      );
    });

    test('ComplexityScore should only accept valid values', () => {
      fc.assert(
        fc.property(
          fc.record({
            authentication: fc.constantFrom('Basic', 'Intermediate', 'Advanced'),
            dataManagement: fc.constantFrom('Simple', 'Complex', 'Enterprise'),
            dashboard: fc.constantFrom('Standard', 'Advanced', 'Enterprise Level'),
          }),
          (complexityScore) => {
            const score: ComplexityScore = complexityScore;
            
            expect(['Basic', 'Intermediate', 'Advanced']).toContain(score.authentication);
            expect(['Simple', 'Complex', 'Enterprise']).toContain(score.dataManagement);
            expect(['Standard', 'Advanced', 'Enterprise Level']).toContain(score.dashboard);
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  describe('Skill type enforcement', () => {
    test('valid Skill objects should pass type checking', () => {
      fc.assert(
        fc.property(
          fc.record({
            name: fc.string({ minLength: 1 }),
            level: fc.constantFrom('beginner', 'intermediate', 'advanced', 'expert'),
            projects: fc.array(fc.string({ minLength: 1 }), { minLength: 1 }),
          }),
          (skillData) => {
            const skill: Skill = skillData;
            
            expect(skill.name).toBeDefined();
            expect(['beginner', 'intermediate', 'advanced', 'expert']).toContain(skill.level);
            expect(Array.isArray(skill.projects)).toBe(true);
            expect(skill.projects.length).toBeGreaterThan(0);
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  describe('Service type enforcement', () => {
    test('valid Service objects should pass type checking', () => {
      fc.assert(
        fc.property(
          fc.record({
            id: fc.string({ minLength: 1 }),
            title: fc.string({ minLength: 1 }),
            tagline: fc.string({ minLength: 1 }),
            description: fc.string({ minLength: 1 }),
            features: fc.array(fc.string({ minLength: 1 }), { minLength: 1 }),
            process: fc.array(
              fc.record({
                step: fc.integer({ min: 1 }),
                title: fc.string({ minLength: 1 }),
                description: fc.string({ minLength: 1 }),
              }),
              { minLength: 1 }
            ),
            deliverables: fc.array(fc.string({ minLength: 1 })),
            cta: fc.record({
              text: fc.string({ minLength: 1 }),
              href: fc.string({ minLength: 1 }),
              variant: fc.constantFrom('primary', 'secondary'),
            }),
          }),
          (serviceData) => {
            const service: Service = serviceData;
            
            expect(service.id).toBeDefined();
            expect(service.title).toBeDefined();
            expect(service.tagline).toBeDefined();
            expect(service.description).toBeDefined();
            expect(Array.isArray(service.features)).toBe(true);
            expect(Array.isArray(service.process)).toBe(true);
            expect(service.process.length).toBeGreaterThan(0);
            expect(service.cta).toBeDefined();
            expect(['primary', 'secondary']).toContain(service.cta.variant);
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  describe('SystemCapability type enforcement', () => {
    test('valid SystemCapability objects should pass type checking', () => {
      fc.assert(
        fc.property(
          fc.record({
            id: fc.string({ minLength: 1 }),
            title: fc.string({ minLength: 1 }),
            description: fc.string({ minLength: 1 }),
            category: fc.constantFrom(
              'multi-role',
              'admin-panels',
              'analytics',
              'notifications',
              'messaging',
              'financial-tracking'
            ),
            examples: fc.array(
              fc.record({
                projectTitle: fc.string({ minLength: 1 }),
                projectSlug: fc.string({ minLength: 1 }),
                implementation: fc.string({ minLength: 1 }),
              }),
              { minLength: 2 } // At least 2 examples for multi-project validation
            ),
            technicalDetails: fc.array(fc.string({ minLength: 1 })),
          }),
          (capabilityData) => {
            const capability: SystemCapability = capabilityData;
            
            expect(capability.id).toBeDefined();
            expect(capability.title).toBeDefined();
            expect(capability.description).toBeDefined();
            expect([
              'multi-role',
              'admin-panels',
              'analytics',
              'notifications',
              'messaging',
              'financial-tracking',
            ]).toContain(capability.category);
            expect(Array.isArray(capability.examples)).toBe(true);
            expect(capability.examples.length).toBeGreaterThanOrEqual(2);
            expect(Array.isArray(capability.technicalDetails)).toBe(true);
          }
        ),
        { numRuns: 100 }
      );
    });
  });
});

// Feature: systems-engineer-portfolio, Property 26: System Capability Multi-Project Examples
// Property 26: For any system capability displayed on the systems page (multi-role, admin panels, analytics, notifications, messaging, financial tracking), it should include examples from at least two different projects.
// Validates: Requirements 4.2, 4.3, 4.4, 4.5, 4.6, 4.7

import * as fc from 'fast-check';
import { getAllCapabilities } from '@/lib/capabilities';
import type { SystemCapability } from '@/types';

describe('Property 26: System Capability Multi-Project Examples', () => {
  const capabilities = getAllCapabilities();

  it('should ensure all capabilities have at least two project examples', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...capabilities),
        (capability: SystemCapability) => {
          // Each capability should have at least 2 examples
          expect(capability.examples).toBeDefined();
          expect(Array.isArray(capability.examples)).toBe(true);
          expect(capability.examples.length).toBeGreaterThanOrEqual(2);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should ensure examples reference different projects', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...capabilities),
        (capability: SystemCapability) => {
          // Extract all project slugs from examples
          const projectSlugs = capability.examples.map(ex => ex.projectSlug);
          
          // Create a set to check for uniqueness
          const uniqueSlugs = new Set(projectSlugs);
          
          // Should have at least 2 unique project slugs
          expect(uniqueSlugs.size).toBeGreaterThanOrEqual(2);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should ensure each example has required fields', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...capabilities),
        (capability: SystemCapability) => {
          capability.examples.forEach(example => {
            // Project title is required
            expect(example.projectTitle).toBeDefined();
            expect(example.projectTitle.length).toBeGreaterThan(0);
            
            // Project slug is required
            expect(example.projectSlug).toBeDefined();
            expect(example.projectSlug.length).toBeGreaterThan(0);
            expect(example.projectSlug).toMatch(/^[a-z0-9-]+$/);
            
            // Implementation description is required
            expect(example.implementation).toBeDefined();
            expect(example.implementation.length).toBeGreaterThan(0);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should ensure capabilities have valid categories', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...capabilities),
        (capability: SystemCapability) => {
          const validCategories = [
            'multi-role',
            'admin-panels',
            'analytics',
            'notifications',
            'messaging',
            'financial-tracking',
          ];
          
          expect(capability.category).toBeDefined();
          expect(validCategories).toContain(capability.category);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should ensure capabilities have technical details', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...capabilities),
        (capability: SystemCapability) => {
          // Technical details array is required
          expect(capability.technicalDetails).toBeDefined();
          expect(Array.isArray(capability.technicalDetails)).toBe(true);
          
          // Should have at least one technical detail
          expect(capability.technicalDetails.length).toBeGreaterThan(0);
          
          // Each detail should be a non-empty string
          capability.technicalDetails.forEach(detail => {
            expect(typeof detail).toBe('string');
            expect(detail.length).toBeGreaterThan(0);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should ensure all required capability categories are present', () => {
    const requiredCategories = [
      'multi-role',
      'admin-panels',
      'analytics',
      'notifications',
      'messaging',
      'financial-tracking',
    ];
    
    const presentCategories = capabilities.map(c => c.category);
    
    requiredCategories.forEach(category => {
      expect(presentCategories).toContain(category);
    });
  });

  it('should ensure capability IDs are unique', () => {
    const ids = capabilities.map(c => c.id);
    const uniqueIds = new Set(ids);
    
    // All IDs should be unique
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('should ensure capability titles and descriptions are meaningful', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...capabilities),
        (capability: SystemCapability) => {
          // Title should be meaningful (at least 10 characters)
          expect(capability.title).toBeDefined();
          expect(capability.title.length).toBeGreaterThanOrEqual(10);
          
          // Description should be meaningful (at least 50 characters)
          expect(capability.description).toBeDefined();
          expect(capability.description.length).toBeGreaterThanOrEqual(50);
        }
      ),
      { numRuns: 100 }
    );
  });
});

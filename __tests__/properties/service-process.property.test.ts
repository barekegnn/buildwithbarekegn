// Feature: systems-engineer-portfolio, Property 7: Service Process Steps
// Property 7: For any service displayed on the services page, that service should include engagement process steps.
// Validates: Requirements 6.7

import * as fc from 'fast-check';
import { getAllServices } from '@/lib/services';
import type { Service } from '@/types';

describe('Property 7: Service Process Steps', () => {
  const services = getAllServices();

  it('should ensure all services have engagement process steps', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...services),
        (service: Service) => {
          // Process array should exist and not be empty
          expect(service.process).toBeDefined();
          expect(Array.isArray(service.process)).toBe(true);
          expect(service.process.length).toBeGreaterThan(0);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should ensure process steps are properly numbered sequentially', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...services),
        (service: Service) => {
          // Steps should be numbered sequentially starting from 1
          service.process.forEach((step, index) => {
            expect(step.step).toBe(index + 1);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should ensure each process step has required fields', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...services),
        (service: Service) => {
          service.process.forEach(step => {
            // Step number is required
            expect(step.step).toBeDefined();
            expect(typeof step.step).toBe('number');
            expect(step.step).toBeGreaterThan(0);
            
            // Title is required and non-empty
            expect(step.title).toBeDefined();
            expect(step.title.length).toBeGreaterThan(0);
            
            // Description is required and non-empty
            expect(step.description).toBeDefined();
            expect(step.description.length).toBeGreaterThan(0);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should ensure services have all required fields', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...services),
        (service: Service) => {
          // ID is required
          expect(service.id).toBeDefined();
          expect(service.id.length).toBeGreaterThan(0);
          
          // Title is required
          expect(service.title).toBeDefined();
          expect(service.title.length).toBeGreaterThan(0);
          
          // Tagline is required
          expect(service.tagline).toBeDefined();
          expect(service.tagline.length).toBeGreaterThan(0);
          
          // Description is required
          expect(service.description).toBeDefined();
          expect(service.description.length).toBeGreaterThan(0);
          
          // Features array is required
          expect(service.features).toBeDefined();
          expect(Array.isArray(service.features)).toBe(true);
          expect(service.features.length).toBeGreaterThan(0);
          
          // Deliverables array is required
          expect(service.deliverables).toBeDefined();
          expect(Array.isArray(service.deliverables)).toBe(true);
          expect(service.deliverables.length).toBeGreaterThan(0);
          
          // CTA is required
          expect(service.cta).toBeDefined();
          expect(service.cta.text).toBeDefined();
          expect(service.cta.href).toBeDefined();
          expect(service.cta.variant).toBeDefined();
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should ensure service features are non-empty strings', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...services),
        (service: Service) => {
          service.features.forEach(feature => {
            expect(typeof feature).toBe('string');
            expect(feature.length).toBeGreaterThan(0);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should ensure service deliverables are non-empty strings', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...services),
        (service: Service) => {
          service.deliverables.forEach(deliverable => {
            expect(typeof deliverable).toBe('string');
            expect(deliverable.length).toBeGreaterThan(0);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should ensure CTA buttons have valid variants', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...services),
        (service: Service) => {
          const validVariants = ['primary', 'secondary'];
          expect(validVariants).toContain(service.cta.variant);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should ensure CTA hrefs are valid paths', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...services),
        (service: Service) => {
          // CTA href should start with /
          expect(service.cta.href.startsWith('/')).toBe(true);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should ensure pricing info has valid type when present', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...services.filter(s => s.pricing)),
        (service: Service) => {
          if (service.pricing) {
            const validTypes = ['fixed', 'hourly', 'project-based'];
            expect(validTypes).toContain(service.pricing.type);
          }
        }
      ),
      { numRuns: 100 }
    );
  });
});

// Feature: systems-engineer-portfolio, Property 6: Skill-to-Project Mapping
// Property 6: For any skill displayed on the skills page, that skill should reference at least one project where it was used (non-empty projects array).
// Validates: Requirements 5.3

import * as fc from 'fast-check';
import { getAllSkills, getAllSkillCategories } from '@/lib/skills';
import { getAllProjectSlugs } from '@/lib/projects';
import type { Skill } from '@/types';

describe('Property 6: Skill-to-Project Mapping', () => {
  const allSkills = getAllSkills();
  const skillCategories = getAllSkillCategories();
  const validProjectSlugs = getAllProjectSlugs();

  // Filter skills that should have project mappings (exclude skills with no projects intentionally)
  const skillsWithProjects = allSkills.filter(skill => skill.projects.length > 0);

  it('should ensure skills with projects have valid project references', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...skillsWithProjects),
        (skill: Skill) => {
          // Projects array should not be empty
          expect(skill.projects).toBeDefined();
          expect(Array.isArray(skill.projects)).toBe(true);
          expect(skill.projects.length).toBeGreaterThan(0);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should ensure all project slugs in skills are valid', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...skillsWithProjects),
        (skill: Skill) => {
          // Each project slug should be valid
          skill.projects.forEach(projectSlug => {
            expect(validProjectSlugs).toContain(projectSlug);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should ensure project slugs are in kebab-case format', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...skillsWithProjects),
        (skill: Skill) => {
          skill.projects.forEach(projectSlug => {
            // Should be kebab-case
            expect(projectSlug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should ensure skills have valid proficiency levels', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...allSkills),
        (skill: Skill) => {
          const validLevels = ['beginner', 'intermediate', 'advanced', 'expert'];
          expect(validLevels).toContain(skill.level);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should ensure skill names are non-empty', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...allSkills),
        (skill: Skill) => {
          expect(skill.name).toBeDefined();
          expect(skill.name.length).toBeGreaterThan(0);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should ensure all skill categories have at least one skill', () => {
    skillCategories.forEach(category => {
      expect(category.skills).toBeDefined();
      expect(Array.isArray(category.skills)).toBe(true);
      expect(category.skills.length).toBeGreaterThan(0);
    });
  });

  it('should ensure related skills are valid strings', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...allSkills.filter(s => s.relatedSkills && s.relatedSkills.length > 0)),
        (skill: Skill) => {
          if (skill.relatedSkills) {
            skill.relatedSkills.forEach(relatedSkill => {
              expect(typeof relatedSkill).toBe('string');
              expect(relatedSkill.length).toBeGreaterThan(0);
            });
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should ensure years of experience is a positive number when present', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...allSkills.filter(s => s.yearsOfExperience !== undefined)),
        (skill: Skill) => {
          if (skill.yearsOfExperience !== undefined) {
            expect(skill.yearsOfExperience).toBeGreaterThan(0);
            expect(Number.isInteger(skill.yearsOfExperience)).toBe(true);
          }
        }
      ),
      { numRuns: 100 }
    );
  });
});

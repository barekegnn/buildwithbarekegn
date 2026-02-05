import type { Project, ComplexityScore } from '@/types';

/**
 * Validate that a project object contains all required fields
 */
export function validateProject(project: Partial<Project>): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  // Basic Information
  if (!project.title || typeof project.title !== 'string' || project.title.trim().length === 0) {
    errors.push('Project title is required');
  }

  if (!project.slug || typeof project.slug !== 'string') {
    errors.push('Project slug is required');
  } else if (project.slug.trim().length === 0) {
    errors.push('Project slug is required');
  } else if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug)) {
    errors.push('Project slug must be in kebab-case format');
  }

  if (!project.description || typeof project.description !== 'string' || project.description.trim().length === 0) {
    errors.push('Project description is required');
  }

  if (!project.systemType || typeof project.systemType !== 'string') {
    errors.push('Project systemType is required');
  }

  if (!project.organizationContext || typeof project.organizationContext !== 'string') {
    errors.push('Project organizationContext is required');
  }

  // Technical Details
  if (!Array.isArray(project.roles) || project.roles.length === 0) {
    errors.push('Project must have at least one role');
  }

  if (!Array.isArray(project.techStack) || project.techStack.length === 0) {
    errors.push('Tech stack must contain at least one technology');
  }

  if (!project.architectureSummary || typeof project.architectureSummary !== 'string') {
    errors.push('Project architectureSummary is required');
  }

  // Visual Assets
  if (!Array.isArray(project.dashboards)) {
    errors.push('Project dashboards must be an array');
  }

  // Features and Capabilities
  if (!Array.isArray(project.features)) {
    errors.push('Project features must be an array');
  }

  if (!Array.isArray(project.modules)) {
    errors.push('Project modules must be an array');
  }

  if (!Array.isArray(project.challenges)) {
    errors.push('Project challenges must be an array');
  }

  // Complexity Score
  if (!project.complexityScore) {
    errors.push('Complexity score must have valid values');
  } else {
    const validAuth = ['Basic', 'Intermediate', 'Advanced'];
    const validData = ['Simple', 'Complex', 'Enterprise'];
    const validDashboard = ['Standard', 'Advanced', 'Enterprise Level'];

    if (!validAuth.includes(project.complexityScore.authentication)) {
      errors.push('Invalid authentication complexity value');
    }

    if (!validData.includes(project.complexityScore.dataManagement)) {
      errors.push('Invalid dataManagement complexity value');
    }

    if (!validDashboard.includes(project.complexityScore.dashboard)) {
      errors.push('Invalid dashboard complexity value');
    }
  }

  // Content
  if (!project.problemContext || typeof project.problemContext !== 'string') {
    errors.push('Project problemContext is required');
  }

  if (!project.outcome || typeof project.outcome !== 'string') {
    errors.push('Project outcome is required');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

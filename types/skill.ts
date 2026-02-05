export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  projects: string[]; // project slugs where skill was used
  icon?: string;
  description?: string;
  yearsOfExperience?: number;
  relatedSkills?: string[];
}

export interface SkillCategory {
  category: 
    | 'Frontend Engineering' 
    | 'Backend Engineering' 
    | 'Database Systems' 
    | 'Authentication Systems' 
    | 'System Design' 
    | 'Deployment & DevOps';
  skills: Skill[];
}

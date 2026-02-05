import { render, screen } from '@testing-library/react';
import { ProjectCard } from '@/components/sections/ProjectCard';
import type { ProjectSummary } from '@/types';

const mockProject: ProjectSummary = {
  title: 'Test Project',
  slug: 'test-project',
  description: 'This is a test project description for testing purposes.',
  systemType: 'Test System Type',
  techStack: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Express'],
  complexityScore: {
    authentication: 'Advanced',
    dataManagement: 'Complex',
    dashboard: 'Enterprise Level',
  },
};

describe('ProjectCard Component', () => {
  test('should render project title', () => {
    render(<ProjectCard project={mockProject} />);
    
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  test('should render system type', () => {
    render(<ProjectCard project={mockProject} />);
    
    expect(screen.getByText('Test System Type')).toBeInTheDocument();
  });

  test('should render project description', () => {
    render(<ProjectCard project={mockProject} />);
    
    expect(screen.getByText(/This is a test project description/i)).toBeInTheDocument();
  });

  test('should render tech stack badges', () => {
    render(<ProjectCard project={mockProject} />);
    
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('MongoDB')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  test('should limit tech stack display to 4 items for standard variant', () => {
    render(<ProjectCard project={mockProject} variant="standard" />);
    
    // Should show first 4 + "more" badge
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('MongoDB')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('+1 more')).toBeInTheDocument();
  });

  test('should show more tech stack items for featured variant', () => {
    render(<ProjectCard project={mockProject} variant="featured" />);
    
    // Should show first 6 items (all 5 in this case)
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Express')).toBeInTheDocument();
  });

  test('should render "View Project" link', () => {
    render(<ProjectCard project={mockProject} />);
    
    expect(screen.getByText('View Project')).toBeInTheDocument();
  });

  test('should link to correct project detail page', () => {
    const { container } = render(<ProjectCard project={mockProject} />);
    
    const link = container.querySelector('a');
    expect(link?.getAttribute('href')).toBe('/projects/test-project');
  });

  test('should show complexity score when showComplexity is true', () => {
    render(<ProjectCard project={mockProject} showComplexity={true} />);
    
    expect(screen.getByText('Auth')).toBeInTheDocument();
    expect(screen.getByText('Advanced')).toBeInTheDocument();
    expect(screen.getByText('Data')).toBeInTheDocument();
    expect(screen.getByText('Complex')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Enterprise Level')).toBeInTheDocument();
  });

  test('should not show complexity score when showComplexity is false', () => {
    render(<ProjectCard project={mockProject} showComplexity={false} />);
    
    expect(screen.queryByText('Auth')).not.toBeInTheDocument();
    expect(screen.queryByText('Advanced')).not.toBeInTheDocument();
  });

  test('should have hover effect on card', () => {
    const { container } = render(<ProjectCard project={mockProject} />);
    
    const card = container.querySelector('.glass-panel');
    expect(card?.className).toContain('hover');
  });

  test('should apply featured styling for featured variant', () => {
    const { container } = render(<ProjectCard project={mockProject} variant="featured" />);
    
    const card = container.querySelector('.lg\\:col-span-2');
    expect(card).toBeInTheDocument();
  });

  test('should render arrow icon in View Project link', () => {
    const { container } = render(<ProjectCard project={mockProject} />);
    
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });
});

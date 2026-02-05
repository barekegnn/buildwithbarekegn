import { render, screen } from '@testing-library/react';
import { HeroSection } from '@/components/sections/HeroSection';

describe('HeroSection Component', () => {
  test('should render authority positioning headline', () => {
    render(<HeroSection />);
    
    expect(screen.getByText(/Full-Stack Systems Engineer/i)).toBeInTheDocument();
    expect(screen.getByText(/Platform Builder/i)).toBeInTheDocument();
  });

  test('should render subtitle with key messaging', () => {
    render(<HeroSection />);
    
    const subtitle = screen.getByText(/Building production-grade platforms/i);
    expect(subtitle).toBeInTheDocument();
    expect(subtitle.textContent).toContain('admin dashboards');
    expect(subtitle.textContent).toContain('analytics systems');
    expect(subtitle.textContent).toContain('scalable backend architectures');
  });

  test('should render description text', () => {
    render(<HeroSection />);
    
    const description = screen.getByText(/Specialized in developing complex institutional systems/i);
    expect(description).toBeInTheDocument();
  });

  test('should render View Systems CTA button', () => {
    render(<HeroSection />);
    
    const viewSystemsButton = screen.getByText('View Systems');
    expect(viewSystemsButton).toBeInTheDocument();
    
    const link = viewSystemsButton.closest('a');
    expect(link?.getAttribute('href')).toBe('/systems');
  });

  test('should render Explore Projects CTA button', () => {
    render(<HeroSection />);
    
    const exploreProjectsButton = screen.getByText('Explore Projects');
    expect(exploreProjectsButton).toBeInTheDocument();
    
    const link = exploreProjectsButton.closest('a');
    expect(link?.getAttribute('href')).toBe('/projects');
  });

  test('should render Contact Me CTA button', () => {
    render(<HeroSection />);
    
    const contactButton = screen.getByText('Contact Me');
    expect(contactButton).toBeInTheDocument();
    
    const link = contactButton.closest('a');
    expect(link?.getAttribute('href')).toBe('/contact');
  });

  test('should have gradient text styling on main headline', () => {
    const { container } = render(<HeroSection />);
    
    const gradientText = container.querySelector('.text-gradient');
    expect(gradientText).toBeInTheDocument();
    expect(gradientText?.textContent).toContain('Full-Stack Systems Engineer');
  });

  test('should have background grid pattern', () => {
    const { container } = render(<HeroSection />);
    
    const gridPattern = container.querySelector('.bg-grid-pattern');
    expect(gridPattern).toBeInTheDocument();
  });

  test('should render all three CTA buttons', () => {
    render(<HeroSection />);
    
    const buttons = screen.getAllByRole('link');
    const ctaButtons = buttons.filter(button => 
      button.textContent === 'View Systems' ||
      button.textContent === 'Explore Projects' ||
      button.textContent === 'Contact Me'
    );
    
    expect(ctaButtons.length).toBe(3);
  });
});

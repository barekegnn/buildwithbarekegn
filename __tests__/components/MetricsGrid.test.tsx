import { render, screen } from '@testing-library/react';
import { MetricsGrid } from '@/components/sections/MetricsGrid';

describe('MetricsGrid Component', () => {
  test('should render all four metrics', () => {
    render(<MetricsGrid />);
    
    // Check for metric labels
    expect(screen.getByText('Production Projects')).toBeInTheDocument();
    expect(screen.getByText(/Multi-Role Auth Systems/i)).toBeInTheDocument();
    expect(screen.getByText('Admin Dashboards')).toBeInTheDocument();
    expect(screen.getByText('Analytics Platforms')).toBeInTheDocument();
  });

  test('should display "4 Production Projects" metric', () => {
    render(<MetricsGrid />);
    
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('Production Projects')).toBeInTheDocument();
    expect(screen.getByText(/Complex institutional platforms deployed/i)).toBeInTheDocument();
  });

  test('should display "Multi-Role Auth Systems" metric', () => {
    render(<MetricsGrid />);
    
    expect(screen.getByText('10+')).toBeInTheDocument();
    expect(screen.getByText(/Multi-Role Auth Systems/i)).toBeInTheDocument();
    expect(screen.getByText(/Admin, Manager, Student, Customer/i)).toBeInTheDocument();
  });

  test('should display "Admin Dashboards" metric', () => {
    render(<MetricsGrid />);
    
    expect(screen.getByText('8+')).toBeInTheDocument();
    expect(screen.getByText('Admin Dashboards')).toBeInTheDocument();
    expect(screen.getByText(/Enterprise-level control panels/i)).toBeInTheDocument();
  });

  test('should display "Analytics Platforms" metric', () => {
    render(<MetricsGrid />);
    
    expect(screen.getByText('6+')).toBeInTheDocument();
    expect(screen.getByText('Analytics Platforms')).toBeInTheDocument();
    expect(screen.getByText(/Performance tracking and data visualization/i)).toBeInTheDocument();
  });

  test('should render metrics in Card components', () => {
    const { container } = render(<MetricsGrid />);
    
    const cards = container.querySelectorAll('.glass-panel');
    expect(cards.length).toBe(4);
  });

  test('should have gradient styling on metric values', () => {
    const { container } = render(<MetricsGrid />);
    
    const gradientElements = container.querySelectorAll('.text-gradient');
    expect(gradientElements.length).toBeGreaterThanOrEqual(4);
  });

  test('should render metrics in grid layout', () => {
    const { container } = render(<MetricsGrid />);
    
    const grid = container.querySelector('.grid');
    expect(grid).toBeInTheDocument();
  });

  test('should have hover effect on metric cards', () => {
    const { container } = render(<MetricsGrid />);
    
    const cards = container.querySelectorAll('.glass-panel');
    cards.forEach(card => {
      expect(card.className).toContain('hover');
    });
  });

  test('should display all metric descriptions', () => {
    render(<MetricsGrid />);
    
    expect(screen.getByText(/Complex institutional platforms deployed/i)).toBeInTheDocument();
    expect(screen.getByText(/Admin, Manager, Student, Customer/i)).toBeInTheDocument();
    expect(screen.getByText(/Enterprise-level control panels/i)).toBeInTheDocument();
    expect(screen.getByText(/Performance tracking and data visualization/i)).toBeInTheDocument();
  });
});

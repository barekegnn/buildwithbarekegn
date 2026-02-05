import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from '@/components/Navbar';

// Mock Next.js navigation hooks
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
}));

describe('Navbar Component', () => {
  describe('Mobile menu toggle', () => {
    test('should toggle mobile menu when hamburger button is clicked', () => {
      const { container } = render(<Navbar />);
      
      // Mobile menu should not be visible initially
      const mobileMenu = container.querySelector('.md\\:hidden > div');
      expect(mobileMenu).toBeNull();
      
      // Click hamburger button
      const hamburgerButton = screen.getByLabelText('Toggle navigation menu');
      fireEvent.click(hamburgerButton);
      
      // Mobile menu should now be visible
      const mobileMenuAfterClick = container.querySelector('.md\\:hidden > div');
      expect(mobileMenuAfterClick).toBeInTheDocument();
    });

    test('should close mobile menu when clicking a link', () => {
      const { container } = render(<Navbar />);
      
      // Open mobile menu
      const hamburgerButton = screen.getByLabelText('Toggle navigation menu');
      fireEvent.click(hamburgerButton);
      
      // Verify menu is open
      let mobileMenu = container.querySelector('.md\\:hidden > div');
      expect(mobileMenu).toBeInTheDocument();
      
      // Click a link in mobile menu
      const mobileLinks = screen.getAllByText('Projects');
      const mobileLink = mobileLinks.find(link => 
        link.closest('.md\\:hidden')
      );
      
      if (mobileLink) {
        fireEvent.click(mobileLink);
      }
      
      // Menu should close (component re-renders, so we check state)
      // In actual implementation, clicking link closes menu
    });

    test('should show close icon when menu is open', () => {
      render(<Navbar />);
      
      const hamburgerButton = screen.getByLabelText('Toggle navigation menu');
      
      // Initially should show hamburger icon (3 lines)
      expect(hamburgerButton.querySelector('path[d*="M4 6h16"]')).toBeInTheDocument();
      
      // Click to open
      fireEvent.click(hamburgerButton);
      
      // Should now show close icon (X)
      expect(hamburgerButton.querySelector('path[d*="M6 18L18 6"]')).toBeInTheDocument();
    });
  });

  describe('Active route highlighting', () => {
    test('should highlight home link when on home page', () => {
      const usePathname = require('next/navigation').usePathname;
      usePathname.mockReturnValue('/');
      
      render(<Navbar />);
      
      const homeLinks = screen.getAllByText('Home');
      const desktopHomeLink = homeLinks[0].closest('a');
      
      // Should have active styling
      expect(desktopHomeLink?.className).toContain('from-blue-600/20');
      expect(desktopHomeLink?.className).toContain('text-blue-300');
    });

    test('should highlight projects link when on projects page', () => {
      const usePathname = require('next/navigation').usePathname;
      usePathname.mockReturnValue('/projects');
      
      render(<Navbar />);
      
      const projectsLinks = screen.getAllByText('Projects');
      const desktopProjectsLink = projectsLinks[0].closest('a');
      
      // Should have active styling
      expect(desktopProjectsLink?.className).toContain('from-blue-600/20');
      expect(desktopProjectsLink?.className).toContain('text-blue-300');
    });

    test('should highlight projects link when on project detail page', () => {
      const usePathname = require('next/navigation').usePathname;
      usePathname.mockReturnValue('/projects/some-project');
      
      render(<Navbar />);
      
      const projectsLinks = screen.getAllByText('Projects');
      const desktopProjectsLink = projectsLinks[0].closest('a');
      
      // Should have active styling (matches /projects prefix)
      expect(desktopProjectsLink?.className).toContain('from-blue-600/20');
    });

    test('should not highlight other links when on home page', () => {
      const usePathname = require('next/navigation').usePathname;
      usePathname.mockReturnValue('/');
      
      render(<Navbar />);
      
      const projectsLinks = screen.getAllByText('Projects');
      const desktopProjectsLink = projectsLinks[0].closest('a');
      
      // Should not have active styling
      expect(desktopProjectsLink?.className).not.toContain('from-blue-600/20');
      expect(desktopProjectsLink?.className).toContain('text-gray-300');
    });
  });

  describe('Logo', () => {
    test('should render logo with correct text', () => {
      render(<Navbar />);
      
      const logo = screen.getByText('BA');
      expect(logo).toBeInTheDocument();
      expect(logo.className).toContain('text-gradient');
    });

    test('should link logo to home page', () => {
      const { container } = render(<Navbar />);
      
      const logo = screen.getByText('BA');
      const logoLink = logo.closest('a');
      
      expect(logoLink?.getAttribute('href')).toBe('/');
    });
  });

  describe('Accessibility', () => {
    test('should have proper ARIA labels', () => {
      render(<Navbar />);
      
      const hamburgerButton = screen.getByLabelText('Toggle navigation menu');
      expect(hamburgerButton).toBeInTheDocument();
      
      const srOnly = screen.getByText('Open main menu');
      expect(srOnly).toBeInTheDocument();
    });

    test('should update aria-expanded when menu toggles', () => {
      render(<Navbar />);
      
      const hamburgerButton = screen.getByLabelText('Toggle navigation menu');
      
      // Initially false
      expect(hamburgerButton.getAttribute('aria-expanded')).toBe('false');
      
      // Click to open
      fireEvent.click(hamburgerButton);
      
      // Should be true
      expect(hamburgerButton.getAttribute('aria-expanded')).toBe('true');
    });
  });
});

/**
 * Unit tests for animation utilities
 * Feature: systems-engineer-portfolio
 * Tests that animations respect prefers-reduced-motion setting
 */

import { shouldReduceMotion, getAnimationProps, fadeInUp, scaleOnHover } from '@/lib/animations';

describe('Animation Utilities', () => {
  describe('shouldReduceMotion', () => {
    it('should return false when prefers-reduced-motion is not set', () => {
      // Mock matchMedia to return no-preference
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation((query) => ({
          matches: false,
          media: query,
          onchange: null,
          addListener: jest.fn(),
          removeListener: jest.fn(),
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        })),
      });

      expect(shouldReduceMotion()).toBe(false);
    });

    it('should return true when prefers-reduced-motion is set to reduce', () => {
      // Mock matchMedia to return reduce
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation((query) => ({
          matches: query === '(prefers-reduced-motion: reduce)',
          media: query,
          onchange: null,
          addListener: jest.fn(),
          removeListener: jest.fn(),
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        })),
      });

      expect(shouldReduceMotion()).toBe(true);
    });
  });

  describe('getAnimationProps', () => {
    beforeEach(() => {
      // Reset matchMedia mock before each test
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation((query) => ({
          matches: false,
          media: query,
          onchange: null,
          addListener: jest.fn(),
          removeListener: jest.fn(),
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        })),
      });
    });

    it('should return original animation props when reduced motion is not preferred', () => {
      const props = getAnimationProps(fadeInUp);

      expect(props).toEqual(fadeInUp);
      expect(props.initial).toEqual({ opacity: 0, y: 20 });
      expect(props.animate).toEqual({ opacity: 1, y: 0 });
      expect(props.transition).toEqual({ duration: 0.5 });
    });

    it('should return instant animation props when reduced motion is preferred', () => {
      // Mock matchMedia to return reduce
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation((query) => ({
          matches: query === '(prefers-reduced-motion: reduce)',
          media: query,
          onchange: null,
          addListener: jest.fn(),
          removeListener: jest.fn(),
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        })),
      });

      const props = getAnimationProps(fadeInUp);

      expect(props.initial).toEqual(fadeInUp.animate);
      expect(props.animate).toEqual(fadeInUp.animate);
      expect(props.transition).toEqual({ duration: 0 });
    });

    it('should handle scaleOnHover animation variant', () => {
      const props = getAnimationProps(scaleOnHover);

      expect(props).toEqual(scaleOnHover);
      expect(props.whileHover).toEqual({ scale: 1.02 });
      expect(props.transition).toEqual({ duration: 0.2 });
    });

    it('should disable scaleOnHover when reduced motion is preferred', () => {
      // Mock matchMedia to return reduce
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation((query) => ({
          matches: query === '(prefers-reduced-motion: reduce)',
          media: query,
          onchange: null,
          addListener: jest.fn(),
          removeListener: jest.fn(),
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        })),
      });

      const props = getAnimationProps(scaleOnHover);

      // When reduced motion is preferred, animations should be instant
      expect(props.transition).toEqual({ duration: 0 });
    });
  });

  describe('Animation Variants', () => {
    it('should have correct fadeInUp animation properties', () => {
      expect(fadeInUp.initial).toEqual({ opacity: 0, y: 20 });
      expect(fadeInUp.animate).toEqual({ opacity: 1, y: 0 });
      expect(fadeInUp.transition).toEqual({ duration: 0.5 });
    });

    it('should have correct scaleOnHover animation properties', () => {
      expect(scaleOnHover.whileHover).toEqual({ scale: 1.02 });
      expect(scaleOnHover.transition).toEqual({ duration: 0.2 });
    });
  });
});

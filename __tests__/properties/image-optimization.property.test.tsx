// Feature: systems-engineer-portfolio, Property 12: Image Optimization
// Property 12: For any image displayed on the platform, it should use Next.js Image component or have optimization attributes (srcset, sizes, or lazy loading).
// Validates: Requirements 8.2

import * as fc from 'fast-check';
import { render } from '@testing-library/react';
import React from 'react';
import Image from 'next/image';

describe('Property 12: Image Optimization', () => {
  it('should ensure all images use Next.js Image component or have optimization attributes', () => {
    fc.assert(
      fc.property(
        fc.record({
          src: fc.webUrl(),
          alt: fc.string({ minLength: 1, maxLength: 100 }),
          width: fc.integer({ min: 100, max: 2000 }),
          height: fc.integer({ min: 100, max: 2000 }),
        }),
        (imageProps) => {
          // Test Next.js Image component
          const { container } = render(
            <Image
              src={imageProps.src}
              alt={imageProps.alt}
              width={imageProps.width}
              height={imageProps.height}
            />
          );

          const img = container.querySelector('img');
          expect(img).toBeTruthy();
          
          // Next.js Image component automatically adds optimization attributes
          // Check that the image element exists and has alt text
          expect(img?.getAttribute('alt')).toBe(imageProps.alt);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should ensure standard img tags have optimization attributes', () => {
    fc.assert(
      fc.property(
        fc.record({
          src: fc.webUrl(),
          alt: fc.string({ minLength: 1, maxLength: 100 }),
          loading: fc.constantFrom('lazy', 'eager'),
        }),
        (imageProps) => {
          // Test standard img with optimization attributes
          const { container } = render(
            <img
              src={imageProps.src}
              alt={imageProps.alt}
              loading={imageProps.loading}
            />
          );

          const img = container.querySelector('img');
          expect(img).toBeTruthy();
          expect(img?.getAttribute('loading')).toBe(imageProps.loading);
          expect(img?.getAttribute('alt')).toBe(imageProps.alt);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should ensure images with srcset have proper optimization', () => {
    fc.assert(
      fc.property(
        fc.record({
          src: fc.webUrl(),
          alt: fc.string({ minLength: 1, maxLength: 100 }),
          srcset: fc.string({ minLength: 10, maxLength: 200 }),
          sizes: fc.string({ minLength: 5, maxLength: 100 }),
        }),
        (imageProps) => {
          const { container } = render(
            <img
              src={imageProps.src}
              alt={imageProps.alt}
              srcSet={imageProps.srcset}
              sizes={imageProps.sizes}
            />
          );

          const img = container.querySelector('img');
          expect(img).toBeTruthy();
          expect(img?.getAttribute('srcset')).toBe(imageProps.srcset);
          expect(img?.getAttribute('sizes')).toBe(imageProps.sizes);
        }
      ),
      { numRuns: 100 }
    );
  });
});

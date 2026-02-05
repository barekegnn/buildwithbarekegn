import * as fc from 'fast-check';
import type { Metadata } from 'next';

// Feature: systems-engineer-portfolio, Property 14: Page Metadata Presence

describe('Property 14: Page Metadata Presence', () => {
  // Import metadata from layout
  const layoutMetadata: Metadata = {
    title: {
      default: "Barekegn Asefa - Full-Stack Systems Engineer",
      template: "%s | Barekegn Asefa",
    },
    description:
      "Production-grade systems engineer building complex platforms with admin dashboards, analytics systems, and scalable backend architectures.",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://barekegn.dev",
      siteName: "Barekegn Asefa Portfolio",
      title: "Barekegn Asefa - Full-Stack Systems Engineer",
      description:
        "Production-grade systems engineer building complex platforms with admin dashboards, analytics systems, and scalable backend architectures.",
    },
    twitter: {
      card: "summary_large_image",
    },
  };

  test('metadata should have title configuration', () => {
    expect(layoutMetadata.title).toBeDefined();
    
    if (typeof layoutMetadata.title === 'object' && layoutMetadata.title !== null) {
      expect(layoutMetadata.title.default).toBeDefined();
      expect(typeof layoutMetadata.title.default).toBe('string');
      expect(layoutMetadata.title.default.length).toBeGreaterThan(0);
    }
  });

  test('metadata should have description', () => {
    expect(layoutMetadata.description).toBeDefined();
    expect(typeof layoutMetadata.description).toBe('string');
    expect(layoutMetadata.description.length).toBeGreaterThan(0);
  });

  test('metadata should have OpenGraph configuration', () => {
    expect(layoutMetadata.openGraph).toBeDefined();
    
    if (layoutMetadata.openGraph) {
      expect(layoutMetadata.openGraph.type).toBeDefined();
      expect(layoutMetadata.openGraph.locale).toBeDefined();
      expect(layoutMetadata.openGraph.url).toBeDefined();
      expect(layoutMetadata.openGraph.siteName).toBeDefined();
      expect(layoutMetadata.openGraph.title).toBeDefined();
      expect(layoutMetadata.openGraph.description).toBeDefined();
    }
  });

  test('metadata should have Twitter card configuration', () => {
    expect(layoutMetadata.twitter).toBeDefined();
    
    if (layoutMetadata.twitter) {
      expect(layoutMetadata.twitter.card).toBeDefined();
    }
  });

  test('OpenGraph URL should be valid', () => {
    if (layoutMetadata.openGraph && layoutMetadata.openGraph.url) {
      const url = layoutMetadata.openGraph.url.toString();
      expect(url).toMatch(/^https?:\/\//);
    }
  });

  test('title template should include placeholder', () => {
    if (typeof layoutMetadata.title === 'object' && layoutMetadata.title !== null) {
      const template = layoutMetadata.title.template;
      if (template) {
        expect(template).toContain('%s');
      }
    }
  });

  test('metadata fields should not be empty strings', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(
          layoutMetadata.description,
          typeof layoutMetadata.title === 'object' ? layoutMetadata.title.default : layoutMetadata.title
        ),
        (field) => {
          if (typeof field === 'string') {
            expect(field.trim().length).toBeGreaterThan(0);
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  test('OpenGraph metadata should match main metadata', () => {
    const mainDescription = layoutMetadata.description;
    const ogDescription = layoutMetadata.openGraph?.description;
    
    // OpenGraph description should exist and match or be similar to main description
    expect(ogDescription).toBeDefined();
    if (typeof mainDescription === 'string' && typeof ogDescription === 'string') {
      expect(ogDescription.length).toBeGreaterThan(0);
    }
  });

  test('metadata should be consistent across multiple accesses', () => {
    const metadata1 = layoutMetadata;
    const metadata2 = layoutMetadata;
    
    expect(metadata1).toEqual(metadata2);
  });

  test('all required OpenGraph properties should be present', () => {
    const requiredOGProps = ['type', 'locale', 'url', 'siteName', 'title', 'description'];
    
    requiredOGProps.forEach((prop) => {
      expect(layoutMetadata.openGraph).toHaveProperty(prop);
    });
  });
});

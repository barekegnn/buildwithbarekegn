import * as fc from 'fast-check';
import { parseMDX, getMDXContent, getAllMDXSlugs, mdxFileExists } from '@/lib/mdx';
import { getAllProjectSlugs } from '@/lib/projects';

// Feature: systems-engineer-portfolio, Property 10: MDX Content Parsing

describe('Property 10: MDX Content Parsing', () => {
  const projectSlugs = getAllProjectSlugs();
  const mdxSlugs = getAllMDXSlugs();

  test('parseMDX should successfully parse valid MDX files', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.constantFrom(...mdxSlugs),
        async (slug: string) => {
          const result = await parseMDX(slug);
          
          expect(result).not.toBeNull();
          expect(result?.content).toBeDefined();
          expect(typeof result?.content).toBe('string');
          expect(result?.mdxSource).toBeDefined();
          expect(result?.frontmatter).toBeDefined();
        }
      ),
      { numRuns: 100 }
    );
  });

  test('parseMDX should return null for non-existent files', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.string().filter(s => !mdxSlugs.includes(s) && s.length > 0),
        async (invalidSlug: string) => {
          const result = await parseMDX(invalidSlug);
          expect(result).toBeNull();
        }
      ),
      { numRuns: 100 }
    );
  });

  test('getMDXContent should return MDXRemoteSerializeResult for valid slugs', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.constantFrom(...mdxSlugs),
        async (slug: string) => {
          const result = await getMDXContent(slug);
          
          expect(result).not.toBeNull();
          expect(result).toHaveProperty('compiledSource');
        }
      ),
      { numRuns: 100 }
    );
  });

  test('getMDXContent should return null for invalid slugs', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.string().filter(s => !mdxSlugs.includes(s) && s.length > 0),
        async (invalidSlug: string) => {
          const result = await getMDXContent(invalidSlug);
          expect(result).toBeNull();
        }
      ),
      { numRuns: 100 }
    );
  });

  test('mdxFileExists should return true for existing files', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...mdxSlugs),
        (slug: string) => {
          const exists = mdxFileExists(slug);
          expect(exists).toBe(true);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('mdxFileExists should return false for non-existent files', () => {
    fc.assert(
      fc.property(
        fc.string().filter(s => !mdxSlugs.includes(s) && s.length > 0),
        (invalidSlug: string) => {
          const exists = mdxFileExists(invalidSlug);
          expect(exists).toBe(false);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('all project slugs should have corresponding MDX files', () => {
    projectSlugs.forEach((slug) => {
      expect(mdxSlugs).toContain(slug);
      expect(mdxFileExists(slug)).toBe(true);
    });
  });

  test('getAllMDXSlugs should return array of strings', () => {
    const slugs = getAllMDXSlugs();
    
    expect(Array.isArray(slugs)).toBe(true);
    slugs.forEach((slug) => {
      expect(typeof slug).toBe('string');
      expect(slug.length).toBeGreaterThan(0);
      expect(slug).not.toContain('.mdx');
    });
  });

  test('parsed MDX content should not be empty', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.constantFrom(...mdxSlugs),
        async (slug: string) => {
          const result = await parseMDX(slug);
          
          if (result) {
            expect(result.content.trim().length).toBeGreaterThan(0);
          }
        }
      ),
      { numRuns: 100 }
    );
  });
});

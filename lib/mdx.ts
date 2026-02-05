import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

/**
 * Parse MDX file and extract frontmatter and content
 */
export async function parseMDX(slug: string): Promise<{
  frontmatter: Record<string, any>;
  content: string;
  mdxSource: MDXRemoteSerializeResult;
} | null> {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    
    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Parse frontmatter and content
    const { data: frontmatter, content } = matter(fileContents);
    
    // Serialize MDX content
    const mdxSource = await serialize(content, {
      mdxOptions: {
        development: process.env.NODE_ENV === 'development',
      },
    });
    
    return {
      frontmatter,
      content,
      mdxSource,
    };
  } catch (error) {
    console.error(`Error parsing MDX file for slug: ${slug}`, error);
    return null;
  }
}

/**
 * Get MDX content by project slug
 */
export async function getMDXContent(slug: string): Promise<MDXRemoteSerializeResult | null> {
  const result = await parseMDX(slug);
  return result ? result.mdxSource : null;
}

/**
 * Get all available MDX project slugs
 */
export function getAllMDXSlugs(): string[] {
  try {
    if (!fs.existsSync(projectsDirectory)) {
      return [];
    }
    
    const files = fs.readdirSync(projectsDirectory);
    
    return files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => file.replace(/\.mdx$/, ''));
  } catch (error) {
    console.error('Error reading MDX directory:', error);
    return [];
  }
}

/**
 * Check if MDX file exists for a given slug
 */
export function mdxFileExists(slug: string): boolean {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
  return fs.existsSync(fullPath);
}

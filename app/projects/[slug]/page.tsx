import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects';
import { getMDXContent } from '@/lib/mdx';
import { Badge, Button, Card } from '@/components/ui';
import Link from 'next/link';
import { ExternalLinkButton, CTAButton } from '@/components/sections/ProjectDetailClient';
import { ProjectDetailClient } from '@/components/sections/ProjectDetailClient';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all projects
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for each project
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Barekegn Asefa`,
      description: project.description,
      type: 'article',
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    notFound();
  }

  // Fetch MDX content
  const mdxContent = await getMDXContent(slug);

  return (
    <main className="min-h-screen">
      {/* Compact Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          {/* Back Link */}
          <Link 
            href="/projects" 
            className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors text-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Project Info */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl sm:text-4xl font-bold mb-3">{project.title}</h1>
              <p className="text-lg text-gray-400 mb-3">{project.systemType}</p>
              <p className="text-sm text-gray-500 mb-6">{project.organizationContext}</p>
              
              {/* Links */}
              <div className="flex flex-wrap gap-3 mb-6">
                {project.liveDemo && (
                  <ExternalLinkButton href={project.liveDemo} type="demo" variant="primary">
                    Live Demo
                  </ExternalLinkButton>
                )}
                {project.github && (
                  <ExternalLinkButton href={project.github} type="github" variant="secondary">
                    GitHub
                  </ExternalLinkButton>
                )}
              </div>

              {/* Demo Credentials - if available */}
              {project.demoCredentials && project.demoCredentials.length > 0 && (
                <Card className="bg-gradient-to-br from-green-600/10 to-blue-600/10 border border-green-500/20 mb-6">
                  <div className="flex items-start gap-2 mb-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                    <div>
                      <h3 className="text-sm font-semibold text-green-400 mb-1">Demo Credentials Available</h3>
                      <p className="text-xs text-gray-400 mb-3">Try different user roles to explore the full system</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {project.demoCredentials.map((cred, index) => (
                      <div key={index} className="bg-gray-900/50 rounded-lg p-3 border border-gray-800">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-blue-400">{cred.role}</span>
                          <Badge className="text-xs">{cred.role}</Badge>
                        </div>
                        <div className="space-y-1 text-xs">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-500 w-16">Email:</span>
                            <code className="text-gray-300 bg-gray-800 px-2 py-1 rounded">{cred.email}</code>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-500 w-16">Password:</span>
                            <code className="text-gray-300 bg-gray-800 px-2 py-1 rounded">{cred.password}</code>
                          </div>
                          <p className="text-gray-400 mt-2 text-xs">{cred.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {/* Tech Stack - Compact */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <Badge key={index} className="text-xs">{tech}</Badge>
                ))}
              </div>
            </div>

            {/* Right: Quick Stats */}
            <div className="space-y-4">
              <Card className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 p-4">
                <h3 className="text-sm font-semibold mb-3">Complexity</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Auth</span>
                    <Badge className="text-xs">{project.complexityScore.authentication}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Data</span>
                    <Badge className="text-xs">{project.complexityScore.dataManagement}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Dashboard</span>
                    <Badge className="text-xs">{project.complexityScore.dashboard}</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <h3 className="text-sm font-semibold mb-2">Roles</h3>
                <div className="flex flex-wrap gap-1">
                  {project.roles.map((role, index) => (
                    <Badge key={index} className="text-xs">{role}</Badge>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tabbed Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ProjectDetailClient project={project} mdxContent={mdxContent} />
        </div>
      </section>

      {/* Compact CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/20 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Interested in Similar <span className="text-gradient">Solutions?</span>
          </h2>
          <p className="text-gray-400 mb-6 text-sm">
            Let's discuss how we can build scalable systems for your organization.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <CTAButton href="/contact" ctaName="Start a Conversation" variant="primary">
              Start a Conversation
            </CTAButton>
            <CTAButton href="/projects" ctaName="View More Projects" variant="secondary">
              View More Projects
            </CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}

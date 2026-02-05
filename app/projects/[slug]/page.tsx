import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects';
import { getMDXContent } from '@/lib/mdx';
import { Badge, Button, Card } from '@/components/ui';
import Link from 'next/link';
import { ExternalLinkButton, CTAButton } from '@/components/sections/ProjectDetailClient';

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
      {/* Project Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-5xl mx-auto">
          {/* Back Link */}
          <Link 
            href="/projects" 
            className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>

          {/* Project Title */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {project.title}
          </h1>

          {/* System Type */}
          <p className="text-xl text-gray-400 mb-6">
            {project.systemType}
          </p>

          {/* Organization Context */}
          <p className="text-gray-500 mb-8">
            {project.organizationContext}
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-8">
            {project.liveDemo && (
              <ExternalLinkButton href={project.liveDemo} type="demo" variant="primary">
                View Live Demo
              </ExternalLinkButton>
            )}
            {project.github && (
              <ExternalLinkButton href={project.github} type="github" variant="secondary">
                View on GitHub
              </ExternalLinkButton>
            )}
          </div>

          {/* Complexity Score */}
          <Card className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20">
            <h3 className="text-lg font-semibold mb-4">System Complexity</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <div className="text-sm text-gray-400 mb-1">Authentication</div>
                <Badge>{project.complexityScore.authentication}</Badge>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Data Management</div>
                <Badge>{project.complexityScore.dataManagement}</Badge>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Dashboard</div>
                <Badge>{project.complexityScore.dashboard}</Badge>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Problem Context */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Problem <span className="text-gradient">Context</span>
          </h2>
          <Card>
            <p className="text-gray-300 leading-relaxed">
              {project.problemContext}
            </p>
          </Card>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/20 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            System <span className="text-gradient">Architecture</span>
          </h2>
          
          <Card className="mb-8">
            <p className="text-gray-300 leading-relaxed mb-6">
              {project.architectureSummary}
            </p>
            
            {/* Roles */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">User Roles</h3>
              <div className="flex flex-wrap gap-2">
                {project.roles.map((role, index) => (
                  <Badge key={index}>{role}</Badge>
                ))}
              </div>
            </div>

            {/* Modules */}
            <div>
              <h3 className="text-lg font-semibold mb-3">System Modules</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.modules.map((module, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {module}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </section>

      {/* Dashboard Views */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Dashboard <span className="text-gradient">Views</span>
          </h2>
          
          <div className="grid grid-cols-1 gap-6">
            {project.dashboards.map((dashboard, index) => (
              <Card key={index} hover>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold">{dashboard.title}</h3>
                  <Badge>{dashboard.type}</Badge>
                </div>
                <p className="text-gray-400 mb-4">{dashboard.description}</p>
                
                {/* Dashboard Image Placeholder */}
                <div className="aspect-video bg-gray-900/50 rounded-lg flex items-center justify-center border border-gray-800">
                  <svg className="w-16 h-16 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                  </svg>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/20 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Core <span className="text-gradient">Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.features.map((feature, index) => (
              <Card key={index} hover>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <Badge>{feature.category}</Badge>
                </div>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          
          <Card>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, index) => (
                <Badge key={index}>{tech}</Badge>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Engineering Challenges */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/20 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Engineering <span className="text-gradient">Challenges</span>
          </h2>
          
          <Card>
            <ul className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <svg className="w-6 h-6 mr-3 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  {challenge}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Outcome & <span className="text-gradient">Impact</span>
          </h2>
          
          <Card className="bg-gradient-to-br from-green-600/10 to-blue-600/10 border border-green-500/20">
            <p className="text-gray-300 leading-relaxed">
              {project.outcome}
            </p>
          </Card>
        </div>
      </section>

      {/* MDX Content (if available) */}
      {mdxContent && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/20 to-transparent">
          <div className="max-w-5xl mx-auto">
            <Card>
              <div className="prose prose-invert max-w-none">
                <MDXRemote source={mdxContent} />
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Interested in Similar <span className="text-gradient">Solutions?</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Let's discuss how we can build scalable systems for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

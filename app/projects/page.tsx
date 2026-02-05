import { Metadata } from 'next';
import { getAllProjects } from '@/lib/projects';
import { ProjectCard } from '@/components/sections/ProjectCard';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore production-grade systems and platforms built by Barekegn Asefa - from government project management systems to AI-powered academic platforms and e-commerce solutions.',
  openGraph: {
    title: 'Projects | Barekegn Asefa - Systems Engineer',
    description: 'Explore production-grade systems and platforms built by Barekegn Asefa - from government project management systems to AI-powered academic platforms and e-commerce solutions.',
    type: 'website',
  },
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Production <span className="text-gradient">Systems</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Real-world platforms built for institutions, universities, and commercial applications. 
            Each system features multi-role authentication, admin dashboards, and scalable architecture.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.slug} 
              project={project}
              variant="standard"
              showComplexity={true}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="glass-panel p-6 text-center">
            <div className="text-3xl font-bold text-gradient mb-2">4</div>
            <div className="text-sm text-gray-400">Production Projects</div>
          </div>
          <div className="glass-panel p-6 text-center">
            <div className="text-3xl font-bold text-gradient mb-2">12+</div>
            <div className="text-sm text-gray-400">User Roles</div>
          </div>
          <div className="glass-panel p-6 text-center">
            <div className="text-3xl font-bold text-gradient mb-2">15+</div>
            <div className="text-sm text-gray-400">Core Technologies</div>
          </div>
          <div className="glass-panel p-6 text-center">
            <div className="text-3xl font-bold text-gradient mb-2">8+</div>
            <div className="text-sm text-gray-400">Admin Dashboards</div>
          </div>
        </div>
      </div>
    </main>
  );
}

import { Metadata } from 'next';
import { getAllSkillCategories } from '@/lib/skills';
import { SkillsGroup } from '@/components/sections/SkillsGroup';

export const metadata: Metadata = {
  title: 'Skills',
  description: 'Full-stack engineering skills spanning frontend development with React and Next.js, backend systems with Node.js and Express, database design with MongoDB and Firebase, authentication systems, system architecture, and DevOps practices.',
  openGraph: {
    title: 'Skills | Barekegn Asefa - Systems Engineer',
    description: 'Full-stack engineering skills spanning frontend development with React and Next.js, backend systems with Node.js and Express, database design with MongoDB and Firebase, authentication systems, system architecture, and DevOps practices.',
    type: 'website',
  },
};

export default function SkillsPage() {
  const skillCategories = getAllSkillCategories();

  return (
    <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Full-stack engineering expertise demonstrated across production projects
          </p>
        </div>

        {/* Skills Summary Cards - Compact */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="glass-panel p-4 text-center">
            <div className="text-2xl font-bold text-gradient mb-1">
              {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}
            </div>
            <div className="text-xs text-gray-400">Total Skills</div>
          </div>
          <div className="glass-panel p-4 text-center">
            <div className="text-2xl font-bold text-gradient mb-1">
              {skillCategories.reduce(
                (acc, cat) => acc + cat.skills.filter(s => s.level === 'expert').length,
                0
              )}
            </div>
            <div className="text-xs text-gray-400">Expert Level</div>
          </div>
          <div className="glass-panel p-4 text-center">
            <div className="text-2xl font-bold text-gradient mb-1">
              {skillCategories.reduce(
                (acc, cat) => acc + cat.skills.filter(s => s.level === 'advanced').length,
                0
              )}
            </div>
            <div className="text-xs text-gray-400">Advanced Level</div>
          </div>
          <div className="glass-panel p-4 text-center">
            <div className="text-2xl font-bold text-gradient mb-1">
              {skillCategories.length}
            </div>
            <div className="text-xs text-gray-400">Categories</div>
          </div>
        </div>

        {/* Skills by Category - Compact Grid */}
        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <SkillsGroup
              key={index}
              category={category.category}
              skills={category.skills}
            />
          ))}
        </div>

        {/* Learning Philosophy - Compact */}
        <div className="mt-12 glass-panel p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-center">
            Learning <span className="text-gradient">Philosophy</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="text-sm font-semibold mb-1">Project-Based</h3>
              <p className="text-xs text-gray-400">
                Skills learned through real implementations
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔄</div>
              <h3 className="text-sm font-semibold mb-1">Continuous Growth</h3>
              <p className="text-xs text-gray-400">
                Always updating with latest practices
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🏗️</div>
              <h3 className="text-sm font-semibold mb-1">Production Focus</h3>
              <p className="text-xs text-gray-400">
                Validated through deployed systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

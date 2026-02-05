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
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Full-stack engineering expertise demonstrated across production projects. 
            Each skill is mapped to real implementations, showing practical application 
            in building complex systems.
          </p>
        </div>

        {/* Skills by Category */}
        <div className="mb-16">
          {skillCategories.map((category, index) => (
            <SkillsGroup
              key={index}
              category={category.category}
              skills={category.skills}
            />
          ))}
        </div>

        {/* Skills Summary */}
        <div className="glass-panel p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Skills <span className="text-gradient">Overview</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">
                {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}
              </div>
              <div className="text-sm text-gray-400">Total Skills</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">
                {skillCategories.reduce(
                  (acc, cat) => acc + cat.skills.filter(s => s.level === 'expert').length,
                  0
                )}
              </div>
              <div className="text-sm text-gray-400">Expert Level</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">
                {skillCategories.reduce(
                  (acc, cat) => acc + cat.skills.filter(s => s.level === 'advanced').length,
                  0
                )}
              </div>
              <div className="text-sm text-gray-400">Advanced Level</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">
                {skillCategories.length}
              </div>
              <div className="text-sm text-gray-400">Skill Categories</div>
            </div>
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 glass-panel p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Learning <span className="text-gradient">Philosophy</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold mb-2">Project-Based Learning</h3>
              <p className="text-sm text-gray-400">
                Every skill is learned and refined through real-world project implementation
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">🔄</div>
              <h3 className="text-lg font-semibold mb-2">Continuous Improvement</h3>
              <p className="text-sm text-gray-400">
                Constantly updating skills with latest best practices and technologies
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">🏗️</div>
              <h3 className="text-lg font-semibold mb-2">Production Focus</h3>
              <p className="text-sm text-gray-400">
                Skills are validated through deployment and maintenance of production systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import { Metadata } from 'next';
import { Card } from '@/components/ui';

export const metadata: Metadata = {
  title: 'About',
  description: 'Full-Stack Systems Engineer specializing in building production-grade platforms for institutions, startups, and enterprises. Experienced in React, Node.js, MongoDB, and scalable system architecture.',
  openGraph: {
    title: 'About | Barekegn Asefa - Systems Engineer',
    description: 'Full-Stack Systems Engineer specializing in building production-grade platforms for institutions, startups, and enterprises. Experienced in React, Node.js, MongoDB, and scalable system architecture.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Full-Stack Systems Engineer building production-ready platforms that solve real-world problems
          </p>
        </div>

        {/* Professional Bio */}
        <Card className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Professional Background</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              I'm Barekegn Asefa, a Full-Stack Systems Engineer with a passion for building scalable, 
              production-ready platforms that solve complex institutional and business challenges. My expertise 
              spans the entire development lifecycle, from system architecture and database design to frontend 
              implementation and deployment.
            </p>
            <p>
              Over the past few years, I've developed multiple production systems serving government agencies, 
              universities, and commercial applications. Each project has strengthened my ability to translate 
              complex requirements into elegant, maintainable solutions that users love and administrators trust.
            </p>
            <p>
              My approach combines technical excellence with practical problem-solving. I don't just write code—I 
              build systems that scale, documentation that empowers teams, and architectures that stand the test 
              of time. Every project is an opportunity to deliver value and exceed expectations.
            </p>
          </div>
        </Card>

        {/* Core Competencies */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card hover>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-3">🏗️</span>
                System Architecture
              </h3>
              <p className="text-sm text-gray-400">
                Designing scalable, maintainable architectures with proper separation of concerns, 
                modular design patterns, and future-proof technology choices.
              </p>
            </Card>
            <Card hover>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-3">⚛️</span>
                Full-Stack Development
              </h3>
              <p className="text-sm text-gray-400">
                Expert in React, Next.js, Node.js, Express, MongoDB, and Firebase. Building complete 
                applications from database to user interface.
              </p>
            </Card>
            <Card hover>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-3">🔐</span>
                Authentication Systems
              </h3>
              <p className="text-sm text-gray-400">
                Implementing secure, role-based authentication with JWT, OAuth, and complex permission 
                hierarchies for multi-user platforms.
              </p>
            </Card>
            <Card hover>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-3">📊</span>
                Admin Dashboards
              </h3>
              <p className="text-sm text-gray-400">
                Creating powerful admin interfaces with data visualization, user management, content 
                moderation, and comprehensive system controls.
              </p>
            </Card>
            <Card hover>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-3">📈</span>
                Analytics & Reporting
              </h3>
              <p className="text-sm text-gray-400">
                Building analytics dashboards with real-time metrics, data aggregation, and actionable 
                insights for decision-makers.
              </p>
            </Card>
            <Card hover>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-3">🚀</span>
                Deployment & DevOps
              </h3>
              <p className="text-sm text-gray-400">
                Deploying applications to production with CI/CD pipelines, monitoring, and scalable 
                cloud infrastructure.
              </p>
            </Card>
          </div>
        </div>

        {/* Education & Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-2xl mr-3">🎓</span>
              Education
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Software Engineering</h3>
                <p className="text-sm text-gray-400">Haramaya University</p>
                <p className="text-xs text-gray-500">Focus on Software Engineering & System Design</p>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-2xl mr-3">💼</span>
              Experience
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Full-Stack Systems Engineer</h3>
                <p className="text-sm text-gray-400">Freelance & Contract Work</p>
                <p className="text-xs text-gray-500">Building production systems for various clients</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Work Philosophy */}
        <Card className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Work Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold mb-2">Quality First</h3>
              <p className="text-sm text-gray-400">
                Every line of code is written with maintainability, scalability, and performance in mind
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-semibold mb-2">Collaborative</h3>
              <p className="text-sm text-gray-400">
                Regular communication, transparent progress tracking, and iterative feedback incorporation
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">📚</div>
              <h3 className="font-semibold mb-2">Documentation</h3>
              <p className="text-sm text-gray-400">
                Comprehensive technical documentation ensures smooth handoffs and long-term maintainability
              </p>
            </div>
          </div>
        </Card>

        {/* Technical Interests */}
        <Card className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Technical Interests</h2>
          <div className="space-y-3 text-gray-300">
            <div className="flex items-start">
              <svg className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Scalable system architecture and microservices design</span>
            </div>
            <div className="flex items-start">
              <svg className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Real-time systems with WebSocket and event-driven architectures</span>
            </div>
            <div className="flex items-start">
              <svg className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>AI integration and intelligent system features</span>
            </div>
            <div className="flex items-start">
              <svg className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Performance optimization and database query tuning</span>
            </div>
            <div className="flex items-start">
              <svg className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>DevOps practices and continuous deployment pipelines</span>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center glass-panel p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">
            Let's Build <span className="text-gradient">Something Great</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Whether you're a startup with an MVP idea, an institution needing a custom system, 
            or an enterprise looking for scalable solutions—let's discuss how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Get In Touch
            </a>
            <a
              href="/projects"
              className="inline-block px-8 py-4 glass-panel text-foreground font-medium rounded-lg hover:bg-opacity-80 transition-all duration-200"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

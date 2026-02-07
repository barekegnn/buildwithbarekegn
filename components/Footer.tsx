import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 mt-auto" role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">Barekegn Asefa</h3>
            <p className="text-gray-400 text-sm">
              Full-Stack Systems Engineer building production-grade platforms with scalable architectures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li>
                  <Link href="/projects" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/systems" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Systems
                  </Link>
                </li>
                <li>
                  <Link href="/skills" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Services
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Connect
            </h4>
            <nav aria-label="Social media links">
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:barekegna@gmail.com"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                    aria-label="Email Barekegn"
                  >
                    barekegna@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/barekegn-asefa-346b46247"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                    aria-label="Visit Barekegn's LinkedIn profile"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/barekegnn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                    aria-label="Visit Barekegn's GitHub profile"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Get in Touch
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} Barekegn Asefa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

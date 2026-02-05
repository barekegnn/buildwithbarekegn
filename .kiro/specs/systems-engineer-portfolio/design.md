# Design Document: Systems Engineer Portfolio Platform

## Overview

The Systems Engineer Portfolio Platform is a Next.js-based web application that showcases Barekegn Asefa's capabilities as a Full-Stack Systems Engineer. The platform uses a modern tech stack (Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, MDX) to create a high-performance, SEO-optimized portfolio that positions the developer as a production-ready systems builder.

The architecture follows Next.js best practices with server-side rendering, static generation where appropriate, and client-side interactivity for animations and user interactions. The design emphasizes modularity, type safety, and performance optimization to achieve Lighthouse scores >= 90.

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     Next.js App Router                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   Pages      │  │  Components  │  │   Content    │  │
│  │  (Routes)    │  │   (Shared)   │  │    (MDX)     │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│                    Data Layer                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   Project    │  │    Skills    │  │   Services   │  │
│  │    Data      │  │     Data     │  │     Data     │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│                External Integrations                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   Vercel     │  │   Google     │  │   MDX        │  │
│  │  Deployment  │  │  Analytics   │  │   Parser     │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### Routing Architecture

The application uses Next.js App Router with the following structure:

- `/app/page.tsx` - Home page (server component with static generation)
- `/app/about/page.tsx` - About page (server component)
- `/app/projects/page.tsx` - Projects overview (server component)
- `/app/projects/[slug]/page.tsx` - Dynamic project detail pages (server component with dynamic params)
- `/app/systems/page.tsx` - Systems showcase (server component)
- `/app/skills/page.tsx` - Skills page (server component)
- `/app/services/page.tsx` - Services page (server component)
- `/app/contact/page.tsx` - Contact page (client component for form handling)
- `/app/layout.tsx` - Root layout with navigation and footer

### Component Architecture

Components are organized into three categories:

1. **UI Components** (`/components/ui/`): Reusable atomic components
   - Button, Card, Badge, Input, etc.

2. **Section Components** (`/components/sections/`): Page-specific sections
   - HeroSection, MetricsGrid, ProjectCard, DashboardGallery, etc.

3. **Layout Components** (`/components/`): Structural components
   - Navbar, Footer, PageWrapper

### Data Flow

1. **Static Data**: Project metadata, skills, services stored in TypeScript files
2. **MDX Content**: Detailed project content stored in `/content/projects/[slug].mdx`
3. **Data Fetching**: Server components fetch and parse data at build time
4. **Client Interactivity**: Framer Motion animations and user interactions handled client-side

## Components and Interfaces

### Core Components

#### Navbar Component
```typescript
interface NavbarProps {
  className?: string;
}

// Features:
// - Sticky positioning with scroll behavior
// - Logo on left, navigation links on right
// - Mobile responsive with hamburger menu
// - Active route highlighting
// - Smooth scroll to sections
```

#### HeroSection Component
```typescript
interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: CTAButton;
  secondaryCTA?: CTAButton;
  backgroundEffect?: 'gradient' | 'particles' | 'grid';
}

interface CTAButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
}
```

#### MetricsGrid Component
```typescript
interface MetricsGridProps {
  metrics: Metric[];
}

interface Metric {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
  description?: string;
}

// Displays: 
// - 4 Production Projects (Government PM System, HU Freshman, HU Connect, ShopVerse)
// - Multi-Role Auth Systems (Admin, Manager, Student, Customer roles)
// - Admin Dashboards (Project Management, Content Moderation, Commerce Admin)
// - Analytics Platforms (Academic Performance, Community Engagement)
```

#### ProjectCard Component
```typescript
interface ProjectCardProps {
  project: ProjectSummary;
  variant?: 'featured' | 'standard';
  showComplexity?: boolean;
}

interface ProjectSummary {
  title: string;
  slug: string;
  description: string;
  systemType: string;
  techStack: string[];
  thumbnail?: string;
  complexityScore?: ComplexityScore;
}
```

#### DashboardGallery Component
```typescript
interface DashboardGalleryProps {
  dashboards: DashboardImage[];
  layout?: 'grid' | 'masonry' | 'carousel';
}

interface DashboardImage {
  src: string;
  alt: string;
  title: string;
  projectSlug: string;
  category: 'admin' | 'analytics' | 'control';
}
```

#### TechStackGrid Component
```typescript
interface TechStackGridProps {
  categories: TechCategory[];
  showProjectLinks?: boolean;
}

interface TechCategory {
  name: string;
  technologies: Technology[];
}

interface Technology {
  name: string;
  icon?: string;
  proficiency?: 'expert' | 'advanced' | 'intermediate';
  projects?: string[]; // project slugs
}
```

#### SystemCapabilityCard Component
```typescript
interface SystemCapabilityCardProps {
  capability: SystemCapability;
}

interface SystemCapability {
  title: string;
  description: string;
  examples: CapabilityExample[];
  icon?: React.ReactNode;
}

interface CapabilityExample {
  projectTitle: string;
  projectSlug: string;
  implementation: string;
}
```

### Page-Specific Components

#### ProjectDeepDive Component
```typescript
interface ProjectDeepDiveProps {
  project: ProjectDetail;
}

interface ProjectDetail {
  title: string;
  slug: string;
  systemType: string;
  organizationContext: string;
  roles: string[];
  techStack: string[];
  liveDemo?: string;
  github?: string;
  complexityScore: ComplexityScore;
  problemContext: string;
  architecture: string;
  modules: string[];
  dashboards: string[];
  challenges: string[];
  outcome: string;
  content: string; // MDX content
}

interface ComplexityScore {
  authentication: 'Basic' | 'Intermediate' | 'Advanced';
  dataManagement: 'Simple' | 'Complex' | 'Enterprise';
  dashboard: 'Standard' | 'Advanced' | 'Enterprise Level';
}
```

#### SkillsGroup Component
```typescript
interface SkillsGroupProps {
  category: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  projects: string[]; // project slugs where skill was used
  icon?: string;
  description?: string;
}
```

#### ServiceCard Component
```typescript
interface ServiceCardProps {
  service: Service;
}

interface Service {
  title: string;
  description: string;
  features: string[];
  process: ProcessStep[];
  pricing?: string;
  cta: CTAButton;
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}
```

## Data Models

### Project Data Model

```typescript
interface Project {
  // Basic Information
  title: string;
  slug: string;
  description: string;
  systemType: string;
  organizationContext: string;
  
  // Technical Details
  roles: string[];
  techStack: string[];
  architectureSummary: string;
  
  // Visual Assets
  thumbnail?: string;
  dashboards: DashboardAsset[];
  screenshots?: string[];
  
  // Features and Capabilities
  features: Feature[];
  modules: string[];
  challenges: string[];
  
  // Links
  liveDemo?: string;
  github?: string;
  
  // Metrics
  complexityScore: ComplexityScore;
  
  // Content
  problemContext: string;
  outcome: string;
  mdxContent?: string;
}

interface DashboardAsset {
  type: 'admin' | 'manager' | 'user' | 'analytics';
  title: string;
  imagePath: string;
  description?: string;
}

interface Feature {
  title: string;
  description: string;
  category: 'management' | 'collaboration' | 'analytics' | 'automation';
}
```

### Actual Project Data

Based on the provided content, the portfolio will feature these four projects:

**1. Government Project Management System**
- Slug: `government-project-management-system`
- System Type: Institutional Project & Workflow Platform
- Organization: Ethiopian Ministry of Innovation and Technology
- Roles: Admin, Project Manager, Team Member
- Tech Stack: React, Node.js, Express, MongoDB, JWT Auth, Socket.io
- Complexity: Advanced authentication, Complex data management, Enterprise Level dashboard

**2. HU Freshman – AI Academic Performance Companion**
- Slug: `hu-freshman`
- System Type: Academic Performance Optimization & AI Study Platform
- Organization: Haramaya University Freshman Academic Support System
- Roles: Admin, Student
- Tech Stack: React, Node.js, Express, MongoDB, AI Integration, Authentication System
- Complexity: Intermediate authentication, Complex data management, Academic Analytics Dashboard
- Key Features: Mock Exam Engine, AI Study Assistant, GPA Calculator, Daily Motivation System

**3. HU Connect – University Knowledge Platform**
- Slug: `hu-connect`
- System Type: Community Q&A Knowledge System
- Organization: Haramaya University Students Platform
- Roles: Admin, Moderator, Student User
- Tech Stack: React, Node.js, MongoDB, Express, Real-time Notifications
- Complexity: Intermediate authentication, Complex data management, Advanced Moderation System
- Key Features: Q&A Engine, Voting & Reputation System, Content Moderation, Real-time Notifications

**4. ShopVerse – Full Stack E-commerce Platform**
- Slug: `shop-verse`
- System Type: E-commerce Transaction Platform
- Organization: Full-stack Commercial System Simulation
- Roles: Admin, Customer
- Tech Stack: React, Firebase, Node.js, Stripe API, Global State Management
- Complexity: Advanced authentication, Complex data management, Commerce Administration Panel
- Live Demo: https://shop-verse-brown.vercel.app
- Key Features: Product Catalog, Shopping Cart, Payment Processing, Order Management

### Skills Data Model

```typescript
interface SkillCategory {
  category: 'Frontend Engineering' | 'Backend Engineering' | 'Database Systems' | 
            'Authentication Systems' | 'System Design' | 'Deployment & DevOps';
  skills: Skill[];
}

interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  yearsOfExperience?: number;
  projects: string[]; // project slugs
  icon?: string;
  description?: string;
  relatedSkills?: string[];
}
```

### Services Data Model

```typescript
interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  process: ProcessStep[];
  deliverables: string[];
  timeline?: string;
  pricing?: PricingInfo;
  cta: CTAButton;
}

interface PricingInfo {
  type: 'fixed' | 'hourly' | 'project-based';
  range?: string;
  details?: string;
}
```

### System Capability Data Model

```typescript
interface SystemCapability {
  id: string;
  title: string;
  description: string;
  category: 'multi-role' | 'admin-panels' | 'analytics' | 'notifications' | 
            'messaging' | 'financial-tracking';
  examples: CapabilityExample[];
  technicalDetails: string[];
}

interface CapabilityExample {
  projectTitle: string;
  projectSlug: string;
  implementation: string;
  screenshot?: string;
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*


### Property 1: Route Accessibility
*For any* defined route in the application (/, /about, /projects, /projects/[slug], /systems, /skills, /services, /contact), requesting that route should return a valid response with status 200.
**Validates: Requirements 1.1**

### Property 2: Navigation Link Routing
*For any* navigation link in the navbar, clicking that link should navigate to the corresponding route that matches the link's href attribute.
**Validates: Requirements 1.3**

### Property 3: Sticky Navbar Visibility
*For any* scroll position on a page, the navigation bar should remain visible at the top of the viewport with fixed or sticky positioning.
**Validates: Requirements 1.2**

### Property 4: Dynamic Project Route Resolution
*For any* valid project slug, navigating to /projects/[slug] should display the project data matching that slug.
**Validates: Requirements 3.1**

### Property 5: Project Data Completeness
*For any* project displayed on a project detail page, all required fields (title, system category, organization, tech stack, complexity score) should be present in the rendered output.
**Validates: Requirements 3.2, 3.3, 3.4, 3.6, 3.7, 3.8**

### Property 6: Skill-to-Project Mapping
*For any* skill displayed on the skills page, that skill should reference at least one project where it was used (non-empty projects array).
**Validates: Requirements 5.3**

### Property 7: Service Process Steps
*For any* service displayed on the services page, that service should include engagement process steps.
**Validates: Requirements 6.7**

### Property 8: Project Data Structure Validation
*For any* project object in the system, it should contain all required fields: title, slug, description, systemType, roles array, techStack array, architectureSummary, dashboards array, features array, liveDemo URL, github URL, and complexityScore.
**Validates: Requirements 7.1**

### Property 9: Project Creation Validation
*For any* project data submitted for creation, if any required field is missing, the validation should fail and prevent project creation.
**Validates: Requirements 7.2**

### Property 10: MDX Content Parsing
*For any* valid MDX file in the content directory, the Content_System should successfully parse and render the content without errors.
**Validates: Requirements 7.3**

### Property 11: Slug-Based Route Generation
*For any* project with a slug value, a corresponding route at /projects/[slug] should be accessible and return the project data.
**Validates: Requirements 7.4**

### Property 12: Image Optimization
*For any* image displayed on the platform, it should use Next.js Image component or have optimization attributes (srcset, sizes, or lazy loading).
**Validates: Requirements 8.2**

### Property 13: Below-Fold Image Lazy Loading
*For any* image positioned below the initial viewport, it should have lazy loading enabled (loading="lazy" or similar).
**Validates: Requirements 8.3**

### Property 14: Page Metadata Presence
*For any* route in the application, the rendered HTML should include structured metadata (title, description, and OpenGraph tags).
**Validates: Requirements 9.1, 9.2, 9.3, 9.4**

### Property 15: Semantic HTML Usage
*For any* page in the application, the HTML structure should include semantic elements (header, nav, main, section, article, footer) rather than only generic div elements.
**Validates: Requirements 9.5, 10.5**

### Property 16: Keyboard Navigation Support
*For any* interactive element (button, link, form input), it should be reachable and operable using keyboard navigation (Tab, Enter, Space keys).
**Validates: Requirements 10.1**

### Property 17: ARIA Label Presence
*For any* interactive element without visible text content, it should include appropriate ARIA labels (aria-label or aria-labelledby).
**Validates: Requirements 10.2**

### Property 18: Focus State Visibility
*For any* interactive element, when it receives keyboard focus, it should display a visible focus indicator (outline or custom focus styling).
**Validates: Requirements 10.3**

### Property 19: Color Contrast Compliance
*For any* text element on the platform, the color contrast ratio between text and background should meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text).
**Validates: Requirements 10.4**

### Property 20: Glassmorphism Panel Styling
*For any* panel component in the UI, it should include glassmorphism CSS properties (backdrop-filter: blur() or similar effects).
**Validates: Requirements 11.3**

### Property 21: Analytics Page View Tracking
*For any* route navigation in the application, a page view event should be sent to Google Analytics.
**Validates: Requirements 12.2**

### Property 22: CTA Analytics Tracking
*For any* call-to-action button, clicking it should trigger an analytics event with appropriate event data.
**Validates: Requirements 12.3**

### Property 23: External Link Analytics Tracking
*For any* external link (live demo, GitHub), clicking it should trigger an analytics event tracking the outbound link.
**Validates: Requirements 12.4**

### Property 24: Contact Form Validation
*For any* form input on the contact page, submitting the form with invalid data (empty required fields, invalid email format) should prevent submission and display validation errors.
**Validates: Requirements 14.4**

### Property 25: TypeScript Type Enforcement
*For any* data structure (Project, Skill, Service, SystemCapability), attempting to create an instance with incorrect types should result in a TypeScript compilation error.
**Validates: Requirements 15.5**

### Property 26: System Capability Multi-Project Examples
*For any* system capability displayed on the systems page (multi-role, admin panels, analytics, notifications, messaging, financial tracking), it should include examples from at least two different projects.
**Validates: Requirements 4.2, 4.3, 4.4, 4.5, 4.6, 4.7**

## Error Handling

### Client-Side Error Handling

**Navigation Errors:**
- Invalid routes should redirect to a custom 404 page
- Failed route transitions should display error boundaries
- Broken links should be caught and logged

**Data Loading Errors:**
- Missing project data should display "Project not found" message
- Failed MDX parsing should display error message and fallback content
- Missing images should use placeholder images

**Form Validation Errors:**
- Display inline validation messages for each field
- Prevent form submission until all validations pass
- Show user-friendly error messages (not technical errors)

**Analytics Errors:**
- Analytics failures should not block page functionality
- Failed tracking calls should be logged but not displayed to users
- Gracefully degrade if analytics script fails to load

### Server-Side Error Handling

**Build-Time Errors:**
- Invalid project data should fail the build with descriptive errors
- Missing required fields should be caught during type checking
- MDX parsing errors should fail the build with file and line information

**Runtime Errors:**
- Server component errors should be caught by error boundaries
- Failed data fetching should return appropriate HTTP status codes
- Unhandled exceptions should be logged and display generic error page

### Error Boundary Strategy

```typescript
// Root error boundary for catastrophic failures
app/error.tsx - Catches all unhandled errors in app router

// Page-level error boundaries for specific routes
app/projects/[slug]/error.tsx - Handles project-specific errors

// Component-level error boundaries for critical sections
components/sections/DashboardGallery - Handles gallery loading failures
```

### Validation Error Messages

**Project Data Validation:**
- "Project title is required"
- "Project slug must be in kebab-case format"
- "Tech stack must contain at least one technology"
- "Complexity score must have valid values"

**Form Validation:**
- "Email address is required"
- "Please enter a valid email address"
- "Message must be at least 10 characters"
- "Name is required"

## Testing Strategy

### Dual Testing Approach

The testing strategy combines **unit tests** and **property-based tests** to ensure comprehensive coverage:

**Unit Tests:**
- Specific examples demonstrating correct behavior
- Edge cases and boundary conditions
- Error handling scenarios
- Integration points between components
- Specific UI interactions

**Property-Based Tests:**
- Universal properties that hold for all inputs
- Data structure validation across random inputs
- Routing behavior across all valid routes
- Accessibility compliance across all components
- Performance characteristics across different data sizes

Both testing approaches are complementary and necessary. Unit tests catch concrete bugs in specific scenarios, while property tests verify general correctness across the input space.

### Property-Based Testing Configuration

**Library:** We will use **fast-check** for TypeScript/JavaScript property-based testing.

**Configuration:**
- Minimum 100 iterations per property test (due to randomization)
- Each property test must reference its design document property
- Tag format: `// Feature: systems-engineer-portfolio, Property {number}: {property_text}`

**Example Property Test Structure:**
```typescript
// Feature: systems-engineer-portfolio, Property 1: Route Accessibility
test('all defined routes should return valid responses', () => {
  fc.assert(
    fc.property(
      fc.constantFrom('/', '/about', '/projects', '/systems', '/skills', '/services', '/contact'),
      async (route) => {
        const response = await fetch(`http://localhost:3000${route}`);
        expect(response.status).toBe(200);
      }
    ),
    { numRuns: 100 }
  );
});
```

### Testing Scope

**Component Testing:**
- Unit tests for individual UI components
- Property tests for component props validation
- Accessibility tests for interactive elements
- Snapshot tests for visual regression

**Integration Testing:**
- Navigation flow between pages
- Data fetching and rendering
- Form submission workflows
- Analytics event tracking

**End-to-End Testing:**
- Critical user journeys (home → project detail → contact)
- Mobile responsive behavior
- Performance benchmarks
- SEO metadata validation

**Performance Testing:**
- Lighthouse CI integration
- Bundle size monitoring
- Image optimization verification
- Core Web Vitals tracking

### Test Organization

```
/__tests__/
  /components/
    Navbar.test.tsx
    ProjectCard.test.tsx
    DashboardGallery.test.tsx
  /properties/
    routing.property.test.tsx
    data-validation.property.test.tsx
    accessibility.property.test.tsx
  /integration/
    navigation.test.tsx
    project-pages.test.tsx
  /e2e/
    user-journeys.spec.ts
```

### Continuous Integration

- Run all tests on every pull request
- Run Lighthouse CI on preview deployments
- Run property tests with increased iterations (500+) on main branch
- Monitor bundle size and fail if exceeds thresholds
- Validate accessibility with axe-core in CI pipeline

## Implementation Notes

### Technology Stack Details

**Next.js 14 App Router:**
- Use Server Components by default for better performance
- Use Client Components only when needed (animations, interactivity)
- Implement static generation for all pages except contact form
- Use dynamic routes for project detail pages

**TypeScript:**
- Strict mode enabled
- No implicit any
- All data structures fully typed
- Use Zod for runtime validation where needed

**Tailwind CSS:**
- Custom design system with CSS variables
- Dark theme as default
- Responsive utilities for all breakpoints
- Custom plugins for glassmorphism effects

**Framer Motion:**
- Use sparingly for subtle animations
- Implement scroll-triggered animations
- Optimize for performance (will-change, transform)
- Disable animations on reduced motion preference

**MDX:**
- Use next-mdx-remote or @next/mdx
- Custom components for rich content
- Syntax highlighting for code blocks
- Image optimization within MDX content

### Performance Optimization Strategy

**Image Optimization:**
- Use Next.js Image component for all images
- Implement blur placeholders
- Use WebP format with fallbacks
- Lazy load images below the fold

**Code Splitting:**
- Route-based automatic code splitting
- Dynamic imports for heavy components
- Lazy load Framer Motion animations
- Split vendor bundles

**Caching Strategy:**
- Static generation for all pages
- Revalidate on demand for content updates
- Cache images with long TTL
- Use CDN for static assets

**Bundle Optimization:**
- Tree shaking for unused code
- Minimize third-party dependencies
- Use bundle analyzer to identify large modules
- Implement dynamic imports for non-critical code

### SEO Implementation

**Metadata Generation:**
```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: 'Barekegn Asefa - Full-Stack Systems Engineer',
    template: '%s | Barekegn Asefa'
  },
  description: 'Production-grade systems engineer building complex platforms...',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://barekegn.dev',
    siteName: 'Barekegn Asefa Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
  }
};
```

**Structured Data:**
- Implement JSON-LD for Person schema
- Add Project schema for each project
- Include Organization schema
- Implement BreadcrumbList for navigation

### Accessibility Implementation

**Keyboard Navigation:**
- Implement skip-to-content link
- Ensure logical tab order
- Add keyboard shortcuts for common actions
- Test with keyboard-only navigation

**Screen Reader Support:**
- Use semantic HTML elements
- Add ARIA labels where needed
- Implement live regions for dynamic content
- Test with NVDA and VoiceOver

**Visual Accessibility:**
- Maintain 4.5:1 contrast ratio minimum
- Provide focus indicators
- Support browser zoom up to 200%
- Respect prefers-reduced-motion

### Analytics Implementation

**Google Analytics 4:**
```typescript
// lib/analytics.ts
export const trackPageView = (url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

export const trackEvent = (action: string, category: string, label: string) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
  });
};
```

**Event Tracking:**
- Page views on route changes
- CTA button clicks
- External link clicks
- Project card interactions
- Contact form submissions

### Deployment Strategy

**Vercel Deployment:**
- Automatic deployments from main branch
- Preview deployments for pull requests
- Environment variables for analytics
- Custom domain configuration

**Build Optimization:**
- Enable SWC minification
- Optimize fonts with next/font
- Generate sitemap.xml
- Generate robots.txt

**Monitoring:**
- Vercel Analytics for performance
- Google Analytics for user behavior
- Error tracking with Sentry (optional)
- Uptime monitoring

## Project Structure

```
systems-engineer-portfolio/
├── app/
│   ├── layout.tsx                 # Root layout with navbar/footer
│   ├── page.tsx                   # Home page
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── projects/
│   │   ├── page.tsx              # Projects overview
│   │   └── [slug]/
│   │       └── page.tsx          # Dynamic project detail
│   ├── systems/
│   │   └── page.tsx              # Systems showcase
│   ├── skills/
│   │   └── page.tsx              # Skills page
│   ├── services/
│   │   └── page.tsx              # Services page
│   ├── contact/
│   │   └── page.tsx              # Contact page
│   ├── error.tsx                 # Error boundary
│   └── not-found.tsx             # 404 page
├── components/
│   ├── Navbar.tsx                # Navigation component
│   ├── Footer.tsx                # Footer component
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── Input.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── MetricsGrid.tsx
│       ├── ProjectCard.tsx
│       ├── DashboardGallery.tsx
│       ├── TechStackGrid.tsx
│       ├── SystemCapabilityCard.tsx
│       ├── SkillsGroup.tsx
│       └── ServiceCard.tsx
├── content/
│   └── projects/
│       ├── government-project-management-system.mdx
│       ├── hu-freshman.mdx
│       ├── hu-connect.mdx
│       └── shop-verse.mdx
├── lib/
│   ├── projects.ts               # Project data and utilities
│   ├── skills.ts                 # Skills data
│   ├── services.ts               # Services data
│   ├── capabilities.ts           # System capabilities data
│   ├── analytics.ts              # Analytics utilities
│   └── mdx.ts                    # MDX parsing utilities
├── types/
│   ├── project.ts                # Project type definitions
│   ├── skill.ts                  # Skill type definitions
│   ├── service.ts                # Service type definitions
│   └── capability.ts             # Capability type definitions
├── styles/
│   └── globals.css               # Global styles and Tailwind
├── public/
│   ├── images/
│   │   ├── projects/
│   │   ├── dashboards/
│   │   └── tech-icons/
│   └── videos/
├── __tests__/
│   ├── components/
│   ├── properties/
│   ├── integration/
│   └── e2e/
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

## Design Decisions and Rationale

### Why Next.js App Router?
- Server Components for better performance
- Built-in routing with file-system based structure
- Excellent SEO with server-side rendering
- Optimized image handling
- Strong TypeScript support

### Why MDX for Project Content?
- Allows rich content with React components
- Maintains content separate from code
- Easy to update project details
- Supports code syntax highlighting
- Enables custom component embedding

### Why Framer Motion?
- Declarative animation API
- Excellent performance
- TypeScript support
- Gesture support for interactions
- Scroll-triggered animations

### Why Tailwind CSS?
- Utility-first approach for rapid development
- Excellent dark mode support
- Responsive design utilities
- Custom design system with CSS variables
- Small production bundle with purging

### Why Static Generation?
- Best performance for portfolio sites
- Excellent SEO
- Low hosting costs
- Fast page loads
- Can revalidate on demand

### Component Architecture Decisions

**Server Components by Default:**
- Better performance
- Reduced JavaScript bundle
- Automatic code splitting
- Direct database/file access

**Client Components for Interactivity:**
- Animations with Framer Motion
- Form handling
- Interactive galleries
- Analytics tracking

**Modular Component Structure:**
- Reusable UI components
- Section-based organization
- Clear separation of concerns
- Easy to test and maintain

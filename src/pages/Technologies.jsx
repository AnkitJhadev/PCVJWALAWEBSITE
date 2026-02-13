import { useState } from 'react';
import SEO from '../components/SEO';
import { 
  CodeBracketIcon,
  CogIcon,
  ServerIcon,
  CircleStackIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  AcademicCapIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const techCategories = [
    {
      id: 'frontend',
      title: 'Frontend Technologies',
      icon: CodeBracketIcon,
      description: 'Modern frontend frameworks and libraries for building responsive, interactive user interfaces.'
    },
    {
      id: 'backend',
      title: 'Backend Technologies',
      icon: ServerIcon,
      description: 'Robust server-side technologies for building scalable APIs and backend systems.'
    },
    {
      id: 'database',
      title: 'Database Technologies',
      icon: CircleStackIcon,
      description: 'Efficient database solutions for data storage, management, and retrieval.'
    },
    {
      id: 'mobile',
      title: 'Mobile Technologies',
      icon: DevicePhoneMobileIcon,
      description: 'Cross-platform mobile development frameworks for iOS and Android applications.'
    },
    {
      id: 'devops',
      title: 'DevOps & Cloud',
      icon: CloudIcon,
      description: 'Modern DevOps practices and cloud platforms for deployment and scalability.'
    },
    {
      id: 'tools',
      title: 'Development Tools',
      icon: CogIcon,
      description: 'Essential tools and platforms for efficient development and collaboration.'
    }
  ];

  const technologies = {
    frontend: [
      {
        name: 'React.js',
        level: 95,
        description: 'Component-based JavaScript library for building user interfaces with virtual DOM and reusable components.',
        features: ['Component Architecture', 'Virtual DOM', 'Hooks & Context', 'React Router', 'State Management'],
        projects: '150+ projects'
      },
      {
        name: 'React Native',
        level: 90,
        description: 'Cross-platform mobile development framework for building native iOS and Android apps.',
        features: ['Cross-Platform', 'Native Performance', 'Hot Reloading', 'Modular Architecture', 'Third-Party Plugins'],
        projects: '80+ projects'
      },
      {
        name: 'Next.js',
        level: 85,
        description: 'React framework for production with server-side rendering, routing, and optimization features.',
        features: ['SSR/SSG', 'API Routes', 'Image Optimization', 'Built-in Routing', 'Performance Optimization'],
        projects: '60+ projects'
      },
      {
        name: 'TypeScript',
        level: 88,
        description: 'Typed superset of JavaScript for enhanced code quality and developer experience.',
        features: ['Type Safety', 'Interfaces', 'Generics', 'Decorators', 'Better IDE Support'],
        projects: '120+ projects'
      },
      {
        name: 'Redux',
        level: 82,
        description: 'Predictable state container for JavaScript applications with time-travel debugging.',
        features: ['State Management', 'Time Travel Debugging', 'Middleware', 'DevTools', 'Immutable State'],
        projects: '90+ projects'
      }
    ],
    backend: [
      {
        name: 'Node.js',
        level: 92,
        description: 'JavaScript runtime built on Chrome\'s V8 engine for server-side development.',
        features: ['Event-Driven', 'Non-blocking I/O', 'NPM Ecosystem', 'Microservices', 'Real-time Applications'],
        projects: '140+ projects'
      },
      {
        name: 'Express.js',
        level: 88,
        description: 'Fast, unopinionated, minimalist web framework for Node.js applications.',
        features: ['Routing', 'Middleware', 'Template Engines', 'RESTful APIs', 'Error Handling'],
        projects: '130+ projects'
      },
      {
        name: 'NestJS',
        level: 80,
        description: 'Progressive Node.js framework for building efficient, reliable, and scalable server-side applications.',
        features: ['TypeScript Support', 'Dependency Injection', 'Modular Architecture', 'Microservices', 'GraphQL'],
        projects: '40+ projects'
      },
      {
        name: 'Socket.io',
        level: 85,
        description: 'JavaScript library for real-time, bidirectional communication between web clients and servers.',
        features: ['Real-time Communication', 'WebSocket Support', 'Rooms & Namespaces', 'Auto-reconnection', 'Binary Support'],
        projects: '50+ projects'
      },
      {
        name: 'GraphQL',
        level: 78,
        description: 'Query language and runtime for APIs that provides efficient data fetching.',
        features: ['Type System', 'Query Language', 'Resolvers', 'Subscriptions', 'Schema Stitching'],
        projects: '35+ projects'
      }
    ],
    database: [
      {
        name: 'MongoDB',
        level: 90,
        description: 'NoSQL document database with flexible schema and powerful querying capabilities.',
        features: ['Document Model', 'Flexible Schema', 'Aggregation Pipeline', 'Indexing', 'Replication'],
        projects: '160+ projects'
      },
      {
        name: 'Mongoose',
        level: 85,
        description: 'Elegant MongoDB object modeling for Node.js with schema validation and middleware.',
        features: ['Schema Validation', 'Middleware', 'Population', 'Query Building', 'Hooks'],
        projects: '140+ projects'
      },
      {
        name: 'Redis',
        level: 75,
        description: 'In-memory data structure store used as database, cache, and message broker.',
        features: ['In-memory Storage', 'Data Structures', 'Pub/Sub', 'Persistence', 'Clustering'],
        projects: '60+ projects'
      },
      {
        name: 'PostgreSQL',
        level: 70,
        description: 'Powerful open-source relational database with advanced features and extensions.',
        features: ['ACID Compliance', 'JSON Support', 'Full-text Search', 'Extensions', 'Replication'],
        projects: '30+ projects'
      }
    ],
    mobile: [
      {
        name: 'React Native',
        level: 90,
        description: 'Build native mobile apps using React with access to native platform APIs.',
        features: ['Cross-Platform', 'Native Modules', 'Hot Reloading', 'Code Sharing', 'Performance'],
        projects: '80+ projects'
      },
      {
        name: 'Expo',
        level: 82,
        description: 'Platform and framework for universal React applications with managed workflow.',
        features: ['Managed Workflow', 'OTA Updates', 'Build Services', 'Expo SDK', 'Push Notifications'],
        projects: '40+ projects'
      },
      {
        name: 'React Navigation',
        level: 85,
        description: 'Routing and navigation library for React Native applications.',
        features: ['Stack Navigation', 'Tab Navigation', 'Drawer Navigation', 'Deep Linking', 'Gesture Handling'],
        projects: '70+ projects'
      }
    ],
    devops: [
      {
        name: 'Docker',
        level: 83,
        description: 'Platform for developing, shipping, and running applications in containers.',
        features: ['Containerization', 'Docker Compose', 'Docker Hub', 'Multi-stage Builds', 'Docker Swarm'],
        projects: '80+ projects'
      },
      {
        name: 'AWS',
        level: 78,
        description: 'Comprehensive cloud computing platform with scalable services.',
        features: ['EC2', 'S3', 'Lambda', 'RDS', 'CloudFront'],
        projects: '70+ projects'
      },
      {
        name: 'GitHub Actions',
        level: 80,
        description: 'CI/CD platform for automating build, test, and deployment workflows.',
        features: ['CI/CD Pipelines', 'Workflow Automation', 'Parallel Jobs', 'Secret Management', 'Matrix Builds'],
        projects: '90+ projects'
      },
      {
        name: 'Vercel',
        level: 85,
        description: 'Platform for frontend frameworks and static sites with instant deployments.',
        features: ['Instant Deployments', 'Serverless Functions', 'Preview Deployments', 'Analytics', 'Edge Network'],
        projects: '100+ projects'
      }
    ],
    tools: [
      {
        name: 'Git',
        level: 95,
        description: 'Distributed version control system for tracking changes in source code.',
        features: ['Version Control', 'Branching', 'Merging', 'Collaboration', 'GitHub Integration'],
        projects: 'All projects'
      },
      {
        name: 'VS Code',
        level: 92,
        description: 'Lightweight but powerful source code editor with extensive extensions.',
        features: ['IntelliSense', 'Debugging', 'Extensions', 'Integrated Terminal', 'Git Integration'],
        projects: 'All projects'
      },
      {
        name: 'Postman',
        level: 88,
        description: 'API platform for building and using APIs with testing and documentation features.',
        features: ['API Testing', 'Documentation', 'Mock Servers', 'Monitoring', 'Collaboration'],
        projects: 'All API projects'
      },
      {
        name: 'Figma',
        level: 75,
        description: 'Collaborative interface design tool for creating UI/UX designs and prototypes.',
        features: ['UI Design', 'Prototyping', 'Collaboration', 'Design Systems', 'Developer Handoff'],
        projects: '50+ projects'
      }
    ]
  };

  const getLevelColor = (level) => {
    if (level >= 90) return 'bg-green-500';
    if (level >= 80) return 'bg-blue-500';
    if (level >= 70) return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Technologies - PCV Jwala Corporation",
    "description": "Learn about the technologies we specialize in: React Native, React.js, Node.js, MongoDB, and more.",
    "url": "https://pcvjwala.com/technologies",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": Object.values(technologies).flat().map((tech, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "SoftwareApplication",
          "name": tech.name,
          "description": tech.description
        }
      }))
    }
  };

  return (
    <>
      <SEO 
        title="Our Technology Stack - React Native, React.js, Node.js, MongoDB Experts"
        description="Discover PCV Jwala Corporation's technology expertise in React Native, React.js, Node.js, MongoDB, and other modern development tools and frameworks."
        keywords="React Native technology stack, MERN stack technologies, React.js development tools, Node.js frameworks, MongoDB development, web development technologies"
        canonicalUrl="https://pcvjwala.com/technologies"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Technology Stack
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We leverage cutting-edge technologies and frameworks to build scalable, 
              high-performance applications that drive business success.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-primary-600">15+</div>
                <div className="text-gray-600">Core Technologies</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-primary-600">95%</div>
                <div className="text-gray-600">Expertise Level</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-primary-600">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-primary-600">200+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Selection */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {techCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  activeCategory === category.id
                    ? 'border-primary-600 bg-primary-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <category.icon className="h-8 w-8 mx-auto mb-2 text-primary-600" />
                <div className="text-sm font-medium text-gray-900">{category.title}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Category Description */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              {techCategories.find(cat => cat.id === activeCategory).title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {techCategories.find(cat => cat.id === activeCategory).description}
            </p>
          </div>
        </div>
      </section>

      {/* Technologies List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {technologies[activeCategory].map((tech, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{tech.name}</h3>
                        <p className="text-gray-600 mb-4">{tech.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-primary-600">{tech.level}%</div>
                        <div className="text-sm text-gray-500">Expertise Level</div>
                      </div>
                    </div>

                    {/* Skill Level Bar */}
                    <div className="mb-6">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full ${getLevelColor(tech.level)}`}
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features & Capabilities:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {tech.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm text-gray-500 mb-1">Projects Completed</div>
                      <div className="text-xl font-semibold text-gray-900">{tech.projects}</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm text-gray-500 mb-1">Certification Level</div>
                      <div className="text-xl font-semibold text-primary-600">
                        {tech.level >= 90 ? 'Expert' : tech.level >= 80 ? 'Advanced' : 'Proficient'}
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm text-gray-500 mb-1">Team Experience</div>
                      <div className="text-xl font-semibold text-gray-900">
                        {tech.level >= 90 ? '5+ years' : tech.level >= 80 ? '3+ years' : '2+ years'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Tech Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Technology Stack?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our carefully selected technology stack ensures optimal performance, scalability, and maintainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 text-center">
              <RocketLaunchIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">High Performance</h3>
              <p className="text-gray-600">
                Optimized for speed and efficiency with modern frameworks and best practices.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <ShieldCheckIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure & Reliable</h3>
              <p className="text-gray-600">
                Built with security best practices and thorough testing for dependable applications.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <LightBulbIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Future-Ready</h3>
              <p className="text-gray-600">
                Scalable architecture that grows with your business and adapts to changing needs.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <AcademicCapIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Certified developers with deep expertise in our entire technology stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build with Modern Technologies?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let's discuss how our technology expertise can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Tech Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;

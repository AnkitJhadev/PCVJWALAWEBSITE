import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { 
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ServerIcon,
  CircleStackIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CogIcon,
  RocketLaunchIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  const services = [
    {
      id: 'react-native',
      icon: DevicePhoneMobileIcon,
      title: 'Cross-Platform App Development (React Native)',
      description: 'Build cross-platform mobile apps using React Native—one codebase for iOS and Android with native performance and user experience.',
      features: [
        'Cross-Platform Apps using React Native (iOS & Android)',
        'Single Codebase, Multiple Platforms',
        'Native Performance & UX',
        'Push Notifications',
        'Offline Support',
        'App Store & Play Store Deployment'
      ],
      technologies: ['React Native', 'Redux', 'TypeScript', 'Firebase', 'AWS'],
      pricing: 'Starting at $25/hour'
    },
    {
      id: 'react-js',
      icon: ComputerDesktopIcon,
      title: 'React.js Development',
      description: 'Create fast, scalable, and interactive web applications with modern React.js development practices.',
      features: [
        'Single Page Applications',
        'Progressive Web Apps',
        'Component-Based Architecture',
        'State Management',
        'Real-time Updates',
        'SEO Optimization'
      ],
      technologies: ['React.js', 'Next.js', 'Redux', 'TypeScript', 'GraphQL'],
      pricing: 'Starting at $20/hour'
    },
    {
      id: 'node-js',
      icon: ServerIcon,
      title: 'Node.js Development',
      description: 'Develop robust backend systems and APIs with Node.js for high-performance server-side applications.',
      features: [
        'RESTful APIs',
        'GraphQL APIs',
        'Microservices Architecture',
        'Real-time Applications',
        'Authentication Systems',
        'Database Integration'
      ],
      technologies: ['Node.js', 'Express.js', 'NestJS', 'Socket.io', 'JWT'],
      pricing: 'Starting at $22/hour'
    },
    {
      id: 'mongodb',
      icon: CircleStackIcon,
      title: 'MongoDB Solutions',
      description: 'Design and implement flexible, scalable database solutions using MongoDB for modern applications.',
      features: [
        'Database Design',
        'Data Modeling',
        'Performance Optimization',
        'Data Migration',
        'Backup & Recovery',
        'Security Implementation'
      ],
      technologies: ['MongoDB', 'Mongoose', 'Atlas', 'Compass', 'Aggregation'],
      pricing: 'Starting at $20/hour'
    }
  ];

  const mernStackService = {
    title: 'Complete MERN Stack Development',
    description: 'Get end-to-end development services with our expert MERN stack team. From concept to deployment, we handle everything.',
    benefits: [
      'Single Team for Full Stack',
      'Consistent Code Quality',
      'Faster Development',
      'Cost-Effective Solution',
      'Seamless Integration',
      'Comprehensive Support'
    ],
    deliverables: [
      'Frontend Development (React.js)',
      'Backend Development (Node.js)',
      'Database Design (MongoDB)',
      'Mobile App (React Native)',
      'API Development',
      'Deployment & DevOps'
    ]
  };

  const process = [
    {
      step: 1,
      title: 'Discovery & Planning',
      description: 'Understanding your requirements and creating a detailed project roadmap.'
    },
    {
      step: 2,
      title: 'Design & Architecture',
      description: 'Creating wireframes, UI/UX designs, and technical architecture.'
    },
    {
      step: 3,
      title: 'Development & Testing',
      description: 'Agile development with continuous testing and quality assurance.'
    },
    {
      step: 4,
      title: 'Deployment & Support',
      description: 'Smooth deployment and ongoing maintenance and support.'
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "PCV Jwala Corporation",
      "url": "https://pcvjwala.com"
    },
    "serviceType": "Software Development",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Development Services",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    }
  };

  return (
    <>
      <SEO 
        title="Professional Development Services - React Native, React.js, Node.js, MongoDB"
        description="PCV Jwala Corporation offers expert React Native, React.js, Node.js, and MongoDB development services. Build scalable applications with our MERN stack expertise."
        keywords="React Native development services, React.js development services, Node.js development services, MongoDB development services, MERN stack development, mobile app development services, web development services"
        canonicalUrl="https://pcvjwala.com/services"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Expert Development Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive MERN stack development services to build modern, scalable, 
              and high-performance applications that drive business growth.
            </p>
            <Link to="/contact" className="btn-primary">
              Get a Free Quote
              <ArrowRightIcon className="ml-2 h-5 w-5 inline" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized services covering the complete MERN stack and mobile development.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="bg-primary-100 rounded-lg p-4 w-fit mb-6">
                    <service.icon className="h-12 w-12 text-primary-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-xl text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-600">{service.pricing}</span>
                    <Link to="/contact" className="btn-primary">
                      Get Started
                    </Link>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Why Choose This Service?</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <RocketLaunchIcon className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                          <span className="text-gray-700">Fast and efficient development process</span>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheckIcon className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                          <span className="text-gray-700">Industry best practices and standards</span>
                        </li>
                        <li className="flex items-start">
                          <CogIcon className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                          <span className="text-gray-700">Scalable and maintainable code</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MERN Stack Package */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {mernStackService.title}
                </h2>
                <p className="text-xl text-primary-100 mb-8">
                  {mernStackService.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {mernStackService.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 mr-3 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {mernStackService.deliverables.map((deliverable, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 mr-3 flex-shrink-0" />
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold">Complete Package</div>
                    <div className="text-xl text-primary-200">Starting at $18/hour</div>
                  </div>
                  <Link to="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Get Package Quote
                  </Link>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Our Development Process</h3>
                <div className="space-y-6">
                  {process.map((step) => (
                    <div key={step.step} className="flex items-start">
                      <div className="bg-white text-primary-600 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">{step.title}</h4>
                        <p className="text-primary-100">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our development services can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Schedule a Consultation
            </Link>
            <Link to="/portfolio" className="btn-secondary">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

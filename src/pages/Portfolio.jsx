import { useState } from 'react';
import SEO from '../components/SEO';
import { 
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ServerIcon,
  EyeIcon,
  ArrowTopRightOnSquareIcon,
  CalendarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Mobile App',
      category: 'mobile',
      description: 'A full-featured e-commerce mobile application built with React Native, featuring real-time inventory, payment integration, and order tracking.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Stripe API'],
      image: '/projects/ecommerce-app.jpg',
      client: 'RetailTech Solutions',
      duration: '4 months',
      teamSize: '5 developers',
      features: ['User Authentication', 'Product Catalog', 'Shopping Cart', 'Payment Gateway', 'Order Tracking', 'Push Notifications'],
      challenges: 'Implemented real-time inventory sync across multiple warehouses and optimized performance for low-end devices.',
      results: '200K+ downloads, 4.8-star rating, 40% increase in mobile sales'
    },
    {
      id: 2,
      title: 'Healthcare Management System',
      category: 'web',
      description: 'Comprehensive healthcare management platform for clinics and hospitals with patient records, appointment scheduling, and billing.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      image: '/projects/healthcare-system.jpg',
      client: 'MediCare Plus',
      duration: '6 months',
      teamSize: '8 developers',
      features: ['Patient Management', 'Appointment Scheduling', 'Electronic Health Records', 'Billing System', 'Telemedicine', 'Analytics Dashboard'],
      challenges: 'Ensured HIPAA compliance and implemented secure data encryption for sensitive patient information.',
      results: 'Serving 50+ clinics, 100K+ patients, 95% user satisfaction'
    },
    {
      id: 3,
      title: 'Real Estate Platform',
      category: 'fullstack',
      description: 'End-to-end real estate platform connecting buyers, sellers, and agents with advanced search filters and virtual tours.',
      technologies: ['React.js', 'React Native', 'Node.js', 'MongoDB'],
      image: '/projects/real-estate.jpg',
      client: 'PropertyHub',
      duration: '5 months',
      teamSize: '6 developers',
      features: ['Property Listings', 'Advanced Search', 'Virtual Tours', 'Agent Directory', 'Mortgage Calculator', 'Document Management'],
      challenges: 'Integrated multiple MLS databases and implemented real-time property data synchronization.',
      results: '10K+ active listings, 25K+ monthly users, 30% faster property search'
    },
    {
      id: 4,
      title: 'Food Delivery App',
      category: 'mobile',
      description: 'On-demand food delivery application with restaurant management, real-time tracking, and seamless payment integration.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
      image: '/projects/food-delivery.jpg',
      client: 'QuickBite',
      duration: '3 months',
      teamSize: '4 developers',
      features: ['Restaurant Dashboard', 'Real-time Tracking', 'Payment Integration', 'Rating System', 'Promo Codes', 'Analytics'],
      challenges: 'Implemented real-time order tracking and optimized for high concurrent users during peak hours.',
      results: '50K+ downloads, 4.6-star rating, 200+ restaurant partners'
    },
    {
      id: 5,
      title: 'Learning Management System',
      category: 'web',
      description: 'Enterprise LMS with video streaming, interactive quizzes, progress tracking, and certification management.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'AWS S3'],
      image: '/projects/lms-platform.jpg',
      client: 'EduTech Solutions',
      duration: '7 months',
      teamSize: '7 developers',
      features: ['Video Streaming', 'Interactive Quizzes', 'Progress Tracking', 'Certification', 'Discussion Forums', 'Reporting'],
      challenges: 'Optimized video streaming for low bandwidth and implemented scalable architecture for 100K+ concurrent users.',
      results: '500+ courses, 50K+ active learners, 85% course completion rate'
    },
    {
      id: 6,
      title: 'IoT Dashboard',
      category: 'backend',
      description: 'Real-time IoT monitoring dashboard for smart manufacturing with sensor data visualization and alert systems.',
      technologies: ['Node.js', 'MongoDB', 'Socket.io', 'React.js'],
      image: '/projects/iot-dashboard.jpg',
      client: 'SmartFactory Inc.',
      duration: '4 months',
      teamSize: '5 developers',
      features: ['Real-time Monitoring', 'Data Visualization', 'Alert System', 'Historical Analytics', 'Device Management', 'Predictive Maintenance'],
      challenges: 'Handled massive real-time data streams from thousands of IoT sensors and implemented efficient data aggregation.',
      results: '10K+ sensors monitored, 99.9% uptime, 40% reduction in downtime'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'web', name: 'Web Apps' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'backend', name: 'Backend Systems' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Portfolio - PCV Jwala Corporation",
    "description": "Explore our portfolio of React Native, React.js, Node.js, and MongoDB development projects.",
    "url": "https://pcvjwala.com/portfolio",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": projects.map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "CreativeWork",
          "name": project.title,
          "description": project.description,
          "url": `https://pcvjwala.com/portfolio/project/${project.id}`
        }
      }))
    }
  };

  return (
    <>
      <SEO 
        title="Portfolio - Our React Native & MERN Stack Projects"
        description="Explore PCV Jwala Corporation's portfolio of successful React Native, React.js, Node.js, and MongoDB development projects across various industries."
        keywords="React Native portfolio, MERN stack projects, web development portfolio, mobile app portfolio, Node.js projects, MongoDB projects"
        canonicalUrl="https://pcvjwala.com/portfolio"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our successful projects showcasing expertise in React Native, React.js, 
              Node.js, and MongoDB development across various industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                <span className="text-2xl font-bold text-primary-600">200+</span>
                <span className="text-gray-600 ml-2">Projects Delivered</span>
              </div>
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                <span className="text-2xl font-bold text-primary-600">15+</span>
                <span className="text-gray-600 ml-2">Industries Served</span>
              </div>
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                <span className="text-2xl font-bold text-primary-600">98%</span>
                <span className="text-gray-600 ml-2">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  filter === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {project.category === 'mobile' && <DevicePhoneMobileIcon className="h-24 w-24 text-primary-300" />}
                    {project.category === 'web' && <ComputerDesktopIcon className="h-24 w-24 text-primary-300" />}
                    {project.category === 'fullstack' && <ServerIcon className="h-24 w-24 text-primary-300" />}
                    {project.category === 'backend' && <ServerIcon className="h-24 w-24 text-primary-300" />}
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-primary-600 px-4 py-2 rounded-lg font-medium flex items-center">
                      <EyeIcon className="h-5 w-5 mr-2" />
                      View Details
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500">{project.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-2">Technologies:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <div className="text-sm text-gray-500">Client</div>
                      <div className="font-medium text-gray-900">{project.client}</div>
                    </div>
                    <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                      Case Study
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Project Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Project Spotlight
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep dive into one of our most successful MERN stack projects.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-gray-500">E-Commerce Platform</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Multi-Vendor Marketplace
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  A comprehensive e-commerce platform connecting multiple vendors with customers, 
                  featuring advanced inventory management, real-time analytics, and seamless payment processing.
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features Delivered:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Multi-vendor management system</li>
                      <li>• Real-time inventory synchronization</li>
                      <li>• Advanced search and filtering</li>
                      <li>• Integrated payment gateways</li>
                      <li>• Analytics dashboard for vendors</li>
                      <li>• Mobile-responsive design</li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary-600">500K+</div>
                    <div className="text-gray-600">Active Users</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary-600">1000+</div>
                    <div className="text-gray-600">Vendors</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technical Implementation</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Frontend:</span>
                      <span className="font-medium">React.js, Redux</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Backend:</span>
                      <span className="font-medium">Node.js, Express.js</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Database:</span>
                      <span className="font-medium">MongoDB, Redis</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Deployment:</span>
                      <span className="font-medium">AWS, Docker</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Project Impact</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      300% increase in vendor registration
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      45% reduction in page load time
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      99.9% uptime achieved
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      4.8-star user rating
                    </li>
                  </ul>
                </div>

                <div className="bg-primary-600 text-white rounded-xl p-6">
                  <h4 className="font-semibold mb-2">Client Testimonial</h4>
                  <p className="text-primary-100 italic">
                    "PCV Jwala Corporation transformed our e-commerce vision into reality. 
                    Their MERN stack expertise delivered a scalable platform that exceeded our expectations."
                  </p>
                  <div className="mt-3">
                    <div className="font-semibold">CEO, RetailTech Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Success Story?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join our list of satisfied clients and let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

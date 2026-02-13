import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { 
  ArrowRightIcon,
  CheckCircleIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ServerIcon,
  CircleStackIcon
} from '@heroicons/react/24/outline';

const Home = () => {
  const services = [
    {
      icon: DevicePhoneMobileIcon,
      title: 'Cross-Platform App (React Native)',
      description: 'Build cross-platform mobile apps using React Native for iOS and Android with a single codebase and native performance.',
      href: '/services#react-native'
    },
    {
      icon: ComputerDesktopIcon,
      title: 'React.js Development',
      description: 'Create fast, scalable, and interactive web applications with modern React.js development practices.',
      href: '/services#react-js'
    },
    {
      icon: ServerIcon,
      title: 'Node.js Development',
      description: 'Develop robust backend systems and APIs with Node.js for high-performance server-side applications.',
      href: '/services#node-js'
    },
    {
      icon: CircleStackIcon,
      title: 'MongoDB Solutions',
      description: 'Design and implement flexible, scalable database solutions using MongoDB for modern applications.',
      href: '/services#mongodb'
    }
  ];

  const benefits = [
    'Expert MERN Stack Development',
    'Agile Development Methodology',
    '24/7 Technical Support',
    'Scalable & Secure Solutions',
    'Cost-Effective Pricing',
    'On-Time Project Delivery'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'PCV Jwala Corporation delivered our React Native app ahead of schedule. Their expertise and professionalism exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO, DataFlow Systems',
      content: 'Their Node.js backend development transformed our application performance. Highly recommend their MERN stack services.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager, InnovateLabs',
      content: 'Outstanding React.js development team. They understood our requirements perfectly and delivered a flawless web application.',
      rating: 5
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PCV Jwala Corporation",
    "url": "https://pcvjwala.com",
    "logo": "https://pcvjwala.com/logo.png",
    "description": "Expert React Native, React.js, Node.js, and MongoDB development company specializing in MERN stack solutions.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Street",
      "addressLocality": "Silicon Valley",
      "addressRegion": "CA",
      "postalCode": "94025",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "info@pcvjwala.com"
    },
    "sameAs": [
      "https://www.facebook.com/pcvjwala",
      "https://www.twitter.com/pcvjwala",
      "https://www.linkedin.com/company/pcvjwala"
    ]
  };

  return (
    <>
      <SEO 
        title="Expert React Native & MERN Stack Development Company"
        description="PCV Jwala Corporation - Leading React Native, React.js, Node.js, and MongoDB development company. Build scalable mobile apps, web applications, and backend systems with our MERN stack expertise."
        keywords="React Native development company, React.js development, Node.js development, MongoDB development, MERN stack development, mobile app development, web development company, software development services"
        canonicalUrl="https://pcvjwala.com"
        schema={schema}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Build Powerful
                <span className="text-primary-600 block">Digital Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Expert React Native, React.js, Node.js, and MongoDB development services. 
                Transform your ideas into scalable, high-performance applications with our MERN stack expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary text-center">
                  Get a Free Quote
                  <ArrowRightIcon className="ml-2 h-5 w-5 inline" />
                </Link>
                <Link to="/portfolio" className="btn-secondary text-center">
                  View Our Work
                </Link>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">200+</div>
                  <div className="text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">50+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-primary-400 to-primary-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose PCV Jwala?</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 mr-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive MERN stack development services to build modern, scalable, and high-performance applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary-300"
              >
                <div className="bg-primary-100 rounded-lg p-3 w-fit mb-4 group-hover:bg-primary-200 transition-colors">
                  <service.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <span className="text-primary-600 font-medium flex items-center group-hover:text-primary-700">
                  Learn more
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Next Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let's discuss how our MERN stack expertise can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule a Consultation
            </Link>
            <Link to="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

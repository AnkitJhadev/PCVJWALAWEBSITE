import { useState } from 'react';
import SEO from '../components/SEO';
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CheckCircleIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Please fill in all required fields.'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Please enter a valid email address.'
      });
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you for your message! We\'ll get back to you within 24 hours.'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Phone',
      details: ['+91 97486 35368'],
      description: 'Available 24/7'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      details: ['hr@pcvjwala.tech', 'contact@pcvjwala.tech'],
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPinIcon,
      title: 'Office',
      details: ['C/O SRI NIRSAN KUMAR JHA', 'BUBNA UDYAN R NO 1, COLLAGE ROAD', 'SAPTA, MADHUBANI, BIHAR', 'INDIA - 847211'],
      description: 'Visit us by appointment'
    }
  ];

  const services = [
    'Cross-Platform App (React Native)',
    'React.js Development',
    'Node.js Development',
    'MongoDB Solutions',
    'MERN Stack Development',
    'API Development',
    'Mobile App Development',
    'Web Application Development'
  ];

  const faqs = [
    {
      question: 'How quickly can you start my project?',
      answer: 'We typically start projects within 1-2 weeks after finalizing requirements and signing the agreement.'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity: Simple apps (4-8 weeks), Medium complexity (8-16 weeks), Enterprise solutions (16+ weeks).'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes, we offer comprehensive support packages including bug fixes, updates, performance optimization, and feature enhancements.'
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing: Fixed-price for well-defined projects, Time & materials for evolving requirements, and Dedicated team models.'
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact PCV Jwala Corporation",
    "description": "Get in touch with PCV Jwala Corporation for React Native, React.js, Node.js, and MongoDB development services.",
    "url": "https://pcvjwala.tech/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "PCV Jwala Corporation",
      "url": "https://pcvjwala.tech",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9748635368",
        "contactType": "customer service",
        "email": "hr@pcvjwala.tech",
        "availableLanguage": ["English"]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "BUBNA UDYAN R NO 1, COLLAGE ROAD",
        "addressLocality": "SAPTA, MADHUBANI",
        "addressRegion": "BIHAR",
        "postalCode": "847211",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <>
      <SEO 
        title="Contact PCV Jwala Corporation - Get Your Free Quote"
        description="Contact PCV Jwala Corporation for expert React Native, React.js, Node.js, and MongoDB development services. Get a free quote for your project."
        keywords="contact React Native developers, hire MERN stack developers, software development quote, web development consultation"
        canonicalUrl="https://pcvjwala.com/contact"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Build Something Amazing Together
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to transform your ideas into reality? Get in touch with our expert team 
              for a free consultation and project estimate.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                <span className="text-2xl font-bold text-primary-600">24h</span>
                <span className="text-gray-600 ml-2">Response Time</span>
              </div>
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                <span className="text-2xl font-bold text-primary-600">Free</span>
                <span className="text-gray-600 ml-2">Consultation</span>
              </div>
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                <span className="text-2xl font-bold text-primary-600">100%</span>
                <span className="text-gray-600 ml-2">Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 rounded-full p-4 w-fit mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1 mb-2">
                  {info.details.map((detail, idx) => (
                    <div key={idx} className="text-gray-600">{detail}</div>
                  ))}
                </div>
                <p className="text-sm text-gray-500">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              {formStatus.submitted && (
                <div className={`mb-6 p-4 rounded-lg ${
                  formStatus.error 
                    ? 'bg-red-50 border border-red-200 text-red-700' 
                    : 'bg-green-50 border border-green-200 text-green-700'
                }`}>
                  {formStatus.error ? (
                    <div className="flex items-center">
                      <span className="mr-2">⚠️</span>
                      {formStatus.message}
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 mr-2" />
                      {formStatus.message}
                    </div>
                  )}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Acme Corporation"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Estimated Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-50k">$15,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k+">$100,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3months">1-3 months</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="6-12months">6-12 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us about your project, requirements, and goals..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center"
                >
                  <PaperAirplaneIcon className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

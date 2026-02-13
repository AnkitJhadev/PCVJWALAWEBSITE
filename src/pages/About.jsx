import SEO from '../components/SEO';
import { 
  UserGroupIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const About = () => {
  const companyStats = [
    { number: '200+', label: 'Projects Delivered' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '15+', label: 'Team Members' }
  ];

  const values = [
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to solve complex problems.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Quality',
      description: 'Every line of code is written with precision and tested thoroughly to ensure excellence.'
    },
    {
      icon: UserGroupIcon,
      title: 'Collaboration',
      description: 'We work closely with clients as partners, ensuring transparency and shared success.'
    },
    {
      icon: HeartIcon,
      title: 'Passion',
      description: 'Our love for technology drives us to create exceptional digital experiences.'
    }
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 10+ years in software development and business strategy.',
      expertise: 'Business Strategy, Project Management'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'Full-stack expert specializing in MERN stack and cloud architecture.',
      expertise: 'Node.js, React.js, Cloud Architecture'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Mobile Developer',
      bio: 'React Native specialist with extensive experience in cross-platform mobile development.',
      expertise: 'React Native, iOS, Android'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Frontend Developer',
      bio: 'UI/UX enthusiast creating beautiful and responsive web applications.',
      expertise: 'React.js, Next.js, UI/UX Design'
    }
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Started with a vision to provide exceptional software development services.'
    },
    {
      year: '2020',
      title: 'First Major Project',
      description: 'Delivered a comprehensive MERN stack application for a Fortune 500 company.'
    },
    {
      year: '2021',
      title: 'Team Expansion',
      description: 'Grew our team to 10+ skilled developers and expanded service offerings.'
    },
    {
      year: '2022',
      title: 'Mobile Division',
      description: 'Launched our React Native development division and delivered 50+ mobile apps.'
    },
    {
      year: '2023',
      title: 'Global Recognition',
      description: 'Recognized as a top MERN stack development company by industry leaders.'
    },
    {
      year: '2024',
      title: 'Innovation Hub',
      description: 'Established R&D division focusing on AI and emerging technologies.'
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PCV Jwala Corporation",
    "url": "https://pcvjwala.com",
    "logo": "https://pcvjwala.com/logo.png",
    "description": "Expert React Native, React.js, Node.js, and MongoDB development company specializing in MERN stack solutions.",
    "foundingDate": "2019",
    "numberOfEmployees": "15",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Street",
      "addressLocality": "Silicon Valley",
      "addressRegion": "CA",
      "postalCode": "94025",
      "addressCountry": "US"
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
        title="About PCV Jwala Corporation - Expert MERN Stack Development Team"
        description="Learn about PCV Jwala Corporation - our story, team, values, and expertise in React Native, React.js, Node.js, and MongoDB development."
        keywords="About PCV Jwala, MERN stack development company, software development team, React Native developers, React.js developers"
        canonicalUrl="https://pcvjwala.com/about"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About PCV Jwala Corporation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We are a team of passionate developers dedicated to building exceptional 
              digital solutions using cutting-edge technologies and best practices.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  Founded in 2019, PCV Jwala Corporation started with a simple mission: 
                  to bridge the gap between innovative ideas and powerful technology solutions.
                </p>
                <p className="text-lg">
                  What began as a small team of passionate developers has grown into a 
                  comprehensive software development company serving clients worldwide. 
                  Our expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js) 
                  and React Native has made us a trusted partner for businesses seeking 
                  scalable and modern digital solutions.
                </p>
                <p className="text-lg">
                  Today, we continue to push boundaries, embracing new technologies and 
                  methodologies while maintaining our commitment to quality, innovation, 
                  and client success.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-700 mb-6">
                To empower businesses with innovative software solutions that drive growth, 
                efficiency, and competitive advantage in the digital age.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700">
                To be the global leader in MERN stack and React Native development, 
                recognized for our technical excellence, innovation, and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary-100 rounded-lg p-3 w-fit mb-4">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that shaped our growth and success.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-200"></div>
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8 ml-auto'}`}>
                  <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                    <div className="text-primary-600 font-bold mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented individuals driving our success and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <UserGroupIcon className="h-12 w-12 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">{member.name}</h3>
                <div className="text-primary-600 text-center mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm mb-3">{member.bio}</p>
                <div className="text-xs text-gray-500 text-center">
                  <strong>Expertise:</strong> {member.expertise}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default About;

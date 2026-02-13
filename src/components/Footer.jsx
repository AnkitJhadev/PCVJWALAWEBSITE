import { Link } from 'react-router-dom';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {/* Main content: stack on mobile, 3 columns from md up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 items-start text-center md:text-left">
          {/* Logo - centered on mobile, left on desktop */}
          <div className="flex justify-center md:justify-start">
            <Link to="/" className="inline-block focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">
              <img
                src="/src/assets/pcv_logo.png"
                alt="PCV Jwala Corporation"
                className="h-9 w-auto sm:h-10 max-w-[200px] object-contain"
              />
            </Link>
          </div>

          {/* Address */}
          <div className="min-w-0">
            <h3 className="text-sm sm:text-base font-semibold mb-3 text-primary-400">Address</h3>
            <address className="text-gray-300 text-sm sm:text-base leading-relaxed not-italic">
              C/O SRI NIRSAN KUMAR JHA<br />
              BUBNA UDYAN R NO 1, COLLAGE ROAD<br />
              SAPTA, MADHUBANI, BIHAR<br />
              INDIA - 847211
            </address>
          </div>

          {/* Contact */}
          <div className="min-w-0 flex flex-col items-center md:items-start">
            <h3 className="text-sm sm:text-base font-semibold mb-3 text-primary-400">Contact</h3>
            <div className="flex items-start gap-2">
              <EnvelopeIcon className="h-4 w-4 text-primary-400 flex-shrink-0 mt-0.5" aria-hidden />
              <div className="flex flex-col gap-1 text-gray-300 text-sm sm:text-base">
                <span>Email:</span>
                <a href="mailto:hr@pcvjwala.tech" className="hover:text-primary-400 transition-colors break-all">
                  hr@pcvjwala.tech
                </a>
                <a href="mailto:contact@pcvjwala.tech" className="hover:text-primary-400 transition-colors break-all">
                  contact@pcvjwala.tech
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar - divider and copyright */}
        <div className="border-t border-gray-800 mt-8 sm:mt-10 pt-6 sm:pt-6">
          <p className="text-gray-400 text-xs sm:text-sm text-center">
            © {currentYear} PCV Jwala Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

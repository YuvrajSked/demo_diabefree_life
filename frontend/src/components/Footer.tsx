import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">DiabeFree Life</h3>
            <p className="text-gray-300 mb-4">
              India's leading diabetes reversal program helping thousands of people 
              achieve normal blood sugar levels naturally through proven lifestyle interventions.
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-300 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
              </button>
              <button className="text-gray-300 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
              </button>
              <button className="text-gray-300 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-gray-300 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 mr-2" />
                info@diabefreelife.com
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2" />
                +91 9*********
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 mr-2" />
                Mumbai, India
              </li>
              <li>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4 transition-colors">
                  Book Free Session
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} DiabeFree Life. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { Heart, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">About MediBud</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              MediBud is your healthcare companion in Varanasi, helping you find the right medical 
              professionals based on your symptoms.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-600 dark:text-blue-500 hover:underline">Home</Link>
              </li>
              <li>
                <Link to="/symptom-checker" className="text-blue-600 dark:text-blue-500 hover:underline">Symptom Checker</Link>
              </li>
              <li>
                <Link to="/hospitals" className="text-blue-600 dark:text-blue-500 hover:underline">Hospitals</Link>
              </li>
              <li>
                <Link to="/doctors" className="text-blue-600 dark:text-blue-500 hover:underline">Doctors</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-500 mr-2 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-400">Varanasi, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-600 dark:text-blue-500 mr-2" />
                <span className="text-gray-600 dark:text-gray-400">+91 123 456 7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-500 mr-2" />
                <span className="text-gray-600 dark:text-gray-400">support@medibud.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} MediBud. All rights reserved. Made with <Heart className="h-4 w-4 text-red-500 inline" /> in Varanasi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
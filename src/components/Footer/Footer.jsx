import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { FaMobile } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className=" text-white border-t-2">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">CONTACT INFO</h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold mb-2">ADDRESS</h4>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin size={16} />
                <p>123 Street Name, City, India</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">PHONE</h4>
              <div className="space-y-1 text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <p>Toll Free (123) 472-796</p>
                </div>
                <p className="ml-6">Mobile: +91-9910XXXX</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">EMAIL</h4>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail size={16} />
                <p>mail@example.com</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">WORKING DAYS</h4>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock size={16} />
                <p>Mon - FRI / 9:30 AM - 6:30 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Shop Categories */}
        <div>
          <h3 className="text-xl font-bold mb-4">SHOP CATEGORIES</h3>
          <ul className="space-y-2 text-gray-300">
            {['Tv', 'Mobile', 'Laptop', 'Audio', 'Gaming', 'Appliances']
              .map((item) => (
                <li key={item} className=" transition-colors">
                  <a href="#" className="flex items-center gap-2">
                    <span>›</span> {item}
                  </a>
                </li>
            ))}
          </ul>
        </div>

        {/* Popular Tags */}
        <div>
          <h3 className="text-xl font-bold mb-4">POPULAR TAGS</h3>
          <div className="flex flex-wrap gap-2">
            {['Tv', 'Mobile', 'Laptop', 'Audio', 'Gaming', 'Appliances'].map((tag) => (
              <a
                key={tag}
                href="#"
                className="px-3 py-1 bg-blue-700 hover:bg-blue-600 rounded-md text-sm transition-colors"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>

        {/* Stay Informed */}
        <div>
          <h3 className="text-xl font-bold mb-4">STAY INFORMED</h3>
          <div className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-2 rounded-md bg-blue-700 border border-blue-700 focus:outline-none focus:border-blue-500"
              />
              <button className="w-full mt-2 px-4 py-2 bg-white text-blue-900 font-semibold rounded-md hover:bg-gray-100 transition-colors">
                SUBSCRIBE
              </button>
              <p className="mt-2 text-sm text-gray-800">
                Subscribe to our newsletter to receive early discount offers, updates and new products info.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-3">DOWNLOAD OUR APP</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="App Store"
                    className="h-10"
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Play Store"
                    className="h-10"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-800">Copyright © 2021. All right reserved.</p>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
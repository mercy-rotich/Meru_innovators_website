import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white bg-green-600 py-10 footer">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-orange-400">
              Stay Updated
            </h3>
            <p className="text-sm mb-4 text-gray-300">
              Subscribe to our newsletter for the latest updates and events.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-600 rounded-md bg-gray-800 text-white focus:ring focus:ring-orange-500"
              />
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-md font-medium transition-all">
                SUBSCRIBE
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-orange-400">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-orange-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-orange-400">
              Resources
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-orange-400">
                  Innovation Hub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Developer Tools
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Alumni Network
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Research Papers
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-orange-400">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-2xl text-gray-300 hover:text-orange-400"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="#"
                className="text-2xl text-gray-300 hover:text-orange-400"
              >
                <FaSquareXTwitter />
              </a>
              <a
                href="#"
                className="text-2xl text-gray-300 hover:text-orange-400"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Meru Innovators. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

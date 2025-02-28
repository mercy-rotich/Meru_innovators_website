import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="bg-gray-900 text-white py-10 mt-[3rem] bg-green "
      style={{
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
      }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-bold mb-3">Don't Miss Out</h3>
            <p className="text-sm mb-4">
              Sign up for the latest university events and updates.
            </p>
            <form className="space-y-3">
              <div>
                <label className="block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border border-gray-600 rounded-md bg-gray-800 text-white focus:ring focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Birth Date</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-600 rounded-md bg-gray-800 text-white focus:ring focus:ring-orange-500"
                />
              </div>
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-md font-medium transition-all">
                SIGN UP
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-2">* Required information</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-orange-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Experts & Spokesmodels
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-orange-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Store Locator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Redeem Rewards
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">More to Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-orange-400">
                  Tools & Consultations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Developer Updates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  School News
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Innovation Updates
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Innovators Community. All Rights
            Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-xl hover:text-orange-400">
              <FaFacebookSquare />
            </a>
            <a href="#" className="text-xl hover:text-orange-400">
              <FaSquareXTwitter />
            </a>
            <a href="#" className="text-xl hover:text-orange-400">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import brand from "../../../assets/brand/logo.svg";
import { Twitter, Linkedin, Github, Phone, Mail } from "lucide-react";

const Institution = () => {
  return (
    <div className="space-y-4">
      {/* Brand Logo and Club Name */}
      <div className="flex flex-col">
        <a href="#" className="block">
          <img src={brand} className="w-[55px] h-[55px]" alt="Meru Innovators Club Logo" />
        </a>
        <p className="text-2xl  text-orange-500 font-semibold">Meru Innovators Club</p>
      </div>

      {/* Contact Us Section */}
      <h4 className="text-xl font-semibold text-darkGreen mt-4">Contact Us</h4>

      {/* Social Icons */}
      <ul className="flex gap-4 mt-4">
        <li>
          <Link to="https://twitter.com/meru_innovators" target="_blank">
            <Twitter size={24} className="text-blue-500 hover:text-blue-600" />
          </Link>
        </li>
        <li>
          <Link to="https://linkedin.com/company/meru-innovators" target="_blank">
            <Linkedin size={24} className="text-blue-700 hover:text-blue-800" />
          </Link>
        </li>
        <li>
          <Link to="https://github.com/meru-innovators" target="_blank">
            <Github size={24} className="text-black hover:text-gray-700" />
          </Link>
        </li>
      </ul>

      {/* Additional Contact Options */}
      <div className="mt-6 space-y-2">
        <div className="flex items-center gap-2">
          <Phone size={20} className="text-green-600" />
          <span>+254 712 345 678</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={20} className="text-red-500" />
          <span>info@meruinnovators.com</span>
        </div>
      </div>
    </div>
  );
};

export default Institution;

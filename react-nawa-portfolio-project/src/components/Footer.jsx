 // Import React
import logo from '../assets/logo.svg';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-bgShade py-28 md:px-12 px-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
        <div className="flex flex-col md:flex-row md:items-center gap-4 flex-wrap">
          <a href="/" className="block text-primary hover:text-gray-400 py-2 px-4">
            Home
          </a>
          <a href="/" className="block hover:text-gray-400 py-2 px-4">
            Portfolio
          </a>
          <a href="/" className="block  hover:text-gray-400 py-2 px-4">
            About me
          </a>
          <a href="/" className="block  hover:text-gray-400 py-2 px-4">
            Testimonials
          </a>
        </div>
        <div className="flex items-center gap-4 ml-4">
          <FaFacebookF className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary" />
          <FaInstagram className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary" />
          <FaTwitter className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary" />
          <FaLinkedin className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary" />
        </div>
      </div>
      <hr />
      <div className="mt-10 flex flex-col md:flex-row justify-between gap-8">
        <p>Made with 💖 by Airdokan</p>
        <div className="space-x-6">
          <button className="hover:text-slate-400">Privacy Policy</button>
          <button className="hover:text-slate-400">Terms of Service</button>
          <button className="hover:text-slate-400">Cookies Settings</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

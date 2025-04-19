import { FiPhone, FiUser } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Header() {
  return (
    <header className="bg-green-700 text-white py-4 w-full">
      <div className="w-full px-4 flex justify-between items-center max-w-[1400px] mx-auto text-sm">
        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center">
            <span className="mr-2 text-xs font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </span>
            <span className="text-xs font-semibold">Next Day Delivery</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-xs font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <span className="hidden sm:inline text-xs font-semibold">Open All Days</span>
            <span className="sm:hidden text-xs font-semibold">Open</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <FiUser className="h-4 w-4 mr-1" />
            <span className="hidden sm:inline text-xs font-semibold">Login</span>
          </div>
          <div className="hidden md:flex items-center">
            <FiPhone className="h-4 w-4 mr-1" />
            <span className=" font-semibold">+447396857680</span>
          </div>
          <div className="hidden sm:flex items-center space-x-2">
            <a href="#" className="text-white hover:text-gray-200">
              <FaFacebook className="h-4 w-4" />
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              <FaInstagram className="h-4 w-4" />
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              <FaTwitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header; 
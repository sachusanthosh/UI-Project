import React from "react";
import { Facebook, Instagram, Youtube, ArrowUp } from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white w-full py-10 px-4 sm:px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Section - Logo and Description */}
          <div className="mb-6 md:mb-0">
            <div className="mb-6">
              <img
                src="https://bestoptions.uk/wp-content/uploads/2025/02/bestoptions-logo.png"
                alt="BestOptions"
                className="h-10"
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              We're a daily essentials shop in Haywards Heath, an innovative
              Indian supermarket. Our unique model minimizes fresh food sourced
              on daily basis and dispatching within hours through cold chain
              logistics in eco-friendly containers.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-[#C223B6] hover:text-[#C223B6]">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="text-[#C223B6] hover:text-[#C223B6]">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="text-[#C223B6] hover:text-[#C223B6]">
                <FaWhatsapp size={18} />
              </a>
              <a href="#" className="text-[#C223B6] hover:text-[#C223B6]">
                <FaYoutube size={18} />
              </a>
            </div>
            
            <div className="mt-6 text-sm text-gray-500">
              © 2025 Best Options / Designed By Jenson
            </div>
          </div>

          {/* Middle Section - Links */}
          <div className="mb-6 md:mb-0 flex flex-col items-start md:items-center">
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#C223B6] hover:text-[#C223B6] text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#C223B6] hover:text-[#C223B6] text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#C223B6] hover:text-[#C223B6] text-sm">
                  Shipping & Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#C223B6] hover:text-[#C223B6] text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#C223B6] hover:text-[#C223B6] text-sm">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section - Newsletter */}
          <div className="w-full flex flex-col items-start md:items-end">
            <h3 className="text-lg font-bold text-[#C223B6] mb-3">
              Subscribe for Get News
            </h3>
            <p className="text-gray-500 text-sm mb-4 md:text-right max-w-xs">
              Sign up to get 10% off your first order and stay up to date on the
              latest product releases, special offers and news.
            </p>
            <div className="relative  max-w-md">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 pr-24 bg-gray-800 text-white rounded-full focus:outline-none"
              />
              <button className="absolute right-0 top-0 h-full bg-[#C223B6] hover:bg-[#C223B6] text-white px-6 py-3 rounded-full text-sm font-medium">
                Subscribe
              </button>
            </div>
            
            <div className="flex mt-8 items-center justify-end w-full">
              <div className="flex space-x-3">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1280px-Visa_2021.svg.png" alt="Visa" className="h-3" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1544px-Mastercard-logo.svg.png" alt="Mastercard" className="h-3" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/2560px-Apple_Pay_logo.svg.png" alt="Apple Pay" className="h-3" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" alt="PayPal" className="h-4" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png" alt="Amex" className="h-3" />
              </div>
            </div>
          </div>
        </div>

        {/* Back to top button - Positioned at the bottom right */}
        <div className="fixed bottom-8 right-8">
          <button className="bg-[#C223B6] text-white p-3 rounded-full hover:bg-[#C223B6] shadow-md">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}

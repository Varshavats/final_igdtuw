import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 py-4 bg-green-900 text-white text-center ">
      <div className="container mx-auto">
        <nav className="flex flex-wrap justify-center space-x-4">
          <a
            href="/"
            className="block mb-2 md:mb-0 md:mr-4 hover:text-gray-300 transition"
          >
            Home
          </a>
          <span className="hidden md:inline">•</span>
          <a
            href="/contact"
            className="block mb-2 md:mb-0 md:mx-4 hover:text-gray-300 transition"
          >
            Contact Us
          </a>
          <span className="hidden md:inline">•</span>
          <a
            href="/notices"
            className="block mb-2 md:mb-0 md:mx-4 hover:text-gray-300 transition"
          >
            Notices
          </a>
          <span className="hidden md:inline">•</span>
          <a
            href="/policy"
            className="block mb-2 md:mb-0 md:mx-4 hover:text-gray-300 transition"
          >
            Policy
          </a>
          <span className="hidden md:inline">•</span>
          <a
            href="/annual-reports"
            className="block mb-2 md:mb-0 md:mx-4 hover:text-gray-300 transition"
          >
            Annual Reports
          </a>
          <span className="hidden md:inline">|</span>
          <a
            className="mt-1"
            href="https://www.instagram.com/tnpcelldap?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <span className="hidden md:inline">|</span>
          <a
            className="mt-1"
            href="https://www.facebook.com/profile.php?id=100080356785652"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook  />
          </a>
          <span className="hidden md:inline">|</span>
          <a
            className="mt-1"
            href="https://twitter.com/tnpcelldap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter  />
          </a>
          <span className="hidden md:inline">|</span>
          <a
            className="mt-1"
            href="https://www.linkedin.com/in/training-and-placement-cell-dap-250a55237/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin  />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

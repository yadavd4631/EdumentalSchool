import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 mt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-sm">
              Our school is committed to excellence in education, fostering
              creativity, and empowering students to achieve their dreams.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <NavLink to="/">
                <li>Home</li>
              </NavLink>
              <NavLink to="/About">
                <li>About</li>
              </NavLink>
              <NavLink to="/Contact">
                <li>Contact</li>
              </NavLink>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-2xl">
                  <FaMapMarkerAlt />
                </span>
                UNION BANK ATM, SANTOSH BHAVAN NAKA, ANANT NIWAS, Pelhar Rd,
                beside SITARAM HOTEL, Nalasopara East, Maharashtra 401209
              </li>
              <li className="flex items-center gap-2">
                <FaPhone /> +91 7888227389
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope /> info@school.edu
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-400 text-2xl">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-yellow-400 text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-yellow-400 text-2xl">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm mt-8 border-t border-gray-500 pt-4">
          &copy; {new Date().getFullYear()} Edumentors International School. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

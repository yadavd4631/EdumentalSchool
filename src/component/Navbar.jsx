import React from 'react'
import logo from "../assets/logo.jpg"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <img className="w-24 h-24 md:ml-20 mt-4" src={logo} alt="" />
      <nav>
        <ul className="flex justify-between items-center md:gap-10 gap-2">
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
      </nav>
      <button className="bg-orange-500 p-3 rounded-full  mr-5 hover:bg-red-500 hover:text-white cursor-pointer">
        Admission
      </button>
    </div>
  );
}

export default Navbar
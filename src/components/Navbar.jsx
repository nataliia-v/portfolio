import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header">
      Navbar
      <NavLink
        to="/portfolio"
        className="w-20 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="green-gradient_text">Home</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/portfolio/about"
          className={({ isActive }) => (isActive ? 'text-lime-500' : 'text-black')}
        >
          About
        </NavLink>
        <NavLink
          to="/portfolio/projects"
          className={({ isActive }) => (isActive ? 'text-lime-500' : 'text-black')}
        >
          Projects
        </NavLink>
        <NavLink
          to="/portfolio/contact"
          className={({ isActive }) => (isActive ? 'text-lime-500' : 'text-black')}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;

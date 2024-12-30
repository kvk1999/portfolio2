import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Update with the path to your logo image
import Resume from '../assets/resume.pdf'; // Update with the path to your resume PDF

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  // Toggle mobile menu
  const toggleNav = () => setNavOpen(!navOpen);

  // Handle navigation link click and smooth scroll
  const handleNavLinkClick = (e, sectionId) => {
    e.preventDefault();
    setNavOpen(false); // Close the mobile menu when a link is clicked

    // Smooth scroll to the section with the given ID
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#home">
            <img
              src={logo}
              alt="Logo"
              className="h-20 w-auto object-contain hover:opacity-80 transition-opacity"
            />
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#home"
            className="hover:text-gray-300"
            onClick={(e) => handleNavLinkClick(e, 'home')}
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-gray-300"
            onClick={(e) => handleNavLinkClick(e, 'about')}
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-gray-300"
            onClick={(e) => handleNavLinkClick(e, 'skills')}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-gray-300"
            onClick={(e) => handleNavLinkClick(e, 'projects')}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-gray-300"
            onClick={(e) => handleNavLinkClick(e, 'contact')}
          >
            Contact
          </a>
          <a 
          href={Resume }
          className="hover:text-lime-600"
          target="_blank"
          >Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none text-3xl"
          onClick={toggleNav}
        >
          {navOpen ? "×" : "☰"} {/* Conditionally render close or hamburger icon */}
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      {navOpen && (
        <div className="md:hidden bg-gray-900">
          <nav className="flex flex-col space-y-4 p-4">
            <a
              href="#home"
              className="hover:text-gray-300"
              onClick={(e) => handleNavLinkClick(e, 'home')}
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-gray-300"
              onClick={(e) => handleNavLinkClick(e, 'about')}
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-gray-300"
              onClick={(e) => handleNavLinkClick(e, 'skills')}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-gray-300"
              onClick={(e) => handleNavLinkClick(e, 'projects')}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-gray-300"
              onClick={(e) => handleNavLinkClick(e, 'contact')}
            >
              Contact
            </a>
            <a 
              href={ Resume }
              className="hover:text-gray-300"
              target="_blank"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

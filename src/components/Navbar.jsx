import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Resume from "../assets/Resume.pdf";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

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
    <nav className="bg-gray-900 text-white w-full fixed top-0 z-50 shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
      {/* Logo */}
      <div
        className="text-2xl font-bold cursor-pointer ml-4" // Add margin-left for the logo
        onClick={(e) => handleNavLinkClick(e, "home")}
      >
        K V K
      </div>
  
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-grow justify-end space-x-6 mr-4"> {/* Add margin-right for navbar */}
        <a
          href="#home"
          onClick={(e) => handleNavLinkClick(e, "home")}
          className="hover:text-gray-400 transition duration-200"
        >
          Home
        </a>
        <a
          href="#about"
          onClick={(e) => handleNavLinkClick(e, "about")}
          className="hover:text-gray-400 transition duration-200"
        >
          About
        </a>
        <a
          href="#experience"
          onClick={(e) => handleNavLinkClick(e, "experience")}
          className="hover:text-gray-400 transition duration-200"
        >
          Experience
        </a>
        <a
          href="#certifications"
          onClick={(e) => handleNavLinkClick(e, "certifications")}
          className="hover:text-gray-400 transition duration-200"
        >
          Certifications
        </a>
        <a
          href="#skills"
          onClick={(e) => handleNavLinkClick(e, "skills")}
          className="hover:text-gray-400 transition duration-200"
        >
          Skills
        </a>
        <a
          href="#projects"
          onClick={(e) => handleNavLinkClick(e, "projects")}
          className="hover:text-gray-400 transition duration-200"
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={(e) => handleNavLinkClick(e, "contact")}
          className="hover:text-gray-400 transition duration-200"
        >
          Contact
        </a>
        <div className="hidden md:flex flex-shrink-0">
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-green-500 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500"
          >
            Resume
          </a>
        </div>
      </div>
  
      {/* Mobile Menu Toggle */}
      <div className="md:hidden" onClick={toggleNav}>
        <div className="text-white">
          {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>
    </div>
  
    {/* Mobile Navigation */}
    <div
      className={`md:hidden bg-gray-800 text-white flex flex-col space-y-4 px-4 py-6 absolute top-16 left-0 w-full z-40 transition-transform duration-300 ${
        navOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <a
        href="#home"
        onClick={(e) => handleNavLinkClick(e, "home")}
        className="hover:text-gray-400 transition duration-200"
      >
        Home
      </a>
      <a
        href="#about"
        onClick={(e) => handleNavLinkClick(e, "about")}
        className="hover:text-gray-400 transition duration-200"
      >
        About
      </a>
      <a
        href="#experience"
        onClick={(e) => handleNavLinkClick(e, "experience")}
        className="hover:text-gray-400 transition duration-200"
      >
        Experience
      </a>
      <a
        href="#certifications"
        onClick={(e) => handleNavLinkClick(e, "certifications")}
        className="hover:text-gray-400 transition duration-200"
      >
        Certifications
      </a>
      <a
        href="#skills"
        onClick={(e) => handleNavLinkClick(e, "skills")}
        className="hover:text-gray-400 transition duration-200"
      >
        Skills
      </a>
      <a
        href="#projects"
        onClick={(e) => handleNavLinkClick(e, "projects")}
        className="hover:text-gray-400 transition duration-200"
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={(e) => handleNavLinkClick(e, "contact")}
        className="hover:text-gray-400 transition duration-200"
      >
        Contact
      </a>
      <a
        href={Resume}
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 border-green-500 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500"
      >
        Resume
      </a>
    </div>
  </nav>
  
  );
};

export default Navbar;

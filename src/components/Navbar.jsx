import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavLinkClick = (e, sectionId) => {
    const targetHash = `/#${sectionId}`;
    if (window.location.pathname !== "/") {
      e.preventDefault();
      window.location.href = targetHash;
      return;
    }

    e.preventDefault();
    setNavOpen(false);
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <a href="#home">
          <img
            src={logo}
            alt="Logo"
            className="h-20 w-auto object-contain hover:opacity-80 transition-opacity"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {[
            "home",
            "about",
            "skills",
            "projects",
            "contact",
          ].map((id) => (
            <a
              key={id}
              href={`/#${id}`}
              className="hover:text-gray-300 capitalize"
              onClick={(e) => handleNavLinkClick(e, id)}
            >
              {id}
            </a>
          ))}

          {/* Resume (next to Contact) */}
          <Link to="/resume" className="hover:text-lime-600 font-medium">
            Resume
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setNavOpen((o) => !o)}
          aria-expanded={navOpen}
        >
          {navOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-gray-900 ${navOpen ? "block" : "hidden"}`}>
        <nav className="flex flex-col space-y-4 p-4">
          {["home", "about", "skills", "projects", "contact"].map((id) => (
            <a
              key={id}
              href={`/#${id}`}
              className="hover:text-gray-300 capitalize"
              onClick={(e) => handleNavLinkClick(e, id)}
            >
              {id}
            </a>
          ))}

          {/* Resume (mobile) */}
          <Link
            to="/resume"
            className="hover:text-lime-600 font-medium"
          >
            Resume
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

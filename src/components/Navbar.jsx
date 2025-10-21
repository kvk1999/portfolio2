import React, { useEffect, useId, useRef, useState } from "react";
import logo from "../assets/logo.png";
import ResumeWithGuvi from "../assets/resume Original.pdf";
import ResumeWithoutGuviProject from "../assets/resume without GUVI project.pdf";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const resumeButtonId = useId();
  const resumeMenuId = useId();
  const resumeMenuRef = useRef(null);
  const resumeButtonRef = useRef(null);

  const toggleNav = () => setNavOpen((o) => !o);

  const handleNavLinkClick = (e, sectionId) => {
    e.preventDefault();
    setNavOpen(false);
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  // Close resume menu on outside click and Escape
  useEffect(() => {
    if (!resumeOpen) return;
    const onDocClick = (e) => {
      if (
        resumeMenuRef.current &&
        !resumeMenuRef.current.contains(e.target) &&
        resumeButtonRef.current &&
        !resumeButtonRef.current.contains(e.target)
      ) {
        setResumeOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") setResumeOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [resumeOpen]);

  // Simple arrow key support within resume menu
  useEffect(() => {
    if (!resumeOpen || !resumeMenuRef.current) return;
    const items = Array.from(resumeMenuRef.current.querySelectorAll('[role="menuitem"]'));
    items[0]?.focus();
    const onKeyDown = (e) => {
      const idx = items.indexOf(document.activeElement);
      if (e.key === "ArrowDown") {
        e.preventDefault();
        items[(idx + 1) % items.length]?.focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        items[(idx - 1 + items.length) % items.length]?.focus();
      } else if (e.key === "Home") {
        e.preventDefault();
        items[0]?.focus();
      } else if (e.key === "End") {
        e.preventDefault();
        items[items.length - 1]?.focus();
      } else if (e.key === "Tab") {
        setResumeOpen(false);
      }
    };
    const el = resumeMenuRef.current;
    el.addEventListener("keydown", onKeyDown);
    return () => el.removeEventListener("keydown", onKeyDown);
  }, [resumeOpen]);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50" role="banner">
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

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6" role="navigation" aria-label="Primary">
          <a href="#home" className="hover:text-gray-300" onClick={(e) => handleNavLinkClick(e, "home")}>
            Home
          </a>
          <a href="#about" className="hover:text-gray-300" onClick={(e) => handleNavLinkClick(e, "about")}>
            About
          </a>
          <a href="#skills" className="hover:text-gray-300" onClick={(e) => handleNavLinkClick(e, "skills")}>
            Skills
          </a>
          <a href="#projects" className="hover:text-gray-300" onClick={(e) => handleNavLinkClick(e, "projects")}>
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-300" onClick={(e) => handleNavLinkClick(e, "contact")}>
            Contact
          </a>

          {/* Resume dropdown trigger */}
          <div className="relative">
            <button
              id={resumeButtonId}
              ref={resumeButtonRef}
              type="button"
              className="inline-flex items-center gap-1 hover:text-lime-600 focus:outline-none"
              aria-label="Resume"
              aria-haspopup="menu"
              aria-controls={resumeMenuId}
              aria-expanded={resumeOpen}
              onClick={() => setResumeOpen((v) => !v)}
            >
              Resume
              <span aria-hidden="true" className={`transition-transform ${resumeOpen ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>

            <div
              id={resumeMenuId}
              role="menu"
              aria-labelledby={resumeButtonId}
              ref={resumeMenuRef}
              className={`absolute right-0 mt-2 w-56 rounded-md bg-white py-1 text-gray-900 shadow-lg ring-1 ring-black/10 focus:outline-none ${resumeOpen ? "block" : "hidden"}`}
            >
              <a
                role="menuitem"
                tabIndex={-1}
                href={ResumeWithGuvi}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setResumeOpen(false)}
              >
                Original
              </a>
              <a
                role="menuitem"
                tabIndex={-1}
                href={ResumeWithoutGuviProject}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setResumeOpen(false)}
              >
                Without GUVI Project
              </a>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none text-3xl"
          onClick={() => setNavOpen((o) => !o)}
          aria-label="Toggle main menu"
          aria-controls="mobile-primary-nav"
          aria-expanded={navOpen}
        >
          {navOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        id="mobile-primary-nav"
        className={`md:hidden bg-gray-900 ${navOpen ? "block" : "hidden"}`}
        role="navigation"
        aria-label="Primary mobile"
      >
        <nav className="flex flex-col space-y-4 p-4">
          <a href="#home" className="hover:text-gray-300" onClick={(e) => handleNavLinkClick(e, "home")}>
            Home
          </a>
          <a href="#about" className="hover:text-gray-300" onClick={(e) => handleNavLinkClick(e, "about")}>
            About
          </a>
          <a href="#skills" className="hover:text-gray-300" onClick={(e) => handleNavLinkClick(e, "skills")}>
            Skills
          </a>
          <a href="#projects" className="hover:text-gray-300" onClick={(e) => handleNavLinkClick(e, "projects")}>
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-300" onClick={(e) => handleNavLinkClick(e, "contact")}>
            Contact
          </a>

          {/* Reuse the same dropdown or show two plain links on mobile */}
          <a
            href={ResumeWithGuvi}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime-600"
          >
            Resume — Original
          </a>
          <a
            href={ResumeWithoutGuviProject}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime-600"
          >
            Resume — Without GUVI Project
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

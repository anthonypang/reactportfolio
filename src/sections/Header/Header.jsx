import React, { useState, useEffect } from "react";
import "./Header.css";
import { navItems } from "../../data/data";

const Header = ({ toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    if (id === "") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <button onClick={(e) => handleNavClick(e, "")} className="logo">
          AP
        </button>
        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={(e) => handleNavClick(e, item.id)}
              className="nav-link"
            >
              {item.title}
            </button>
          ))}
          <a
            href="https://drive.google.com/file/d/1mTQufF8VB2vHctgqH7-idaA-OK8xRaWG/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link resume-link"
          >
            Resume
          </a>
        </nav>
        <div className="header-buttons">
          <button onClick={toggleTheme} className="theme-toggle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
          </button>
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

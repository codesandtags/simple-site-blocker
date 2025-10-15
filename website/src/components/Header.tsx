import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    document.documentElement.setAttribute(
      "data-theme",
      newTheme ? "dark" : "light"
    );
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img
              src="/extension/icons/icon48.png"
              alt="Simple Site Blocker"
              className="logo-icon"
            />
            <span className="logo-text">Simple Site Blocker</span>
          </Link>

          <nav className={`nav ${isMobileMenuOpen ? "nav-open" : ""}`}>
            <Link
              to="/"
              className={`nav-link ${isActive("/") ? "active" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/features"
              className={`nav-link ${isActive("/features") ? "active" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/installation"
              className={`nav-link ${
                isActive("/installation") ? "active" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Installation
            </Link>
            <a
              href="https://github.com/codesandtags/simple-site-blocker"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              GitHub
            </a>
          </nav>

          <div className="header-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>

            <button
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

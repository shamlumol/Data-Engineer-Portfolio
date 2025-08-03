import React, { useState, useEffect } from "react";
import "../App.css";
import { FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* copyright text */}
          <div className="copyright-text">
            © {currentYear} Sakshi Korde. All rights reserved.
          </div>
          
          {/* icons with sparkle hover effect */}
          <div className="footer-icons">
            <a 
              href="https://www.linkedin.com/in/sakshi-korde-ace02/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:sakshi.korde02@gmail.com" 
              className="footer-icon"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* scroll to top button with same icon style */}
      {showScrollTop && (
        <button 
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
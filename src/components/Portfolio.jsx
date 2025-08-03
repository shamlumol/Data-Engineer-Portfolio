import React, { useState, useEffect } from "react";
import "../App.css";
import { FaMessage } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  
  const typewriterLines = [
    "SAKSHI KORDE,",
    "Data Engineer",
  ];

  const handleClick = () => {
    setAnimate(true);

    setTimeout(() => {
      navigate("/about");
    }, 1000); 
  };

  // Typewriter effect
  useEffect(() => {
    if (currentLine < typewriterLines.length) {
      const currentText = typewriterLines[currentLine];
      
      if (currentIndex < currentText.length) {
        const timer = setTimeout(() => {
          setDisplayText(prev => prev + currentText[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, 100);

        return () => clearTimeout(timer);
      } else {
        const lineTimer = setTimeout(() => {
          if (currentLine < typewriterLines.length - 1) {
            setDisplayText(prev => prev + "\n");
            setCurrentIndex(0);
            setCurrentLine(prev => prev + 1);
          }
        }, 400);

        return () => clearTimeout(lineTimer);
      }
    }
  }, [currentIndex, currentLine, typewriterLines]);

  return (
    <div className="portfolio-hero">
      <div className="top-icons">
        <a href="mailto:sakshi.korde02@gmail.com" className="menu-icon" target="_blank" rel="noopener noreferrer">
          <FaMessage />
        </a>
      </div>

      <div className="hero-content">
        <div className="hero-main">
          <div className="name-container">
            <h1 className="hero-title">
              <span className="typewriter-text">
                {displayText}
              </span>
            </h1>
          </div>
          <div className="hero-info">
            <button className="contact-btn" onClick={handleClick}>
              More About Me →
            </button>
          </div>
        </div>
      </div>

      {animate && <div className="shutter-overlay"></div>}
    </div>
  );
};

export default Portfolio;
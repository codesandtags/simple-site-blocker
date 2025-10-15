import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Stay Focused with
              <span className="gradient-text"> Simple Site Blocker</span>
            </h1>
            <p className="hero-description">
              A modern Chrome extension that helps you stay productive by
              blocking distracting websites. Features smart blocking, detailed
              statistics, and a beautiful interface with automatic light/dark
              mode support.
            </p>
            <div className="hero-actions">
              <Link to="/installation" className="btn btn-primary btn-large">
                🚀 Install Extension
              </Link>
              <Link to="/features" className="btn btn-secondary btn-large">
                📋 View Features
              </Link>
            </div>
            {/* <div className="hero-stats hidden">
              <div className="stat">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Downloads</span>
              </div>
              <div className="stat">
                <span className="stat-number">4.8★</span>
                <span className="stat-label">Rating</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Free</span>
              </div>
            </div> */}
          </div>
          <div className="hero-visual">
            <div className="extension-preview">
              <img
                src="/docs/popup-example.png"
                alt="Simple Site Blocker Extension Popup"
                className="preview-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

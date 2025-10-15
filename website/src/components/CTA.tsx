import React from "react";
import { Link } from "react-router-dom";
import "./CTA.css";

const CTA: React.FC = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="cta-title">Ready to Stay Focused?</h2>
            <p className="cta-description">
              Join thousands of users who have improved their productivity with
              Simple Site Blocker. Install the extension today and take control
              of your browsing habits.
            </p>
            <div className="cta-actions">
              <Link to="/installation" className="btn btn-primary btn-large">
                🚀 Install Now
              </Link>
              <a
                href="https://github.com/codesandtags/simple-site-blocker"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-large"
              >
                📁 View Source
              </a>
            </div>
          </div>
          <div className="cta-visual">
            <div className="cta-icon">🎯</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

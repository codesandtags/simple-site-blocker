import React, { useState } from "react";
import "./Screenshots.css";

const Screenshots: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const screenshots = [
    {
      title: "Popup Interface",
      description:
        "Clean domain management with toggle controls and modern design",
      image: "/docs/popup-example.png",
      alt: "Extension popup interface",
    },
    {
      title: "Blocked Page",
      description:
        "Motivational blocked page with statistics access and beautiful UI",
      image: "/docs/page-blocked-example.png",
      alt: "Blocked page interface",
    },
    {
      title: "Statistics Modal",
      description:
        "Detailed analytics and export options with comprehensive metrics",
      image: "/docs/statistics-example.png",
      alt: "Statistics modal interface",
    },
  ];

  return (
    <section className="screenshots">
      <div className="container">
        <div className="screenshots-header">
          <h2 className="screenshots-title">See It In Action</h2>
          <p className="screenshots-description">
            Take a look at the beautiful interface and powerful features of
            Simple Site Blocker.
          </p>
        </div>

        <div className="screenshots-content">
          <div className="screenshot-tabs">
            {screenshots.map((screenshot, index) => (
              <button
                key={index}
                className={`tab-button ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {screenshot.title}
              </button>
            ))}
          </div>

          <div className="screenshot-display">
            <div className="screenshot-container">
              <img
                src={screenshots[activeTab].image}
                alt={screenshots[activeTab].alt}
                className="screenshot-image"
              />
              <div className="screenshot-overlay">
                <h3 className="screenshot-title">
                  {screenshots[activeTab].title}
                </h3>
                <p className="screenshot-description">
                  {screenshots[activeTab].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="screenshots-grid">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="screenshot-thumbnail">
              <img
                src={screenshot.image}
                alt={screenshot.alt}
                className={`thumbnail-image ${
                  activeTab === index ? "active" : ""
                }`}
                onClick={() => setActiveTab(index)}
              />
              <div className="thumbnail-label">{screenshot.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;

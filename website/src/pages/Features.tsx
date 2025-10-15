import React from "react";
import "./Features.css";

const Features: React.FC = () => {
  const featureCategories = [
    {
      title: "Core Functionality",
      features: [
        {
          icon: "🚫",
          title: "Smart Blocking",
          description:
            "Block any website by redirecting to a motivational blocked page with Chrome's efficient declarativeNetRequest API.",
        },
        {
          icon: "🎛️",
          title: "Toggle Controls",
          description:
            "Enable/disable blocking for individual domains with modern toggle switches and intuitive interface.",
        },
        {
          icon: "⚡",
          title: "Performance",
          description:
            "Uses Chrome's declarativeNetRequest API for efficient blocking without impacting browser performance.",
        },
      ],
    },
    {
      title: "Analytics & Statistics",
      features: [
        {
          icon: "📊",
          title: "Detailed Statistics",
          description:
            "Track your blocking activity with comprehensive metrics including daily, weekly, and monthly analytics.",
        },
        {
          icon: "📈",
          title: "Analytics Dashboard",
          description:
            "View detailed statistics including total blocks, per-domain counts, and top blocked domains.",
        },
        {
          icon: "📥",
          title: "Data Export",
          description:
            "Export your blocking data for external analysis and tracking your productivity improvements.",
        },
      ],
    },
    {
      title: "User Experience",
      features: [
        {
          icon: "📱",
          title: "Responsive Design",
          description:
            "Clean popup interface optimized for productivity with beautiful animations and smooth interactions.",
        },
        {
          icon: "🌓",
          title: "Theme Support",
          description:
            "Automatic light and dark mode with high contrast accessibility and WCAG compliance.",
        },
        {
          icon: "♿",
          title: "Accessibility",
          description:
            "WCAG-compliant design with proper contrast ratios and keyboard navigation support.",
        },
      ],
    },
    {
      title: "Sync & Storage",
      features: [
        {
          icon: "☁️",
          title: "Cross-Device Sync",
          description:
            "Sync your blocked sites across all Chrome browsers using Chrome's built-in storage sync.",
        },
        {
          icon: "🔒",
          title: "Privacy First",
          description:
            "All data stays local to your browser. No external requests or data collection.",
        },
        {
          icon: "💾",
          title: "Local Storage",
          description:
            "Uses Chrome's storage API for reliable data persistence and quick access.",
        },
      ],
    },
  ];

  return (
    <div className="features-page">
      <div className="container">
        <div className="features-page-header">
          <h1 className="features-page-title">Features Overview</h1>
          <p className="features-page-description">
            Discover all the powerful features that make Simple Site Blocker the
            perfect tool for staying focused and productive.
          </p>
        </div>

        {featureCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="feature-category">
            <h2 className="category-title">{category.title}</h2>
            <div className="category-features">
              {category.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="feature-item">
                  <div className="feature-icon">{feature.icon}</div>
                  <div className="feature-content">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="features-summary">
          <h2>Why Choose Simple Site Blocker?</h2>
          <div className="summary-grid">
            <div className="summary-item">
              <h3>🚀 Easy to Use</h3>
              <p>
                Simple interface that anyone can use without technical
                knowledge.
              </p>
            </div>
            <div className="summary-item">
              <h3>🔒 Privacy Focused</h3>
              <p>
                All data stays on your device. No external tracking or data
                collection.
              </p>
            </div>
            <div className="summary-item">
              <h3>⚡ Lightweight</h3>
              <p>
                Minimal resource usage with efficient Chrome API integration.
              </p>
            </div>
            <div className="summary-item">
              <h3>🎨 Beautiful Design</h3>
              <p>Modern, accessible interface with automatic theme support.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

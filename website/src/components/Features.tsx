import React from "react";
import "./Features.css";

const Features: React.FC = () => {
  const features = [
    {
      icon: "🚫",
      title: "Smart Blocking",
      description:
        "Block any website by redirecting to a motivational blocked page with Chrome's efficient declarativeNetRequest API.",
    },
    {
      icon: "📊",
      title: "Detailed Statistics",
      description:
        "Track your blocking activity with comprehensive metrics including daily, weekly, and monthly analytics.",
    },
    {
      icon: "🎛️",
      title: "Toggle Controls",
      description:
        "Enable/disable blocking for individual domains with modern toggle switches and intuitive interface.",
    },
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
      icon: "☁️",
      title: "Cross-Device Sync",
      description:
        "Sync your blocked sites across all Chrome browsers using Chrome's built-in storage sync.",
    },
    {
      icon: "📈",
      title: "Analytics Dashboard",
      description:
        "View detailed statistics including total blocks, per-domain counts, and top blocked domains.",
    },
    {
      icon: "♿",
      title: "Accessibility",
      description:
        "WCAG-compliant design with proper contrast ratios and keyboard navigation support.",
    },
    {
      icon: "⚡",
      title: "Performance",
      description:
        "Uses Chrome's declarativeNetRequest API for efficient blocking without impacting browser performance.",
    },
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="features-header">
          <h2 className="features-title">Powerful Features</h2>
          <p className="features-description">
            Everything you need to stay focused and productive. Simple Site
            Blocker combines powerful functionality with a beautiful, accessible
            interface.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

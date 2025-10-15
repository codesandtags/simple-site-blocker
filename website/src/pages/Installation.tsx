import React from "react";
import "./Installation.css";

const Installation: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Download the Extension",
      description:
        "Clone the repository or download the extension files from GitHub.",
      code: "git clone https://github.com/codesandtags/simple-site-blocker.git",
    },
    {
      number: 2,
      title: "Open Chrome Extensions",
      description: "Navigate to the Chrome extensions page in your browser.",
      code: "chrome://extensions/",
    },
    {
      number: 3,
      title: "Enable Developer Mode",
      description:
        'Toggle the "Developer mode" switch in the top right corner.',
      code: "Toggle the switch in the top right",
    },
    {
      number: 4,
      title: "Load Unpacked Extension",
      description: 'Click "Load unpacked" and select the extension folder.',
      code: "Select the extension/ folder",
    },
    {
      number: 5,
      title: "Start Using",
      description:
        "The extension icon should appear in your toolbar. Click it to start blocking sites!",
      code: "Click the extension icon in your toolbar",
    },
  ];

  return (
    <div className="installation">
      <div className="container">
        <div className="installation-header">
          <h1 className="installation-title">Installation Guide</h1>
          <p className="installation-description">
            Follow these simple steps to install Simple Site Blocker on your
            Chrome browser.
          </p>
        </div>

        <div className="requirements">
          <h2>Requirements</h2>
          <ul className="requirements-list">
            <li>✅ Chrome 88+ (Manifest V3 support required)</li>
            <li>✅ Developer mode enabled in Chrome extensions</li>
            <li>✅ Basic knowledge of Chrome extensions</li>
          </ul>
        </div>

        <div className="installation-steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                <div className="step-code">
                  <code>{step.code}</code>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="troubleshooting">
          <h2>Troubleshooting</h2>
          <div className="troubleshooting-content">
            <div className="troubleshooting-item">
              <h4>Extension not loading?</h4>
              <p>
                Make sure Developer mode is enabled and you've selected the
                correct folder containing manifest.json.
              </p>
            </div>
            <div className="troubleshooting-item">
              <h4>Blocking not working?</h4>
              <p>
                Check that the extension has the necessary permissions and try
                refreshing the page.
              </p>
            </div>
            <div className="troubleshooting-item">
              <h4>Need help?</h4>
              <p>
                Visit our{" "}
                <a href="https://github.com/codesandtags/simple-site-blocker/issues">
                  GitHub Issues
                </a>{" "}
                page for support.
              </p>
            </div>
          </div>
        </div>

        <div className="next-steps">
          <h2>Next Steps</h2>
          <div className="next-steps-content">
            <p>Once installed, you can:</p>
            <ul>
              <li>Add domains to block through the popup interface</li>
              <li>View detailed statistics about your blocking activity</li>
              <li>Export your data for analysis</li>
              <li>Sync your settings across devices</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;

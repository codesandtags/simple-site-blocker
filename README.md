# Simple Site Blocker

A modern Chrome extension to help you stay focused by blocking distracting websites. Features a clean popup interface, detailed blocking statistics, and an accessible design with automatic light/dark mode support.

## ✨ Features

- **🚫 Smart Blocking**: Block any website by redirecting to a motivational blocked page
- **📊 Detailed Statistics**: Track your blocking activity with comprehensive metrics
- **🎛️ Toggle Controls**: Enable/disable blocking for individual domains with modern toggle switches
- **📱 Responsive Design**: Clean popup interface optimized for productivity
- **🌓 Theme Support**: Automatic light and dark mode with high contrast accessibility
- **☁️ Cross-Device Sync**: Sync your blocked sites across all Chrome browsers
- **📈 Analytics**: View detailed statistics including:
  - Total blocks and per-domain counts
  - Daily, weekly, and monthly activity
  - Top blocked domains
  - Export data for external analysis
- **♿ Accessibility**: WCAG-compliant design with proper contrast ratios
- **⚡ Performance**: Uses Chrome's `declarativeNetRequest` API for efficient blocking

## 🚀 Installation

### From Source (Recommended)

1. **Clone the repository**:

   ```bash
   git clone https://github.com/codesandtags/simple-site-blocker.git
   cd simple-site-blocker
   ```

2. **Load in Chrome**:
   - Open `chrome://extensions/` in your browser
   - Enable "**Developer mode**" (toggle in top right)
   - Click "**Load unpacked**" and select the project folder
   - The extension icon should appear in your toolbar

### Requirements

- **Chrome 88+** (Manifest V3 support required)
- **Developer mode** enabled in Chrome extensions

## 📖 Usage

### Managing Blocked Sites

1. **Open the popup** by clicking the extension icon
2. **Add domains** by typing them in the input field (e.g., `instagram.com`, `facebook.com`)
3. **Toggle blocking** using the blue toggle switches next to each domain
4. **Remove domains** by clicking the red trash icon 🗑️

### Viewing Statistics

1. **Visit a blocked site** to see the motivational blocked page
2. **Click "📊 View Blocking Statistics"** to see detailed analytics
3. **Export your data** using the "📥 Export Data" button
4. **Clear statistics** if needed using "🗑️ Clear Data"

### Default Blocked Sites

The extension comes with these sites blocked by default (you can remove them):

- `facebook.com`
- `tiktok.com`
- `instagram.com`

## 🔧 How It Works

### Architecture

- **Popup Interface** (`popup.html`, `popup.js`): Clean domain management with toggle controls
- **Background Service Worker** (`background.js`): Handles blocking rules and storage updates
- **Blocked Page** (`blocked.html`, `blocked.js`): Motivational page with statistics access
- **Storage System**: Uses `chrome.storage.sync` for cross-device sync and `localStorage` for detailed metrics

### Blocking Mechanism

1. **Domain Management**: Users add/remove domains through the popup interface
2. **Rule Updates**: Background script updates `declarativeNetRequest` rules when domains change
3. **Request Interception**: Chrome redirects blocked requests to the motivational page
4. **Statistics Tracking**: Each block is recorded with domain, timestamp, and frequency data

### Data Storage

- **Blocked Domains**: Stored in `chrome.storage.sync` for cross-device synchronization
- **Blocking Statistics**: Stored in `localStorage` for detailed analytics and privacy
- **Format**: Modern object-based storage with domain and enabled status

## 🛠️ Development

### Project Structure

```
simple-site-blocker/
├── manifest.json          # Extension configuration (Manifest V3)
├── popup.html             # Popup interface
├── popup.js               # Popup logic and domain management
├── background.js          # Service worker for blocking rules
├── blocked.html           # Motivational blocked page
├── blocked.js             # Statistics tracking and display
├── icons/                 # Extension icons (16px, 48px, 128px)
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── .cursor/              # Development guidelines
    ├── overview.mdc
    ├── javascript.mdc
    ├── html-css.mdc
    ├── storage.mdc
    ├── development.mdc
    └── git-docs.mdc
```

### Key Files

- **`popup.html/popup.js`**: Clean domain management interface with toggle controls
- **`background.js`**: Service worker handling `declarativeNetRequest` rules
- **`blocked.html/blocked.js`**: Motivational page with comprehensive statistics
- **`manifest.json`**: Manifest V3 configuration with required permissions

### Development Setup

1. **Clone and load** the extension in Chrome developer mode
2. **Test functionality** by adding domains and verifying blocking
3. **Check statistics** by visiting blocked sites and viewing metrics
4. **Verify accessibility** by testing with screen readers and keyboard navigation

## 🔐 Permissions

This extension requires the following permissions:

- **`storage`**: Save and sync blocked domains across devices
- **`declarativeNetRequest`**: Modern, efficient blocking API
- **`declarativeNetRequestWithHostAccess`**: Required for blocking functionality
- **`host_permissions: ["<all_urls>"]`**: Intercept and redirect requests to any site

### Privacy

- **No data collection**: All data stays local to your browser
- **No external requests**: Extension doesn't communicate with external servers
- **User control**: You control all blocked domains and statistics

## 📸 Screenshots

|                           Popup Interface                           |                              Blocked Page                               |                             Statistics Modal                              |
| :-----------------------------------------------------------------: | :---------------------------------------------------------------------: | :-----------------------------------------------------------------------: |
|            Clean domain management with toggle controls             |            Motivational blocked page with statistics access             |                   Detailed analytics and export options                   |
| <img src="screenshots/popup.png" alt="Extension popup" width="300"> | <img src="screenshots/blocked-page.png" alt="Blocked page" width="300"> | <img src="screenshots/statistics.png" alt="Statistics modal" width="300"> |

> **Note**: Create a `screenshots` folder and add your own screenshots for the best presentation.

## 🤝 Contributing

We welcome contributions! Please see our **[CONTRIBUTING.md](CONTRIBUTING.md)** for detailed guidelines.

### Quick Start for Contributors

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Follow** the development guidelines in `.cursor/` folder
4. **Test** your changes thoroughly
5. **Commit** with clear messages (`git commit -m "feat: add amazing feature"`)
6. **Push** to your branch (`git push origin feature/amazing-feature`)
7. **Open** a Pull Request

### Development Guidelines

- Follow the coding standards in `.cursor/` folder
- Test both light and dark modes
- Ensure accessibility compliance
- Update documentation for new features

## License

MIT

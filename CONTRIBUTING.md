# Contributing to Simple Site Blocker

Thank you for considering contributing to Simple Site Blocker! We're excited to have your help in making this extension even better.

## 🚀 Quick Start

1. **Fork** the repository on GitHub
2. **Clone** your fork: `git clone https://github.com/codesandtags/simple-site-blocker.git`
3. **Create** a feature branch: `git checkout -b feature/your-feature-name`
4. **Make** your changes following our guidelines
5. **Test** thoroughly in Chrome developer mode
6. **Commit** with clear messages: `git commit -m "feat: add your feature"`
7. **Push** to your fork: `git push origin feature/your-feature-name`
8. **Open** a Pull Request

## 📋 How Can I Contribute?

### 🐛 Reporting Bugs

Found a bug? Please [open an issue](https://github.com/codesandtags/simple-site-blocker/issues) with:

- **Clear Title**: Brief, descriptive title
- **Steps to Reproduce**: Detailed steps to reproduce the issue
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Screenshots**: Visual issues should include screenshots
- **Environment**: Chrome version, OS, extension version
- **Console Logs**: Any relevant error messages

### 💡 Suggesting Enhancements

Have an idea? [Open an issue](https://github.com/codesandtags/simple-site-blocker/issues) describing:

- **The Problem**: What problem does this solve?
- **Proposed Solution**: How should it work?
- **Value**: Why would this benefit users?
- **Mockups**: Visual ideas are helpful

### 🔧 Code Contributions

Ready to code? Great! Here's what you need to know:

#### Development Setup

1. **Load the extension** in Chrome developer mode
2. **Test functionality** by adding domains and verifying blocking
3. **Check statistics** by visiting blocked sites
4. **Verify accessibility** with keyboard navigation and screen readers
5. **Test both themes** (light and dark mode)

#### Code Standards

- **Follow** the guidelines in `.cursor/` folder
- **Use** modern ES6+ JavaScript features
- **Maintain** accessibility compliance (WCAG guidelines)
- **Test** both light and dark mode appearances
- **Ensure** proper error handling
- **Add** JSDoc comments for complex functions

#### File Structure

```
simple-site-blocker/
├── manifest.json          # Extension configuration
├── popup.html/popup.js    # Popup interface and logic
├── background.js          # Service worker for blocking
├── blocked.html/blocked.js # Blocked page and statistics
├── icons/                 # Extension icons
└── .cursor/              # Development guidelines
    ├── overview.mdc       # Project overview
    ├── javascript.mdc     # JS coding standards
    ├── html-css.mdc       # HTML/CSS guidelines
    ├── storage.mdc        # Data storage patterns
    ├── development.mdc    # Testing and quality
    └── git-docs.mdc       # Git and documentation
```

#### Key Areas for Contribution

- **UI/UX Improvements**: Better accessibility, responsive design
- **Statistics Features**: New metrics, better data visualization
- **Performance**: Optimize blocking rules, reduce memory usage
- **Accessibility**: Screen reader support, keyboard navigation
- **Documentation**: Improve README, add tutorials
- **Testing**: Add automated tests, improve manual testing

## 📝 Commit Guidelines

Use conventional commit messages:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Examples:

- `feat: add export statistics functionality`
- `fix: resolve toggle button accessibility issue`
- `docs: update installation instructions`
- `style: improve dark mode color contrast`

## 🧪 Testing Your Changes

### Manual Testing Checklist

- [ ] **Extension loads** without errors in Chrome
- [ ] **Popup opens** and displays correctly
- [ ] **Add/remove domains** works properly
- **Toggle switches** enable/disable blocking correctly
- [ ] **Blocked sites** redirect to motivational page
- [ ] **Statistics** track and display correctly
- [ ] **Light/dark mode** both work properly
- [ ] **Accessibility** features work (keyboard nav, screen readers)
- [ ] **Cross-device sync** works (if applicable)

### Browser Testing

- **Chrome 88+** (Manifest V3 support required)
- **Different screen sizes** and resolutions
- **Incognito mode** (if needed)
- **Multiple Chrome profiles**

## 📚 Resources

- **Chrome Extension Documentation**: [developer.chrome.com](https://developer.chrome.com/docs/extensions/)
- **Manifest V3 Guide**: [developer.chrome.com/docs/extensions/mv3](https://developer.chrome.com/docs/extensions/mv3/)
- **Accessibility Guidelines**: [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- **Conventional Commits**: [conventionalcommits.org](https://www.conventionalcommits.org/)

## 🤝 Code of Conduct

This project is committed to providing a welcoming and inclusive environment for all contributors. Please:

- **Be respectful** and considerate in all interactions
- **Be constructive** in feedback and discussions
- **Be patient** with newcomers and questions
- **Be collaborative** and help others learn

Harassment, discrimination, or inappropriate behavior will not be tolerated.

## 📞 Getting Help

- **GitHub Issues**: For bugs and feature requests
- **Discussions**: For questions and general discussion
- **Pull Request Comments**: For code review feedback

---

Thank you for contributing to Simple Site Blocker! 🎉

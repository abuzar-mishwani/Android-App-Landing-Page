# Contributing to GPA Calculator & Planner Landing Page

First off, thank you for considering contributing to this project! It's people like you that make the open source community such a great place to learn, inspire, and create.

## 🚀 Quick Start

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/abuzar-mishwani/Android-App-Landing-Page.git
   cd Android-App-Landing-Page
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start development server**:
   ```bash
   npm run dev
   ```

## 🎯 How to Contribute

### 🐛 Bug Reports

If you find a bug, please open an issue with:
- A clear description of the problem
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots if applicable
- Browser and device information

### ✨ Feature Requests

We welcome feature suggestions! Please:
- Check if the feature already exists or is requested
- Provide a clear description of the feature
- Explain why this feature would be beneficial
- Include mockups or examples if possible

### 🔧 Code Contributions

1. **Create a new branch** for your feature:
   ```bash
   git checkout -b feature/amazing-feature
   ```

2. **Make your changes** following our coding standards:
   - Use TypeScript for type safety
   - Follow React best practices
   - Use Tailwind CSS for styling
   - Add comments for complex logic
   - Ensure responsive design

3. **Test your changes**:
   ```bash
   npm run lint        # Check for linting errors
   npm run build       # Ensure build works
   npm run preview     # Test production build
   ```

4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

5. **Push to your fork**:
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Create a Pull Request** on GitHub

## 📝 Coding Standards

### TypeScript
- Use proper typing for all variables and functions
- Avoid `any` types when possible
- Create interfaces for component props
- Use enums for constants

### React
- Use functional components with hooks
- Implement proper error boundaries
- Use memo for performance optimization when needed
- Follow React naming conventions

### Styling
- Use Tailwind CSS utility classes
- Maintain the glassmorphism design theme
- Ensure mobile-first responsive design
- Use CSS custom properties for reusable values

### Animation
- Use Framer Motion for animations
- Keep animations smooth (60fps)
- Add accessibility considerations (prefers-reduced-motion)
- Optimize animation performance

## 🎨 Design Guidelines

### Color Palette
- Primary: Blue gradients (`from-blue-500 to-indigo-600`)
- Secondary: Purple gradients (`from-purple-500 to-pink-500`)
- Neutral: Gray shades for text and backgrounds
- Semantic: Green for success, red for errors, yellow for warnings

### Typography
- Use the Aeonik font family (already included)
- Maintain consistent font sizes and line heights
- Use font weights appropriately (400, 600, 700, 800)

### Spacing
- Use Tailwind spacing scale consistently
- Maintain proper whitespace and breathing room
- Follow the 8px grid system

### Components
- Create reusable components
- Use proper prop interfaces
- Implement hover and focus states
- Ensure accessibility standards

## 🧪 Testing

While we don't have automated tests yet, please manually test:
- All responsive breakpoints (mobile, tablet, desktop)
- Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- Accessibility with screen readers
- Performance (check Lighthouse scores)
- All interactive elements and animations

## 📦 Commit Convention

We use conventional commits for better changelog generation:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Example:
```bash
git commit -m "feat: add mobile navigation menu"
git commit -m "fix: resolve responsive layout issue on tablet"
git commit -m "docs: update installation instructions"
```

## 🔍 Code Review Process

1. All submissions require review before merging
2. We may ask for changes to be made
3. We'll provide constructive feedback
4. Once approved, we'll merge your contribution

## 📞 Getting Help

- Open an issue for questions about the codebase
- Check existing issues and documentation first
- Be respectful and patient with responses

## 🏆 Recognition

Contributors will be recognized in:
- README.md contributors section
- GitHub contributors list
- Special thanks in release notes

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing! 🎉

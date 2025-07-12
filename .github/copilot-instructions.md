<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# GPA Calculator & Planner Landing Page

This is a modern React TypeScript landing page for the GPA Calculator & Planner mobile app, built with:

- **Vite** - Fast build tool and dev server
- **React 18** with TypeScript for type safety
- **Tailwind CSS** for modern styling and glassmorphism effects
- **Framer Motion** for smooth animations and interactions
- **Lucide React** for consistent, beautiful icons

## Development Guidelines

### Styling

- Use Tailwind CSS utility classes for all styling
- Implement glassmorphism effects using the custom CSS classes: `.glass`, `.glass-card`
- Use the predefined gradient text class: `.gradient-text`
- Follow the established color scheme: blue, purple, and pink gradients
- Maintain the glassmorphism aesthetic with backdrop blur and transparency

### Components

- Create reusable components for common UI elements
- Use TypeScript interfaces for all component props
- Implement proper motion animations with Framer Motion
- Ensure all components are fully responsive (mobile-first approach)

### Code Style

- Use functional components with React hooks
- Implement proper TypeScript typing for all variables and functions
- Follow React best practices and modern patterns
- Use semantic HTML elements for accessibility

### Animation Guidelines

- Use Framer Motion for page transitions and element animations
- Implement scroll-triggered animations with `whileInView`
- Add hover effects and micro-interactions for better UX
- Keep animations smooth and performant (60fps)

### Responsive Design

- Mobile-first approach using Tailwind's responsive prefixes
- Ensure all text is readable on all screen sizes
- Optimize images and icons for different screen densities
- Test on various devices and screen sizes

When making changes or additions, maintain consistency with the existing glassmorphism design language and ensure all new code follows the established patterns.

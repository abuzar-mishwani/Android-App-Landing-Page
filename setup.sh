#!/bin/bash

# Setup script for Android App Landing Page
# This script prepares the project for deployment to the new repository

echo "🚀 Setting up Android App Landing Page for deployment..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing git repository..."
    git init
fi

# Add all files
echo "📦 Adding all files to git..."
git add .

# Create initial commit
echo "💾 Creating initial commit..."
git commit -m "Initial commit: Modern React landing page

- Modern React 18 + TypeScript + Tailwind CSS
- Glassmorphism design with Framer Motion animations
- Fully responsive and mobile-optimized
- SEO optimized with comprehensive meta tags
- GitHub Actions auto-deployment configured
- Custom domain (mishwani.tech) ready"

# Add remote origin (update this URL if needed)
echo "🔗 Adding remote origin..."
git remote add origin https://github.com/abuzar-mishwani/Android-App-Landing-Page.git

# Push to main branch
echo "⬆️ Pushing to GitHub..."
git push -u origin main

echo "✅ Setup complete!"
echo ""
echo "🌐 Your landing page will be available at:"
echo "   https://mishwani.tech"
echo ""
echo "📊 Next steps:"
echo "1. Go to GitHub repository settings"
echo "2. Enable GitHub Pages with 'GitHub Actions' source"
echo "3. Set custom domain to 'mishwani.tech'"
echo "4. Configure DNS records as described in DEPLOYMENT.md"
echo ""
echo "🎉 Happy coding!"

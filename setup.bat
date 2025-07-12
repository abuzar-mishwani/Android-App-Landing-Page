@echo off
echo 🚀 Setting up Android App Landing Page for deployment...

REM Check if git is initialized
if not exist ".git" (
    echo 📁 Initializing git repository...
    git init
)

REM Add all files
echo 📦 Adding all files to git...
git add .

REM Create initial commit
echo 💾 Creating initial commit...
git commit -m "Initial commit: Modern React landing page

- Modern React 18 + TypeScript + Tailwind CSS
- Glassmorphism design with Framer Motion animations
- Fully responsive and mobile-optimized
- SEO optimized with comprehensive meta tags
- GitHub Actions auto-deployment configured
- Custom domain (mishwani.tech) ready"

REM Add remote origin
echo 🔗 Adding remote origin...
git remote add origin https://github.com/abuzar-mishwani/Android-App-Landing-Page.git

REM Push to main branch
echo ⬆️ Pushing to GitHub...
git push -u origin main

echo ✅ Setup complete!
echo.
echo 🌐 Your landing page will be available at:
echo    https://mishwani.tech
echo.
echo 📊 Next steps:
echo 1. Go to GitHub repository settings
echo 2. Enable GitHub Pages with 'GitHub Actions' source
echo 3. Set custom domain to 'mishwani.tech'
echo 4. Configure DNS records as described in DEPLOYMENT.md
echo.
echo 🎉 Happy coding!
pause

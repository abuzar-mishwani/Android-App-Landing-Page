import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import logoDark from './assets/images/logo-dark.svg';
import { 
  Calculator, 
  Target, 
  FileText, 
  Download, 
  Star, 
  CheckCircle,
  ArrowRight,
  Zap,
  Sliders,
  Shield,
  ChartLine,
  RefreshCw,
  Layers,
  History,
  Wifi,
  Globe,
  Sparkles,
  Award,
  Users,
  Menu,
  X,
  Github
} from 'lucide-react';

// Import images
import heroMockup from './assets/images/hero-mockup.webp';
import googlePlayBadge from './assets/images/google-play-badge-logo.svg';
import favicon from './assets/images/favicon.png';
import screenshot1 from './assets/images/Screenshot-1.webp';
import screenshot2 from './assets/images/Screenshot-2.webp';
import screenshot3 from './assets/images/Screenshot-3.webp';
import screenshot4 from './assets/images/Screenshot-4.webp';
import screenshot5 from './assets/images/Screenshot-5.webp';
import screenshot6 from './assets/images/Screenshot-6.webp';
import screenshot7 from './assets/images/Screenshot-7.webp';
import screenshot8 from './assets/images/Screenshot-8.webp';
import screenshot9 from './assets/images/Screenshot-9.webp';
import screenshot10 from './assets/images/Screenshot-10.webp';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    whileHover={{ 
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" }
    }}
    className="feature-card p-8 h-full relative cursor-pointer"
  >
    {/* Icon */}
    <motion.div 
      className="text-blue-600 mb-6"
      whileHover={{ 
        scale: 1.1,
        rotate: 5,
        transition: { duration: 0.3 }
      }}
    >
      {icon}
    </motion.div>
    
    <h3 className="text-xl font-bold mb-4 text-gray-900">
      {title}
    </h3>
    <p className="text-gray-700 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

function App() {
  const [expandedReview, setExpandedReview] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const promoFeatures = [
    {
      icon: <Zap size={40} />,
      title: "All-in-One GPA Suite",
      description: "Calculate semester GPA, cumulative GPA, convert percentages, and generate professional reports—all in one app."
    },
    {
      icon: <Sliders size={40} />,
      title: "Customizable & Flexible",
      description: "Adapt grading scales, course templates, and planner tools to fit any university or personal academic need."
    },
    {
      icon: <Shield size={40} />,
      title: "Private & Ad-Free",
      description: "Enjoy a secure, offline experience with no ads—your data stays private and your focus remains on your goals."
    }
  ];

  const features = [
    {
      icon: <Calculator size={32} />,
      title: "Semester GPA Calculator",
      description: "Input course marks (manual or via templates) to compute GPA, percentage, average marks, total credits, and obtain a polished PDF report."
    },
    {
      icon: <ChartLine size={32} />,
      title: "Cumulative GPA Calculator",
      description: "Track academic progress across semesters, with options to include/exclude credit hours. Supports 4.0, 5.0, and 10.0 scales, plus detailed CGPA breakdown and PDF export."
    },
    {
      icon: <Target size={32} />,
      title: "Strategic GPA Planner",
      description: "Set a target CGPA and calculate the required semester GPAs for the remaining terms. Includes achievability analysis to assess your goals."
    },
    {
      icon: <Sliders size={32} />,
      title: "Customizable Grading System",
      description: "Customize grading scales with grade letters, percentage ranges, and GPA values. Start with built-in templates or create your own for university-specific grading."
    },
    {
      icon: <RefreshCw size={32} />,
      title: "Percentage ↔ GPA Converter",
      description: "Quickly convert between percentage and GPA across multiple scales (4.0, 5.0, 10.0) with a clean, streamlined tool."
    },
    {
      icon: <Layers size={32} />,
      title: "Pre-Built Course Templates",
      description: "Use course templates for departments or semesters; fully editable—tweak subjects, credits, names as needed."
    },
    {
      icon: <FileText size={32} />,
      title: "Exportable Professional Reports",
      description: "Generate PDF reports for GPA, CGPA, and planner outcomes—neat, formatted, and ideal for sharing or printing."
    },
    {
      icon: <History size={32} />,
      title: "History & Statistics Tracking",
      description: "View past GPA calculations and trends with built-in history logs, so you can monitor long-term performance."
    },
    {
      icon: <Wifi size={32} />,
      title: "Offline & Ad‑Free",
      description: "Fully functional offline—no internet required. No ads, ensuring a smooth and focused user experience."
    }
  ];

  const testimonials = [
    {
      name: "Azib Waqas",
      content: "I'm thoroughly impressed with the GPA Calculator & Planner app! It's incredibly user-friendly and flexible, making it a breeze to calculate my GPA and CGPA. The customizable templates and grading scales are a huge plus, and the GPA planning tool has been a game-changer for setting targets and tracking progress. The app is super easy to navigate, and I've found it to be extremely accurate. Highly recommend it to anyone looking for a reliable and feature-rich GPA calculator!",
      rating: 5
    },
    {
      name: "Khalid Mahmood",
      content: "Using the GPA Calculator app has been a game-changer for me. It's incredibly user-friendly, allowing me to effortlessly track and manage my academic progress. The app's intuitive interface makes calculating GPA a breeze, saving me valuable time and reducing stress during busy semesters. With accurate results and customizable features, it's a must-have for students aiming for academic excellence. I highly recommend this app for its efficiency and practicality in academic planning.",
      rating: 5
    },
    {
      name: "Muhammad Akbar",
      content: "I found the GPA calculator app to be incredibly useful for keeping track of my grades. It's intuitive to use, allowing me to easily input my courses and grades, and it quickly calculates my GPA. The interface is clean and straightforward, making it easy to navigate. One feature I particularly liked was the ability to set goals for my GPA and see what grades I need in future assignments to achieve them. Overall, it's a handy tool for students want.",
      rating: 5
    },
    {
      name: "Intikhab Alam",
      content: "I recently had the opportunity to try out the Easy GPA Calculator application, and I must say it exceeded my expectations. This app provides a user-friendly interface that makes calculating GPA a breeze. The intuitive design allows for quick input of grades and credit hours, and the calculations are accurate and reliable. It has greatly simplified the GPA calculation process for me, and I highly recommend it to anyone in need of an efficient GPA calculator.",
      rating: 5
    },
    {
      name: "Tahseen Khan",
      content: "The GPA calculator is an incredibly useful tool for students. It simplifies the process of calculating and keeping track of their grade point average, saving time and reducing errors. Its user-friendly interface and accurate calculations make it a must-have for academic success.",
      rating: 5
    },
    {
      name: "Usama Riaz",
      content: "I'm thoroughly impressed with this GPA calculator app! It's incredibly user-friendly and offers a comprehensive suite of features that cater to all my academic needs. Not only can I effortlessly calculate my SGPA and CGPA, but I can also plan and strategize to achieve my target GPA with the app's intuitive goal-setting tools. Overall, great contribution and help! 👍😊",
      rating: 5
    },
    {
      name: "Islam Ghani",
      content: "I've been using the GPA Calculator app for a semester now, and it's been a total game-changer for tracking my academic progress! This app is incredibly user-friendly, allowing me to easily calculate my GPA, CGPA, and even plan out my future grades with its built-in GPA planner. Highly Recommended for all university students! 😍👍",
      rating: 5
    }
  ];

  const screenshots = [
    { src: screenshot1, alt: "GPA Calculator Interface", title: "Grade Tracker" },
    { src: screenshot2, alt: "CGPA Tracking", title: "GPA Calculator" },
    { src: screenshot3, alt: "Grade Planning", title: "Course Planner" },
    { src: screenshot4, alt: "Professional Reports", title: "Analytics Dashboard" },
    { src: screenshot5, alt: "Detailed Reports", title: "Reports & Statistics" },
    { src: screenshot6, alt: "Goal Setting", title: "Goal Planning" },
    { src: screenshot7, alt: "Progress Tracking", title: "Progress Monitor" },
    { src: screenshot8, alt: "Settings Panel", title: "Settings & Preferences" },
    { src: screenshot9, alt: "Advanced Features", title: "Advanced Tools" },
    { src: screenshot10, alt: "User Dashboard", title: "Student Dashboard" }
  ];

  return (
    <div className="min-h-screen overflow-hidden custom-scrollbar">
      {/* Clean Modern Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-gray-50" />
        
        {/* Subtle floating geometric shapes - reduced on mobile */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/40 rounded-full blur-2xl animate-pulse-glow hidden sm:block" />
        <div className="absolute top-1/3 right-20 w-48 h-48 bg-indigo-200/30 rounded-full blur-3xl animate-float hidden md:block" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-purple-200/40 rounded-full blur-2xl animate-bounce-slow hidden sm:block" style={{ animationDelay: '4s' }} />
      </div>

      {/* Full Page Blur Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 backdrop-blur-md z-40 pointer-events-none" />
      )}

      {/* Modern Clean Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 border-b border-white/40"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-2 md:space-x-3"
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src={logoDark} 
              alt="GPA Calculator Logo" 
              className="h-8 w-8 md:h-9 md:w-9 object-contain"
            />
            <span className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">
              GPA Calculator & Planner
            </span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {['Features', 'Screenshots', 'Reviews', 'Download'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-gray-900 transition-all duration-300 relative group font-semibold text-sm"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>
          
          {/* Desktop Get Started Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary hidden sm:flex items-center gap-1.5 md:gap-2 text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <ArrowRight size={16} className="md:hidden" />
            <ArrowRight size={18} className="hidden md:block" />
            <span className="relative z-10">Get Started</span>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg glass-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-gray-700" />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </motion.button>
        </div>

        {/* Mobile Sidebar Menu */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={`fixed top-0 right-0 h-screen w-80 z-[60] lg:hidden shadow-2xl ${
            isMobileMenuOpen ? 'block' : 'hidden'
          }`}
        >
          {/* Glassmorphism Background */}
          <div className="absolute inset-0 bg-white/80 backdrop-blur-2xl border-l border-white/40 shadow-2xl"></div>
          
          {/* Header */}
          <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white border-b border-white/20 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img 
                  src={favicon} 
                  alt="GPA Calculator & Planner" 
                  className="h-8 w-8 object-contain"
                />
                <span className="text-lg font-bold">GPA Calculator & Planner</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-white/20 transition-colors"
              >
                <X size={24} />
              </motion.button>
            </div>
          </div>

          {/* Navigation Content */}
          <div className="relative flex flex-col h-full">
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="space-y-2">
              {['Features', 'Screenshots', 'Reviews', 'Download'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-white/30 transition-all duration-300 group border border-transparent hover:border-white/40"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : 50 }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  <span className="text-gray-900 font-semibold text-lg">{item}</span>
                  <ArrowRight size={18} className="text-gray-600 group-hover:text-blue-600 transition-colors" />
                </motion.a>
              ))}
            </div>
            
            {/* CTA Section */}
            <motion.div
              className="mt-8 p-6 bg-white/40 backdrop-blur-lg rounded-2xl border border-white/50"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 30 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-gray-900 font-bold text-lg mb-2">Ready to start?</h3>
              <p className="text-gray-600 text-sm mb-4">Download our app and boost your academic performance!</p>
              
              <motion.a
                href="https://play.google.com/store/apps/details?id=advc.calc.easygpacalculator"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Download size={20} />
                Download Now
              </motion.a>
            </motion.div>

            {/* Footer Info */}
            <motion.div
              className="mt-8 text-center pb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Star className="text-yellow-500 fill-current" size={16} />
                <span className="text-gray-600 text-sm font-medium">4.9★ on Play Store</span>
              </div>
              <p className="text-gray-500 text-xs">50K+ happy students worldwide</p>
            </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 z-[55] lg:hidden"
          />
        )}
      </motion.nav>

      {/* Modern Clean Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-12 md:py-20 relative pt-24 md:pt-32">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-white/80 rounded-full border border-white/60 backdrop-blur-lg"
              >
                <Award className="text-yellow-600 mr-2" size={18} />
                <span className="text-gray-800 font-semibold text-sm">4.9★ Rated on Play Store</span>
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-gray-900 font-extrabold">GPA Calculator</span>
                <br />
                <span className="gradient-text">& Planner!</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg font-medium"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                A flexible and powerful Android app that helps university students calculate GPA, 
                track CGPA, plan semesters, and customize everything to fit their academic needs.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a
                  href="https://play.google.com/store/apps/details?id=advc.calc.easygpacalculator"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center justify-center gap-2 text-base"
                >
                  <Download size={20} />
                  Download Now
                  <ArrowRight size={16} />
                </motion.a>
                
                <motion.a
                  href="https://github.com/abuzar-mishwani/Android-App-Landing-Page"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary flex items-center justify-center gap-2 text-base"
                >
                  <Github size={20} />
                  View Source Code
                </motion.a>
              </motion.div>
              
              {/* Enhanced Stats */}
              <motion.div 
                className="grid grid-cols-3 gap-8 pt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {[
                  { number: "50K+", label: "Downloads", icon: <Users size={24} /> },
                  { number: "4.9★", label: "Play Store Rating", icon: <Star size={24} /> },
                  { number: "10+", label: "Languages", icon: <Globe size={24} /> }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex justify-center mb-2 text-blue-400 group-hover:text-purple-400 transition-colors">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold gradient-text mb-1">{stat.number}</div>
                    <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Enhanced Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 45 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative flex justify-center"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                className="relative"
                animate={typeof window !== 'undefined' && window.innerWidth >= 768 ? { 
                  rotateY: [0, 5, 0, -5, 0],
                  rotateX: [0, 2, 0, -2, 0]
                } : {
                  // Simpler animation for mobile
                  y: [0, -5, 0]
                }}
                transition={typeof window !== 'undefined' && window.innerWidth >= 768 ? { 
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                } : {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ 
                  // Disable 3D animations on mobile for better performance
                  transformStyle: typeof window !== 'undefined' && window.innerWidth < 768 ? 'flat' : 'preserve-3d'
                }}
              >
                <img 
                  src={heroMockup} 
                  alt="GPA Calculator App"
                  className="w-72 h-auto object-contain floating-element relative z-10 mt-8"
                  loading="eager"
                />
                
                {/* Enhanced glow effects - simplified on mobile */}
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse-glow hidden sm:block" />
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-full blur-2xl animate-spin-slow hidden sm:block" />
                
                {/* Floating elements - simplified on mobile */}
                <motion.div 
                  className="absolute top-10 -right-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-xl backdrop-blur-lg border border-white/10 hidden md:block"
                  animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <motion.div 
                  className="absolute bottom-20 -left-10 w-16 h-16 bg-gradient-to-r from-pink-400/20 to-purple-600/20 rounded-full backdrop-blur-lg border border-white/10 hidden md:block"
                  animate={{ y: [10, -10, 10], x: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Promo Section */}
      <section className="py-12 md:py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Why Choose{' '}
              <span className="gradient-text">Our App?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {promoFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modern Features Section */}
      <section id="features" className="py-12 md:py-20 px-4 md:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-white/80 rounded-full border border-white/60 backdrop-blur-lg mb-6"
            >
              <Sparkles className="text-blue-600 mr-2" size={18} />
              <span className="text-gray-800 font-semibold text-sm">Comprehensive Features</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Advanced GPA Tools</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Discover the most advanced GPA & CGPA calculation, planning, and reporting features—fully 
              customizable and designed for every university system.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modern Screenshots Section */}
      <section id="screenshots" className="py-12 md:py-20 bg-gradient-to-b from-gray-100 to-gray-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Beautiful Interface
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience a clean, intuitive design that makes GPA tracking and planning effortless and enjoyable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              className="screenshots-swiper"
            >
              {screenshots.map((screenshot, index) => (
                <SwiperSlide key={index}>
                  <div className="glass-card-hover p-4">
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={screenshot.src}
                        alt={screenshot.alt}
                        className="w-full h-auto"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section id="reviews" className="py-12 md:py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-white/80 rounded-full border border-white/60 backdrop-blur-lg mb-6"
            >
              <Star className="text-yellow-500 mr-2" size={18} />
              <span className="text-gray-800 font-semibold text-sm">Student Reviews</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What{' '}
              <span className="gradient-text">Students Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied students who trust our GPA Calculator & Planner.
            </p>
          </motion.div>

          {/* Modern Testimonials Slider */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="testimonials-swiper"
            >
              {testimonials.map((testimonial, index) => {
                const isExpanded = expandedReview === index;
                const shouldTruncate = testimonial.content.length > 200;
                const displayContent = isExpanded ? testimonial.content : 
                  (shouldTruncate ? testimonial.content.substring(0, 200) + '...' : testimonial.content);

                return (
                  <SwiperSlide key={index}>
                    <motion.div 
                      className="glass-card-hover p-8 flex flex-col justify-between cursor-pointer"
                      style={{ minHeight: '400px' }}
                      whileHover={{ 
                        y: -4,
                        scale: 1.02,
                        transition: { duration: 0.3, ease: "easeOut" }
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {/* Stars at top */}
                      <motion.div 
                        className="flex gap-1 mb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                      >
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 + 0.3 + i * 0.05 }}
                          >
                            <Star className="text-yellow-400 fill-current" size={16} />
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Review content */}
                      <div className="flex-1 mb-6">
                        <motion.p 
                          className="text-gray-800 leading-relaxed text-sm lg:text-base"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                        >
                          "{displayContent}"
                        </motion.p>
                        {shouldTruncate && (
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedReview(isExpanded ? null : index);
                            }}
                            className="text-blue-600 hover:text-blue-700 text-sm mt-3 font-medium transition-all duration-300 hover:underline"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                          >
                            {isExpanded ? 'Show Less' : 'Read More'}
                          </motion.button>
                        )}
                      </div>

                      {/* User info */}
                      <motion.div 
                        className="flex items-center gap-3 pt-4 border-t border-gray-200"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                      >
                        <motion.div 
                          className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="text-white font-bold text-sm">{testimonial.name.charAt(0)}</span>
                        </motion.div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                          <p className="text-gray-600 text-xs">Student</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* Modern Download Section */}
      <section id="download" className="py-12 md:py-20 px-4 md:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-8 lg:p-12 relative overflow-hidden">
            {/* Background animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/40" />
            
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Ready to Transform Your{' '}
                  <span className="gradient-text">Academic Journey?</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                  Join thousands of students who are already using our app to achieve their academic goals.
                </p>
                
                <motion.div 
                  className="mb-8"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <a
                    href="https://play.google.com/store/apps/details?id=advc.calc.easygpacalculator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
<img 
  src={googlePlayBadge} 
  alt="Get it on Google Play" 
  className="w-[150px] h-[150px] hover:scale-105 transition-transform duration-300"
/>
                  </a>
                </motion.div>

                {/* Enhanced Features checklist */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {[
                    "100% Free to use",
                    "No ads or subscriptions", 
                    "Offline functionality",
                    "10+ Languages supported",
                    "Professional PDF reports",
                    "Regular updates"
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.02,
                        y: -2,
                        transition: { duration: 0.3 }
                      }}
                      className="flex items-center gap-3 p-4 bg-white/90 rounded-xl hover:bg-white transition-all duration-300 backdrop-blur-lg border border-white/80 cursor-pointer shadow-sm"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CheckCircle size={20} className="text-blue-600" />
                      </motion.div>
                      <span className="text-gray-800 font-semibold text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
<footer className="pb-6 px-6 border-t border-gray-200/50 relative">
  <div className="max-w-6xl mx-auto text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <div className="flex items-center justify-center space-x-3">
        <img 
          src={logoDark} 
          alt="GPA Calculator Logo" 
          className="h-10 w-10 object-contain"
        />
        <span className="text-2xl font-bold gradient-text">
          GPA Calculator & Planner
        </span>
      </div>
      
      <motion.p 
        className="text-gray-600 text-lg max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Empowering students worldwide to achieve academic excellence through smart planning, 
        accurate calculations, and beautiful design.
      </motion.p>
      
      <motion.div 
        className="text-gray-600 border-t border-gray-200 pt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        © 2025 HindukushSoft Technologies. Made with ❤️ for students worldwide.
      </motion.div>
    </motion.div>
  </div>
</footer>
    </div>
  );
}

export default App;

import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail, Facebook } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-black">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-red-600/10 blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-red-900/10 blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navbar */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-white hover:text-red-500 transition-colors glow-text">
            Portfolio<span className="text-red-600">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  location.pathname === link.path ? 'text-white' : 'text-gray-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="mailto:ehtishamkhichi5@gmail.com" 
              className="shiny-btn px-6 py-2.5 rounded-full text-white text-sm font-medium transition-all"
            >
              Let's Talk
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 glass border-t border-white/10 p-6 flex flex-col gap-4 md:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-medium transition-colors ${
                    location.pathname === link.path ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow z-10 pt-24">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="z-10 glass border-t border-white/10 mt-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <div className="text-center md:text-left">
            <Link to="/" className="text-xl font-bold tracking-tighter text-white glow-text">
              Portfolio<span className="text-red-600">.</span>
            </Link>
            <p className="text-gray-400 mt-2 text-sm">
              Building digital experiences with modern web technologies.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/ehtishamkhichi6294" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ehtisham-khichi-73323a370/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61588588627903" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="mailto:ehtishamkhichi5@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="border-t border-white/5 py-6 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-center items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          <span className="hidden md:inline text-gray-700">|</span>
          <Link to="/sitemap" className="hover:text-gray-300 transition-colors">Sitemap</Link>
        </div>
      </footer>
    </div>
  );
}

// Need to import AnimatePresence at the top

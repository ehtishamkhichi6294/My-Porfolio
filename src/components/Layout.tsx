import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { Github, Linkedin, MessageCircle, Twitter, Instagram, Facebook, Briefcase } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-500/30 overflow-x-hidden relative">
      {/* Advanced Glassmorphism Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-red-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-red-900/10 blur-[120px]" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-red-500/5 blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-5xl mx-auto">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-6 py-3 flex items-center justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
            <Link to="/" className="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 hover:to-white transition-all duration-300">
              EK.
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-all duration-300 hover:text-white relative ${
                    location.pathname === link.path ? 'text-white' : 'text-white/60'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-red-500 to-red-800"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            <a 
              href="https://wa.me/923286717879" 
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-white/10 border border-white/10 rounded-xl hover:bg-[#25D366]/20 hover:border-[#25D366]/50 hover:scale-105 transition-all duration-300 backdrop-blur-md"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>

            {/* Mobile Menu Button - simplified for this example */}
            <div className="md:hidden flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs font-medium ${
                    location.pathname === link.path ? 'text-white' : 'text-white/60'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-20 px-6 min-h-screen flex flex-col">
        <div className="max-w-5xl mx-auto w-full flex-grow">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-lg mt-auto">
        <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-bold tracking-tighter text-white mb-2">Ehtisham Khichi</span>
            <p className="text-sm text-white/50 text-center md:text-left max-w-xs">
              Building digital experiences with modern web technologies and advanced UI/UX design.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 justify-center md:justify-end">
            <a href="https://github.com/ehtishamkhichi6294" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-red-500/30 hover:scale-110 transition-all duration-300" title="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/ehtisham-khichi-73323a370/" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-red-500/30 hover:scale-110 transition-all duration-300" title="LinkedIn Profile">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/services/page/8a8630342531136799/" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-red-500/30 hover:scale-110 transition-all duration-300" title="LinkedIn Services">
              <Briefcase className="w-5 h-5" />
            </a>
            <a href="https://x.com/EhtishamKhichi5" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-red-500/30 hover:scale-110 transition-all duration-300" title="X (Twitter)">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/ehtishamkhichi/" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-red-500/30 hover:scale-110 transition-all duration-300" title="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61560308903632" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-red-500/30 hover:scale-110 transition-all duration-300" title="Facebook Profile 1">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61588588627903" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-red-500/30 hover:scale-110 transition-all duration-300" title="Facebook Profile 2">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://wa.me/923286717879" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-[#25D366] hover:bg-white/10 hover:border-[#25D366]/30 hover:scale-110 transition-all duration-300" title="WhatsApp">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="border-t border-white/5 py-6 text-center flex flex-col sm:flex-row justify-center items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Ehtisham Khichi. All rights reserved.
          </p>
          <Link to="/sitemap" className="text-xs text-white/40 hover:text-white transition-colors">
            Sitemap
          </Link>
        </div>
      </footer>
    </div>
  );
}

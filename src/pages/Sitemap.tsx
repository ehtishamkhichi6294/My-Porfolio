import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { FileText, Home, User, Briefcase, Mail } from 'lucide-react';

export default function Sitemap() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const links = [
    { name: 'Home', path: '/', icon: <Home size={20} />, desc: 'Main landing page' },
    { name: 'About', path: '/about', icon: <User size={20} />, desc: 'My background and experience' },
    { name: 'Projects', path: '/projects', icon: <Briefcase size={20} />, desc: 'Portfolio of my work' },
    { name: 'Contact', path: '/contact', icon: <Mail size={20} />, desc: 'Get in touch with me' },
    { name: 'Sitemap', path: '/sitemap', icon: <FileText size={20} />, desc: 'Website structure overview' },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="max-w-4xl mx-auto px-6 py-12 md:py-24"
    >
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Sitemap</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Overview of all pages on the website.
        </p>
      </motion.div>

      <div className="glass-card p-8 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-8 border-b border-white/10 pb-4">Pages</h2>
        
        <ul className="space-y-4">
          {links.map((link, i) => (
            <motion.li key={i} variants={itemVariants}>
              <Link 
                to={link.path}
                className="group flex items-center p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
              >
                <div className="p-3 bg-white/5 rounded-lg text-red-500 group-hover:bg-red-600/20 group-hover:text-red-400 transition-colors mr-4">
                  {link.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white group-hover:text-red-400 transition-colors">
                    {link.name}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">{link.desc}</p>
                </div>
                <div className="ml-auto text-gray-500 group-hover:text-red-500 transition-colors">
                  {link.path}
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 mb-4">Looking for the XML sitemap?</p>
          <a 
            href="/sitemap.xml" 
            target="_blank"
            className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors font-medium"
          >
            <FileText size={18} /> View sitemap.xml
          </a>
        </div>
      </div>
    </motion.div>
  );
}

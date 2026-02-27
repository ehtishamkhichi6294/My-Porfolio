import { SEO } from '../components/SEO';
import { FadeIn } from '../components/FadeIn';
import { Link } from 'react-router-dom';
import { FileText, Home, Info, Briefcase, Mail } from 'lucide-react';

export function Sitemap() {
  const links = [
    { name: 'Home', path: '/', icon: <Home className="w-5 h-5" />, description: 'The main landing page of the portfolio.' },
    { name: 'About', path: '/about', icon: <Info className="w-5 h-5" />, description: 'Information about Ehtisham Khichi, skills, and background.' },
    { name: 'Projects', path: '/projects', icon: <Briefcase className="w-5 h-5" />, description: 'A showcase of selected works and case studies.' },
    { name: 'Contact', path: '/contact', icon: <Mail className="w-5 h-5" />, description: 'Get in touch for freelance opportunities or collaborations.' },
    { name: 'Sitemap', path: '/sitemap', icon: <FileText className="w-5 h-5" />, description: 'This page, listing all available routes on the website.' },
  ];

  return (
    <>
      <SEO 
        title="Sitemap" 
        description="HTML Sitemap for Ehtisham Khichi's portfolio website. Find all pages and links here."
      />
      
      <div className="flex flex-col gap-16 py-12">
        <section>
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-6">
              Sitemap
            </h1>
            <p className="text-lg text-white/60 mb-12">
              A complete overview of all pages available on this website.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {links.map((link, index) => (
              <FadeIn key={index} delay={index * 0.1} direction="up">
                <Link 
                  to={link.path}
                  className="group flex flex-col p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-red-500/30 hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(239,68,68,0.3)] h-full"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-red-500/10 text-red-400 group-hover:scale-110 group-hover:bg-red-500/20 transition-all duration-300">
                      {link.icon}
                    </div>
                    <h2 className="text-xl font-semibold text-white group-hover:text-red-300 transition-colors">
                      {link.name}
                    </h2>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {link.description}
                  </p>
                  <div className="mt-auto pt-6 flex items-center text-xs font-medium text-white/40 group-hover:text-white/70 transition-colors">
                    <span className="truncate">{window.location.origin}{link.path}</span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

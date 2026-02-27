import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Layout as LayoutIcon, Search, Gamepad2, PenTool, Shield } from 'lucide-react';
import { SEO } from '../components/SEO';
import { FadeIn } from '../components/FadeIn';

export function Home() {
  return (
    <>
      <SEO 
        title="Home" 
        description="Ehtisham Khichi - Full Stack Developer & UI/UX Designer specializing in modern, responsive, and high-performance web applications."
        keywords="Ehtisham Khichi, Portfolio, Web Developer, Full Stack, React, UI/UX, SEO, Graphic Design, Indie Game Developer"
      />
      
      <div className="flex flex-col gap-32">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col lg:flex-row justify-center items-center gap-12 relative pt-12 lg:pt-0">
          <div className="flex-1 flex flex-col items-start w-full">
            <FadeIn delay={0.1} direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-sm font-medium mb-8 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Available for new opportunities
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} direction="up" className="w-full">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40 mb-6 leading-[1.1] break-words">
                Crafting digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">experiences.</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed">
                I'm Ehtisham Khichi, a passionate developer focused on building beautiful, 
                functional, and user-centered digital products with modern web technologies.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="up" className="flex flex-wrap items-center gap-4">
              <Link 
                to="/projects" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white bg-white/10 border border-white/20 rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(239,68,68,0.2)] hover:border-red-500/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 font-medium text-white/70 hover:text-white hover:text-red-400 transition-colors duration-300"
              >
                Contact Me
              </Link>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} direction="left" className="flex-1 flex justify-center items-center relative mt-12 lg:mt-0 w-full">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full flex items-center justify-center group">
              {/* Image */}
              <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-red-500/50 transition-colors duration-500 relative z-10 bg-black">
                <img 
                  src="https://i.postimg.cc/rwp3Lrk3/Ek122.png" 
                  alt="Ehtisham Khichi" 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Glow */}
              <div className="absolute inset-0 bg-red-500/20 blur-[80px] rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </FadeIn>
        </section>

        {/* Services / Expertise */}
        <section className="py-20 border-t border-white/10">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-tight">
              What I do best
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <LayoutIcon className="w-6 h-6 text-red-400" />,
                title: "Frontend Development",
                description: "Building responsive, accessible, and performant user interfaces using React, Next.js, and Tailwind CSS."
              },
              {
                icon: <Code className="w-6 h-6 text-red-500" />,
                title: "Backend Architecture",
                description: "Designing robust APIs and server-side logic with Node.js, Express, and modern database solutions."
              },
              {
                icon: <Search className="w-6 h-6 text-red-400" />,
                title: "SEO Optimization",
                description: "Improving search engine rankings, optimizing meta tags, and ensuring high visibility for web applications."
              },
              {
                icon: <PenTool className="w-6 h-6 text-red-500" />,
                title: "Graphic Design",
                description: "Creating stunning visual assets, branding materials, and intuitive UI/UX designs using modern tools."
              },
              {
                icon: <Gamepad2 className="w-6 h-6 text-red-400" />,
                title: "Indie Game Developer",
                description: "Designing and developing engaging indie games with creative mechanics and immersive storytelling."
              },
              {
                icon: <Shield className="w-6 h-6 text-red-500" />,
                title: "Ethical Hacker",
                description: "Performing penetration tests, analyzing vulnerabilities, and securing networks against cyber threats."
              }
            ].map((service, index) => (
              <FadeIn key={index} delay={index * 0.1} direction="up">
                <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-red-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(239,68,68,0.2)] h-full">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-500/10 transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-100 transition-colors">{service.title}</h3>
                  <p className="text-white/60 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Featured CTA */}
        <section className="py-20">
          <FadeIn direction="up">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-red-900/20 to-black border border-red-500/20 p-12 md:p-20 text-center backdrop-blur-xl group hover:border-red-500/40 transition-colors duration-500">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors duration-500"></div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight relative z-10">
                Ready to start a project?
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 relative z-10">
                Let's collaborate to build something extraordinary. I'm currently available for freelance work and open to new opportunities.
              </p>
              
              <Link 
                to="/contact" 
                className="relative z-10 inline-flex items-center justify-center px-8 py-4 font-semibold text-black bg-white rounded-2xl hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(239,68,68,0.5)] hover:bg-red-50"
              >
                Get in touch
              </Link>
            </div>
          </FadeIn>
        </section>
      </div>
    </>
  );
}

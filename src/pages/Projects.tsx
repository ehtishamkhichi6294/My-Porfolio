import { SEO } from '../components/SEO';
import { FadeIn } from '../components/FadeIn';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "Credit Repair FICO",
      description: "A professional credit repair service website featuring a modern design, client portal integration, and SEO optimization. Currently live and serving clients.",
      image: "https://i.postimg.cc/WbQ8Ch2c/creditrepairfico.png",
      tags: ["React", "Tailwind CSS", "SEO", "Live"],
      liveUrl: "https://www.creditrepairfico.com/",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Tandori Restaurant",
      description: "A vibrant and appetizing restaurant website with an online menu, reservation system, and dynamic content management.",
      image: "https://i.postimg.cc/44HB56gt/tandori.png",
      tags: ["Next.js", "Framer Motion", "UI/UX"],
      liveUrl: "https://tandori.netlify.app/",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Lumina Dental Clinic",
      description: "A clean, trustworthy dental clinic website with appointment booking capabilities, service showcases, and patient testimonials.",
      image: "https://i.postimg.cc/wB3hBzxt/luminadentalclinic.png",
      tags: ["React", "Node.js", "Tailwind CSS"],
      liveUrl: "https://luminadentalclinic.netlify.app/",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <>
      <SEO 
        title="Projects" 
        description="Explore the portfolio of Ehtisham Khichi, featuring modern web applications, live websites, and digital experiences."
        keywords="Ehtisham Khichi, Projects, Portfolio, Web Development, Credit Repair FICO, Tandori, Lumina Dental Clinic"
      />
      
      <div className="flex flex-col gap-24 py-12">
        <section>
          <FadeIn direction="up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-8">
              Selected Work.
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-16">
              A collection of projects that showcase my passion for building beautiful, functional, and user-centered digital products.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <FadeIn key={index} delay={index * 0.1} direction="up" className={project.featured ? "md:col-span-2" : ""}>
                <div className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-red-500/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(239,68,68,0.3)] h-full flex flex-col">
                  <div className={`overflow-hidden relative ${project.featured ? 'aspect-video md:aspect-[21/9]' : 'aspect-video'}`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    
                    <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end">
                      <div className="flex gap-2 flex-wrap">
                        {project.tags.map(tag => (
                          <span key={tag} className={`px-3 py-1 text-xs font-medium rounded-full border backdrop-blur-md ${tag === 'Live' ? 'bg-red-500/20 text-red-300 border-red-500/30' : 'bg-white/20 text-white/90 border-white/10'}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-red-100 transition-colors">{project.title}</h3>
                      <div className="flex gap-3">
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors p-2 hover:bg-red-500/20 rounded-full">
                          <Github className="w-5 h-5" />
                        </a>
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-white/50 hover:text-red-400 transition-colors p-2 hover:bg-red-500/20 rounded-full">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                    <p className="text-white/60 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

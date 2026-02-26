import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const projects = [
    {
      title: 'Credit Repair FICO',
      desc: 'A comprehensive credit repair service platform helping users improve their FICO scores with personalized plans and tracking.',
      image: 'https://i.postimg.cc/WbQ8Ch2c/creditrepairfico.png',
      tags: ['React', 'Node.js', 'Live Project'],
      github: '#',
      demo: 'https://www.creditrepairfico.com/',
    },
    {
      title: 'Lumina Dental Clinic',
      desc: 'A modern, responsive website for a dental clinic featuring appointment booking and service information.',
      image: 'https://i.postimg.cc/wB3hBzxt/luminadentalclinic.png',
      tags: ['React', 'Tailwind CSS', 'Netlify'],
      github: '#',
      demo: 'https://luminadentalclinic.netlify.app/',
    },
    {
      title: 'Tandori Restaurant',
      desc: 'An elegant restaurant website showcasing the menu, location, and online reservation capabilities.',
      image: 'https://i.postimg.cc/44HB56gt/tandori.png',
      tags: ['React', 'Frontend', 'Netlify'],
      github: '#',
      demo: 'https://tandori.netlify.app/',
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="max-w-7xl mx-auto px-6 py-12 md:py-24"
    >
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Featured Projects</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A selection of my recent work, showcasing my skills in front-end and back-end development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full"
          >
            <div className="relative h-48 overflow-hidden border-b border-red-500/20">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10" />
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, j) => (
                  <span key={j} className="text-xs font-medium px-2.5 py-1 rounded-full bg-red-900/30 border border-red-500/30 text-red-200">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <a
                  href={project.github}
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-sm font-medium"
                >
                  <Github size={16} /> Code
                </a>
                <a
                  href={project.demo}
                  className="text-red-500 hover:text-red-400 transition-colors flex items-center gap-1 text-sm font-medium ml-auto"
                >
                  Live Demo <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

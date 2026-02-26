import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Layout, Smartphone, PenTool, Search, Gamepad2 } from 'lucide-react';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="max-w-7xl mx-auto px-6 py-12 md:py-24"
    >
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mb-32">
        <motion.div variants={itemVariants} className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Crafting <br />
            <span className="text-red-500">
              Digital Experiences
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0">
            I am a full-stack developer specializing in building exceptional digital experiences with modern web technologies.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <Link
              to="/projects"
              className="shiny-btn group flex items-center gap-2 text-white px-8 py-4 rounded-full font-medium transition-all"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="glass px-8 py-4 rounded-full font-medium text-white hover:bg-white/10 transition-all"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="flex-1 relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
            <div className="absolute inset-0 rounded-full bg-red-600/30 blur-[100px] opacity-50 animate-pulse" />
            <img
              src="https://i.postimg.cc/rwp3Lrk3/Ek122.png"
              alt="Profile"
              referrerPolicy="no-referrer"
              className="relative z-10 w-full h-full object-cover rounded-full border border-red-500/30 shadow-[0_0_50px_rgba(220,38,38,0.3)]"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-32"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Delivering comprehensive solutions across the entire web development stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Layout className="text-red-500 mb-4" size={32} />,
              title: 'Frontend Development',
              desc: 'Building responsive, interactive, and accessible user interfaces using React, Vue, and modern CSS frameworks.',
            },
            {
              icon: <Code className="text-red-500 mb-4" size={32} />,
              title: 'Backend Development',
              desc: 'Creating robust APIs and server-side logic with Node.js, Python, and scalable database architectures.',
            },
            {
              icon: <Smartphone className="text-red-500 mb-4" size={32} />,
              title: 'Mobile-First Design',
              desc: 'Ensuring seamless experiences across all devices with responsive design principles and progressive web apps.',
            },
            {
              icon: <PenTool className="text-red-500 mb-4" size={32} />,
              title: 'Graphic Design',
              desc: 'Designing website layouts, branding kits, and social media graphics using Figma and Adobe XD.',
            },
            {
              icon: <Search className="text-red-500 mb-4" size={32} />,
              title: 'SEO Specialist',
              desc: 'Improving search engine rankings, optimizing website performance, and driving organic traffic.',
            },
            {
              icon: <Gamepad2 className="text-red-500 mb-4" size={32} />,
              title: 'Indie Game Developer',
              desc: 'Creating engaging and interactive indie games with a focus on gameplay mechanics and storytelling.',
            }
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-2xl transition-all duration-300"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}

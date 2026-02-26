import { motion } from 'motion/react';
import { Download, Award, Briefcase, GraduationCap, Code2 } from 'lucide-react';

export default function About() {
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

  const educationData = [
    { degree: 'Professional Certification, Certified Ethical Hacker (CEH)', school: 'EC-Council Dubai / Online', year: 'Sep 2024 – Dec 2025', grade: 'A', desc: 'Gained professional skills in cybersecurity, performing penetration tests, vulnerability assessments, and securing network systems.', learning: 'Pen-testing, Kali Linux, OWASP Top 10, vulnerability assessment.' },
    { degree: 'Degree, Software Development', school: 'FAST National University Islamabad', year: 'Jan 2023 – Sep 2024', grade: 'A+', desc: 'Studied full-stack web development, database management, and software engineering principles with practical projects.', learning: 'Full-stack development, databases, APIs, software engineering basics.' },
    { degree: 'Diploma, Front-End Web Development', school: 'Aptech Learning Karachi', year: 'Jan 2021 – Dec 2021', grade: 'A', desc: 'Completed hands-on training in building responsive websites, improving UI components, and learning best practices in web development.', learning: 'HTML, CSS, JavaScript, responsive design, UI fundamentals.' },
  ];

  const experienceData = [
    { role: 'Lead Web Developer & SEO Specialist', company: 'Weblo PK', type: 'Self-employed', year: 'Jan 2026 - Present', location: 'Faisalabad, Pakistan', desc: 'Led development projects, built high-performance websites, improved SEO rankings, and managed a small dev team.', skills: 'Project Management, JavaScript Libraries and +3 skills' },
    { role: 'Junior Ethical Hacker / Cybersecurity Analyst', company: 'CyberWall Security', type: 'Full-time', year: 'Sep 2024 - Dec 2025', location: 'Dubai, UAE (Remote)', desc: 'Performed penetration tests, analyzed vulnerabilities, secured networks, and wrote audit reports.', skills: 'Kali Linux, Burp Suite and +3 skills' },
    { role: 'Full-Stack Web Developer', company: 'NovaTech Labs', type: 'Full-time', year: 'Sep 2023 - Sep 2024', location: 'Islamabad, Pakistan', desc: 'Built full-stack applications, integrated APIs, created user dashboards, and managed databases.', skills: 'Node.js, Express.js and +4 skills' },
    { role: 'Web & Graphic Designer', company: 'BrightCode Agency', type: 'Contract', year: 'Jan 2023 - Aug 2023', location: 'Lahore, Pakistan', desc: 'Designed website layouts, branding kits, social media graphics, and collaborated with clients.', skills: 'Figma, Adobe XD and +3 skills' },
    { role: 'Junior Front-End Developer', company: 'PixelForge studios', type: 'Freelance', year: 'Jan 2022 - Dec 2022', location: 'Karachi, Pakistan', desc: 'Developed responsive web pages, improved UI components, and optimized loading speed.', skills: 'HTML5, CSS and +4 skills' },
  ];

  const skillsData = [
    { name: 'Frontend Development (React, Vue, HTML/CSS)', level: 95 },
    { name: 'Backend Development (Node.js, Express)', level: 85 },
    { name: 'Cybersecurity & Ethical Hacking', level: 80 },
    { name: 'SEO & Digital Marketing', level: 90 },
    { name: 'UI/UX & Graphic Design (Figma, Adobe XD)', level: 85 },
    { name: 'Database Management (MongoDB, SQL)', level: 80 },
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
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">About Me</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Passionate about creating intuitive, dynamic user experiences.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <motion.div variants={itemVariants} className="relative">
          <div className="absolute inset-0 rounded-2xl bg-red-600/20 blur-[80px] opacity-60" />
          <img
            src="https://i.postimg.cc/nh0x4xF8/Ehtisham-Khichi.png"
            alt="About Me"
            referrerPolicy="no-referrer"
            className="relative z-10 w-full h-auto object-cover rounded-2xl border border-red-500/20 shadow-[0_0_40px_rgba(220,38,38,0.2)]"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <h2 className="text-3xl font-semibold mb-6">
            I'm a Full Stack Developer based in Faisalabad, Pakistan
          </h2>
          <p className="text-gray-400 leading-relaxed">
            With over 5 years of experience in web development, I have a strong foundation in both front-end and back-end technologies. I specialize in building scalable, performant applications that solve real-world problems.
          </p>
          <p className="text-gray-400 leading-relaxed">
            My journey started with a curiosity for how things work on the internet. Since then, I've had the privilege of working with startups and established companies, helping them bring their visions to life.
          </p>

          <div className="pt-6">
            <a
              href="#"
              className="shiny-btn inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-medium transition-all"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>

      {/* Education Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="mb-20"
      >
        <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-10 flex items-center gap-3 text-white glow-text">
          <GraduationCap className="text-red-500" size={32} /> Education
        </motion.h3>
        <div className="w-full border-t border-white/10">
          {educationData.map((item, i) => (
            <motion.div key={i} variants={itemVariants} className="group flex flex-col md:flex-row gap-4 md:gap-8 py-8 border-b border-white/10 hover:bg-red-900/5 transition-colors px-4 -mx-4 rounded-xl">
              <div className="md:w-1/4 shrink-0">
                <p className="text-red-500 font-mono text-sm glow-text mb-2">{item.year}</p>
                <p className="text-gray-500 text-sm">Grade: <span className="text-gray-300">{item.grade}</span></p>
              </div>
              <div className="md:w-3/4">
                <h5 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">{item.degree}</h5>
                <p className="text-red-400/80 font-medium text-sm mb-4">{item.school}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.learning.split(', ').map((skill, j) => (
                    <span key={j} className="text-xs font-medium px-3 py-1 rounded-full bg-black border border-white/10 text-gray-400 group-hover:border-red-500/30 group-hover:text-red-200 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="mb-20"
      >
        <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-10 flex items-center gap-3 text-white glow-text">
          <Briefcase className="text-red-500" size={32} /> Experience
        </motion.h3>
        <div className="w-full border-t border-white/10">
          {experienceData.map((item, i) => (
            <motion.div key={i} variants={itemVariants} className="group flex flex-col md:flex-row gap-4 md:gap-8 py-8 border-b border-white/10 hover:bg-red-900/5 transition-colors px-4 -mx-4 rounded-xl">
              <div className="md:w-1/4 shrink-0">
                <p className="text-red-500 font-mono text-sm glow-text mb-2">{item.year}</p>
                <p className="text-gray-500 text-sm">{item.location}</p>
              </div>
              <div className="md:w-3/4">
                <h5 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">{item.role}</h5>
                <p className="text-red-400/80 font-medium text-sm mb-4">{item.company} <span className="text-gray-600 mx-2">|</span> {item.type}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.skills.split(', ').map((skill, j) => (
                    <span key={j} className="text-xs font-medium px-3 py-1 rounded-full bg-black border border-white/10 text-gray-400 group-hover:border-red-500/30 group-hover:text-red-200 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-10 flex items-center gap-3 text-white glow-text">
          <Code2 className="text-red-500" size={32} /> Skills & Expertise
        </motion.h3>
        <motion.div variants={itemVariants} className="w-full border border-white/10 rounded-xl overflow-hidden bg-black/40 backdrop-blur-md">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="py-4 px-6 text-sm font-medium text-gray-400 w-1/2">Skill / Technology</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-400 w-1/2">Proficiency Meter</th>
              </tr>
            </thead>
            <motion.tbody variants={containerVariants}>
              {skillsData.map((skill, i) => (
                <motion.tr key={i} variants={itemVariants} className="border-b border-white/5 hover:bg-red-900/10 transition-colors group">
                  <td className="py-6 px-6">
                    <span className="text-gray-200 font-medium group-hover:text-red-400 transition-colors">{skill.name}</span>
                  </td>
                  <td className="py-6 px-6">
                    <div className="flex items-center gap-4">
                      <div className="w-full bg-black border border-white/10 rounded-none h-2 overflow-hidden relative">
                        {/* Grid lines for the meter */}
                        <div className="absolute inset-0 flex justify-between px-1/4 opacity-20 pointer-events-none z-10">
                          <div className="w-px h-full bg-white"></div>
                          <div className="w-px h-full bg-white"></div>
                          <div className="w-px h-full bg-white"></div>
                        </div>
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-red-600 relative shadow-[0_0_10px_rgba(220,38,38,0.8)]"
                        >
                          <div className="absolute top-0 right-0 bottom-0 w-2 bg-white" />
                        </motion.div>
                      </div>
                      <span className="text-red-500 font-mono text-sm font-bold glow-text w-12 text-right">{skill.level}%</span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}

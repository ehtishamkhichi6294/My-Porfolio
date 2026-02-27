import { SEO } from '../components/SEO';
import { FadeIn } from '../components/FadeIn';
import { Download } from 'lucide-react';
import jsPDF from 'jspdf';

export function About() {
  const handleDownloadResume = () => {
    const doc = new jsPDF();
    
    // Add content to PDF
    doc.setFontSize(22);
    doc.text('Ehtisham Khichi', 20, 20);
    
    doc.setFontSize(12);
    doc.text('Full Stack Developer | SEO Specialist | Graphic Designer', 20, 30);
    doc.text('Email: ehtishamkhichi5@gmail.com | Phone: +92 328 6717879', 20, 40);
    doc.text('Location: Faisalabad, Pakistan', 20, 50);
    
    doc.setFontSize(16);
    doc.text('Experience', 20, 70);
    
    doc.setFontSize(12);
    doc.text('Lead Web Developer & SEO Specialist - Weblo PK (Jan 2026 - Present)', 20, 80);
    doc.text('Junior Ethical Hacker / Cybersecurity Analyst - CyberWall Security (Sep 2024 - Dec 2025)', 20, 90);
    doc.text('Full-Stack Web Developer - NovaTech Labs (Sep 2023 - Sep 2024)', 20, 100);
    doc.text('Web & Graphic Designer - BrightCode Agency (Jan 2023 - Aug 2023)', 20, 110);
    doc.text('Junior Front-End Developer - PixelForge studios (Jan 2022 - Dec 2022)', 20, 120);
    
    doc.setFontSize(16);
    doc.text('Education', 20, 140);
    
    doc.setFontSize(12);
    doc.text('Certified Ethical Hacker (CEH) - EC-Council Dubai (Sep 2024 - Dec 2025)', 20, 150);
    doc.text('Degree, Software Development - FAST National University Islamabad (Jan 2023 - Sep 2024)', 20, 160);
    doc.text('Diploma, Front-End Web Development - Aptech Learning Karachi (Jan 2021 - Dec 2021)', 20, 170);
    
    doc.save('Ehtisham_Khichi_Resume.pdf');
  };

  return (
    <>
      <SEO 
        title="About" 
        description="Learn more about Ehtisham Khichi, a passionate Full Stack Developer and UI/UX Designer based in Faisalabad, Pakistan."
        keywords="Ehtisham Khichi, About, Web Developer, Faisalabad, Pakistan, Resume"
      />
      
      <div className="flex flex-col gap-24 py-12">
        <section>
          <FadeIn direction="up" className="flex justify-between items-end mb-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40">
              About Me.
            </h1>
            <button 
              onClick={handleDownloadResume}
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-red-600/10 text-red-400 border border-red-500/30 rounded-xl hover:bg-red-600/20 hover:border-red-500/50 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <FadeIn delay={0.1} direction="up" className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p>
                Assalam Alikum! My name is Ehtisham Khichi, and I'm a Full Stack Developer based in Faisalabad, Pakistan.
              </p>
              <p>
                My journey in web development started with a curiosity about how things work on the internet. Over the years, I've honed my skills in both frontend and backend technologies, allowing me to build comprehensive, full-stack applications.
              </p>
              <p>
                I believe that great software is not just about writing code; it's about solving problems, understanding user needs, and delivering value through intuitive and performant interfaces.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or simply enjoying a good cup of coffee while reading about the latest trends in tech.
              </p>
              
              <button 
                onClick={handleDownloadResume}
                className="md:hidden flex items-center justify-center gap-2 w-full px-6 py-4 mt-4 bg-red-600/10 text-red-400 border border-red-500/30 rounded-xl hover:bg-red-600/20 hover:border-red-500/50 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </button>
            </FadeIn>
            
            <FadeIn delay={0.2} direction="up" className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-black/50 z-10 mix-blend-overlay"></div>
                <img 
                  src="https://i.postimg.cc/nh0x4xF8/Ehtisham-Khichi.png" 
                  alt="Ehtisham Khichi" 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-red-500/20 blur-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-red-900/20 blur-2xl -z-10"></div>
            </FadeIn>
          </div>
        </section>

        <section className="border-t border-white/10 pt-24">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
              Experience
            </h2>
          </FadeIn>
          
          <div className="space-y-8">
            {[
              {
                title: "Lead Web Developer & SEO Specialist",
                company: "Weblo PK",
                type: "Self-employed",
                date: "Jan 2026 - Present",
                location: "Faisalabad, Punjab, Pakistan · On-site",
                description: "Led development projects, built high-performance websites, improved SEO rankings, and managed a small dev team.",
                skills: "Project Management, JavaScript Libraries and +3 skills"
              },
              {
                title: "Junior Ethical Hacker / Cybersecurity Analyst",
                company: "CyberWall Security",
                type: "Full-time",
                date: "Sep 2024 - Dec 2025",
                location: "Dubai, United Arab Emirates · Remote",
                description: "Performed penetration tests, analyzed vulnerabilities, secured networks, and wrote audit reports.",
                skills: "Kali Linux, Burp Suite and +3 skills"
              },
              {
                title: "Full-Stack Web Developer",
                company: "NovaTech Labs",
                type: "Full-time",
                date: "Sep 2023 - Sep 2024",
                location: "Islamabad, Pakistan · On-site",
                description: "Built full-stack applications, integrated APIs, created user dashboards, and managed databases.",
                skills: "Node.js, Express.js and +4 skills"
              },
              {
                title: "Web & Graphic Designer",
                company: "BrightCode Agency",
                type: "Contract",
                date: "Jan 2023 - Aug 2023",
                location: "Lahore, Punjab, Pakistan · Hybrid",
                description: "Designed website layouts, branding kits, social media graphics, and collaborated with clients.",
                skills: "Figma (Software), Adobe XD and +3 skills"
              },
              {
                title: "Junior Front-End Developer",
                company: "PixelForge studios",
                type: "Freelance",
                date: "Jan 2022 - Dec 2022",
                location: "Karāchi, Sindh, Pakistan · Remote",
                description: "Developed responsive web pages, improved UI components, and optimized loading speed.",
                skills: "HTML5, Cascading Style Sheets (CSS) and +4 skills"
              }
            ].map((job, index) => (
              <FadeIn key={index} delay={index * 0.1} direction="up">
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-red-500/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">{job.title}</h3>
                      <p className="text-red-400 font-medium">{job.company} · {job.type}</p>
                    </div>
                    <div className="text-left md:text-right">
                      <p className="text-white/80 font-medium">{job.date}</p>
                      <p className="text-white/50 text-sm">{job.location}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed mb-4">{job.description}</p>
                  <p className="text-sm text-white/40 font-medium tracking-wide uppercase">Skills: {job.skills}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 pt-24">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
              Education
            </h2>
          </FadeIn>
          
          <div className="space-y-8">
            {[
              {
                degree: "Professional Certification, Certified Ethical Hacker (CEH)",
                school: "EC-Council Dubai / Online",
                date: "Sep 2024 – Dec 2025",
                grade: "A",
                description: "Gained professional skills in cybersecurity, performing penetration tests, vulnerability assessments, and securing network systems.",
                learning: "Pen-testing, Kali Linux, OWASP Top 10, vulnerability assessment."
              },
              {
                degree: "Degree, Software Development",
                school: "FAST National University Islamabad",
                date: "Jan 2023 – Sep 2024",
                grade: "A+",
                description: "Studied full-stack web development, database management, and software engineering principles with practical projects.",
                learning: "Full-stack development, databases, APIs, software engineering basics."
              },
              {
                degree: "Diploma, Front-End Web Development",
                school: "Aptech Learning Karachi",
                date: "Jan 2021 – Dec 2021",
                grade: "A",
                description: "Completed hands-on training in building responsive websites, improving UI components, and learning best practices in web development.",
                learning: "HTML, CSS, JavaScript, responsive design, UI fundamentals."
              }
            ].map((edu, index) => (
              <FadeIn key={index} delay={index * 0.1} direction="up">
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-red-500/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-red-400 font-medium">{edu.school}</p>
                    </div>
                    <div className="text-left md:text-right">
                      <p className="text-white/80 font-medium">{edu.date}</p>
                      <p className="text-white/50 text-sm">Grade: {edu.grade}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed mb-4">{edu.description}</p>
                  <p className="text-sm text-white/40 font-medium tracking-wide uppercase">Key Learning: {edu.learning}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 pt-24">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
              My Toolkit
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "JavaScript (ES6+)", "TypeScript", "React", "Next.js",
              "Node.js", "Express", "Tailwind CSS", "Framer Motion",
              "PostgreSQL", "MongoDB", "Git", "Figma",
              "Kali Linux", "Burp Suite", "SEO", "Graphic Design"
            ].map((skill, index) => (
              <FadeIn key={index} delay={index * 0.05} direction="up">
                <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center font-medium text-white/80 hover:text-white hover:bg-red-500/10 hover:border-red-500/30 transition-all duration-300 hover:-translate-y-1">
                  {skill}
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

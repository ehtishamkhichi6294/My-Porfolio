import { SEO } from '../components/SEO';
import { FadeIn } from '../components/FadeIn';
import { Mail, MapPin, Phone, Send, MessageCircle, ShieldCheck } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    _gotcha: '' // Formspree honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
  // Math Captcha State
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 });
  const [userAnswer, setUserAnswer] = useState('');

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    setCaptcha({
      num1: Math.floor(Math.random() * 10) + 1,
      num2: Math.floor(Math.random() * 10) + 1
    });
    setUserAnswer('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');
    
    // Validate Math Captcha
    if (parseInt(userAnswer) !== captcha.num1 + captcha.num2) {
      setErrorMsg('Incorrect spam protection answer. Please try again.');
      generateCaptcha();
      setIsSubmitting(false);
      return;
    }
    
    try {
      const response = await fetch('https://formspree.io/f/mdalnokb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _gotcha: formData._gotcha
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '', _gotcha: '' });
        generateCaptcha();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setErrorMsg('Oops! There was a problem submitting your form');
      }
    } catch (error) {
      setErrorMsg('Oops! There was a problem submitting your form');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <SEO 
        title="Contact" 
        description="Get in touch with Ehtisham Khichi for freelance opportunities, collaborations, or just to say hi."
        keywords="Ehtisham Khichi, Contact, Hire Web Developer, Freelance, Faisalabad, Pakistan"
      />
      
      <div className="flex flex-col gap-24 py-12">
        <section>
          <FadeIn direction="up">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-8">
              Let's Talk.
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mb-16">
              I'm currently available for freelance work and open to new opportunities. Reach out if you have a project in mind or just want to say hi.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn delay={0.1} direction="up" className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <a href="mailto:ehtishamkhichi5@gmail.com" className="text-white/60 hover:text-red-400 transition-colors text-lg">
                    ehtishamkhichi5@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                  <a href="tel:+923286717879" className="text-white/60 hover:text-red-400 transition-colors text-lg">
                    +92 328 6717879
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">WhatsApp</h3>
                  <a href="https://wa.me/923286717879" target="_blank" rel="noreferrer" className="text-white/60 hover:text-[#25D366] transition-colors text-lg">
                    +92 328 6717879
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                  <p className="text-white/60 text-lg">
                    Faisalabad, Pakistan
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} direction="up">
              <form onSubmit={handleSubmit} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-900/10 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>
                
                <h3 className="text-2xl font-bold text-white mb-8">Send a message</h3>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  
                  {/* Honeypot Field (Hidden from users, catches bots) */}
                  <input 
                    type="text" 
                    name="_gotcha" 
                    style={{ display: 'none' }} 
                    tabIndex={-1} 
                    autoComplete="off" 
                    value={formData._gotcha}
                    onChange={handleChange}
                  />

                  {/* Math Captcha (Visible to users) */}
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                    <label htmlFor="captcha" className="flex items-center gap-2 text-sm font-medium text-white/70 mb-3">
                      <ShieldCheck className="w-4 h-4 text-red-400" />
                      Spam Protection: What is {captcha.num1} + {captcha.num2}?
                    </label>
                    <input
                      type="number"
                      id="captcha"
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      required
                      className="w-full px-5 py-3 rounded-lg bg-black/20 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your answer"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white bg-gradient-to-r from-red-600 to-red-800 rounded-xl hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  
                  {isSuccess && (
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm text-center animate-in fade-in slide-in-from-bottom-2">
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}
                  {errorMsg && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center animate-in fade-in slide-in-from-bottom-2">
                      {errorMsg}
                    </div>
                  )}
                </div>
              </form>
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  );
}

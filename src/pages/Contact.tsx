import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setError('');

    try {
      const formDataObj = new FormData();
      formDataObj.append('name', formData.name);
      formDataObj.append('email', formData.email);
      formDataObj.append('message', formData.message);

      const response = await fetch('https://formspree.io/f/mdalnokb', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formDataObj
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          setError(data.errors.map((err: any) => err.message).join(', '));
        } else {
          setError('Oops! There was a problem submitting your form');
        }
      }
    } catch (err) {
      setError('Oops! There was a problem submitting your form');
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Get In Touch</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <motion.div variants={itemVariants} className="space-y-8">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          
          <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
            <div className="p-3 bg-red-600/20 rounded-lg text-red-500">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">Email</h3>
              <p className="text-gray-400">ehtishamkhichi5@gmail.com</p>
              <p className="text-gray-400 text-sm mt-1">I usually respond within 24 hours.</p>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
            <div className="p-3 bg-red-600/20 rounded-lg text-red-500">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">Phone</h3>
              <p className="text-gray-400">+92 328 6717879</p>
              <a 
                href="https://wa.me/923286717879" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-1 text-red-500 hover:text-red-400 transition-colors text-sm mt-2 font-medium"
              >
                <MessageCircle size={16} /> Message on WhatsApp
              </a>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
            <div className="p-3 bg-red-600/20 rounded-lg text-red-500">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">Location</h3>
              <p className="text-gray-400">Faisalabad, Pakistan</p>
              <p className="text-gray-400 text-sm mt-1">Available for remote work worldwide.</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={itemVariants} className="glass-card p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />
          
          <h2 className="text-2xl font-semibold mb-6 relative z-10">Send a Message</h2>
          
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", duration: 0.6, bounce: 0.4 }}
              className="bg-black/40 border border-red-500/30 text-white p-10 rounded-2xl text-center relative z-10 shadow-[0_0_40px_rgba(220,38,38,0.15)] flex flex-col items-center justify-center min-h-[400px]"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 10 }}
                className="w-20 h-20 bg-red-600/20 rounded-full flex items-center justify-center mb-6 border border-red-500/50 shadow-[0_0_20px_rgba(220,38,38,0.4)]"
              >
                <CheckCircle2 size={40} className="text-red-500" />
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl font-bold mb-3 glow-text"
              >
                Message Sent!
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-400 max-w-[250px] mx-auto"
              >
                Thank you for reaching out. I'll get back to you as soon as possible.
              </motion.p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {error && (
                <div className="bg-red-900/50 border border-red-500 text-red-200 p-4 rounded-xl text-sm">
                  {error}
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (formErrors.name) setFormErrors({ ...formErrors, name: '' });
                  }}
                  className={`w-full bg-black/50 border ${formErrors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all`}
                  placeholder="John Doe"
                />
                {formErrors.name && (
                  <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs mt-2 ml-1">
                    {formErrors.name}
                  </motion.p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
                  }}
                  className={`w-full bg-black/50 border ${formErrors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all`}
                  placeholder="john@example.com"
                />
                {formErrors.email && (
                  <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs mt-2 ml-1">
                    {formErrors.email}
                  </motion.p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (formErrors.message) setFormErrors({ ...formErrors, message: '' });
                  }}
                  className={`w-full bg-black/50 border ${formErrors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all resize-none`}
                  placeholder="Tell me about your project..."
                />
                {formErrors.message && (
                  <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs mt-2 ml-1">
                    {formErrors.message}
                  </motion.p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="shiny-btn w-full flex items-center justify-center gap-2 text-white px-6 py-4 rounded-xl font-medium transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

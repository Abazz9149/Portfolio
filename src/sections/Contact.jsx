import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Github as GithubIcon, Linkedin as LinkedinIcon, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Contact() {
  const { name, email, location, github, linkedin } = portfolioData.personalInfo;
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    // Note: User needs to replace these with their own EmailJS credentials
    const SERVICE_ID = "service_vg5qnfr";
    const TEMPLATE_ID = "template_ex49qgp";
    const PUBLIC_KEY = "mBHmYRmvDxGp1ktqh";

    const templateParams = {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
      to_name: "Mustafa Abbas",
      time: new Date().toLocaleString(),
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setStatus('success');
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        setStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 md:w-64 h-48 md:h-64 bg-primary/20 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 md:w-64 h-48 md:h-64 bg-secondary/20 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Ready to build the <span className="text-gradient">Future</span>?
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Whether it's a VR simulation, a multiplayer game, or a complex UI system,
              I'm always open to discussing new projects and creative opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-all">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Email Me</p>
                  <a href={`mailto:${email}`} className="text-xl font-bold hover:text-primary transition-colors">{email}</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-secondary/20 transition-all">
                  <MapPin className="text-secondary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Location</p>
                  <p className="text-xl font-bold">{location}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6 mt-12">
              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:text-primary transition-colors"
              >
                <GithubIcon size={20} />
              </motion.a>
              <motion.a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:text-secondary transition-colors"
              >
                <LinkedinIcon size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-6 sm:p-10 rounded-[2rem]"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input name="name" type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input name="email" type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea name="message" rows="4" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Your message here..." />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${isSubmitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-white text-background hover:bg-gray-200'
                  }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
              </button>

              {status === 'success' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-green-400 justify-center">
                  <CheckCircle size={18} /> Message sent successfully!
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-red-400 justify-center">
                  <AlertCircle size={18} /> Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>


        <div className="mt-32 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}

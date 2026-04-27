import { motion } from 'framer-motion';
import Scene from '../components/Scene';
import { portfolioData } from '../data/portfolio';

export default function Hero() {
  const { name, role, tagline } = portfolioData.personalInfo;

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <Scene />
      
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-secondary uppercase border border-secondary/30 rounded-full bg-secondary/10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to my universe
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl font-extrabold mb-4 tracking-tighter leading-none">
            <span className="block">{name.split(' ')[0]}</span>
            <span className="text-gradient">{name.split(' ')[1]}</span>
          </h1>
          
          <h2 className="text-xl md:text-3xl text-gray-400 font-medium mb-8">
            {role}
          </h2>
          
          <p className="max-w-xl mx-auto text-gray-500 text-lg mb-10 leading-relaxed">
            {tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white font-bold rounded-full shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/20 glass text-white font-bold rounded-full hover:bg-white/5 transition-all"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

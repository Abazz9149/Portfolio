import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Code2, PenTool, Terminal, Cpu, Database, Layout } from 'lucide-react';

const SkillCard = ({ title, skills, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="glass p-6 md:p-8 rounded-3xl group hover:border-primary/50 transition-all duration-500"
  >
    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
      <Icon className="text-primary" size={24} />
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span 
          key={skill} 
          className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-400 group-hover:text-gray-200 transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

export default function Skills() {
  const { languages, tools, development } = portfolioData.skills;

  return (
    <section id="skills" className="py-24 px-4 bg-gradient-mesh">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A diverse toolkit specialized in high-performance game development, 
            immersive XR experiences, and robust full-stack solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCard 
            title="Languages" 
            skills={languages} 
            icon={Code2} 
            delay={0.1}
          />
          <SkillCard 
            title="Tools & Tech" 
            skills={tools} 
            icon={Terminal} 
            delay={0.2}
          />
          <SkillCard 
            title="Development" 
            skills={development} 
            icon={Cpu} 
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';

const SocialProof: React.FC = () => {
  // Simulated logos with text for simplicity in this code generation
  const partners = ["Doctolib", "Julie Solutions", "Logosw", "Veasy", "Orthoalis"];

  return (
    <section className="py-10 bg-slate-50 border-y border-slate-100" id="integrations">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 text-center"
      >
        <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-8">
          S'intègre parfaitement à votre écosystème
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => (
            <motion.span 
              key={partner}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-xl md:text-2xl font-bold text-slate-700 flex items-center gap-2 cursor-default"
            >
               {/* Placeholder icon for logos */}
               <div className="w-6 h-6 bg-slate-300 rounded-full"></div>
               {partner}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SocialProof;
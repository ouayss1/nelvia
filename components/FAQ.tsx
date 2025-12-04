import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const questions = [
    {
      q: "Est-ce compatible avec mon logiciel (Doctolib, Julie, etc.) ?",
      a: "Oui. Nelvia s'interface avec 98% des logiciels de gestion de cabinet du marché français via des connecteurs sécurisés ou des protocoles standards."
    },
    {
      q: "L'IA peut-elle gérer les vraies urgences ?",
      a: "Absolument. Vous définissez vos critères d'urgence (douleur, traumatisme, etc.). L'IA pose les questions de qualification et, si nécessaire, débloque des créneaux réservés ou vous notifie par SMS."
    },
    {
      q: "Et si le patient veut parler à un humain ?",
      a: "L'IA est capable de détecter si un patient est en détresse ou si la demande sort du cadre standard. Elle peut transférer l'appel sur votre mobile ou prendre un message détaillé que vous recevez par écrit."
    },
    {
      q: "Y a-t-il un engagement de durée ?",
      a: "Non. Nous sommes convaincus de la valeur de notre solution. L'offre est sans engagement, vous pouvez arrêter à tout moment."
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
           <h2 className="text-3xl font-bold text-slate-900">Questions Fréquentes</h2>
        </div>

        <div className="space-y-4">
          {questions.map((item, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
              >
                <span className="font-semibold text-slate-900 text-lg pr-4">{item.q}</span>
                {openIndex === i ? <Minus className="w-5 h-5 text-blue-600 shrink-0" /> : <Plus className="w-5 h-5 text-slate-400 shrink-0" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white"
                  >
                     <div className="p-6 text-slate-600 leading-relaxed border-t border-slate-100">
                        {item.a}
                     </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    { name: "Sarah M.", role: "Directrice Commerciale", text: "Je ne rate plus aucune opportunité. Mes clients sont ravis de la réactivité." },
    { name: "Thomas B.", role: "Consultant", text: "J'ai gagné une heure de production par jour. L'agenda se remplit tout seul." },
    { name: "Garage Auto Rep.", role: "Gérant", text: "Moins cher qu'une secrétaire, plus rapide, et jamais malade." },
    { name: "Marc L.", role: "Avocat", text: "L'IA gère parfaitement les reports de RDV. C'est bluffant." },
    { name: "Sophie D.", role: "Architecte", text: "Installation facile, et mes clients trouvent ça moderne." },
    { name: "Jean P.", role: "Artisan Plombier", text: "Fini le téléphone qui sonne pendant que je suis en intervention." },
  ];

  // Duplicate array for infinite scroll effect
  const marqueeReviews = [...reviews, ...reviews];

  return (
    <section className="py-24 bg-white border-b border-slate-100 overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
        >
          Approuvé par les pros
        </motion.h2>
        <p className="text-slate-500">Rejoignez les 400+ entreprises qui ont modernisé leur accueil.</p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradient Masks for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent"></div>

        <motion.div
          className="flex gap-6 w-max px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40 // Adjust speed here
          }}
        >
          {marqueeReviews.map((review, i) => (
            <div
              key={i}
              className="w-[350px] bg-slate-50 p-8 rounded-2xl border border-slate-100 flex-shrink-0 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-blue-100 mb-2" />
              <p className="text-slate-700 font-medium italic mb-6 text-lg">"{review.text}"</p>
              <div className="flex items-center gap-3 border-t border-slate-200 pt-4">
                <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{review.name}</p>
                  <p className="text-blue-600 text-xs font-semibold">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
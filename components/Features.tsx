import React from 'react';
import { ShieldAlert, CalendarCheck, MessageCircle, HeartPulse } from 'lucide-react';
import { motion } from 'framer-motion';

const StaticChat = () => {
  return (
    <div className="w-full max-w-[90%] mx-auto flex flex-col gap-3 text-sm">
      {/* Message 1: AI */}
      <div className="self-end bg-blue-600 text-white px-4 py-3 rounded-2xl rounded-tr-sm shadow-md max-w-[85%]">
        <p>Quelle est l'intensité de la douleur sur 10 ?</p>
      </div>

      {/* Message 2: User Answer */}
      <div className="self-start bg-white text-slate-700 border border-slate-100 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%]">
        <p>C'est bloqué, je ne peux plus bouger le cou. <span className="font-bold text-blue-600">8/10</span>.</p>
      </div>

      {/* Message 3: AI Response */}
      <div className="self-end bg-blue-600 text-white px-4 py-3 rounded-2xl rounded-tr-sm shadow-md max-w-[90%]">
        <p>Je comprends. J'ai notifié le praticien. Un créneau d'urgence est disponible à <span className="font-bold">11h30</span>.</p>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
    }
  };

  return (
    <section className="py-24 bg-white" id="solution">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Plus qu'un répondeur. <br />
            Une <span className="text-gradient">secrétaire médicale</span> intelligente.
          </h2>
          <p className="text-lg text-slate-500">
            Nelvia est entraînée spécifiquement pour les praticiens de santé. Elle comprend vos motifs de consultation, rassure vos patients et optimise votre planning.
          </p>
        </motion.div>

        {/* Layout: Vertical Stack on Mobile, Bento Grid on Desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1: Large - Urgences */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-slate-50 rounded-3xl border border-slate-100 relative overflow-hidden group transition-shadow hover:shadow-xl hover:shadow-slate-100 flex flex-col"
          >
            {/* Content Top */}
            <div className="p-8 relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ShieldAlert className="text-blue-600 w-6 h-6" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Qualification des Urgences</h3>
              <p className="text-slate-500 max-w-md">
                L'IA trie les appels par gravité selon vos critères (douleur, blocage, traumatisme). Elle sait distinguer une demande de routine d'une urgence vitale.
              </p>
            </div>

            {/* Visual Bottom - Animated Chat */}
            <div className="flex-1 bg-slate-100/50 border-t border-slate-200/50 p-6 flex flex-col justify-end relative overflow-hidden">
              {/* Decorative Blur */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl pointer-events-none"></div>
              <StaticChat />
            </div>
          </motion.div>

          {/* Card 2: Square - Agenda */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="md:col-span-1 bg-gradient-primary rounded-3xl p-8 text-white relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CalendarCheck className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Agenda Synchronisé</h3>
              <p className="text-blue-100 text-sm">
                Compatible Doctolib, Julie, Veasy, Maiia et +30 logiciels.
              </p>
            </div>
            <div className="absolute -right-6 -bottom-6 opacity-20 group-hover:scale-110 transition-transform duration-500">
              <CalendarCheck className="w-48 h-48 text-white transform rotate-12" />
            </div>
          </motion.div>

          {/* Card 3: Square - Anti-Lapins */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="md:col-span-1 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm relative overflow-hidden group hover:shadow-xl hover:shadow-purple-50 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <HeartPulse className="text-purple-600 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Anti "No-Show"</h3>
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                -30%
              </div>
              <p className="text-slate-500 text-sm">
                De rendez-vous manqués grâce à la confirmation vocale et aux rappels intelligents.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Large - Conversation */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-slate-900 rounded-3xl p-8 relative overflow-hidden group hover:shadow-2xl hover:shadow-cyan-900/20 transition-all"
          >
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 h-full">
              <div className="flex-1">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 border border-slate-700 group-hover:scale-110 transition-transform">
                  <MessageCircle className="text-cyan-400 w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Conversation Humaine</h3>
                <p className="text-slate-400">
                  Une voix chaleureuse, empathique et professionnelle. Nelvia gère les interruptions, les hésitations et les accents.
                </p>
              </div>
              <div className="flex-1 w-full">
                <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700 h-full flex items-center justify-center">
                  {/* Audio wave visual */}
                  <div className="flex items-center justify-between gap-1 h-16 px-4 w-full">
                    {[...Array(16)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ height: ["20%", "100%", "20%"], opacity: [0.4, 1, 0.4] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1 + Math.random(),
                          ease: "easeInOut",
                          delay: Math.random() * 0.5
                        }}
                        className="w-1.5 bg-cyan-500 rounded-full flex-1 max-w-[6px]"
                      ></motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
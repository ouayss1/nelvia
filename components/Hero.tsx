import React, { useState } from 'react';
import { Phone, Sparkles, Wifi } from 'lucide-react';
import { motion } from 'framer-motion';

// Specific Mobile Background Component
const MobileBackground = () => (
  <div className="absolute inset-0 z-0 lg:hidden overflow-hidden pointer-events-none">
    {/* Soft gradient orb at top */}
    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[150%] h-[500px] bg-gradient-to-b from-blue-50 via-white to-transparent opacity-80" />

    {/* Animated floating blob */}
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.5, 0.3],
        rotate: [0, 10, -10, 0]
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-32 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl mix-blend-multiply"
    />

    {/* Grid pattern */}
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
  </div>
);

const Hero: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneState, setPhoneState] = useState<'idle' | 'calling' | 'connected'>('idle');

  const handleCallRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) return;

    setPhoneState('calling');
    // Simulate API call and connection
    setTimeout(() => {
      setPhoneState('connected');
      setTimeout(() => setPhoneState('idle'), 8000); // Reset after 8s
    }, 3000);
  };

  const partners = ["Doctolib", "Julie Solutions", "Logosw", "Veasy", "Orthoalis", "Maiia", "DrLib"];
  // Duplicate for infinite scroll
  const marqueePartners = [...partners, ...partners, ...partners];

  return (
    <section className="relative pt-28 pb-16 md:pb-32 overflow-hidden">
      {/* Background Blobs with pulse animation (Desktop) */}
      <div className="hidden lg:block absolute top-0 right-0 -z-10 opacity-40 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl absolute -top-20 -right-20"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl absolute top-20 right-20"
        />
      </div>

      {/* Mobile Specific Background */}
      <MobileBackground />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Left Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wide mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Pour Cabinet Dentaire, Kiné & Ostéo
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-4 tracking-tight"
          >
            Ne ratez plus aucun patient. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Jamais.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-slate-600 mb-8 max-w-lg leading-relaxed"
          >
            L'IA réceptionniste qui gère vos appels 24/7, qualifie les urgences et remplit votre agenda.
          </motion.p>

          {/* Mobile Visual - Live Analysis (Visible only on Mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:hidden w-full max-w-xs mb-8 relative"
          >
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>
            <div className="bg-white/80 backdrop-blur-md border border-white/50 p-4 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold">AI</div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Analyse en direct</p>
                  <p className="text-xs text-slate-500">Écoute active...</p>
                </div>
              </div>
              {/* Fake Waveform */}
              <div className="flex items-center justify-between gap-1 h-8">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: ["20%", "100%", "20%"] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.05 }}
                    className="w-1 bg-blue-500 rounded-full"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Optimized Input Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-md relative z-20 mb-12"
          >
            <form onSubmit={handleCallRequest} className="relative flex items-center">
              <div className="w-full flex items-center bg-white border border-slate-200 rounded-full p-1.5 shadow-xl shadow-blue-900/5 focus-within:ring-4 focus-within:ring-blue-100 transition-all">
                <input
                  type="tel"
                  placeholder="Votre numéro (ex: 06 12...)"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none px-4 text-slate-900 placeholder:text-slate-400 font-medium h-12 w-full min-w-0"
                />
                <button
                  type="submit"
                  disabled={!phoneNumber || phoneState !== 'idle'}
                  className="bg-slate-900 hover:bg-slate-800 text-white h-12 px-4 md:px-6 rounded-full font-bold text-sm transition-all flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shrink-0 whitespace-nowrap"
                >
                  {phoneState === 'idle' ? (
                    <>Tester <Phone className="w-4 h-4 hidden md:block" /></>
                  ) : (
                    <>Appel...</>
                  )}
                </button>
              </div>
            </form>
            <p className="text-xs text-slate-400 mt-3 flex items-center justify-center lg:justify-start gap-1">
              <Sparkles className="w-3 h-3" /> Gratuit & Instantané
            </p>
          </motion.div>

          {/* Integrated Social Proof / Ecosystem */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-full max-w-md"
          >
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 text-center lg:text-left">
              S'intègre parfaitement à votre écosystème
            </p>

            {/* Infinite Marquee Container */}
            <div className="relative w-full overflow-hidden mask-image-gradient-sides">
              {/* Gradient Masks */}
              <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-[#F8FAFC] to-transparent lg:from-[#F8FAFC]"></div>
              <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-[#F8FAFC] to-transparent lg:from-[#F8FAFC]"></div>

              <motion.div
                className="flex gap-8 w-max items-center"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 25
                }}
              >
                {marqueePartners.map((partner, index) => (
                  <span
                    key={index}
                    className="text-lg font-bold text-slate-300 whitespace-nowrap select-none"
                  >
                    {partner}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Right Visual - Dark Phone Interface (HIDDEN ON MOBILE) */}
        <div className="hidden lg:flex justify-end order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Floating Elements Animations */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 -left-10 bg-white p-3 rounded-2xl shadow-lg z-20 max-w-[160px]"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-bold text-slate-800">Nouveau RDV</span>
              </div>
              <p className="text-xs text-slate-500">Mme Martin ajouté à 14:30</p>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-32 -right-6 bg-white p-3 rounded-2xl shadow-lg z-20 max-w-[160px]"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-xs font-bold text-slate-800">Urgence</span>
              </div>
              <p className="text-xs text-slate-500">Douleur intense signalée</p>
            </motion.div>

            {/* PHONE CONTAINER */}
            <div className="relative z-10 bg-[#0b0f19] rounded-[3rem] shadow-2xl border-4 border-slate-800 p-3 w-[300px] h-[600px] transform transition-transform duration-500">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[25px] bg-slate-900 rounded-b-xl z-30"></div>

              {/* Screen */}
              <div className="bg-[#050505] w-full h-full rounded-[2.5rem] overflow-hidden relative flex flex-col text-white font-sans">

                {/* Status Bar */}
                <div className="flex justify-between px-6 pt-4 text-[10px] text-slate-400 font-medium">
                  <span>09:41</span>
                  <div className="flex gap-1">
                    <Wifi className="w-3 h-3" />
                    <div className="w-4 h-2.5 bg-slate-600 rounded-[2px] relative overflow-hidden">
                      <div className="absolute left-0 top-0 h-full w-3/4 bg-white"></div>
                    </div>
                  </div>
                </div>

                {/* Main Call UI */}
                <div className="flex-1 flex flex-col items-center justify-center pt-10 pb-20 relative">

                  {/* Avatar/Glow */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full animate-pulse"></div>
                    <div className="w-24 h-24 bg-slate-900 rounded-full border border-slate-800 flex items-center justify-center relative z-10">
                      <span className="text-2xl font-bold text-blue-500">AI</span>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <h3 className="text-2xl font-bold text-white mb-2">IA Réceptionniste</h3>
                  <p className="text-slate-400 text-sm mb-8">+33 1 23 45 67 89</p>

                  <p className="text-blue-400 text-xs font-medium mb-12 bg-blue-500/10 px-3 py-1 rounded-full">
                    Répond, qualifie, planifie vos RDV
                  </p>

                  {/* Animated Waveform */}
                  <div className="flex items-center justify-center gap-1 h-12 mb-12 w-full px-12">
                    {[...Array(15)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ height: [8, 32, 8] }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.8,
                          delay: i * 0.05,
                          ease: "easeInOut"
                        }}
                        className="w-1.5 bg-slate-700 rounded-full"
                        style={{
                          backgroundColor: phoneState === 'connected' || phoneState === 'calling' ? '#3b82f6' : '#334155'
                        }}
                      />
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="absolute bottom-10 w-full px-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setPhoneState('calling')} // Just visual interactivity
                      className="w-full bg-[#10b981] hover:bg-[#059669] text-black font-bold py-4 rounded-2xl shadow-lg shadow-emerald-900/20 transition-all flex items-center justify-center"
                    >
                      Appeler maintenant
                    </motion.button>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
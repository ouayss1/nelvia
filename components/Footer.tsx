import React from 'react';
import { Sparkles, Linkedin, Twitter, Instagram, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
   return (
      <footer className="bg-white pt-16 relative">

         {/* Large CTA Section */}
         <div className="max-w-7xl mx-auto px-6 mb-20">
            <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
               {/* Background Glows */}
               <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                  <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]"></div>
                  <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px]"></div>
               </div>

               <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                     Prêt à moderniser votre entreprise ?
                  </h2>
                  <p className="text-slate-400 text-lg mb-8">
                     Rejoignez les professionnels qui ont choisi la sérénité. Essai gratuit, sans engagement.
                  </p>
                  <button className="bg-white text-slate-900 hover:bg-slate-50 px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-white/10 flex items-center gap-2 mx-auto">
                     Réserver ma démo <ArrowRight className="w-5 h-5" />
                  </button>
               </div>
            </div>
         </div>

         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto px-6 pb-10"
         >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
               {/* Brand Column */}
               <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center gap-2.5 mb-6">
                     <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                        <Sparkles className="text-white w-5 h-5" />
                     </div>
                     <span className="text-2xl font-extrabold text-slate-900 tracking-tighter">
                        Nelvia<span className="text-blue-600">.</span>
                     </span>
                  </div>
                  <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
                     L'intelligence artificielle au service de votre croissance. Nous redonnons du temps aux professionnels pour ce qui compte vraiment.
                  </p>
                  <div className="flex gap-4">
                     <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-100 hover:text-blue-600 transition-all">
                        <Linkedin className="w-5 h-5" />
                     </a>
                     <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-100 hover:text-blue-600 transition-all">
                        <Twitter className="w-5 h-5" />
                     </a>
                     <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-100 hover:text-blue-600 transition-all">
                        <Instagram className="w-5 h-5" />
                     </a>
                  </div>
               </div>

               {/* Links Columns */}
               <div>
                  <h4 className="font-bold text-slate-900 mb-6">Produit</h4>
                  <ul className="space-y-4 text-sm text-slate-500">
                     <li><a href="#" className="hover:text-blue-600 transition-colors">Fonctionnalités</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition-colors">Intégrations</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition-colors">Tarifs</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition-colors">Témoignages</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition-colors">Mises à jour</a></li>
                  </ul>
               </div>

               <div>
                  <h4 className="font-bold text-slate-900 mb-6">Entreprise</h4>
                  <ul className="space-y-4 text-sm text-slate-500">
                     <li><a href="#" className="hover:text-blue-600 transition-colors">À propos</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition-colors">Carrières</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition-colors">Presse</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
                  </ul>
               </div>

               <div>
                  <h4 className="font-bold text-slate-900 mb-6">Légal</h4>
                  <ul className="space-y-4 text-sm text-slate-500">
                     <li><a href="#" className="hover:text-blue-600 transition-colors">Mentions Légales</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition-colors">Confidentialité (RGPD)</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition-colors">CGV</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition-colors">Cookies</a></li>
                  </ul>
               </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
               <p className="text-sm text-slate-400 font-medium">© 2024 Nelvia SAS. Tous droits réservés.</p>
               <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold text-green-700">Systèmes opérationnels</span>
               </div>
            </div>
         </motion.div>
      </footer>
   );
};

export default Footer;
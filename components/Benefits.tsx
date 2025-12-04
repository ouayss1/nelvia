import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Briefcase, Clock, Heart, Smartphone, Calendar } from 'lucide-react';

const Benefits: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'company' | 'client'>('company');

    const companyBenefits = [
        { icon: Clock, title: "Gain de Temps", desc: "Ne soyez plus interrompu dans votre travail. Gagnez ~1h/jour." },
        { icon: Calendar, title: "Agenda Optimisé", desc: "Comblez les trous de dernière minute automatiquement." },
        { icon: Heart, title: "Moins de Stress", desc: "Fini la sonnerie du téléphone qui résonne dans le bureau." },
    ];

    const clientBenefits = [
        { icon: Smartphone, title: "Réponse Immédiate", desc: "Pas de tonalité occupée, pas de messagerie. Une réponse en 2s." },
        { icon: User, title: "Accessibilité 24/7", desc: "Prendre RDV le dimanche ou tard le soir devient possible." },
        { icon: Heart, title: "Empathie", desc: "Une écoute attentive et bienveillante, même pour refuser une demande." },
    ];

    const CompanyCard = () => (
        <div className="relative z-10 bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                    <Briefcase className="w-7 h-7" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Pour l'Entreprise</h3>
            </div>
            <div className="space-y-8">
                {companyBenefits.map((item, i) => (
                    <div key={i} className="flex gap-4">
                        <div className="mt-1">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <item.icon className="w-5 h-5 text-blue-600" />
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                            <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const ClientCard = () => (
        <div className="relative z-10 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-[2.5rem] p-8 md:p-12 shadow-xl hover:shadow-2xl hover:shadow-slate-800/20 transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 bg-cyan-400 text-slate-900 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-400/20">
                    <User className="w-7 h-7" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Pour le Client</h3>
            </div>
            <div className="space-y-8">
                {clientBenefits.map((item, i) => (
                    <div key={i} className="flex gap-4">
                        <div className="mt-1">
                            <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center">
                                <item.icon className="w-5 h-5 text-cyan-400" />
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-lg">{item.title}</h4>
                            <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                        Tout le monde y gagne.
                    </h2>
                </div>

                {/* Mobile Tab Switcher */}
                <div className="flex lg:hidden justify-center mb-8">
                    <div className="bg-slate-100 p-1.5 rounded-xl flex w-full max-w-md relative">
                        <button
                            onClick={() => setActiveTab('company')}
                            className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all duration-200 ${activeTab === 'company'
                                    ? 'bg-white text-blue-600 shadow-sm ring-1 ring-slate-200'
                                    : 'text-slate-500 hover:text-slate-700'
                                }`}
                        >
                            Pour l'Entreprise
                        </button>
                        <button
                            onClick={() => setActiveTab('client')}
                            className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all duration-200 ${activeTab === 'client'
                                    ? 'bg-white text-blue-600 shadow-sm ring-1 ring-slate-200'
                                    : 'text-slate-500 hover:text-slate-700'
                                }`}
                        >
                            Pour le Client
                        </button>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:grid grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <CompanyCard />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <ClientCard />
                    </motion.div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {activeTab === 'company' ? <CompanyCard /> : <ClientCard />}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
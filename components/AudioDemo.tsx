import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Mic, Volume2, ChevronRight, Activity, ShieldAlert, Info, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Scenario {
    id: number;
    title: string;
    role: string;
    description: string;
    duration: string;
    waves: number[];
    audioSrc: string;
}

const AudioDemo: React.FC = () => {
    const [activeScenario, setActiveScenario] = useState<number>(1);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const scenarios: Scenario[] = [
        {
            id: 1,
            title: "Urgence Dentaire",
            role: "Chirurgien-Dentiste",
            description: "Le patient a une rage de dents. L'IA détecte le mot-clé 'douleur', évalue l'urgence à 8/10 et propose le créneau réservé aux urgences.",
            duration: "1:12",
            waves: [40, 70, 30, 80, 50, 90, 30, 60, 40, 70],
            audioSrc: "/audio/scenario_1.mp3"
        },
        {
            id: 2,
            title: "Dos Bloqué",
            role: "Ostéopathe",
            description: "Patient bloqué du dos. L'IA demande les antécédents récents et vérifie si c'est une première consultation avant de booker.",
            duration: "0:45",
            waves: [30, 40, 30, 50, 80, 40, 30, 50, 20, 40],
            audioSrc: "/audio/osteo.mp3"
        },
        {
            id: 3,
            title: "Info Prix & Accès",
            role: "Kinésithérapeute",
            description: "Questions administratives sur le conventionnement et le parking. L'IA répond précisément sans déranger le praticien.",
            duration: "0:58",
            waves: [50, 30, 60, 20, 40, 50, 70, 40, 30, 20],
            audioSrc: "/audio/scenario_3.mp3"
        },
    ];

    const activeData = scenarios.find(s => s.id === activeScenario) || scenarios[0];

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.load();
            if (isPlaying) {
                const playPromise = audioRef.current.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log("Autoplay prevented:", error);
                        setIsPlaying(false);
                    });
                }
            }
        }
    }, [activeScenario]);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                const playPromise = audioRef.current.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log("Playback failed:", error);
                        setIsPlaying(false);
                    });
                }
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    const handleScenarioChange = (id: number) => {
        if (activeScenario === id) {
            setIsPlaying(!isPlaying);
        } else {
            setActiveScenario(id);
            setIsPlaying(true);
        }
    };

    const handleEnded = () => {
        setIsPlaying(false);
    };

    return (
        <section className="py-12 md:py-24 bg-slate-50" id="demo">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column: Text & List - HIDDEN ON MOBILE */}
                    <div className="lg:col-span-5 hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-10"
                        >
                            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-2 block">Démonstration Audio</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                Écoutez Nelvia <br />en action.
                            </h2>
                            <p className="text-slate-500">
                                Sélectionnez un scénario pour entendre comment l'IA gère les situations réelles de votre cabinet.
                            </p>
                        </motion.div>

                        <div className="space-y-4">
                            {scenarios.map((scenario) => (
                                <motion.div
                                    key={scenario.id}
                                    onClick={() => handleScenarioChange(scenario.id)}
                                    whileHover={{ scale: 1.02 }}
                                    className={`cursor-pointer p-4 rounded-xl border transition-all duration-300 flex items-center justify-between ${activeScenario === scenario.id
                                        ? 'bg-white border-blue-200 shadow-lg shadow-blue-500/5'
                                        : 'bg-transparent border-transparent hover:bg-white hover:border-slate-200'
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeScenario === scenario.id ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500'
                                            }`}>
                                            {activeScenario === scenario.id && isPlaying ? <Activity className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                                        </div>
                                        <div>
                                            <h4 className={`font-bold ${activeScenario === scenario.id ? 'text-slate-900' : 'text-slate-600'}`}>
                                                {scenario.title}
                                            </h4>
                                            <p className="text-xs text-slate-400">{scenario.role}</p>
                                        </div>
                                    </div>
                                    {activeScenario === scenario.id && <ChevronRight className="w-5 h-5 text-blue-500" />}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Visual Player */}
                    <div className="lg:col-span-7">
                        {/* Mobile Heading (Since left col is hidden) */}
                        <div className="lg:hidden mb-8 text-center">
                            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-2 block">Démonstration</span>
                            <h2 className="text-3xl font-bold text-slate-900">Écoutez l'IA.</h2>
                        </div>

                        <motion.div
                            key={activeScenario}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-slate-900 rounded-[2rem] p-6 md:p-12 text-white relative overflow-hidden shadow-2xl"
                        >
                            {/* Background gradients */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px]"></div>

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-xs font-medium">
                                        <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-slate-500'}`}></div>
                                        {isPlaying ? 'Lecture en cours' : 'En pause'}
                                    </div>
                                    <div className="text-slate-400 text-sm font-mono">
                                        {activeData.duration}
                                    </div>
                                </div>

                                <div className="flex flex-col items-center justify-center py-6 md:py-8">
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                                        <Mic className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">{activeData.title}</h3>
                                    <p className="text-blue-200 text-center max-w-sm text-sm leading-relaxed">
                                        {activeData.description}
                                    </p>
                                </div>

                                {/* Player Controls & Waveform */}
                                <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-md border border-white/10 mt-2">
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={() => setIsPlaying(!isPlaying)}
                                            className="w-12 h-12 bg-white text-slate-900 rounded-full flex items-center justify-center hover:scale-105 transition-transform shrink-0"
                                        >
                                            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
                                        </button>

                                        {/* Dynamic Visualizer */}
                                        <div className="flex-1 flex items-center gap-1 h-12 justify-center">
                                            {activeData.waves.map((height, i) => (
                                                <motion.div
                                                    key={i}
                                                    animate={isPlaying ? { height: [height * 0.3, height, height * 0.3] } : { height: height * 0.3 }}
                                                    transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.05 }}
                                                    className="w-1.5 bg-gradient-to-t from-blue-500 to-cyan-300 rounded-full"
                                                    style={{ height: `${height}%` }}
                                                />
                                            ))}
                                        </div>

                                        <Volume2 className="w-5 h-5 text-slate-400 hidden sm:block" />
                                    </div>
                                </div>

                                {/* Hidden Audio Element */}
                                <audio
                                    ref={audioRef}
                                    src={activeData.audioSrc}
                                    onEnded={handleEnded}
                                />

                                {/* Mobile Scenario Selectors (Bottom Grid) */}
                                <div className="lg:hidden mt-6 pt-6 border-t border-white/10">
                                    <p className="text-xs text-slate-500 text-center mb-4 uppercase tracking-wider font-bold">Changer de scénario</p>
                                    <div className="grid grid-cols-3 gap-3">
                                        {scenarios.map((s) => (
                                            <button
                                                key={s.id}
                                                onClick={() => handleScenarioChange(s.id)}
                                                className={`flex flex-col items-center justify-center py-3 px-1 rounded-xl transition-all ${activeScenario === s.id
                                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                                                    : 'bg-white/5 text-slate-400 hover:bg-white/10'
                                                    }`}
                                            >
                                                {s.id === 1 && <ShieldAlert className="w-5 h-5 mb-2" />}
                                                {s.id === 2 && <User className="w-5 h-5 mb-2" />}
                                                {s.id === 3 && <Info className="w-5 h-5 mb-2" />}
                                                <span className="text-[10px] font-bold leading-tight text-center">
                                                    {s.title.replace(" & Accès", "")}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AudioDemo;
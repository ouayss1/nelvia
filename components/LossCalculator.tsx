import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp } from 'lucide-react';

const LossCalculator: React.FC = () => {
  const [missedCalls, setMissedCalls] = useState(15);
  const [clientValue, setClientValue] = useState(60);
  const [conversionRate, setConversionRate] = useState(25);
  const [annualLoss, setAnnualLoss] = useState(0);

  useEffect(() => {
    // Formula: (Missed Calls per week * 52 weeks) * (Conversion Rate / 100) * Client Value
    const loss = (missedCalls * 52) * (conversionRate / 100) * clientValue;
    setAnnualLoss(Math.round(loss));
  }, [missedCalls, clientValue, conversionRate]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section className="py-20 md:py-32 bg-slate-900 text-white relative overflow-hidden mt-12 md:mt-0" id="calculator">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 text-cyan-400 font-bold uppercase text-xs tracking-widest mb-4">
              <Calculator className="w-4 h-4" />
              Calculateur de Pertes
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Combien vous <br className="hidden md:block" />
              coûtent vos appels <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">manqués ?</span>
            </h2>
            {/* Description hidden on mobile */}
            <p className="text-slate-400 text-lg mb-8 max-w-md hidden md:block">
              Un appel non décroché est souvent un client qui part chez le concurrent. Utilisez notre simulateur pour estimer le manque à gagner annuel de votre entreprise.
            </p>

            {/* "Le Saviez-vous" - Desktop Version (Visible only on md+) */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hidden md:flex items-start gap-4">
              <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center shrink-0">
                <TrendingUp className="text-yellow-500 w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Le Saviez-vous ?</h4>
                <p className="text-sm text-slate-400">
                  En moyenne, une entreprise rate 25% de ses appels entrants, principalement entre 12h-14h et après 18h.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-3xl p-6 md:p-8 text-slate-900 shadow-2xl shadow-blue-900/20"
            >
              <div className="space-y-6 md:space-y-8 mb-8">
                {/* Slider 1 */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-bold text-slate-700 text-sm md:text-base">Appels manqués /semaine</label>
                    <span className="text-blue-600 font-bold">{missedCalls}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={missedCalls}
                    onChange={(e) => setMissedCalls(Number(e.target.value))}
                    className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>

                {/* Slider 2 */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-bold text-slate-700 text-sm md:text-base">Valeur nouveau client (€)</label>
                    <span className="text-blue-600 font-bold">{clientValue}€</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="500"
                    step="10"
                    value={clientValue}
                    onChange={(e) => setClientValue(Number(e.target.value))}
                    className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>

                {/* Slider 3 */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-bold text-slate-700 text-sm md:text-base">Taux de conversion (%)</label>
                    <span className="text-blue-600 font-bold">{conversionRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 md:p-6 text-center border border-slate-100">
                <p className="text-xs md:text-sm font-bold text-slate-500 uppercase mb-2">Manque à gagner annuel estimé</p>
                <motion.div
                  key={annualLoss}
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"
                >
                  {formatCurrency(annualLoss)}
                </motion.div>
              </div>
            </motion.div>

            {/* "Le Saviez-vous" - Mobile Version (Visible only on mobile, smaller) */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 flex md:hidden items-center gap-3">
              <div className="w-8 h-8 bg-yellow-500/10 rounded-lg flex items-center justify-center shrink-0">
                <TrendingUp className="text-yellow-500 w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-slate-400 leading-tight">
                  <span className="font-bold text-white">Le Saviez-vous ?</span> En moyenne, une entreprise rate 25% de ses appels entrants.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LossCalculator;
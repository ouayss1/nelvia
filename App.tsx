import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import LossCalculator from './components/LossCalculator';
import Benefits from './components/Benefits';
import AudioDemo from './components/AudioDemo';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        {/* SocialProof is now integrated inside Hero */}
        <LossCalculator />
        <Features />
        <Benefits />
        <AudioDemo />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
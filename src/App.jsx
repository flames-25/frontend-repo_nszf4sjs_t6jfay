import React from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import WhyZyner from './components/WhyZyner';
import Pricing from './components/Pricing';

const Footer = () => (
  <footer className="bg-slate-950 text-slate-400">
    <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm">© {new Date().getFullYear()} Zyner. All rights reserved.</p>
      <div className="flex items-center gap-4 text-sm">
        <a href="#how" className="hover:text-white">How it works</a>
        <a href="#pricing" className="hover:text-white">Pricing</a>
        <a href="#start" className="hover:text-white">Get started</a>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950">
      <Hero />
      <HowItWorks />
      <Features />
      <WhyZyner />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;

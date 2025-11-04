import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowToUse from './components/HowToUse';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#111827] text-gray-300 min-h-screen font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowToUse />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
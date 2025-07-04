import React from 'react';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import HowItWorks from './components/HowItWorks';
import BenefitsSection from './components/BenefitsSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <BenefitsSection />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
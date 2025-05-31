import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ImpactCalculator from './components/ImpactCalculator';
import Projects from './components/Projects';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Features />
      <ImpactCalculator />
      <Projects />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
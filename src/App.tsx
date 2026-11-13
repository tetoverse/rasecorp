import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { SectionTools } from './components/SectionTools.tsx';
import { SectionStudio } from './components/SectionStudio.tsx';
import { SectionSecurity } from './components/SectionSecurity.tsx';
import { SectionCTA } from './components/SectionCTA.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0c0b10] text-white overflow-x-hidden selection:bg-[#ab9ff2]/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <SectionTools />
        <SectionStudio />
        <SectionSecurity />
        <SectionCTA />
      </main>
      <Footer />
    </div>
  );
}

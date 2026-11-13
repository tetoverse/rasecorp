import React from 'react';
import { GhostLogo } from './GhostLogo.tsx';
import { Download, Github, Monitor, Smartphone, Globe, Sparkles } from 'lucide-react';

export const SectionCTA: React.FC = () => {
  return (
    <section id="download" className="py-24 md:py-36 relative border-t border-white/[0.06] overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] ambient-glow-purple opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Social Proof Eyebrow */}
        <div className="text-center mb-12">
          <p className="text-base sm:text-xl md:text-2xl font-bold text-[#b4b0c7] max-w-2xl mx-auto">
            Trusted by developers, audio enthusiasts, and creators worldwide.{' '}
            <span className="text-white">It’s more than a studio.</span>
          </p>
        </div>

        {/* Big Rounded CTA Box (Phantom signature bottom card) */}
        <div className="rounded-[3rem] p-10 sm:p-16 md:p-24 bg-gradient-to-b from-[#1a1727] to-[#12101b] border border-[#ab9ff2]/25 shadow-[0_20px_70px_-15px_rgba(171,159,242,0.25)] text-center relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ab9ff2]/15 border border-[#ab9ff2]/30 text-[#ab9ff2] text-xs font-mono mb-8">
            <Sparkles size={14} />
            <span>FREE & OPEN SOURCE FOR EVERYONE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-8 leading-[1.05]">
            Get started.
            <br />
            Download{' '}
            <span className="inline-flex items-center text-[#ab9ff2] align-middle mx-1">
              <GhostLogo size={60} glow />
            </span>{' '}
            RaseCorp.
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="https://github.com/tetoverse/Raser/releases"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#ab9ff2] hover:bg-[#c1b5ff] text-[#0c0b10] font-extrabold text-lg px-9 py-4 rounded-full transition-all duration-200 transform hover:scale-[1.03] active:scale-[0.98] shadow-2xl shadow-[#ab9ff2]/40"
            >
              <Download size={22} strokeWidth={2.5} />
              <span>Download Raser</span>
            </a>
            <a
              href="https://github.com/tetoverse"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 text-white font-bold text-lg px-8 py-4 rounded-full border border-white/10 transition-all duration-200 hover:border-white/20"
            >
              <Github size={22} />
              <span>Explore GitHub</span>
            </a>
          </div>

          {/* Supported OS badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#b4b0c7]">
            <span className="flex items-center gap-2">
              <Monitor size={15} className="text-[#ab9ff2]" />
              Windows (x64 / ARM64)
            </span>
            <span className="hidden sm:inline opacity-30">•</span>
            <span className="flex items-center gap-2">
              <Monitor size={15} className="text-[#ab9ff2]" />
              macOS (Apple Silicon & Intel)
            </span>
            <span className="hidden sm:inline opacity-30">•</span>
            <span className="flex items-center gap-2">
              <Smartphone size={15} className="text-[#45e863]" />
              Android APK
            </span>
            <span className="hidden sm:inline opacity-30">•</span>
            <span className="flex items-center gap-2">
              <Globe size={15} className="text-[#6ca0fb]" />
              Web PWA
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { GhostLogo } from './GhostLogo.tsx';
import { 
  ArrowRight, 
  Copy, 
  Check, 
  Terminal as TerminalIcon, 
  Headphones, 
  Cpu, 
  Zap, 
  Radio, 
  Sliders, 
  Flame, 
  Layers 
} from 'lucide-react';

export const SectionTools: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeGenre, setActiveGenre] = useState('Phonk / Wave');

  const copyCommand = () => {
    navigator.clipboard.writeText('npm i hang-trace');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="products" className="py-24 md:py-36 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header (Phantom exact format: Title with inline Ghost SVG and See more link) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#ab9ff2] mb-3">
              THE RASECORP SUITE
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Software tools
              <br />
              for{' '}
              <span className="inline-flex items-center text-[#ab9ff2] align-middle mx-1">
                <GhostLogo size={42} glow />
              </span>{' '}
              everyone
            </h2>
          </div>

          <a
            href="https://github.com/tetoverse"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-base font-semibold text-[#ab9ff2] hover:text-[#c1b5ff] group pb-2"
          >
            <span>See all products</span>
            <ArrowRight size={18} className="transform group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>

        {/* Bento Grid Layout (Signature Phantom Rounded Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Raser Flagship (Span 8) */}
          <div className="md:col-span-8 rounded-[2.5rem] p-8 md:p-12 phantom-card flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 ambient-glow-purple opacity-40 pointer-events-none" />

            {/* Top Interactive Widget */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#ab9ff2]/15 text-[#ab9ff2] flex items-center justify-center">
                    <Headphones size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#b4b0c7]">FLAGSHIP PRODUCT</span>
                    <h4 className="text-lg font-bold text-white">Raser Music Ecosystem</h4>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#45e863]/10 text-[#45e863] border border-[#45e863]/20">
                  v2.4 Active
                </span>
              </div>

              {/* Interactive genre chips & live wave */}
              <div className="bg-[#0e0c15] p-6 rounded-2xl border border-white/10 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#9592a6]">
                    <Radio size={14} className="text-[#ab9ff2] animate-pulse" />
                    <span>AUDIO ENGINE SOURCE</span>
                  </div>
                  <div className="flex gap-2">
                    {['Phonk / Wave', 'Synthwave', 'Ambient 432Hz', 'Lofi'].map((genre) => (
                      <button
                        key={genre}
                        onClick={() => setActiveGenre(genre)}
                        className={`text-xs px-3 py-1 rounded-full transition-colors ${
                          activeGenre === genre
                            ? 'bg-[#ab9ff2] text-[#0c0b10] font-bold'
                            : 'bg-white/5 text-white/70 hover:bg-white/10'
                        }`}
                      >
                        {genre}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between bg-black/40 p-4 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#7d66d9] to-[#ab9ff2] flex items-center justify-center text-black font-extrabold text-sm">
                      RM
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{activeGenre} Beats</div>
                      <div className="text-xs text-[#9592a6] font-mono">YouTube Music & SoundCloud API</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 h-6">
                    {[60, 100, 40, 80, 50, 90, 70, 100, 30].map((h, i) => (
                      <span
                        key={i}
                        className="w-1 bg-[#ab9ff2] rounded-full animate-pulse"
                        style={{ height: `${h}%`, animationDelay: `${i * 120}ms` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Copy */}
            <div>
              <div className="text-xs font-mono text-[#ab9ff2] uppercase mb-2">Streaming & Player</div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Stream and discover all types of music in an instant.
              </h3>
              <p className="text-base text-[#b4b0c7] max-w-xl mb-6">
                Direct integration with YouTube Music and SoundCloud catalogs. Zero advertisements, local track caching, synchronized lyrics, and lossless output.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-white/70">
                <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                  ✓ Desktop (Electron & Native)
                </span>
                <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                  ✓ Mobile (Android APK)
                </span>
                <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                  ✓ Web PWA
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: hang-trace (Span 4) */}
          <div className="md:col-span-4 rounded-[2.5rem] p-8 md:p-10 phantom-card flex flex-col justify-between relative overflow-hidden group">
            
            {/* Terminal Preview Top */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-[#ff7243]/15 text-[#ff7243] flex items-center justify-center">
                  <TerminalIcon size={22} />
                </div>
                <button
                  onClick={copyCommand}
                  className="flex items-center gap-1.5 text-xs font-mono bg-white/5 hover:bg-white/10 text-white/80 px-3 py-1.5 rounded-full border border-white/10 transition-colors"
                >
                  {copied ? <Check size={13} className="text-[#45e863]" /> : <Copy size={13} />}
                  <span>{copied ? 'Copied' : 'npm i hang-trace'}</span>
                </button>
              </div>

              {/* Simulated Terminal */}
              <div className="bg-[#0a0812] rounded-2xl p-4 font-mono text-xs border border-white/10 shadow-inner space-y-2">
                <div className="flex items-center justify-between text-white/40 pb-2 border-b border-white/5">
                  <span>bash — node v26</span>
                  <span className="text-[#45e863]">● ACTIVE</span>
                </div>
                <div className="text-white/60">$ npm i -D hang-trace</div>
                <div className="text-[#ab9ff2] pt-1">
                  [hang-trace] Tracking active Promises...
                </div>
                <div className="text-[#ffd600] bg-[#ffd600]/10 p-2 rounded-lg border border-[#ffd600]/20">
                  ⚠ Dangling Promise at:
                  <div className="text-white font-bold">src/worker.ts:42:15</div>
                </div>
                <div className="text-[#45e863] text-[11px]">
                  ✓ Caller stack resolved in 0.4ms
                </div>
              </div>
            </div>

            {/* Bottom Copy */}
            <div>
              <div className="text-xs font-mono text-[#ff7243] uppercase mb-2">Developer Utility</div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                Find hanging promises in runtime.
              </h3>
              <p className="text-sm text-[#b4b0c7]">
                Zero dependencies. Instantly identifies dangling async calls with exact source files and line numbers.
              </p>
            </div>
          </div>

          {/* Card 3: Cross-Platform Performance (Span 4) */}
          <div className="md:col-span-4 rounded-[2.5rem] p-8 md:p-10 phantom-card flex flex-col justify-between">
            <div className="mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#6ca0fb]/15 text-[#6ca0fb] flex items-center justify-center mb-6">
                <Cpu size={22} />
              </div>

              <div className="bg-[#0e0c15] p-5 rounded-2xl border border-white/10 space-y-3">
                <div className="flex justify-between text-xs font-mono text-[#9592a6]">
                  <span>Memory Usage</span>
                  <span className="text-[#45e863] font-bold">34 MB</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#45e863] h-full w-[24%]" />
                </div>
                <div className="flex justify-between text-xs font-mono text-[#9592a6]">
                  <span>Startup Time</span>
                  <span className="text-[#ab9ff2] font-bold">180ms</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#ab9ff2] h-full w-[15%]" />
                </div>
              </div>
            </div>

            <div>
              <div className="text-xs font-mono text-[#6ca0fb] uppercase mb-2">Native Engine</div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                Ultra-lightweight footprint.
              </h3>
              <p className="text-sm text-[#b4b0c7]">
                No bloated frameworks or background battery drain. Tuned for raw execution speed across all operating systems.
              </p>
            </div>
          </div>

          {/* Card 4: High-Frequency Automation (Span 4) */}
          <div className="md:col-span-4 rounded-[2.5rem] p-8 md:p-10 phantom-card flex flex-col justify-between">
            <div className="mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#ffd600]/15 text-[#ffd600] flex items-center justify-center mb-6">
                <Zap size={22} />
              </div>

              <div className="bg-[#0e0c15] p-5 rounded-2xl border border-white/10 text-center space-y-2">
                <div className="text-3xl font-extrabold text-white font-mono">&lt; 1.4ms</div>
                <div className="text-xs font-mono text-[#ffd600]">Socket Ping & Automation Dispatch</div>
                <div className="text-[11px] text-[#9592a6]">High-concurrency thread pool</div>
              </div>
            </div>

            <div>
              <div className="text-xs font-mono text-[#ffd600] uppercase mb-2">Automation & Scrapers</div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                Go fast, go everywhere.
              </h3>
              <p className="text-sm text-[#b4b0c7]">
                High-performance bots, Discord utilities, and scraper engines that never miss an event.
              </p>
            </div>
          </div>

          {/* Card 5: Rase Terminal (Span 4) */}
          <div className="md:col-span-4 rounded-[2.5rem] p-8 md:p-10 phantom-card flex flex-col justify-between">
            <div className="mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#ab9ff2]/15 text-[#ab9ff2] flex items-center justify-center mb-6">
                <Layers size={22} />
              </div>

              <div className="bg-[#0e0c15] p-5 rounded-2xl border border-white/10 font-mono text-xs space-y-1.5 text-white/70">
                <div className="text-[#ab9ff2]">$ rase --version</div>
                <div>rase-cli v3.1.0-release</div>
                <div className="text-[#45e863]">✓ All packages linked</div>
                <div className="text-white/40">Ready for commands...</div>
              </div>
            </div>

            <div>
              <div className="text-xs font-mono text-[#ab9ff2] uppercase mb-2">CLI Suite</div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                Access powerful dev tools on desktop.
              </h3>
              <p className="text-sm text-[#b4b0c7]">
                Command-line interfaces designed for power users, scripting, and continuous integration.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

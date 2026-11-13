import React, { useState } from 'react';
import { GhostLogo } from './GhostLogo.tsx';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  Sparkles, 
  CheckCircle2, 
  Terminal, 
  ArrowRight,
  Download,
  Github
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background radial glow blurs (Phantom signature lavender/purple lighting) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] ambient-glow-purple opacity-70" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] ambient-glow-cyan opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 flex flex-col items-center text-center">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c1926]/90 border border-[#ab9ff2]/30 text-[#ab9ff2] text-xs md:text-sm font-semibold tracking-wide uppercase mb-6 shadow-sm shadow-[#ab9ff2]/10 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#45e863] animate-pulse" />
          <span>Where creators build</span>
        </div>

        {/* Grand H1 Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-extrabold tracking-[-0.03em] leading-[1.08] text-white max-w-5xl mb-8">
          <span>Your home for building </span>
          <br className="hidden sm:inline" />
          <span className="text-[#ab9ff2]">software, audio, </span>
          <br className="hidden sm:inline" />
          <span>tools, and more</span>
        </h1>

        {/* Hero CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 md:mb-20">
          <a
            href="#download"
            className="flex items-center gap-3 bg-[#ab9ff2] hover:bg-[#c1b5ff] text-[#0c0b10] font-bold text-base md:text-lg px-8 py-4 rounded-full transition-all duration-200 transform hover:scale-[1.03] active:scale-[0.98] shadow-2xl shadow-[#ab9ff2]/30"
          >
            <Download size={20} strokeWidth={2.5} />
            <span>Download Raser</span>
          </a>
          <a
            href="https://github.com/tetoverse"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 bg-[#171520] hover:bg-[#201d2d] text-white border border-white/10 font-semibold text-base md:text-lg px-7 py-4 rounded-full transition-all duration-200 hover:border-white/25"
          >
            <Github size={20} />
            <span>View GitHub</span>
            <ArrowRight size={16} className="text-[#ab9ff2]" />
          </a>
        </div>

        {/* Central Floating Mockup (Phantom Signature Device Centerpiece) */}
        <div className="relative w-full max-w-4xl mx-auto">
          
          {/* Floating Sticker 1: hang-trace badge (Top Left) */}
          <div className="hidden lg:flex absolute -left-12 top-16 z-20 items-center gap-3 bg-[#161421]/95 border border-[#ab9ff2]/30 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-xl shadow-black/60 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
            <div className="p-2 rounded-xl bg-[#ab9ff2]/15 text-[#ab9ff2]">
              <Terminal size={20} />
            </div>
            <div className="text-left">
              <div className="text-xs font-mono text-[#b4b0c7]">hang-trace</div>
              <div className="text-sm font-semibold text-white flex items-center gap-1">
                0 Dangling Promises
                <CheckCircle2 size={14} className="text-[#45e863]" />
              </div>
            </div>
          </div>

          {/* Floating Sticker 2: SoundCloud & YouTube Sync (Top Right) */}
          <div className="hidden lg:flex absolute -right-10 top-20 z-20 items-center gap-3 bg-[#161421]/95 border border-white/10 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-xl shadow-black/60 transform rotate-6 hover:rotate-0 transition-transform duration-300">
            <div className="p-2 rounded-xl bg-[#ff7243]/20 text-[#ff7243]">
              <Sparkles size={20} />
            </div>
            <div className="text-left">
              <div className="text-xs font-mono text-[#b4b0c7]">YouTube & SoundCloud</div>
              <div className="text-sm font-semibold text-white">Lossless Streaming</div>
            </div>
          </div>

          {/* Floating Sticker 3: Performance Metric (Bottom Left) */}
          <div className="hidden lg:flex absolute -left-8 bottom-12 z-20 items-center gap-3 bg-[#161421]/95 border border-[#45e863]/30 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-xl shadow-black/60 transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#45e863] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#45e863]"></span>
            </span>
            <div className="text-left">
              <div className="text-xs text-[#9592a6]">Native Engine</div>
              <div className="text-sm font-bold text-white">120 FPS • 0.8ms</div>
            </div>
          </div>

          {/* Main Device Showcase Frame */}
          <div className="relative mx-auto rounded-[2.5rem] p-3 md:p-4 bg-gradient-to-b from-[#ab9ff2]/30 via-white/10 to-transparent shadow-[0_0_80px_-20px_rgba(171,159,242,0.35)]">
            <div className="rounded-[2rem] bg-[#121019] border border-white/15 overflow-hidden shadow-2xl">
              
              {/* Window / App Header Bar */}
              <div className="bg-[#171522] px-6 py-3.5 border-b border-white/[0.08] flex items-center justify-between text-xs text-[#9592a6]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  <span className="ml-3 font-mono text-white/70">Raser Desktop v2.4.0</span>
                </div>
                <div className="flex items-center gap-3 font-mono">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#45e863]/10 text-[#45e863] border border-[#45e863]/20">
                    ONLINE
                  </span>
                  <span className="hidden sm:inline">24-bit / 96kHz Lossless</span>
                </div>
              </div>

              {/* Inside App Player UI */}
              <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
                
                {/* Album Cover with Glow */}
                <div className="md:col-span-5 relative group">
                  <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#2a1b4e] via-[#1c182d] to-[#0c0a15] border border-white/10 relative p-6 flex flex-col justify-between shadow-inner">
                    <div className="flex justify-between items-center text-white/50 text-xs font-mono">
                      <span>RASE AUDIO LABS</span>
                      <GhostLogo size={20} className="text-[#ab9ff2]" />
                    </div>

                    {/* Dynamic Equalizer Visualizer */}
                    <div className="flex items-end justify-center gap-1.5 h-32 my-auto">
                      {[40, 75, 55, 90, 100, 80, 60, 95, 70, 85, 45, 90, 65, 80].map((h, i) => (
                        <div
                          key={i}
                          className="w-2.5 bg-gradient-to-t from-[#7d66d9] to-[#ab9ff2] rounded-full transition-all duration-300"
                          style={{
                            height: isPlaying ? `${Math.max(15, (h + (i % 3) * 15) % 100)}%` : '15%',
                            animation: isPlaying ? `pulse 1.${(i % 5) + 2}s infinite alternate` : 'none',
                          }}
                        />
                      ))}
                    </div>

                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-white font-bold text-lg">Hyper-Frequency</div>
                        <div className="text-xs text-[#ab9ff2] font-mono">RaseCorp Originals</div>
                      </div>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-white/80">
                        HQ
                      </span>
                    </div>
                  </div>
                </div>

                {/* Player Details & Controls */}
                <div className="md:col-span-7 flex flex-col justify-center space-y-6">
                  <div>
                    <div className="inline-block text-xs font-mono tracking-wider text-[#ab9ff2] uppercase mb-1">
                      Now Playing • Streaming from SoundCloud & YouTube Music
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                      Celestial Echoes (Original Mix)
                    </h3>
                    <p className="text-sm text-[#b4b0c7]">
                      Artist: <span className="text-white font-medium">Tetoverse & Rase Collective</span>
                    </p>
                  </div>

                  {/* Audio scrubber */}
                  <div className="space-y-2">
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden relative cursor-pointer group">
                      <div className="bg-gradient-to-r from-[#ab9ff2] to-[#c1b5ff] h-full w-[68%] rounded-full relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    <div className="flex justify-between text-xs font-mono text-[#9592a6]">
                      <span>02:44</span>
                      <span>03:58</span>
                    </div>
                  </div>

                  {/* Playback Controls */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-4">
                      <button className="text-white/60 hover:text-white transition-colors">
                        <SkipBack size={22} />
                      </button>
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-14 h-14 rounded-full bg-[#ab9ff2] text-[#0c0b10] flex items-center justify-center hover:bg-[#c1b5ff] transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-[#ab9ff2]/30"
                        aria-label="Toggle playback"
                      >
                        {isPlaying ? <Pause size={24} fill="#0c0b10" /> : <Play size={24} fill="#0c0b10" className="ml-1" />}
                      </button>
                      <button className="text-white/60 hover:text-white transition-colors">
                        <SkipForward size={22} />
                      </button>
                    </div>

                    <div className="flex items-center gap-3 text-white/70">
                      <Volume2 size={18} />
                      <div className="w-20 bg-white/10 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-white/80 h-full w-[80%]" />
                      </div>
                    </div>
                  </div>

                  {/* Live sync feature chips */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/[0.08] text-center text-xs">
                    <div className="bg-white/[0.04] p-2.5 rounded-xl border border-white/5">
                      <div className="text-[#ab9ff2] font-semibold">Zero Ads</div>
                      <div className="text-[11px] text-white/50">Always Free</div>
                    </div>
                    <div className="bg-white/[0.04] p-2.5 rounded-xl border border-white/5">
                      <div className="text-[#45e863] font-semibold">Offline Cache</div>
                      <div className="text-[11px] text-white/50">Instant Play</div>
                    </div>
                    <div className="bg-white/[0.04] p-2.5 rounded-xl border border-white/5">
                      <div className="text-[#6ca0fb] font-semibold">Open Source</div>
                      <div className="text-[11px] text-white/50">GPL-3.0</div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

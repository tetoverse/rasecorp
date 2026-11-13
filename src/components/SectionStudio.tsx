import React from 'react';
import { GhostLogo } from './GhostLogo.tsx';
import { ArrowRight, Code2, Users, Monitor, Smartphone, Globe, Box } from 'lucide-react';

export const SectionStudio: React.FC = () => {
  return (
    <section id="studio" className="py-24 md:py-36 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header (Phantom layout) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#ab9ff2] mb-3">
              CREATIVE LAB & WORKFLOW
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Build, Ship, &amp;
              <br />
              <span className="inline-flex items-center text-[#ab9ff2] align-middle mr-2">
                <GhostLogo size={42} glow />
              </span>
              Scale
            </h2>
          </div>

          <a
            href="https://github.com/tetoverse"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-base font-semibold text-[#ab9ff2] hover:text-[#c1b5ff] group pb-2"
          >
            <span>See more Studio</span>
            <ArrowRight size={18} className="transform group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>

        {/* 3 Large Horizon Cards (Phantom signature horizontal 3-card stack) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Studio Card 1 */}
          <div className="rounded-[2.5rem] p-8 md:p-10 phantom-card flex flex-col justify-between h-[460px] relative overflow-hidden group">
            {/* Visual Header */}
            <div className="h-44 rounded-2xl bg-[#0e0c15] border border-white/10 p-5 flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-center justify-between text-xs font-mono text-[#b4b0c7]">
                <span className="flex items-center gap-1.5">
                  <Box size={14} className="text-[#ab9ff2]" />
                  tetoverse/rasecorp
                </span>
                <span className="text-[#45e863] text-[10px] bg-[#45e863]/10 px-2 py-0.5 rounded-full">
                  SYNCED
                </span>
              </div>

              <div className="space-y-1.5 font-mono text-[11px] text-white/60">
                <div className="flex items-center gap-2">
                  <span className="text-[#ab9ff2]">├──</span> src/core/audio.rs
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#ab9ff2]">├──</span> packages/hang-trace
                </div>
                <div className="flex items-center gap-2 text-white">
                  <span className="text-[#ab9ff2]">└──</span> apps/desktop-client
                </div>
              </div>

              <div className="text-[10px] text-white/40 font-mono">
                13 Public Repositories • 100% Open Source
              </div>
            </div>

            {/* Content */}
            <div className="mt-6">
              <h3 className="text-2xl font-extrabold text-white mb-2.5">
                One home for all your software.
              </h3>
              <p className="text-sm text-[#b4b0c7] leading-relaxed">
                Centralized open architecture. From audio DSP algorithms to high-speed CLI utilities, everything is crafted under one unified ecosystem.
              </p>
            </div>
          </div>

          {/* Studio Card 2 */}
          <div className="rounded-[2.5rem] p-8 md:p-10 phantom-card flex flex-col justify-between h-[460px] relative overflow-hidden group">
            {/* Visual Header */}
            <div className="h-44 rounded-2xl bg-[#0e0c15] border border-white/10 p-5 flex flex-col justify-center items-center text-center relative overflow-hidden">
              <div className="flex -space-x-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#7d66d9] to-[#ab9ff2] border-2 border-[#0c0b10] flex items-center justify-center font-bold text-sm text-black">
                  HM
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#6ca0fb] to-[#99e2ff] border-2 border-[#0c0b10] flex items-center justify-center font-bold text-sm text-black">
                  RC
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#45e863] to-[#ab9ff2] border-2 border-[#0c0b10] flex items-center justify-center font-bold text-sm text-black">
                  +3
                </div>
              </div>
              <div className="text-xs font-mono text-[#ab9ff2] font-semibold">
                Peer-to-Peer Realtime Collab
              </div>
              <div className="text-[11px] text-[#9592a6] mt-1 font-mono">
                Live branch sync • Instant hot reload
              </div>
            </div>

            {/* Content */}
            <div className="mt-6">
              <h3 className="text-2xl font-extrabold text-white mb-2.5">
                Ship in seconds. Even collaborate with friends.
              </h3>
              <p className="text-sm text-[#b4b0c7] leading-relaxed">
                No bureaucratic process. Build, iterate, and deploy prototypes in minutes with collective peer reviews and live discord integration.
              </p>
            </div>
          </div>

          {/* Studio Card 3 */}
          <div className="rounded-[2.5rem] p-8 md:p-10 phantom-card flex flex-col justify-between h-[460px] relative overflow-hidden group">
            {/* Visual Header */}
            <div className="h-44 rounded-2xl bg-[#0e0c15] border border-white/10 p-5 flex flex-col justify-center items-center relative overflow-hidden">
              <div className="grid grid-cols-2 gap-3 w-full">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-white">
                  <Monitor size={16} className="text-[#ab9ff2]" />
                  <span>Windows / macOS</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-white">
                  <Globe size={16} className="text-[#6ca0fb]" />
                  <span>Web PWA</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-white">
                  <Smartphone size={16} className="text-[#45e863]" />
                  <span>Android APK</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-white">
                  <Code2 size={16} className="text-[#ffd600]" />
                  <span>Linux CLI</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="mt-6">
              <h3 className="text-2xl font-extrabold text-white mb-2.5">
                Runs everywhere you do.
              </h3>
              <p className="text-sm text-[#b4b0c7] leading-relaxed">
                Whether you're developing on Arch Linux, jamming on Windows, or testing builds on Android mobile, RaseCorp apps are fully cross-platform.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

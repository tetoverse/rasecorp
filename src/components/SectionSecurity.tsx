import React from 'react';
import { GhostLogo } from './GhostLogo.tsx';
import { ArrowRight, ShieldCheck, HeartHandshake, Bug, GitFork } from 'lucide-react';

export const SectionSecurity: React.FC = () => {
  return (
    <section id="security" className="py-24 md:py-36 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header (Phantom exact format) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#ab9ff2] mb-3">
              INTEGRITY & OPEN ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Controlled by you,
              <br />
              crafted{' '}
              <span className="inline-flex items-center text-[#ab9ff2] align-middle mx-1">
                <GhostLogo size={42} glow />
              </span>{' '}
              by us
            </h2>
          </div>

          <a
            href="https://github.com/tetoverse"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-base font-semibold text-[#ab9ff2] hover:text-[#c1b5ff] group pb-2"
          >
            <span>See more Integrity</span>
            <ArrowRight size={18} className="transform group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>

        {/* 4 Cards Grid (Phantom layout: 2x2 or 4-col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="rounded-[2rem] p-8 phantom-card flex flex-col justify-between">
            <div className="w-12 h-12 rounded-2xl bg-[#ab9ff2]/15 text-[#ab9ff2] flex items-center justify-center mb-8">
              <ShieldCheck size={26} />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-white mb-2">
                Local-first & private.
              </h3>
              <p className="text-sm text-[#b4b0c7] leading-relaxed">
                Self-hosted and offline-first means you control your data. We never collect telemetry, track listening habits, or sell user metrics.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-[2rem] p-8 phantom-card flex flex-col justify-between">
            <div className="w-12 h-12 rounded-2xl bg-[#45e863]/15 text-[#45e863] flex items-center justify-center mb-8">
              <HeartHandshake size={26} />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-white mb-2">
                Active community 24/7.
              </h3>
              <p className="text-sm text-[#b4b0c7] leading-relaxed">
                Direct access to core builders. Discuss features, report bugs, and exchange ideas directly in our open Discord and GitHub discussions.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-[2rem] p-8 phantom-card flex flex-col justify-between">
            <div className="w-12 h-12 rounded-2xl bg-[#ffd600]/15 text-[#ffd600] flex items-center justify-center mb-8">
              <Bug size={26} />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-white mb-2">
                Runtime bug detection.
              </h3>
              <p className="text-sm text-[#b4b0c7] leading-relaxed">
                Integrated diagnostic layers like hang-trace monitor dangling asynchronous promises and catch memory leaks before they reach production.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded-[2rem] p-8 phantom-card flex flex-col justify-between">
            <div className="w-12 h-12 rounded-2xl bg-[#6ca0fb]/15 text-[#6ca0fb] flex items-center justify-center mb-8">
              <GitFork size={26} />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-white mb-2">
                Open source & forkable.
              </h3>
              <p className="text-sm text-[#b4b0c7] leading-relaxed">
                Every line of code is inspectable on GitHub. Audit the source, submit pull requests, or fork any project to tailor it to your workflow.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

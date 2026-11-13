import React, { useState } from 'react';
import { GhostLogo } from './GhostLogo.tsx';
import { ArrowRight, Check, Github, Twitter, Youtube, Disc as DiscordIcon } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="pt-20 pb-12 border-t border-white/[0.08] bg-[#09080d]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Newsletter Signup (Phantom format) */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-16 border-b border-white/[0.08] gap-8">
          <div className="max-w-lg">
            <h4 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
              Sign up for our changelog and join the growing RaseCorp community.
            </h4>
            <p className="text-sm text-[#9592a6]">
              Get notified when new builds, native releases, or experimental tools drop.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="bg-[#14121c] border border-white/10 rounded-full px-5 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#ab9ff2] transition-colors w-full sm:w-80"
            />
            <button
              type="submit"
              className="bg-[#ab9ff2] hover:bg-[#c1b5ff] text-[#0c0b10] font-bold text-sm px-7 py-3.5 rounded-full transition-all flex items-center justify-center gap-2"
            >
              {subscribed ? (
                <>
                  <Check size={16} />
                  <span>Subscribed!</span>
                </>
              ) : (
                <>
                  <span>Sign up</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>
        </div>

        {/* 4 Navigation Columns (Phantom layout) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16">
          
          {/* Column 1: Product */}
          <div>
            <h5 className="text-xs font-mono uppercase text-[#ab9ff2] tracking-wider mb-5">Product</h5>
            <ul className="space-y-3 text-sm text-[#b4b0c7]">
              <li><a href="https://github.com/tetoverse/Raser" className="hover:text-white transition-colors">Raser Desktop</a></li>
              <li><a href="https://github.com/tetoverse/RaserWeb" className="hover:text-white transition-colors">RaserWeb</a></li>
              <li><a href="https://github.com/tetoverse/RaserNative" className="hover:text-white transition-colors">RaserNative</a></li>
              <li><a href="https://github.com/tetoverse/hang-trace" className="hover:text-white transition-colors">hang-trace</a></li>
              <li><a href="https://github.com/tetoverse/RaserMobile" className="hover:text-white transition-colors">RaserMobile APK</a></li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h5 className="text-xs font-mono uppercase text-[#ab9ff2] tracking-wider mb-5">Resources</h5>
            <ul className="space-y-3 text-sm text-[#b4b0c7]">
              <li><a href="https://github.com/tetoverse" className="hover:text-white transition-colors">GitHub Organization</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="https://github.com/tetoverse/Raser/releases" className="hover:text-white transition-colors">Releases & Binaries</a></li>
              <li><a href="https://iloveteto.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Blog & Research</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Security Audit</a></li>
            </ul>
          </div>

          {/* Column 3: Collective */}
          <div>
            <h5 className="text-xs font-mono uppercase text-[#ab9ff2] tracking-wider mb-5">Company</h5>
            <ul className="space-y-3 text-sm text-[#b4b0c7]">
              <li><a href="#studio" className="hover:text-white transition-colors">About RaseCorp</a></li>
              <li><a href="https://github.com/tetoverse" className="hover:text-white transition-colors">Core Team</a></li>
              <li><a href="#download" className="hover:text-white transition-colors">Open Source Manifesto</a></li>
              <li><a href="https://iloveteto.com" className="hover:text-white transition-colors">iloveteto.com</a></li>
              <li><a href="mailto:contact@rasecorp.com" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h5 className="text-xs font-mono uppercase text-[#ab9ff2] tracking-wider mb-5">Socials</h5>
            <ul className="space-y-3 text-sm text-[#b4b0c7]">
              <li>
                <a href="https://github.com/tetoverse" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <Github size={15} />
                  <span>GitHub (@tetoverse)</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <Twitter size={15} />
                  <span>X (Twitter)</span>
                </a>
              </li>
              <li>
                <a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <DiscordIcon size={15} />
                  <span>Discord Community</span>
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <Youtube size={15} />
                  <span>YouTube</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Line (Phantom format) */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-xs text-[#9592a6] gap-4">
          <div className="flex items-center gap-3">
            <GhostLogo size={20} className="text-[#ab9ff2]" />
            <span>© RaseCorp 2026. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#45e863] animate-pulse" />
              <span>All Systems Operational</span>
            </span>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Preferences</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

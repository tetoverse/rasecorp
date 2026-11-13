import React, { useState, useEffect } from 'react';
import { GhostLogo } from './GhostLogo.tsx';
import { Menu, X, ChevronDown, Download, ExternalLink } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0c0b10]/85 backdrop-blur-xl border-b border-white/[0.07] py-3.5 shadow-2xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="text-[#ab9ff2] transition-transform duration-300 group-hover:scale-110">
            <GhostLogo size={26} glow />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-[#ab9ff2] transition-colors">
            RaseCorp
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-[14.5px] font-medium text-[#b4b0c7]">
          <a href="#products" className="hover:text-white transition-colors">
            Products
          </a>
          <a href="#studio" className="hover:text-white transition-colors">
            Studio
          </a>
          <a href="#security" className="hover:text-white transition-colors">
            Security
          </a>
          <a href="#developers" className="hover:text-white transition-colors">
            Developers
          </a>
          <a 
            href="https://github.com/tetoverse" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            GitHub
            <ExternalLink size={13} className="opacity-60" />
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#download"
            className="inline-flex items-center gap-2 bg-[#ab9ff2] hover:bg-[#c1b5ff] text-[#0c0b10] font-semibold text-[14px] px-5 py-2.5 rounded-full transition-all duration-200 transform hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-[#ab9ff2]/20"
          >
            <Download size={15} strokeWidth={2.5} />
            <span>Download</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white/80 hover:text-white p-2 rounded-lg"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#100e17] border-b border-white/10 px-6 py-6 space-y-4">
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#b4b0c7] hover:text-white text-base font-medium py-1"
          >
            Products
          </a>
          <a
            href="#studio"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#b4b0c7] hover:text-white text-base font-medium py-1"
          >
            Studio
          </a>
          <a
            href="#security"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#b4b0c7] hover:text-white text-base font-medium py-1"
          >
            Security
          </a>
          <a
            href="#developers"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#b4b0c7] hover:text-white text-base font-medium py-1"
          >
            Developers
          </a>
          <a
            href="https://github.com/tetoverse"
            target="_blank"
            rel="noreferrer"
            className="block text-[#b4b0c7] hover:text-white text-base font-medium py-1"
          >
            GitHub
          </a>
          <div className="pt-2">
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#ab9ff2] text-[#0c0b10] font-semibold py-3 rounded-full text-center"
            >
              <Download size={16} />
              <span>Download</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

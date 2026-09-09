import React, { useState, useEffect } from 'react';
import { Download, Sparkles, Cpu, ShieldCheck, Menu, X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { VersionInfo } from '../types';
import { WorldSphereLogo } from './WorldSphereLogo';

interface NavbarProps {
  latestVersion: VersionInfo;
  onOpenDownloadModal: (version: VersionInfo) => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'descargas', label: 'Descarga', icon: <Download className="w-3.5 h-3.5" /> },
  { id: 'caracteristicas', label: 'Características', icon: <Sparkles className="w-3.5 h-3.5" /> },
  { id: 'hardware', label: 'Hardware', icon: <Cpu className="w-3.5 h-3.5" /> },
  { id: 'guia', label: 'Instalación', icon: <ShieldCheck className="w-3.5 h-3.5" /> },
];

export const Navbar: React.FC<NavbarProps> = ({ latestVersion, onOpenDownloadModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('descargas');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // ScrollSpy: Detectar la sección actual en pantalla
      const scrollPosition = window.scrollY + 220;
      
      for (const item of NAV_ITEMS) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-2.5 bg-white/80 backdrop-blur-2xl border-b border-slate-200/60 shadow-[0_4px_20px_rgba(15,23,42,0.04)]' 
        : 'py-4 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand con Mundo 3D transparente */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="group-hover:scale-105 transition-transform duration-300 shrink-0">
              <WorldSphereLogo size={42} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 group-hover:text-sky-700 transition-colors">
                  TanTan <span className="font-light text-slate-500">SistemPOS</span>
                </span>
                <span className="text-[11px] font-mono font-medium text-slate-500 tracking-tight pl-1 border-l border-slate-300">
                  {latestVersion.version}
                </span>
              </div>
              <p className="text-[10px] font-medium text-slate-500 hidden sm:block">
                Centro Oficial de Software para Windows
              </p>
            </div>
          </a>

          {/* Desktop Nav Links con Barra Deslizante (Sliding Active Tab) */}
          <nav className="hidden md:flex items-center p-1 rounded-full bg-slate-100/90 backdrop-blur-md border border-slate-200/80 shadow-inner relative">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors z-10 flex items-center gap-1.5 cursor-pointer ${
                    isActive ? 'text-slate-950 font-bold' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {/* Cápsula deslizante animada */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.45 }}
                      className="absolute inset-0 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-slate-200/90 z-[-1]"
                    />
                  )}
                  <span className={isActive ? 'text-sky-600' : 'text-slate-400'}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenDownloadModal(latestVersion)}
              className="liquid-glass-button-primary px-4 py-2 rounded-xl text-xs font-bold tracking-wide flex items-center gap-2 group cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-sky-300 group-hover:scale-110 transition-transform" />
              <span>Instalador Windows</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/80 border border-slate-200 text-slate-700 shadow-sm"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200 shadow-xl flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick(item.id);
                }}
                className={`px-3 py-2 rounded-xl text-sm font-semibold flex items-center gap-2.5 text-left transition-colors ${
                  activeSection === item.id ? 'bg-slate-100 text-sky-700 font-bold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
            <div className="pt-2 border-t border-slate-200 mt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDownloadModal(latestVersion);
                }}
                className="w-full py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md"
              >
                <Download className="w-4 h-4 text-sky-400" />
                Descargar Instalador ({latestVersion.version})
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

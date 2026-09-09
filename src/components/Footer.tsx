import React from 'react';
import { Download, Activity, ArrowUp } from 'lucide-react';
import type { VersionInfo } from '../types';
import { WorldSphereLogo } from './WorldSphereLogo';

interface FooterProps {
  latestVersion: VersionInfo;
  onOpenDownloadModal: (version: VersionInfo) => void;
}

export const Footer: React.FC<FooterProps> = ({ latestVersion, onOpenDownloadModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-12 bg-slate-900 text-white relative overflow-hidden">
      {/* Luz ambiente */}
      <div className="ambient-glow w-[500px] h-[500px] bg-sky-900/30 -bottom-40 left-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <WorldSphereLogo size={38} />
              <span className="text-xl font-black tracking-tight text-white">
                TanTan <span className="font-light text-slate-400">SistemPOS</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Software de Punto de Venta de alto rendimiento para Windows. Inventario PEPS, blindaje con PIN de retiros y tickets normados por PROFECO.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 px-3 py-1.5 rounded-full border border-emerald-800/60 w-fit">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>Canal Oficial de Actualizaciones Activo • Servidores 100% Operativos</span>
            </div>
          </div>

          {/* Col 2: Enlaces Rápidos */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#descargas" className="hover:text-white transition-colors">Centro de Descargas</a></li>
              <li><a href="#caracteristicas" className="hover:text-white transition-colors">Características POS</a></li>
              <li><a href="#versiones" className="hover:text-white transition-colors">Historial de Versiones</a></li>
              <li><a href="#hardware" className="hover:text-white transition-colors">Hardware Compatible</a></li>
              <li><a href="#guia" className="hover:text-white transition-colors">Guía de Instalación</a></li>
            </ul>
          </div>

          {/* Col 3: Descarga Directa */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Descarga Rápida
            </h4>
            <button
              onClick={() => onOpenDownloadModal(latestVersion)}
              className="w-full py-2.5 px-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-lg cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Descargar {latestVersion.version}</span>
            </button>
            <div className="text-[11px] text-slate-500 text-center">
              Para Windows 10/11 x64 • {latestVersion.fileSize}
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} TanTan SistemPOS. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

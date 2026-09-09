import React, { useState } from 'react';
import { Download, Check, Copy, FileText, HardDrive } from 'lucide-react';
import type { VersionInfo } from '../types';

interface VersionSelectorProps {
  versions: VersionInfo[];
  onOpenDownloadModal: (version: VersionInfo) => void;
  onOpenChangelogModal: (version: VersionInfo) => void;
}

export const VersionSelector: React.FC<VersionSelectorProps> = ({
  versions,
  onOpenDownloadModal,
  onOpenChangelogModal,
}) => {
  const [copiedHash, setCopiedHash] = useState<string | null>(null);
  const currentVersion = versions[0];

  const handleCopyHash = (hash: string, version: string) => {
    navigator.clipboard.writeText(hash);
    setCopiedHash(version);
    setTimeout(() => setCopiedHash(null), 2500);
  };

  if (!currentVersion) return null;

  return (
    <section id="descargas" className="py-20 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header de Sección */}
        <div className="max-w-3xl mb-12 pb-6 border-b border-slate-200/80">
          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-2">
            01 / Paquete Oficial de Instalación
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Descarga TanTan SistemPOS para Windows
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
            Paquete oficial verificado criptográficamente con instalador directo y versión portable sin requerimiento de instalación.
          </p>
        </div>

        {/* Tarjeta Principal de la Versión Oficial */}
        <div className="liquid-glass-panel rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl max-w-4xl mx-auto">
          
          {/* Encabezado */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-5 mb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-3xl font-black text-slate-900 font-mono tracking-tight">
                  TanTan SistemPOS {currentVersion.version}
                </h3>
                <span className="text-xs font-mono font-medium text-slate-500">
                  // {currentVersion.codename}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Lanzamiento Oficial: {currentVersion.releaseDate} • {currentVersion.windowsSupport}
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200 shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Versión Oficial</span>
            </div>
          </div>

          <p className="text-sm text-slate-700 font-normal leading-relaxed mb-8">
            {currentVersion.tagline}
          </p>

          {/* Especificaciones técnicas */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-8 text-xs font-mono">
            <div>
              <div className="text-slate-500 text-[10px] uppercase">Tamaño Archivo</div>
              <div className="font-bold text-slate-800 text-xs mt-0.5">{currentVersion.fileSize}</div>
            </div>
            <div>
              <div className="text-slate-500 text-[10px] uppercase">Arquitectura</div>
              <div className="font-bold text-slate-800 text-xs mt-0.5">{currentVersion.architecture.join(', ')}</div>
            </div>
            <div>
              <div className="text-slate-500 text-[10px] uppercase">Base de Datos</div>
              <div className="font-bold text-slate-800 text-xs mt-0.5">SQLite Local-First</div>
            </div>
            <div>
              <div className="text-slate-500 text-[10px] uppercase">Licencia</div>
              <div className="font-bold text-slate-800 text-xs mt-0.5">Comercial / Definitiva</div>
            </div>
          </div>

          {/* Novedades Incluidas */}
          <div className="space-y-3 mb-8">
            <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
              Novedades incluidas en esta versión:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {currentVersion.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-white/70 p-2.5 rounded-xl border border-white">
                  <span className="text-sky-600 font-mono text-[10px] mt-0.5">↳</span>
                  <span className="leading-relaxed font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SHA-256 Hash */}
          <div className="p-3 rounded-xl bg-slate-100/80 border border-slate-200 flex items-center justify-between gap-3 mb-8">
            <div className="truncate font-mono text-[11px] text-slate-600">
              <span className="font-bold text-slate-700">Checksum SHA-256: </span>
              {currentVersion.sha256}
            </div>
            <button
              onClick={() => handleCopyHash(currentVersion.sha256, currentVersion.version)}
              className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-600 transition-colors shrink-0 cursor-pointer"
              title="Copiar Hash SHA-256"
            >
              {copiedHash === currentVersion.version ? (
                <Check className="w-4 h-4 text-emerald-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Botones de Descarga */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => onOpenDownloadModal(currentVersion)}
              className="w-full sm:flex-1 py-3.5 px-6 rounded-xl text-xs font-bold liquid-glass-button-primary flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Download className="w-4 h-4 text-sky-400" />
              <span>Descargar Instalador Oficial para Windows (.exe)</span>
            </button>

            {currentVersion.portableUrl && (
              <button
                onClick={() => onOpenDownloadModal({ ...currentVersion, codename: `${currentVersion.codename} (Portable)` })}
                className="w-full sm:w-auto py-3.5 px-5 rounded-xl text-xs font-bold liquid-glass-button-secondary flex items-center justify-center gap-2 cursor-pointer text-slate-800"
              >
                <HardDrive className="w-4 h-4 text-slate-500" />
                <span>Versión .ZIP Portable</span>
              </button>
            )}

            <button
              onClick={() => onOpenChangelogModal(currentVersion)}
              className="w-full sm:w-auto py-3.5 px-5 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-slate-500" />
              <span>Notas de Versión</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

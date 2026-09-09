import React from 'react';
import { X, FileText, Download, Sparkles, Wrench, Shield, CheckCircle } from 'lucide-react';
import type { VersionInfo, ChangelogItem } from '../types';

interface ChangelogModalProps {
  version: VersionInfo | null;
  onClose: () => void;
  onDownload: (version: VersionInfo) => void;
}

export const ChangelogModal: React.FC<ChangelogModalProps> = ({ version, onClose, onDownload }) => {
  if (!version) return null;

  const getItemBadge = (type: ChangelogItem['type']) => {
    switch (type) {
      case 'feature':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-300">
            <Sparkles className="w-3 h-3 text-emerald-600" /> Nueva Función
          </span>
        );
      case 'improvement':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-sky-100 text-sky-800 border border-sky-300">
            Mejora
          </span>
        );
      case 'fix':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 border border-amber-300">
            <Wrench className="w-3 h-3 text-amber-600" /> Corrección
          </span>
        );
      case 'security':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-purple-100 text-purple-800 border border-purple-300">
            <Shield className="w-3 h-3 text-purple-600" /> Seguridad
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="liquid-glass-panel bg-white/95 rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-white shadow-2xl relative max-h-[85vh] flex flex-col animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-200 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
              <FileText className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-black text-slate-900 font-mono">
                  Notas de la Versión {version.version}
                </h3>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  {version.codename}
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Publicado en {version.releaseDate} • {version.fileSize}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Changelog Items Scrollable */}
        <div className="overflow-y-auto py-6 space-y-4 pr-1">
          <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Registro Detallado de Cambios:
          </div>

          {version.changelog.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3"
            >
              <div className="shrink-0 pt-0.5">
                {getItemBadge(item.type)}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {item.text}
              </p>
            </div>
          ))}

          {/* Highlights Box */}
          <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200 mt-6">
            <div className="text-xs font-bold text-sky-900 mb-2">
              Aspectos Destacados de {version.version}:
            </div>
            <ul className="space-y-1.5 text-xs text-sky-800">
              {version.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-sky-600 mt-0.5 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-4 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
          >
            Cerrar
          </button>

          <button
            onClick={() => {
              onClose();
              onDownload(version);
            }}
            className="px-5 py-2.5 rounded-xl liquid-glass-button-primary text-xs font-bold flex items-center gap-2"
          >
            <Download className="w-4 h-4 text-sky-400" />
            <span>Descargar Esta Versión ({version.version})</span>
          </button>
        </div>

      </div>
    </div>
  );
};

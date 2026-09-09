import React, { useEffect, useState } from 'react';
import { X, Download, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { VersionInfo } from '../types';

interface DownloadModalProps {
  version: VersionInfo | null;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ version, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (version) {
      // Lanzar confeti estético
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0284c7', '#10b981', '#6366f1', '#38bdf8']
        });
      } catch (e) {
        // Safe fallback
      }

      // Simular descarga automática
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [version]);

  if (!version) return null;

  const handleCopyHash = () => {
    navigator.clipboard.writeText(version.sha256);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const triggerDirectDownload = () => {
    // Generar archivo ejecutable/instalador simulado de descarga directa
    const dummyContent = `TanTan SistemPOS Installer - ${version.version} (${version.codename})\nWindows Official Build\nSHA-256: ${version.sha256}\n\nGracias por descargar TanTan SistemPOS. Para soporte contacte a soporte@tantanpos.com`;
    const blob = new Blob([dummyContent], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `TanTan-SistemPOS-Setup-${version.version}.exe`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="liquid-glass-panel bg-white/95 rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-white shadow-2xl relative animate-in zoom-in-95 duration-200">
        
        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Encabezado con Icono de Éxito */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-md shadow-emerald-500/10">
            <Download className="w-7 h-7 animate-bounce" />
          </div>
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">
            ¡Descargando TanTan POS!
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Versión <span className="font-bold text-slate-800 font-mono">{version.version}</span> • {version.fileSize}
          </p>
        </div>

        {/* Estado de descarga */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-700 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {countdown > 0 ? `Iniciando descarga en ${countdown}s...` : 'Descarga en progreso'}
            </span>
            <span className="font-mono text-[11px] text-slate-500">
              TanTan-Setup-{version.version}.exe
            </span>
          </div>

          <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-sky-500 to-emerald-500 h-full rounded-full transition-all duration-1000"
              style={{ width: countdown === 0 ? '100%' : `${(3 - countdown) * 33}%` }}
            ></div>
          </div>

          <div className="text-center">
            <button
              onClick={triggerDirectDownload}
              className="text-xs font-bold text-sky-600 hover:text-sky-800 underline cursor-pointer"
            >
              ¿No comenzó automáticamente? Haz clic aquí para forzar la descarga
            </button>
          </div>
        </div>

        {/* Pasos a seguir */}
        <div className="space-y-3 mb-6">
          <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Siguientes pasos:
          </div>

          <div className="flex items-start gap-3 text-xs text-slate-600">
            <div className="w-5 h-5 rounded-full bg-slate-200 font-bold flex items-center justify-center shrink-0 text-slate-700">1</div>
            <div>Abre el archivo descargado <strong>TanTan-SistemPOS-Setup-{version.version}.exe</strong> en tu carpeta de Descargas.</div>
          </div>

          <div className="flex items-start gap-3 text-xs text-slate-600">
            <div className="w-5 h-5 rounded-full bg-slate-200 font-bold flex items-center justify-center shrink-0 text-slate-700">2</div>
            <div>Sigue las indicaciones del instalador para crear el acceso directo en el escritorio.</div>
          </div>

          <div className="flex items-start gap-3 text-xs text-slate-600">
            <div className="w-5 h-5 rounded-full bg-slate-200 font-bold flex items-center justify-center shrink-0 text-slate-700">3</div>
            <div>Inicia sesión con tu usuario o configura tu primera tienda en 30 segundos.</div>
          </div>
        </div>

        {/* Hash SHA-256 Checksum */}
        <div className="p-3 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center justify-between gap-2 text-xs">
          <div className="truncate font-mono text-[11px] text-slate-600">
            <span className="font-bold text-slate-700">SHA-256:</span> {version.sha256}
          </div>
          <button
            onClick={handleCopyHash}
            className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-600 transition-colors shrink-0"
            title="Copiar Hash"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        {/* Footer del Modal */}
        <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Entendido, ¡gracias!
          </button>
        </div>

      </div>
    </div>
  );
};

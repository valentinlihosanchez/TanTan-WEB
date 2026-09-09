import React from 'react';
import { Download, PlayCircle, Settings, CheckCircle2, Laptop } from 'lucide-react';

export const InstallationGuide: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Descarga el Instalador',
      description: 'Obtén el paquete oficial para Windows (Setup.exe) correspondiente a la arquitectura de tu equipo.',
      icon: <Download className="w-5 h-5 text-slate-700" />
    },
    {
      step: '02',
      title: 'Ejecuta el Asistente',
      description: 'Abre el instalador. El sistema inicializará el motor de base de datos local SQLite de forma transparente.',
      icon: <PlayCircle className="w-5 h-5 text-slate-700" />
    },
    {
      step: '03',
      title: 'Datos Fiscales & Impresora',
      description: 'Ingresa los datos de tu comercio, políticas PROFECO y elige el formato de rollo (58mm u 80mm).',
      icon: <Settings className="w-5 h-5 text-slate-700" />
    },
    {
      step: '04',
      title: 'Operación Inmediata',
      description: 'Comienza a registrar productos, inventario PEPS y a realizar cobros sin depender de internet.',
      icon: <CheckCircle2 className="w-5 h-5 text-slate-700" />
    }
  ];

  return (
    <section id="guia" className="py-20 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-2">
            04 / Despliegue en Windows
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Guía de Puesta en Marcha
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Proceso de instalación local rápido sin necesidad de configuraciones técnicas de bases de datos.
          </p>
        </div>

        {/* Grid de Pasos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="liquid-glass-card rounded-3xl p-6 border border-slate-200/80 relative flex flex-col justify-between bg-white/70"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200">
                    {item.icon}
                  </div>
                  <span className="text-xl font-bold font-mono text-slate-300">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-400">
                FASE {idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Requisitos del Sistema */}
        <div className="liquid-glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/80 bg-slate-50/50">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <Laptop className="w-5 h-5 text-slate-800" />
            <div>
              <h3 className="text-base font-bold text-slate-900">Requisitos de Hardware y Sistema Operativo</h3>
              <p className="text-xs text-slate-500">Diseñado con bajo consumo de memoria RAM para operar en equipos POS estándar</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Requisitos Mínimos */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-2.5 text-xs">
              <div className="font-bold text-slate-900 pb-2 border-b border-slate-100 flex justify-between">
                <span>Configuración Básica</span>
                <span className="font-mono text-slate-500">Mínimo</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Sistema Operativo:</span>
                <span className="font-medium text-slate-800">Windows 10 (32-bit / 64-bit)</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Procesador:</span>
                <span className="font-medium text-slate-800">Intel Celeron / Core i3 o AMD</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Memoria RAM:</span>
                <span className="font-medium text-slate-800">2 GB de RAM</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Almacenamiento:</span>
                <span className="font-medium text-slate-800">250 MB libres</span>
              </div>
            </div>

            {/* Requisitos Recomendados */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-2.5 text-xs">
              <div className="font-bold text-slate-900 pb-2 border-b border-slate-100 flex justify-between">
                <span>Configuración Recomendada</span>
                <span className="font-mono text-slate-500">Óptimo</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Sistema Operativo:</span>
                <span className="font-medium text-slate-800">Windows 11 (64-bit)</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Procesador:</span>
                <span className="font-medium text-slate-800">Intel Core i5 / AMD Ryzen 5</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Memoria RAM:</span>
                <span className="font-medium text-slate-800">4 GB a 8 GB de RAM</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Almacenamiento:</span>
                <span className="font-medium text-slate-800">Unidad de Estado Sólido (SSD)</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Package, ShieldCheck, Printer, Database, Zap, History } from 'lucide-react';

export const FeaturesShowcase: React.FC = () => {
  const features = [
    {
      num: '01',
      icon: <Package className="w-5 h-5 text-slate-800" />,
      tag: 'Inventario PEPS',
      title: 'Control Estricto de Lotes y Caducidad',
      description: 'Método Primeras Entradas, Primeras Salidas. Registra compras por lote completo, proveedores, facturas y fecha de vencimiento sin complicaciones.',
    },
    {
      num: '02',
      icon: <ShieldCheck className="w-5 h-5 text-slate-800" />,
      tag: 'Seguridad de Caja',
      title: 'Gastos y Retiros Protegidos por PIN',
      description: 'Ningún retiro de efectivo ocurre a ciegas. Cada salida exige el PIN personal del cajero y emite un comprobante con línea de firma física para auditoría.',
    },
    {
      num: '03',
      icon: <Printer className="w-5 h-5 text-slate-800" />,
      tag: 'Normativa PROFECO',
      title: 'Tickets Térmicos 58mm y 80mm',
      description: 'Cumple al 100% con los requisitos legales de información al consumidor. Incluye avance digital de rollo para impresoras con botón físico averiado.',
    },
    {
      num: '04',
      icon: <Database className="w-5 h-5 text-slate-800" />,
      tag: 'Local-First Engine',
      title: 'Operatividad 100% Offline con SQLite',
      description: 'Tu tienda nunca deja de cobrar si se cae el internet. La base de datos local SQLite almacena todo y sincroniza con el servidor en segundo plano.',
    },
    {
      num: '05',
      icon: <Zap className="w-5 h-5 text-slate-800" />,
      tag: 'Alta Velocidad',
      title: 'Cobro Ultrarrápido en menos de 15ms',
      description: 'Búsqueda predictiva con autocompletado en tiempo real, soporte nativo para lectores de código de barras USB/Bluetooth y atajos de teclado F1-F12.',
    },
    {
      num: '06',
      icon: <History className="w-5 h-5 text-slate-800" />,
      tag: 'Auditoría & Turnos',
      title: 'Historial de Movimientos y Reimpresión',
      description: 'Consulta transacciones pasadas, ventas por cajero, retiros de caja chica y reimprime cualquier ticket al instante con un solo clic.',
    }
  ];

  return (
    <section id="caracteristicas" className="py-20 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-2">
            02 / Capacidades del Sistema
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Ingeniería de mostrador para operaciones continuas
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            Cada módulo de TanTan SistemPOS está diseñado pensando en la agilidad del cajero y el control milimétrico del administrador del negocio.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="liquid-glass-card rounded-3xl p-7 border border-slate-200/80 flex flex-col justify-between group hover:border-slate-400 transition-all bg-white/70"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200/80">
                    {feature.icon}
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-400">
                    {feature.num}
                  </span>
                </div>

                <div className="text-xs font-mono text-slate-500 mb-1 uppercase tracking-wider">
                  {feature.tag}
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>MÓDULO NATIVO</span>
                <span className="text-slate-700 font-semibold">v2.4.0</span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparativa */}
        <div className="mt-14 liquid-glass-panel rounded-3xl p-8 border border-slate-200/80">
          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-2">
            Arquitectura de Software
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-6">
            Diferencias frente a sistemas convencionales en la nube
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
              <div className="text-xs font-mono font-bold text-slate-600 mb-1 uppercase">
                Sistemas Web Tradicionales
              </div>
              <div className="text-sm font-semibold text-slate-900 mb-2">
                Dependencia total del internet
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Si la conexión a internet o el servidor externo fallan, el punto de venta se bloquea por completo y no permite cobrar.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
              <div className="text-xs font-mono font-bold text-slate-600 mb-1 uppercase">
                Software Antiguo (Legado)
              </div>
              <div className="text-sm font-semibold text-slate-900 mb-2">
                Interfaces pesadas y sin soporte
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Configuraciones complejas de puertos serie, lentitud en bases de datos pesadas y formatos no normados.
              </p>
            </div>

            <div className="bg-slate-900 text-white p-5 rounded-2xl shadow-lg">
              <div className="text-xs font-mono font-bold text-sky-400 mb-1 uppercase">
                TanTan SistemPOS
              </div>
              <div className="text-sm font-bold text-white mb-2">
                Arquitectura Híbrida Local-First
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Cobras al instante en milisegundos con almacenamiento local SQLite y sincronización transparente en segundo plano.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

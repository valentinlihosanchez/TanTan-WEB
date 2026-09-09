import React, { useState } from 'react';
import { Printer, Scan, HardDrive, Scale, Check } from 'lucide-react';

export const HardwareCompatibility: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'impresoras' | 'lectores' | 'cajones' | 'basculas'>('impresoras');

  const categories = [
    {
      id: 'impresoras' as const,
      name: 'Impresoras Térmicas',
      icon: <Printer className="w-5 h-5" />,
      tagline: 'Rollos de 58mm y 80mm (ESC/POS)',
      compatibleBrands: ['Epson TM-T20 / TM-T88', 'Xprinter XP-58 / XP-80', 'Bixolon SRP-350', 'Star Micronics', 'Impresoras Genéricas USB / Bluetooth / Red']
    },
    {
      id: 'lectores' as const,
      name: 'Lectores de Códigos',
      icon: <Scan className="w-5 h-5" />,
      tagline: '1D, 2D, QR, Códigos de barra',
      compatibleBrands: ['Honeywell Voyager / Xenon', 'Zebra / Motorola Symbol', 'Datalogic QuickScan', 'Lectores Genéricos USB HID y Bluetooth']
    },
    {
      id: 'cajones' as const,
      name: 'Cajones de Dinero',
      icon: <HardDrive className="w-5 h-5" />,
      tagline: 'Apertura automática por pulso RJ11',
      compatibleBrands: ['EC Line EC-G5100', 'Dynapos / Posline', 'Sterin / Qian', 'Cualquier cajón estándar con conector telefónico RJ11/RJ12']
    },
    {
      id: 'basculas' as const,
      name: 'Básculas Digitales',
      icon: <Scale className="w-5 h-5" />,
      tagline: 'Pesaje directo en caja (RS-232 / USB)',
      compatibleBrands: ['Torrey L-EQ / MFQ', 'Rhino BAR-8 / BAR-9', 'Dibal Serie 500', 'Básculas comerciales con emulación serial']
    }
  ];

  const currentCategoryData = categories.find(c => c.id === selectedCategory)!;

  return (
    <section id="hardware" className="py-20 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de Sección */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-2">
            03 / Compatibilidad Periférica
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Compatibilidad con tu Hardware Actual
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            No requieres cambiar tu equipamiento existente. TanTan POS utiliza protocolos estándar compatibles con los principales fabricantes.
          </p>
        </div>

        {/* Selector de Categorías de Hardware */}
        <div className="liquid-glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-2xl text-left transition-all flex flex-col justify-between cursor-pointer border ${
                  selectedCategory === category.id
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200/80'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${
                  selectedCategory === category.id ? 'bg-white/10 text-sky-400' : 'bg-slate-100 text-slate-700'
                }`}>
                  {category.icon}
                </div>
                <div>
                  <div className="text-sm font-bold">{category.name}</div>
                  <div className={`text-[11px] mt-0.5 ${selectedCategory === category.id ? 'text-slate-300' : 'text-slate-500'}`}>
                    {category.tagline}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Detalle de Compatibilidad */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-4 mb-6 border-b border-slate-200 gap-4">
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  Modelos y Protocolos para {currentCategoryData.name}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Conexión directa mediante Windows Driver, USB HID o puerto serie COM.
                </p>
              </div>

              <div className="text-xs font-mono text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                Plug & Play Nativo
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {currentCategoryData.compatibleBrands.map((brand, i) => (
                <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-800">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

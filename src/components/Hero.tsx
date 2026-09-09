import React, { useState } from 'react';
import { 
  Download, 
  Search, 
  ShoppingCart, 
  Boxes, 
  Settings, 
  UserCheck, 
  Printer, 
  Lock, 
  Plus, 
  Minus, 
  Receipt,
  ArrowDownCircle
} from 'lucide-react';
import type { VersionInfo } from '../types';
import { WorldSphereLogo } from './WorldSphereLogo';

interface HeroProps {
  latestVersion: VersionInfo;
  onOpenDownloadModal: (version: VersionInfo) => void;
  onScrollToVersions: () => void;
}

interface CartItem {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
}

export const Hero: React.FC<HeroProps> = ({ latestVersion, onOpenDownloadModal, onScrollToVersions }) => {
  const [activeTab, setActiveTab] = useState<'pos' | 'almacen' | 'configuracion'>('pos');
  const [ticketWidth, setTicketWidth] = useState<'58mm' | '80mm'>('80mm');
  const [categoriaActiva, setCategoriaActiva] = useState<string>('Todos');

  // Estado del carrito interactivo
  const [cart, setCart] = useState<CartItem[]>([
    { id: 1, nombre: 'Coca Cola 600ml', precio: 18.00, cantidad: 1 },
    { id: 2, nombre: 'Sabritas Sal 45g', precio: 22.50, cantidad: 2 },
    { id: 3, nombre: 'Agua Ciel 1L', precio: 14.00, cantidad: 1 },
  ]);

  const productosCatalogo = [
    { id: 1, nombre: 'Coca Cola 600ml', precio: 18.00, stock: '48 pzs', cat: 'Bebidas' },
    { id: 2, nombre: 'Sabritas Sal 45g', precio: 22.50, stock: '24 pzs', cat: 'Botanas' },
    { id: 3, nombre: 'Agua Ciel 1L', precio: 14.00, stock: '32 pzs', cat: 'Bebidas' },
    { id: 4, nombre: 'Galletas Chokis', precio: 20.00, stock: '18 pzs', cat: 'Galletas' },
    { id: 5, nombre: 'Leche Entera 1L', precio: 27.50, stock: '12 pzs', cat: 'Lácteos' },
    { id: 6, nombre: 'Pan Bimbo Blanco', precio: 45.00, stock: '15 pzs', cat: 'Panadería' },
  ];

  const productosFiltrados = categoriaActiva === 'Todos' 
    ? productosCatalogo 
    : productosCatalogo.filter(p => p.cat === categoriaActiva);

  const agregarAlCarrito = (prod: typeof productosCatalogo[0]) => {
    setCart(prev => {
      const existe = prev.find(item => item.id === prod.id);
      if (existe) {
        return prev.map(item => item.id === prod.id ? { ...item, cantidad: item.cantidad + 1 } : item);
      }
      return [...prev, { id: prod.id, nombre: prod.nombre, precio: prod.precio, cantidad: 1 }];
    });
  };

  const modificarCantidad = (id: number, delta: number) => {
    setCart(prev => {
      return prev
        .map(item => {
          if (item.id === id) {
            const nueva = item.cantidad + delta;
            return nueva > 0 ? { ...item, cantidad: nueva } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);

  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden">
      {/* Luces sutiles */}
      <div className="ambient-glow w-[500px] h-[500px] bg-sky-200/25 -top-40 -left-20 pointer-events-none"></div>
      <div className="ambient-glow w-[600px] h-[600px] bg-indigo-100/30 top-60 right-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Hero Content */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          
          <div className="flex items-center justify-center gap-2.5 text-xs text-slate-600 mb-6 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span className="font-semibold text-slate-900 tracking-tight">TanTan SistemPOS {latestVersion.version} para Windows</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600">Sistema Comercial con Arquitectura Liquid Glass</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] mb-6">
            El Punto de Venta más{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-slate-900">
              rápido, elegante y robusto
            </span>{' '}
            para Windows.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
            Control total de tu negocio sin depender de internet. Inventario inteligente con método PEPS, tickets térmicos PROFECO con avance digital de papel y retiros autorizados mediante PIN.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={() => onOpenDownloadModal(latestVersion)}
              className="w-full sm:w-auto liquid-glass-button-primary px-8 py-4 rounded-2xl text-sm font-bold flex items-center justify-center gap-3 shadow-xl group cursor-pointer"
            >
              <Download className="w-4 h-4 text-sky-300 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="leading-tight text-white flex items-center gap-2">
                  <span>Descargar TanTan POS</span>
                  <span className="text-[11px] text-sky-200 font-mono font-normal">
                    {latestVersion.version}
                  </span>
                </div>
                <div className="text-[11px] text-slate-300 font-normal">
                  Windows 10 / 11 (64-bit y 32-bit) • {latestVersion.fileSize}
                </div>
              </div>
            </button>

            <button
              onClick={onScrollToVersions}
              className="w-full sm:w-auto liquid-glass-button-secondary px-6 py-4 rounded-2xl text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer text-slate-700"
            >
              <ArrowDownCircle className="w-4 h-4 text-slate-500" />
              <span>Ver Detalles de Descarga</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
              <span>Operatividad 100% Offline (SQLite)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
              <span>Sin mensualidades forzosas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
              <span>Impresión térmica 58mm / 80mm PROFECO</span>
            </div>
          </div>
        </div>

        {/* DEMOSTRACIÓN EN VIVO 1:1 CON EL SISTEMA REAL LIQUID GLASS */}
        <div className="max-w-6xl mx-auto">
          {/* Contenedor tipo Ventana de Windows con fondo Satinado Real */}
          <div className="rounded-3xl p-3 sm:p-5 border border-white/90 shadow-2xl relative" style={{
            background: 'radial-gradient(circle at 50% 20%, #f1f5f9 0%, #e2e8f0 55%, #cbd5e1 100%)'
          }}>
            
            {/* Cabecera idéntica al sistema real: Header.tsx */}
            <header className="liquid-glass-panel px-4 sm:px-6 py-2.5 rounded-2xl flex flex-wrap items-center justify-between gap-3 mb-4 shadow-sm">
              {/* Logo y Usuario */}
              <div className="flex items-center space-x-3">
                <WorldSphereLogo size={36} />
                <div>
                  <h2 className="text-base font-bold tracking-tight text-slate-900 leading-tight">
                    TanTan Sistem POS
                  </h2>
                  <p className="text-[11px] text-slate-700 font-bold flex items-center gap-1 mt-0.5">
                    <UserCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span>Juan Pérez</span>
                    <span className="text-slate-400 font-normal">· Admin</span>
                  </p>
                </div>
              </div>

              {/* Menú de navegación interactivo con botón primario */}
              <nav className="flex items-center p-1 rounded-xl bg-white/40 border border-white/70 shadow-xs">
                <button
                  onClick={() => setActiveTab('pos')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'pos'
                      ? 'liquid-glass-button-primary shadow-sm text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>Venta</span>
                </button>

                <button
                  onClick={() => setActiveTab('almacen')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'almacen'
                      ? 'liquid-glass-button-primary shadow-sm text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Boxes className="w-3.5 h-3.5" />
                  <span>Almacén PEPS</span>
                </button>

                <button
                  onClick={() => setActiveTab('configuracion')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'configuracion'
                      ? 'liquid-glass-button-primary shadow-sm text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Settings className="w-3.5 h-3.5" />
                  <span>Ajustes & Ticket</span>
                </button>
              </nav>
            </header>

            {/* VISTA 1: VENTA (CatalogPanel + CartPanel) */}
            {activeTab === 'pos' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 animate-in fade-in duration-300">
                
                {/* Panel Izquierdo: Catálogo y Búsqueda */}
                <div className="lg:col-span-2 flex flex-col space-y-3">
                  
                  {/* Buscador de productos */}
                  <div className="relative">
                    <div className="liquid-glass-input rounded-2xl flex items-center px-3.5 py-2.5 shadow-sm">
                      <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                      <input
                        type="text"
                        placeholder="Buscar producto por nombre o escanear código de barras (F2)..."
                        readOnly
                        className="bg-transparent text-xs text-slate-800 outline-none w-full cursor-default placeholder:text-slate-400"
                      />
                      <kbd className="text-[10px] bg-white/80 border border-slate-200 px-1.5 py-0.5 rounded text-slate-500 font-mono">F2</kbd>
                    </div>
                  </div>

                  {/* Categorías */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                    {['Todos', 'Bebidas', 'Botanas', 'Galletas', 'Lácteos', 'Panadería'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setCategoriaActiva(cat)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                          categoriaActiva === cat
                            ? 'bg-slate-900 text-white shadow-sm'
                            : 'liquid-glass-button text-slate-700 hover:bg-white/80'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* Grid de Productos con material auténtico Liquid Glass */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {productosFiltrados.map((prod) => (
                      <div
                        key={prod.id}
                        onClick={() => agregarAlCarrito(prod)}
                        className="liquid-glass-card rounded-2xl p-3 flex flex-col justify-between cursor-pointer group hover:scale-[1.02] transition-transform select-none"
                      >
                        <div>
                          <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono mb-1">
                            <span>{prod.cat}</span>
                            <span className="text-emerald-700 bg-emerald-50 px-1 rounded">{prod.stock}</span>
                          </div>
                          <h4 className="text-xs font-bold text-slate-900 leading-snug line-clamp-2">
                            {prod.nombre}
                          </h4>
                        </div>

                        <div className="mt-3 pt-2 border-t border-slate-200/50 flex items-center justify-between">
                          <span className="text-sm font-extrabold text-slate-900 font-mono">
                            ${prod.precio.toFixed(2)}
                          </span>
                          <div className="w-6 h-6 rounded-lg bg-slate-900 text-white flex items-center justify-center group-hover:bg-sky-600 transition-colors">
                            <Plus className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Panel Derecho: Ticket de Venta (CartPanel) */}
                <aside className="liquid-glass-panel rounded-3xl p-4 flex flex-col justify-between shadow-md">
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/80">
                      <div>
                        <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
                          <Receipt className="w-4 h-4 text-slate-700" />
                          Ticket de Venta
                        </h3>
                        <span className="text-[11px] text-slate-500">
                          {cart.length} partidas en cuenta
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                        Caja 1
                      </span>
                    </div>

                    {/* Lista de productos en el ticket */}
                    <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                      {cart.map((item) => (
                        <div key={item.id} className="p-2 rounded-xl bg-white/60 border border-white/90 flex items-center justify-between text-xs">
                          <div className="truncate pr-2">
                            <div className="font-bold text-slate-800 truncate">{item.nombre}</div>
                            <div className="text-[10px] text-slate-500 font-mono">${item.precio.toFixed(2)} c/u</div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              onClick={() => modificarCantidad(item.id, -1)}
                              className="w-5 h-5 rounded bg-slate-200 hover:bg-slate-300 flex items-center justify-center text-slate-700 cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="font-bold font-mono text-slate-900 w-4 text-center">
                              {item.cantidad}
                            </span>
                            <button
                              onClick={() => modificarCantidad(item.id, 1)}
                              className="w-5 h-5 rounded bg-slate-200 hover:bg-slate-300 flex items-center justify-center text-slate-700 cursor-pointer"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                            <span className="font-bold font-mono text-slate-900 ml-1">
                              ${(item.precio * item.cantidad).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Totales y Botón Cobrar */}
                  <div className="pt-3 border-t border-white/80 space-y-2 mt-3">
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs font-bold text-slate-600">TOTAL A COBRAR:</span>
                      <span className="text-2xl font-black text-slate-900 font-mono">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>
                    <button className="w-full py-3 liquid-glass-button-primary rounded-xl text-xs font-extrabold tracking-wide uppercase shadow-lg hover:brightness-110 transition-all cursor-pointer">
                      Cobrar (F12 / Espacio)
                    </button>
                  </div>
                </aside>

              </div>
            )}

            {/* VISTA 2: ALMACÉN PEPS */}
            {activeTab === 'almacen' && (
              <div className="liquid-glass-panel rounded-2xl p-5 space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <Boxes className="w-5 h-5 text-slate-800" />
                      Control de Inventario PEPS (Primeras Entradas, Primeras Salidas)
                    </h3>
                    <p className="text-xs text-slate-500">
                      Trazabilidad estricta de compras, lotes, fechas de vencimiento y costeo automático.
                    </p>
                  </div>
                  <button className="liquid-glass-button-primary px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer">
                    <Plus className="w-3.5 h-3.5" />
                    <span>Nuevo Producto</span>
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-500 font-mono">
                        <th className="pb-2">LOTE #</th>
                        <th className="pb-2">PRODUCTO</th>
                        <th className="pb-2">PROVEEDOR</th>
                        <th className="pb-2">CADUCIDAD</th>
                        <th className="pb-2">COSTO LOTE</th>
                        <th className="pb-2 text-right">STOCK DISPONIBLE</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        { lote: 'LOT-2026-089', prod: 'Coca Cola 600ml', prov: 'FEMSA Distribución', exp: '15/Dic/2026', costo: '$13.20', stock: '48 pzs' },
                        { lote: 'LOT-2026-042', prod: 'Sabritas Sal 45g', prov: 'Pepsico Alimentos', exp: '20/Nov/2026', costo: '$16.50', stock: '24 pzs' },
                        { lote: 'LOT-2026-015', prod: 'Leche Entera 1L', prov: 'Lala Comercial', exp: '02/Oct/2026', costo: '$21.00', stock: '12 pzs' },
                        { lote: 'LOT-2026-103', prod: 'Pan Bimbo Blanco', prov: 'Grupo Bimbo', exp: '24/Sep/2026', costo: '$36.00', stock: '15 pzs' },
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-white/50 transition-colors">
                          <td className="py-2.5 font-mono text-slate-500">{row.lote}</td>
                          <td className="py-2.5 font-bold text-slate-900">{row.prod}</td>
                          <td className="py-2.5 text-slate-600">{row.prov}</td>
                          <td className="py-2.5 font-mono text-amber-700 font-semibold">{row.exp}</td>
                          <td className="py-2.5 font-mono text-slate-700">{row.costo}</td>
                          <td className="py-2.5 font-mono font-bold text-slate-900 text-right">{row.stock}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* VISTA 3: AJUSTES & TICKET PROFECO */}
            {activeTab === 'configuracion' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-300">
                
                {/* Configuración Fiscal & Rollo */}
                <div className="liquid-glass-panel rounded-2xl p-5 space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <Printer className="w-5 h-5 text-slate-800" />
                      Impresora Térmica & Datos PROFECO
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Configuración de ticket para cumplimiento legal de la Procuraduría Federal del Consumidor.
                    </p>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="text-slate-600 font-bold block mb-1">Ancho de Rollo Térmico:</label>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setTicketWidth('58mm')}
                          className={`flex-1 py-2 rounded-xl font-bold cursor-pointer transition-all ${
                            ticketWidth === '58mm' ? 'bg-slate-900 text-white' : 'liquid-glass-button text-slate-700'
                          }`}
                        >
                          Rollo 58mm
                        </button>
                        <button
                          onClick={() => setTicketWidth('80mm')}
                          className={`flex-1 py-2 rounded-xl font-bold cursor-pointer transition-all ${
                            ticketWidth === '80mm' ? 'bg-slate-900 text-white' : 'liquid-glass-button text-slate-700'
                          }`}
                        >
                          Rollo 80mm
                        </button>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white/70 border border-white space-y-2">
                      <div className="font-bold text-slate-800 flex items-center gap-1.5">
                        <Lock className="w-4 h-4 text-emerald-600" />
                        Seguridad de Caja con PIN
                      </div>
                      <p className="text-slate-600 text-[11px] leading-relaxed">
                        Cualquier retiro o gasto de caja chica exige la clave del cajero y genera automáticamente un comprobante con línea de firma.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ticket Térmico en Vivo */}
                <div className="flex items-center justify-center">
                  <div className={`ticket-paper p-4 rounded-md font-mono text-[10px] leading-tight border border-slate-300 ${
                    ticketWidth === '58mm' ? 'w-[200px]' : 'w-[260px]'
                  }`}>
                    <div className="text-center font-bold text-xs pb-1 border-b border-dashed border-slate-400">
                      TANTAN SISTEM POS
                    </div>
                    <div className="text-center text-[9px] text-slate-600 py-1">
                      RFC: TPOS-900101-ABC<br/>
                      Av. Comercial #102, CDMX<br/>
                      Tel: 55 1234-5678
                    </div>
                    <div className="border-t border-b border-dashed border-slate-400 py-1 text-[9px]">
                      Ticket: #008492 • 08/Sep/2026 16:45<br/>
                      Caja: 1 • Cajero: Juan Pérez
                    </div>
                    <div className="py-1 space-y-0.5">
                      <div className="flex justify-between">
                        <span>1x Coca Cola 600ml</span>
                        <span>$18.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>2x Sabritas Sal 45g</span>
                        <span>$45.00</span>
                      </div>
                    </div>
                    <div className="border-t border-slate-800 pt-1 font-bold text-xs flex justify-between">
                      <span>TOTAL:</span>
                      <span>$63.00</span>
                    </div>
                    <div className="text-[8px] text-slate-600 text-center pt-2 mt-2 border-t border-dashed border-slate-400">
                      * Cumple con lineamientos de información al consumidor PROFECO *<br/>
                      ¡Gracias por su compra!
                    </div>
                  </div>
                </div>

              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};

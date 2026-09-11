import type { VersionInfo } from '../types';

export const VERSIONS_DATA: VersionInfo[] = [
  {
    version: 'v1.0.1',
    codename: 'Almacén Agrupado PEPS',
    releaseDate: 'Septiembre 2026',
    status: 'stable',
    isLatest: true,
    tagline: 'Almacén consolidado con acordeón interactivo de compras por lote PEPS, buscador dinámico y filtros de stock.',
    fileSize: '114 MB',
    sha256: '',
    downloadUrl: 'https://github.com/valentinlihosanchez/TanTan-WEB/releases/download/v1.0.1/TanTan.SistemPOS.Setup.1.0.1.exe',
    portableUrl: 'https://github.com/valentinlihosanchez/TanTan-WEB/releases/download/v1.0.1/TanTan.SistemPOS.1.0.1.exe',
    msiUrl: '',
    architecture: ['x64 (64-bit)', 'x86 (32-bit)'],
    windowsSupport: 'Windows 10 / Windows 11 (64-bit y 32-bit)',
    highlights: [
      'Almacén con vista agrupada: existencias totales sumadas por producto.',
      'Desglose PEPS con clic: descubre cada lote en orden de salida FIFO con sus márgenes.',
      'Buscador y filtros: filtra por categoría, productos con stock o no. de lote.',
      'Actualizaciones obligatorias automáticas en segundo plano estilo Instagram.'
    ],
    changelog: [
      { type: 'feature', text: 'Consolidación de productos en Almacén con acordeón para compras individuales.' },
      { type: 'feature', text: 'Buscador instantáneo por nombre, lote o proveedor con filtros de categorías.' },
      { type: 'feature', text: 'Indicador visual del lote 1° PEPS que saldrá en la siguiente venta.' },
      { type: 'security', text: 'Soporte de descarga e instalación silenciosa obligatoria para Windows.' }
    ]
  },
  {
    version: 'v1.0.0',
    codename: 'Oficial para Windows',
    releaseDate: 'Septiembre 2026',
    status: 'stable',
    isLatest: false,
    tagline: 'Versión oficial de escritorio con interfaz Liquid Glass, control de inventario PEPS, retiros con PIN y tickets normados por PROFECO.',
    fileSize: '114 MB',
    sha256: '',
    downloadUrl: 'https://github.com/valentinlihosanchez/TanTan-WEB/releases/download/v1.0.0/TanTan.SistemPOS.Setup.1.0.0.exe',
    portableUrl: 'https://github.com/valentinlihosanchez/TanTan-WEB/releases/download/v1.0.0/TanTan.SistemPOS.1.0.0.exe',
    msiUrl: '',
    architecture: ['x64 (64-bit)', 'x86 (32-bit)'],
    windowsSupport: 'Windows 10 / Windows 11 (64-bit y 32-bit)',
    highlights: [
      'Interfaz Apple Liquid Glass WWDC25 de alto contraste y ultra fluidez.',
      'Seguridad de caja: Retiros protegidos por PIN con comprobante de firma impreso.',
      'Impresoras térmicas 58mm y 80mm con avance digital de rollo y cumplimiento PROFECO.',
      'Almacén con método PEPS (Primeras Entradas, Primeras Salidas) y caducidades.',
      'Base de datos local SQLite con operación 100% offline y sincronización en segundo plano.'
    ],
    changelog: [
      { type: 'feature', text: 'Lanzamiento inicial oficial de TanTan SistemPOS para Windows 10 y 11.' },
      { type: 'feature', text: 'Módulo de Gastos y Retiros con validación estricta de PIN y firma física.' },
      { type: 'feature', text: 'Configuración personalizada de tickets de 58mm y 80mm con datos fiscales y políticas PROFECO.' },
      { type: 'feature', text: 'Función de avance digital de papel para impresoras térmicas.' },
      { type: 'feature', text: 'Control de inventario con costeo por lotes y alertas de caducidad.' },
      { type: 'security', text: 'Criptografía y almacenamiento local seguro mediante motor SQLite.' }
    ]
  }
];

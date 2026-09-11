import type { VersionInfo } from '../types';

export const VERSIONS_DATA: VersionInfo[] = [
  {
    version: 'v1.0.0',
    codename: 'Oficial para Windows',
    releaseDate: 'Septiembre 2026',
    status: 'stable',
    isLatest: true,
    tagline: 'Versión oficial de escritorio con interfaz Liquid Glass, control de inventario PEPS, retiros con PIN y tickets normados por PROFECO.',
    fileSize: '84.6 MB',
    sha256: '',
    downloadUrl: 'https://github.com/valentinlihosanchez/TanTan-WEB/releases/download/v1.0.0/TanTan%20SistemPOS%20Setup%201.0.0.exe',
    portableUrl: 'https://github.com/valentinlihosanchez/TanTan-WEB/releases/download/v1.0.0/TanTan%20SistemPOS%201.0.0.exe',
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

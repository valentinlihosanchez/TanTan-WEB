import React, { useState } from 'react';
import { VERSIONS_DATA } from './data/versions';
import type { VersionInfo } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VersionSelector } from './components/VersionSelector';
import { FeaturesShowcase } from './components/FeaturesShowcase';
import { HardwareCompatibility } from './components/HardwareCompatibility';
import { InstallationGuide } from './components/InstallationGuide';
import { ChangelogModal } from './components/ChangelogModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [changelogModalVersion, setChangelogModalVersion] = useState<VersionInfo | null>(null);

  const latestVersion = VERSIONS_DATA.find((v) => v.isLatest) || VERSIONS_DATA[0];

  const handleScrollToVersions = () => {
    const el = document.getElementById('descargas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDirectDownload = (v: VersionInfo) => {
    const isPortable = v.codename.includes('Portable');
    const url = isPortable && v.portableUrl ? v.portableUrl : v.downloadUrl;
    
    const a = document.createElement('a');
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen flex flex-col relative text-slate-900 selection:bg-sky-500 selection:text-white">
      {/* Barra de Navegación */}
      <Navbar
        latestVersion={latestVersion}
        onOpenDownloadModal={handleDirectDownload}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section con Vista Previa Interactiva */}
        <Hero
          latestVersion={latestVersion}
          onOpenDownloadModal={handleDirectDownload}
          onScrollToVersions={handleScrollToVersions}
        />

        {/* Centro de Descargas y Selector de Versiones */}
        <VersionSelector
          versions={VERSIONS_DATA}
          onOpenDownloadModal={handleDirectDownload}
          onOpenChangelogModal={(v) => setChangelogModalVersion(v)}
        />

        {/* Características y Bento Grid de TanTan POS */}
        <FeaturesShowcase />

        {/* Compatibilidad de Hardware (Impresoras 58/80mm, Lectores, Cajones) */}
        <HardwareCompatibility />

        {/* Guía Rápida de Instalación y Requisitos Windows */}
        <InstallationGuide />
      </main>

      {/* Pie de Página */}
      <Footer
        latestVersion={latestVersion}
        onOpenDownloadModal={handleDirectDownload}
      />

      {/* Modal de Registro de Cambios / Changelog */}
      <ChangelogModal
        version={changelogModalVersion}
        onClose={() => setChangelogModalVersion(null)}
        onDownload={(v) => {
          setChangelogModalVersion(null);
          handleDirectDownload(v);
        }}
      />
    </div>
  );
};

export default App;

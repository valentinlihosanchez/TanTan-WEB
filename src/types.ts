export type VersionStatus = 'stable' | 'lts' | 'beta' | 'archived';

export interface ChangelogItem {
  type: 'feature' | 'fix' | 'improvement' | 'security';
  text: string;
}

export interface VersionInfo {
  version: string;
  codename: string;
  releaseDate: string;
  status: VersionStatus;
  isLatest?: boolean;
  tagline: string;
  fileSize: string;
  sha256: string;
  downloadUrl: string;
  portableUrl?: string;
  msiUrl?: string;
  architecture: string[];
  windowsSupport: string;
  highlights: string[];
  changelog: ChangelogItem[];
}

export interface HardwareItem {
  name: string;
  category: 'impresoras' | 'lectores' | 'cajones' | 'basculas';
  status: 'compatible' | 'tested' | 'ready';
  description: string;
  brands: string[];
}

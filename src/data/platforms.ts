import type { PlatformConfig, PlatformCategory } from '@/types'

export const PLATFORM_CATEGORY_LABELS: Record<PlatformCategory, string> = {
  search: 'Søkemotorer',
  code: 'Kode',
  academic: 'Akademisk',
  archive: 'Arkiver',
  security: 'Sikkerhet',
}

export const PLATFORMS: PlatformConfig[] = [
  // Søkemotorer
  {
    id: 'google',
    name: 'Google',
    icon: 'G',
    color: '#4285f4',
    searchUrl: 'https://www.google.com/search?q=',
    placeholder: 'Søk på Google...',
    category: 'search',
  },

  // Kode
  {
    id: 'github',
    name: 'GitHub',
    icon: 'GH',
    color: '#8b5cf6',
    searchUrl: 'https://github.com/search?q=',
    placeholder: 'Søk på GitHub...',
    category: 'code',
  },

  // Akademisk
  {
    id: 'scholar',
    name: 'Google Scholar',
    icon: 'GS',
    color: '#4285f4',
    searchUrl: 'https://scholar.google.com/scholar?q=',
    placeholder: 'Søk i akademisk litteratur...',
    category: 'academic',
  },
  {
    id: 'pubmed',
    name: 'PubMed',
    icon: 'PM',
    color: '#10b981',
    searchUrl: 'https://pubmed.ncbi.nlm.nih.gov/?term=',
    placeholder: 'Søk i medisinsk litteratur...',
    category: 'academic',
  },

  // Arkiver
  {
    id: 'nb',
    name: 'Nasjonalbiblioteket',
    icon: 'NB',
    color: '#b91c1c',
    searchUrl: 'https://www.nb.no/search?q=',
    placeholder: 'Søk i Nettbiblioteket...',
    category: 'archive',
  },
  {
    id: 'archive',
    name: 'Wayback Machine',
    icon: 'WM',
    color: '#5c9eff',
    searchUrl: 'https://web.archive.org/web/*/',
    placeholder: 'Finn arkivert nettside...',
    category: 'archive',
  },

  // Sikkerhet
  {
    id: 'shodan',
    name: 'Shodan',
    icon: 'S',
    color: '#cc0000',
    searchUrl: 'https://www.shodan.io/search?query=',
    placeholder: 'Søk på Shodan...',
    category: 'security',
  },
]

export function getPlatform(id: string): PlatformConfig | undefined {
  return PLATFORMS.find((p) => p.id === id)
}

export function getPlatformsByCategory(category: PlatformCategory): PlatformConfig[] {
  return PLATFORMS.filter((p) => p.category === category)
}

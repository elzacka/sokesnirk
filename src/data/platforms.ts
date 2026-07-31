import type { PlatformConfig, PlatformCategory, QueryLanguage } from '@/types'

export const PLATFORM_CATEGORY_LABELS: Record<PlatformCategory, string> = {
  search: 'Søkemotorer',
  archive: 'Arkiver',
}

export const QUERY_LANGUAGE_LABELS: Record<QueryLanguage, string> = {
  'google-style': 'Google Dorks',
  lucene: 'Lucene',
}

// Sortert etter Query Language
export const PLATFORMS: PlatformConfig[] = [
  // Google Dorks
  {
    id: 'google',
    name: 'Google',
    icon: 'G',
    color: '#f6f4f0',
    searchUrl: 'https://www.google.com/search?q=',
    placeholder: 'Søk på Google...',
    category: 'search',
    queryLanguage: 'google-style',
  },

  // Lucene/Solr
  {
    id: 'nb',
    name: 'Nasjonalbiblioteket',
    icon: 'NB',
    color: '#f6f4f0',
    searchUrl: 'https://www.nb.no/search?q=',
    placeholder: 'Søk i Nettbiblioteket...',
    category: 'archive',
    queryLanguage: 'lucene',
  },
]

export function getPlatform(id: string): PlatformConfig | undefined {
  return PLATFORMS.find((p) => p.id === id)
}

export function getPlatformsByCategory(category: PlatformCategory): PlatformConfig[] {
  return PLATFORMS.filter((p) => p.category === category)
}

export function getPlatformsByQueryLanguage(queryLanguage: QueryLanguage): PlatformConfig[] {
  return PLATFORMS.filter((p) => p.queryLanguage === queryLanguage)
}

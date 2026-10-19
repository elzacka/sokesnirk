import type { PlatformConfig, QueryLanguage } from '@/types'

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
    queryLanguage: 'google-style',
  },

  // Lucene/Solr
  {
    id: 'nb',
    name: 'Nasjonalbiblioteket',
    icon: 'NB',
    color: '#f6f4f0',
    queryLanguage: 'lucene',
  },
]

export function getPlatform(id: string): PlatformConfig | undefined {
  return PLATFORMS.find((p) => p.id === id)
}


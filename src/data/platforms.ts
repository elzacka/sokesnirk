import type { PlatformConfig, PlatformCategory, QueryLanguage } from '@/types'

export const PLATFORM_CATEGORY_LABELS: Record<PlatformCategory, string> = {
  search: 'Søkemotorer',
  code: 'Kode',
  academic: 'Akademisk',
  archive: 'Arkiver',
  security: 'Sikkerhet',
  productivity: 'Produktivitet',
}

export const QUERY_LANGUAGE_LABELS: Record<QueryLanguage, string> = {
  'google-style': 'Google Dorks',
  boolean: 'Boolean',
  lucene: 'Lucene',
  shodan: 'Shodan',
  cql: 'CQL',
  jql: 'JQL',
  kql: 'KQL',
  'url-based': 'URL-basert',
}

// Sortert etter Query Language
export const PLATFORMS: PlatformConfig[] = [
  // Boolean
  {
    id: 'pubmed',
    name: 'PubMed',
    icon: 'PM',
    color: '#10b981',
    searchUrl: 'https://pubmed.ncbi.nlm.nih.gov/?term=',
    placeholder: 'Søk i medisinsk litteratur...',
    category: 'academic',
    queryLanguage: 'boolean',
  },

  // CQL (Contextual Query Language)
  {
    id: 'confluence',
    name: 'Confluence',
    icon: 'C',
    color: '#0052cc',
    searchUrl: 'https://confluence.atlassian.com/dosearchsite.action?cql=',
    placeholder: 'Søk i Confluence...',
    category: 'productivity',
    queryLanguage: 'cql',
  },

  // Google Dorks
  {
    id: 'google',
    name: 'Google',
    icon: 'G',
    color: '#4285f4',
    searchUrl: 'https://www.google.com/search?q=',
    placeholder: 'Søk på Google...',
    category: 'search',
    queryLanguage: 'google-style',
  },
  {
    id: 'scholar',
    name: 'Google Scholar',
    icon: 'GS',
    color: '#4285f4',
    searchUrl: 'https://scholar.google.com/scholar?q=',
    placeholder: 'Søk i akademisk litteratur...',
    category: 'academic',
    queryLanguage: 'google-style',
  },

  // Lucene/Solr
  {
    id: 'nb',
    name: 'Nasjonalbiblioteket',
    icon: 'NB',
    color: '#b91c1c',
    searchUrl: 'https://www.nb.no/search?q=',
    placeholder: 'Søk i Nettbiblioteket...',
    category: 'archive',
    queryLanguage: 'lucene',
  },
  {
    id: 'github',
    name: 'GitHub',
    icon: 'GH',
    color: '#8b5cf6',
    searchUrl: 'https://github.com/search?q=',
    placeholder: 'Søk på GitHub...',
    category: 'code',
    queryLanguage: 'lucene',
  },

  // JQL (Jira Query Language)
  {
    id: 'jira',
    name: 'Jira',
    icon: 'J',
    color: '#0052cc',
    searchUrl: 'https://jira.atlassian.com/issues/?jql=',
    placeholder: 'Søk i Jira...',
    category: 'productivity',
    queryLanguage: 'jql',
  },

  // KQL (Kusto Query Language)
  {
    id: 'azure',
    name: 'Azure Monitor',
    icon: 'AZ',
    color: '#0078d4',
    searchUrl: 'https://portal.azure.com/#blade/Microsoft_Azure_Monitoring_Logs/LogsBlade',
    placeholder: 'Søk i Azure logs...',
    category: 'security',
    queryLanguage: 'kql',
  },

  // Shodan
  {
    id: 'shodan',
    name: 'Shodan',
    icon: 'S',
    color: '#cc0000',
    searchUrl: 'https://www.shodan.io/search?query=',
    placeholder: 'Søk på Shodan...',
    category: 'security',
    queryLanguage: 'shodan',
  },

  // URL-basert
  {
    id: 'archive',
    name: 'Wayback Machine',
    icon: 'WM',
    color: '#5c9eff',
    searchUrl: 'https://web.archive.org/web/*/',
    placeholder: 'Finn arkivert nettside...',
    category: 'archive',
    queryLanguage: 'url-based',
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

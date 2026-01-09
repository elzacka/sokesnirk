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
    color: '#f6f4f0',
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
    color: '#f6f4f0',
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
    color: '#f6f4f0',
    searchUrl: 'https://www.google.com/search?q=',
    placeholder: 'Søk på Google...',
    category: 'search',
    queryLanguage: 'google-style',
  },
  {
    id: 'scholar',
    name: 'Google Scholar',
    icon: 'GS',
    color: '#f6f4f0',
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
    color: '#f6f4f0',
    searchUrl: 'https://www.nb.no/search?q=',
    placeholder: 'Søk i Nettbiblioteket...',
    category: 'archive',
    queryLanguage: 'lucene',
  },
  {
    id: 'github',
    name: 'GitHub',
    icon: 'GH',
    color: '#f6f4f0',
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
    color: '#f6f4f0',
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
    color: '#f6f4f0',
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
    color: '#f6f4f0',
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
    color: '#f6f4f0',
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

import type { Operator } from '@/types'

export const ACADEMIC_OPERATORS: Operator[] = [
  // Google Scholar og PubMed
  {
    id: 'scholar-author',
    name: 'Forfatter',
    syntax: 'author:"navn"',
    description: 'Finner artikler av denne forfatteren',
    inputExample: 'Einstein',
    category: 'filter',
    platforms: ['scholar', 'pubmed'],
    level: 'beginner',
  },
  {
    id: 'scholar-source',
    name: 'Tidsskrift',
    syntax: 'source:"journalnavn"',
    description: 'Finner artikler publisert i dette tidsskriftet',
    inputExample: 'Nature',
    category: 'filter',
    platforms: ['scholar'],
    level: 'advanced',
  },

  // PubMed-spesifikke
  {
    id: 'pubmed-mesh',
    name: 'Medisinsk emneord',
    syntax: '[MeSH Terms]',
    description: 'Finner artikler kategorisert under dette MeSH-emneordet',
    inputExample: 'diabetes',
    category: 'filter',
    platforms: ['pubmed'],
    level: 'expert',
  },
  {
    id: 'pubmed-title',
    name: 'I tittelen',
    syntax: '[Title]',
    description: 'Søker kun i artikkeltitler',
    inputExample: 'cancer',
    category: 'filter',
    platforms: ['pubmed'],
    level: 'advanced',
  },
  {
    id: 'pubmed-abstract',
    name: 'I tittel/sammendrag',
    syntax: '[Title/Abstract]',
    description: 'Søker i både tittel og sammendrag',
    inputExample: 'covid-19',
    category: 'filter',
    platforms: ['pubmed'],
    level: 'advanced',
  },
]

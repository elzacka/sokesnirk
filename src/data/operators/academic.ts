import type { Operator } from '@/types'

export const ACADEMIC_OPERATORS: Operator[] = [
  // Google Scholar - Forfatter og kilde
  {
    id: 'scholar-author',
    name: 'Forfatter',
    syntax: 'author:"navn"',
    description: 'Finner artikler av denne forfatteren',
    inputExample: 'Einstein',
    category: 'filter',
    platforms: ['scholar'],
  },
  {
    id: 'scholar-source',
    name: 'Tidsskrift',
    syntax: 'source:"journalnavn"',
    description: 'Finner artikler publisert i dette tidsskriftet',
    inputExample: 'Nature',
    category: 'filter',
    platforms: ['scholar'],
  },

  // Google Scholar - Tittel
  {
    id: 'scholar-intitle',
    name: 'Ord i tittelen',
    syntax: 'intitle:tekst',
    description: 'Finner artikler med ordet i tittelen',
    inputExample: 'machine learning',
    category: 'filter',
    platforms: ['scholar'],
  },
  {
    id: 'scholar-allintitle',
    name: 'Alle ord i tittelen',
    syntax: 'allintitle:ord1 ord2',
    description: 'Alle ordene må være i tittelen. Ikke kombiner med andre operatorer',
    inputExample: 'climate change adaptation',
    category: 'filter',
    platforms: ['scholar'],
  },

  // PubMed - Tekstsøk
  {
    id: 'pubmed-tiab',
    name: 'Tittel/sammendrag',
    syntax: '[tiab]',
    description: 'Søker i tittel, sammendrag og forfatterens nøkkelord',
    inputExample: 'covid-19[tiab]',
    category: 'filter',
    platforms: ['pubmed'],
  },
  {
    id: 'pubmed-ti',
    name: 'Kun tittel',
    syntax: '[ti]',
    description: 'Søker kun i artikkeltitler',
    inputExample: 'cancer[ti]',
    category: 'filter',
    platforms: ['pubmed'],
  },

  // PubMed - Forfatter og institusjon
  {
    id: 'pubmed-au',
    name: 'Forfatter',
    syntax: '[au]',
    description: 'Søker etter forfatter (etternavn + initialer)',
    inputExample: 'smith jh[au]',
    category: 'filter',
    platforms: ['pubmed'],
  },
  {
    id: 'pubmed-aff',
    name: 'Institusjon',
    syntax: '[aff]',
    description: 'Søker i forfatternes institusjonstilknytning',
    inputExample: 'oslo[aff]',
    category: 'filter',
    platforms: ['pubmed'],
  },

  // PubMed - MeSH (medisinske emneord)
  {
    id: 'pubmed-mh',
    name: 'MeSH-emneord',
    syntax: '[mh]',
    description: 'Søker i medisinske emneord. Inkluderer automatisk underordnede termer',
    inputExample: 'diabetes[mh]',
    category: 'filter',
    platforms: ['pubmed'],
  },
  {
    id: 'pubmed-mh-noexp',
    name: 'MeSH uten utvidelse',
    syntax: '[mh:noexp]',
    description: 'MeSH-søk uten automatisk inkludering av underordnede termer',
    inputExample: 'diabetes[mh:noexp]',
    category: 'filter',
    platforms: ['pubmed'],
  },
  {
    id: 'pubmed-majr',
    name: 'MeSH hovedemne',
    syntax: '[majr]',
    description: 'Kun artikler der emnet er hovedfokus',
    inputExample: 'hypertension[majr]',
    category: 'filter',
    platforms: ['pubmed'],
  },

  // PubMed - Publikasjon
  {
    id: 'pubmed-ta',
    name: 'Tidsskrift',
    syntax: '[ta]',
    description: 'Søker etter tidsskriftnavn eller ISSN',
    inputExample: 'lancet[ta]',
    category: 'filter',
    platforms: ['pubmed'],
  },
  {
    id: 'pubmed-pt',
    name: 'Publikasjonstype',
    syntax: '[pt]',
    description: 'Filtrerer på type (Review, Clinical Trial, Meta-Analysis)',
    inputExample: 'review[pt]',
    category: 'filter',
    platforms: ['pubmed'],
  },
  {
    id: 'pubmed-la',
    name: 'Språk',
    syntax: '[la]',
    description: 'Filtrerer på publikasjonens språk',
    inputExample: 'english[la]',
    category: 'filter',
    platforms: ['pubmed'],
  },

  // PubMed - Dato
  {
    id: 'pubmed-dp',
    name: 'Publikasjonsdato',
    syntax: '[dp]',
    description: 'Filtrerer på publiseringsdato. Bruk kolon for periode',
    inputExample: '2023:2026[dp]',
    category: 'date',
    platforms: ['pubmed'],
  },
]

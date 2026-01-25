import type { Operator } from '@/types'

export const ACADEMIC_OPERATORS: Operator[] = [
  // Google Scholar - Forfatter og kilde
  {
    id: 'scholar-author',
    name: 'Forfatter',
    syntax: 'author:"navn"',
    description: 'Søker etter publikasjoner fra denne forfatteren.',
    inputExample: 'Einstein',
    category: 'filter',
    platforms: ['scholar'],
  },
  {
    id: 'scholar-source',
    name: 'Tidsskrift',
    syntax: 'source:"journalnavn"',
    description: 'Søker etter artikler publisert i dette tidsskriftet.',
    inputExample: 'Nature',
    category: 'filter',
    platforms: ['scholar'],
  },
  {
    id: 'scholar-journal',
    name: 'Tidsskrift (eksakt)',
    syntax: 'journal:"navn"',
    description: 'Søker etter artikler fra et spesielt tidsskrift. Bruk eksakt navn.',
    inputExample: 'Nature Neuroscience',
    category: 'filter',
    platforms: ['scholar'],
  },

  // Google Scholar - Tittel
  {
    id: 'scholar-intitle',
    name: 'Ord i tittel',
    syntax: 'intitle:tekst',
    description: 'Søker etter ordet i artikkeltittel.',
    inputExample: 'machine learning',
    category: 'filter',
    platforms: ['scholar'],
  },
  {
    id: 'scholar-allintitle',
    name: 'Alle ord i tittel',
    syntax: 'allintitle:ord1 ord2',
    description: 'Alle ordene må være i artikkeltittelen. Ikke kombiner med andre operatorer.',
    inputExample: 'climate change adaptation',
    category: 'filter',
    platforms: ['scholar'],
  },

  // Google Scholar - År
  {
    id: 'scholar-year',
    name: 'År',
    syntax: 'year:YYYY',
    description: 'Søker etter publikasjoner fra ett bestemt år.',
    inputExample: '2024',
    category: 'date',
    platforms: ['scholar'],
  },
  {
    id: 'scholar-year-range',
    name: 'År-intervall',
    syntax: 'as_ylo:YYYY as_yhi:YYYY',
    description: 'Søker etter publikasjoner innenfor et årspenn. Eksempel: fra 2020 til 2024.',
    inputExample: 'as_ylo:2020 as_yhi:2024',
    category: 'date',
    platforms: ['scholar'],
  },

  // PubMed - Tekstsøk
  {
    id: 'pubmed-tiab',
    name: 'Tittel/sammendrag',
    syntax: '[tiab]',
    description: 'Søker i artikkeltittel, sammendrag og emneord. Vanligste valget for fritt søk.',
    inputExample: 'covid-19[tiab]',
    category: 'filter',
    platforms: ['pubmed'],
  },
  {
    id: 'pubmed-ti',
    name: 'Kun tittel',
    syntax: '[ti]',
    description: 'Søker kun i artikkeltitler.',
    inputExample: 'cancer[ti]',
    category: 'filter',
    platforms: ['pubmed'],
  },

  // PubMed - Forfatter og institusjon
  {
    id: 'pubmed-au',
    name: 'Forfatter',
    syntax: '[au]',
    description: 'Søker etter forfatter (etternavn + initialer).',
    inputExample: 'smith jh[au]',
    category: 'filter',
    platforms: ['pubmed'],
  },
  {
    id: 'pubmed-aff',
    name: 'Institusjon',
    syntax: '[aff]',
    description: 'Søker i forfatternes institusjonstilknytning (universiteter, sykehus, osv).',
    inputExample: 'oslo[aff]',
    category: 'filter',
    platforms: ['pubmed'],
  },

  // PubMed - MeSH (medisinske emneord)
  {
    id: 'pubmed-mh',
    name: 'MeSH-emneord',
    syntax: '[mh]',
    description: 'Søker i medisinske emneord. Inkluderer automatisk relaterte og underordnede emner.',
    inputExample: 'diabetes[mh]',
    category: 'filter',
    platforms: ['pubmed'],
  },
  {
    id: 'pubmed-mh-noexp',
    name: 'MeSH uten utvidelse',
    syntax: '[mh:noexp]',
    description: 'Søker kun i valgte emneord - ikke i relaterte eller underordnede emner.',
    inputExample: 'diabetes[mh:noexp]',
    category: 'filter',
    platforms: ['pubmed'],
  },
  {
    id: 'pubmed-majr',
    name: 'MeSH hovedemne',
    syntax: '[majr]',
    description: 'Finner artikler der dette emnet er hovedtema (ikke bare nevnt i passeringen).',
    inputExample: 'hypertension[majr]',
    category: 'filter',
    platforms: ['pubmed'],
  },

  // PubMed - Publikasjon
  {
    id: 'pubmed-ta',
    name: 'Tidsskrift',
    syntax: '[ta]',
    description: 'Søker etter tidsskriftnavn eller ISSN.',
    inputExample: 'lancet[ta]',
    category: 'filter',
    platforms: ['pubmed'],
  },
  {
    id: 'pubmed-pt',
    name: 'Publikasjonstype',
    syntax: '[pt]',
    description: 'Filtrerer på type (Review, Clinical Trial, Meta-Analysis, osv).',
    inputExample: 'review[pt]',
    category: 'filter',
    platforms: ['pubmed'],
  },
  {
    id: 'pubmed-la',
    name: 'Språk',
    syntax: '[la]',
    description: 'Filtrerer på publikasjonens språk. Eksempel: english, german, chinese.',
    inputExample: 'english[la]',
    category: 'filter',
    platforms: ['pubmed'],
  },

  // PubMed - Dato
  {
    id: 'pubmed-dp',
    name: 'Publikasjonsdato',
    syntax: '[dp]',
    description: 'Velg hvilket år artiklen ble publisert. Eksempel: «2023:2026» for periode, «2024» for enkeltår.',
    inputExample: '2023:2026[dp]',
    category: 'date',
    platforms: ['pubmed'],
  },
]

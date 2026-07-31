import type { Operator } from '@/types'

export const NB_OPERATORS: Operator[] = [
  // Avansert søk
  {
    id: 'nb-proximity',
    name: 'Ordavstand',
    syntax: '"ord ord"~N',
    description: 'Finner tekst der ordene står nær hverandre. Tallet angir maks avstand.',
    inputExample: '"Michelet Solstad"~5',
    category: 'advanced',
    platforms: ['nb'],
  },
  {
    id: 'nb-fuzzy',
    name: 'Stavevarianter',
    syntax: 'ord~N',
    description: 'Finner også stavevarianter. ~1 tillater én bokstavforskjell.',
    inputExample: 'Larsen~1',
    category: 'advanced',
    platforms: ['nb'],
  },
  {
    id: 'nb-wildcard',
    name: 'Trunkering',
    syntax: 'ord*',
    description:
      'Finner alle ord som starter med dette. Barn* gir barnehage, barneskole osv. Stjerne først i ordet virker ikke.',
    inputExample: 'Barn*',
    category: 'advanced',
    platforms: ['nb'],
  },

  // Tekstfelter
  {
    id: 'nb-title',
    name: 'I tittelen',
    syntax: 'title:tekst',
    description: 'Søker kun i registrert tittel.',
    inputExample: 'Ibsen',
    category: 'filter',
    platforms: ['nb'],
  },
  {
    id: 'nb-freetext',
    name: 'Kun i teksten',
    syntax: 'freetext:tekst',
    description: 'Søker kun i indeksert tekst, ikke i metadata.',
    inputExample: 'tante Ulrikke',
    category: 'filter',
    platforms: ['nb'],
  },

  // Opphav
  {
    id: 'nb-creator',
    name: 'Forfatter/skaper',
    syntax: 'creator:navn',
    description: 'Finner verk av denne forfatteren eller skaperen. Skriv «Etternavn, Fornavn» for presise treff.',
    inputExample: 'Hamsun, Knut',
    category: 'filter',
    platforms: ['nb'],
  },
  {
    id: 'nb-publisher',
    name: 'Utgiver',
    syntax: 'publisher:navn',
    description: 'Finner verk fra dette forlaget eller utgiveren.',
    inputExample: 'Gyldendal',
    category: 'filter',
    platforms: ['nb'],
  },

  // Emne
  {
    id: 'nb-topic',
    name: 'Emne',
    syntax: 'topic:emne',
    description: 'Finner verk som er registrert med dette emneordet.',
    inputExample: 'friluftsliv',
    category: 'filter',
    platforms: ['nb'],
  },

  // Identifikatorer
  {
    id: 'nb-isbn',
    name: 'ISBN',
    syntax: 'isbn:nummer',
    description: 'Søker etter bok med dette ISBN-nummeret.',
    inputExample: '9788203365553',
    category: 'filter',
    platforms: ['nb'],
  },
  {
    id: 'nb-issn',
    name: 'ISSN',
    syntax: 'issn:nummer',
    description: 'Søker etter tidsskrift med dette ISSN-nummeret. Skriv nummeret med bindestrek og uten anførselstegn.',
    inputExample: '0806-3842',
    category: 'filter',
    platforms: ['nb'],
  },

  // Aviser
  {
    id: 'nb-series',
    name: 'Avisnavn',
    syntax: 'series:navn',
    description: 'Søker i en bestemt avis/tidsskriftserie.',
    inputExample: 'Agderposten',
    category: 'filter',
    platforms: ['nb'],
  },
  {
    id: 'nb-place',
    name: 'Utgivelsessted',
    syntax: 'place:sted',
    description: 'Finner materiale utgitt på dette stedet.',
    inputExample: 'Arendal',
    category: 'filter',
    platforms: ['nb'],
  },

  // Klassifisering
  {
    id: 'nb-mediatype',
    name: 'Type materiale',
    syntax: 'mediatype:type',
    description: 'Begrenser til materialtype: aviser, bøker, tidsskrifter, bilder, kart, musikk, filmer.',
    inputExample: 'aviser',
    category: 'filter',
    platforms: ['nb'],
  },
  {
    id: 'nb-literaryform',
    name: 'Litterær form',
    syntax: 'literaryform:type',
    description: 'Skjønnlitteratur, Faglitteratur eller Uklassifisert.',
    inputExample: 'Skjønnlitteratur',
    category: 'filter',
    platforms: ['nb'],
  },
  {
    id: 'nb-languages',
    name: 'Språk',
    syntax: 'languages:kode',
    description: 'Begrenser til språk. Bruk trebokstavskode: nob (bokmål), nno (nynorsk), eng, sme (nordsamisk).',
    inputExample: 'nno',
    category: 'filter',
    platforms: ['nb'],
  },
  {
    id: 'nb-ddc',
    name: 'Dewey-klassifikasjon',
    syntax: 'ddc:nummer',
    description: 'Søker etter Dewey-klassifikasjonsnummer. Sett stjerne bak for å få med underkategorier.',
    inputExample: '839.8*',
    category: 'filter',
    platforms: ['nb'],
  },

  // Dato
  {
    id: 'nb-year',
    name: 'Utgivelsesår',
    syntax: 'year:YYYY',
    description: 'Finner verk fra dette året.',
    inputExample: '1890',
    category: 'date',
    platforms: ['nb'],
  },
  {
    id: 'nb-gendate',
    name: 'Nøyaktig dato',
    syntax: 'gendate:YYYYMMDD',
    description:
      'Finner materiale med denne utgivelsesdatoen. Nyttig for aviser. Ikke alle poster har dato registrert.',
    inputExample: '19450508',
    category: 'date',
    platforms: ['nb'],
  },
]

import type { Operator } from '@/types'

export const GOOGLE_OPERATORS: Operator[] = [
  // Nettsted og domene
  {
    id: 'site',
    name: 'Nettsted',
    syntax: 'site:domene.no',
    description: 'Søker kun på ett nettsted. Inkluderer underdomener.',
    inputExample: 'vg.no',
    category: 'site',
    platforms: ['google'],
  },
  {
    id: 'related',
    name: 'Lignende nettsteder',
    syntax: 'related:domene.no',
    description:
      '⚠️ UTDATERT: Google fjernet denne operatoren i 2017. Se i stedet "Andre nettsteder som ligner" på domenet.',
    inputExample: 'vg.no',
    category: 'site',
    platforms: ['google'],
    deprecated: true,
  },
  {
    id: 'cache',
    name: 'Cache',
    syntax: 'cache:url',
    description: 'Viser Googles lagrede kopi av siden. NB: Fungerer sjelden i 2026.',
    inputExample: 'example.com',
    category: 'site',
    platforms: ['google'],
  },

  // Søk i URL
  {
    id: 'inurl',
    name: 'Ord i URL',
    syntax: 'inurl:tekst',
    description: 'Søker etter ordet i web-adressen. Eksempel: admin-panel, login, config.',
    inputExample: 'login',
    category: 'site',
    platforms: ['google'],
  },
  {
    id: 'allinurl',
    name: 'Alle ord i URL',
    syntax: 'allinurl:ord1 ord2',
    description: 'Søker etter alle ordene sammen i web-adressen. Ikke kombiner med andre operatorer.',
    inputExample: 'admin login',
    category: 'site',
    platforms: ['google'],
  },

  // Søk i tittel
  {
    id: 'intitle',
    name: 'Ord i tittel',
    syntax: 'intitle:tekst',
    description: 'Søker etter ordet i sidetittelen (det som vises helt øverst i nettleseren).',
    inputExample: 'årsrapport',
    category: 'site',
    platforms: ['google'],
  },
  {
    id: 'allintitle',
    name: 'Alle i tittel',
    syntax: 'allintitle:ord1 ord2',
    description: 'Søker etter alle ordene sammen i sidetittelen. Ikke kombiner med andre operatorer.',
    inputExample: 'klima rapport Norge',
    category: 'site',
    platforms: ['google'],
  },

  // Søk i brødtekst
  {
    id: 'intext',
    name: 'Ord i tekst',
    syntax: 'intext:tekst',
    description: 'Søker kun i innholdet på siden, ikke i titler eller web-adresser.',
    inputExample: 'konfidensielt',
    category: 'site',
    platforms: ['google'],
  },
  {
    id: 'allintext',
    name: 'Alle i tekst',
    syntax: 'allintext:ord1 ord2',
    description: 'Søker etter alle ordene sammen i sidenes innhold. Ikke kombiner med andre operatorer.',
    inputExample: 'passord brukernavn',
    category: 'site',
    platforms: ['google'],
  },

  // Søk i lenketekst
  {
    id: 'inanchor',
    name: 'Ord i lenke',
    syntax: 'inanchor:tekst',
    description: 'Finner sider som lenkes til med denne teksten.',
    inputExample: 'klikk her',
    category: 'site',
    platforms: ['google'],
  },
  {
    id: 'allinanchor',
    name: 'Alle i lenke',
    syntax: 'allinanchor:ord1 ord2',
    description: 'Finner sider som lenkes til med alle disse ordene. Ikke kombiner med andre operatorer.',
    inputExample: 'gratis nedlasting',
    category: 'site',
    platforms: ['google'],
  },

  // Fil og media
  {
    id: 'filetype',
    name: 'Filtype',
    syntax: 'filetype:pdf',
    description: 'Søker kun etter filer av en bestemt type (PDF, Word, Excel, PowerPoint, osv).',
    inputExample: 'pdf',
    category: 'file',
    platforms: ['google'],
  },
  {
    id: 'imagesize',
    name: 'Bildestørrelse',
    syntax: 'imagesize:BxH',
    description: 'Finner bilder med spesifikk oppløsning (kun i Google Bilder).',
    inputExample: '1920x1080',
    category: 'file',
    platforms: ['google'],
  },

  // Dato
  {
    id: 'before',
    name: 'Indeksert før',
    syntax: 'before:YYYY-MM-DD',
    description: 'Søker på sider Google indekserte før en bestemt dato. Kan være upålitelig.',
    inputExample: '2024-01-01',
    category: 'date',
    platforms: ['google'],
  },
  {
    id: 'after',
    name: 'Indeksert etter',
    syntax: 'after:YYYY-MM-DD',
    description: 'Søker på sider Google indekserte etter en bestemt dato. Bruk Google Tools-filter for bedre resultat.',
    inputExample: '2024-01-01',
    category: 'date',
    platforms: ['google'],
  },
  {
    id: 'daterange',
    name: 'Datointervall',
    syntax: 'daterange:CCYYMMDD-CCYYMMDD',
    description: 'Søker etter sider indeksert mellom to datoer. Eksempel: 20240101-20261231.',
    inputExample: '20240101-20261231',
    category: 'date',
    platforms: ['google'],
  },

  // Avansert
  {
    id: 'numrange',
    name: 'Tallintervall',
    syntax: 'numrange:start..slutt',
    description: 'Finner sider med tall innenfor intervallet. Nyttig for priser, år, eller versjonsnumre.',
    inputExample: '100..500',
    category: 'advanced',
    platforms: ['google'],
  },
  {
    id: 'around',
    name: 'Ordavstand',
    syntax: 'AROUND(x)',
    description: 'Finner sider hvor to ord eller fraser står tett sammen (innen x ord).',
    inputExample: '"klima" AROUND(3) "krise"',
    category: 'advanced',
    platforms: ['google'],
  },
  {
    id: 'define',
    name: 'Definisjon',
    syntax: 'define:ord',
    description: 'Viser ordets definisjon fra ordbok.',
    inputExample: 'epistemologi',
    category: 'advanced',
    platforms: ['google'],
  },
  {
    id: 'source',
    name: 'Nyhetskilde',
    syntax: 'source:kildenavn',
    description: 'Begrenser til nyheter fra en spesifikk kilde (kun i Google Nyheter).',
    inputExample: 'nrk',
    category: 'advanced',
    platforms: ['google'],
  },
]

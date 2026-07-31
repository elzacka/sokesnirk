import type { Operator } from '@/types'

export const GOOGLE_OPERATORS: Operator[] = [
  // Nettsted og domene
  {
    id: 'site',
    name: 'Nettsted',
    syntax: 'site:domene.no',
    description:
      'Søker kun på ett nettsted. Inkluderer underdomener. Du kan også begrense til en mappe, for eksempel claude.ai/share. Får du null treff, er sidene som regel ikke i Googles indeks.',
    inputExample: 'vg.no',
    category: 'site',
    platforms: ['google'],
  },
  {
    id: 'exclude-site',
    name: 'Utelat nettsted',
    syntax: '-site:domene.no',
    description: 'Fjerner alle treff fra dette nettstedet. Nyttig når én kilde tar over resultatlista.',
    inputExample: 'pinterest.com',
    category: 'site',
    platforms: ['google'],
  },
  {
    id: 'related',
    name: 'Lignende nettsteder',
    syntax: 'related:domene.no',
    description:
      'Virker ikke. Google fjernet operatoren i 2023. Bruk heller «Flere resultater fra dette nettstedet» i trefflista.',
    inputExample: 'vg.no',
    category: 'site',
    platforms: ['google'],
    deprecated: true,
  },
  {
    id: 'cache',
    name: 'Cache',
    syntax: 'cache:url',
    description:
      'Virker ikke. Google slo av lagrede kopier i 2024. Bruk Wayback Machine på web.archive.org for å se eldre versjoner.',
    inputExample: 'example.com',
    category: 'site',
    platforms: ['google'],
    deprecated: true,
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
    description: 'Finner sider som lenkes til med denne teksten. Google gir ufullstendige treff her.',
    inputExample: 'klikk her',
    category: 'site',
    platforms: ['google'],
  },
  {
    id: 'allinanchor',
    name: 'Alle i lenke',
    syntax: 'allinanchor:ord1 ord2',
    description:
      'Finner sider som lenkes til med alle disse ordene. Ikke kombiner med andre operatorer. Gir ufullstendige treff.',
    inputExample: 'gratis nedlasting',
    category: 'site',
    platforms: ['google'],
  },

  // Fil og media
  {
    id: 'filetype',
    name: 'Filtype',
    syntax: 'filetype:pdf',
    description:
      'Søker kun etter filer av en bestemt type (pdf, doc, docx, xls, xlsx, ppt, csv, txt). ext: gjør det samme.',
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
    name: 'Publisert før',
    syntax: 'before:YYYY-MM-DD',
    description:
      'Søker på sider Google har datert før denne datoen. Datoen er Googles beste gjetning og kan bomme.',
    inputExample: '2024-01-01',
    category: 'date',
    platforms: ['google'],
  },
  {
    id: 'after',
    name: 'Publisert etter',
    syntax: 'after:YYYY-MM-DD',
    description:
      'Søker på sider Google har datert etter denne datoen. Bruk filteret under «Verktøy» hvis du trenger presis periode.',
    inputExample: '2024-01-01',
    category: 'date',
    platforms: ['google'],
  },

  // Avansert
  {
    id: 'numrange',
    name: 'Tallintervall',
    syntax: 'tall..tall',
    description:
      'Finner sider med tall innenfor intervallet. Skriv to punktum mellom tallene. Virker best på priser og årstall.',
    inputExample: '2020..2026',
    category: 'advanced',
    platforms: ['google'],
  },
  {
    id: 'around',
    name: 'Ordavstand',
    syntax: 'AROUND(x)',
    description:
      'Finner sider hvor to ord eller fraser står tett sammen (innen x ord). Må skrives med store bokstaver. Google overser den av og til.',
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

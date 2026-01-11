import type { Operator } from '@/types'

export const GOOGLE_OPERATORS: Operator[] = [
  // Nettsted og domene
  {
    id: 'site',
    name: 'Nettsted',
    syntax: 'site:domene.no',
    description: 'Begrenser søket til ett domene, underdomene eller URL-prefiks.',
    inputExample: 'vg.no',
    category: 'site',
    platforms: ['google'],
  },
  {
    id: 'related',
    name: 'Lignende nettsteder',
    syntax: 'related:domene.no',
    description: 'Finner nettsteder som ligner på domenet du skriver inn.',
    inputExample: 'vg.no',
    category: 'site',
    platforms: ['google'],
  },
  {
    id: 'cache',
    name: 'Cache',
    syntax: 'cache:url',
    description: 'Viser Googles lagrede kopi av en side. NB: Fungerer ikke alltid.',
    inputExample: 'example.com',
    category: 'site',
    platforms: ['google'],
  },

  // Søk i URL
  {
    id: 'inurl',
    name: 'Ord i URL',
    syntax: 'inurl:tekst',
    description: 'Finner sider der URL-en inneholder dette ordet.',
    inputExample: 'login',
    category: 'site',
    platforms: ['google'],
  },
  {
    id: 'allinurl',
    name: 'Alle ord i URL',
    syntax: 'allinurl:ord1 ord2',
    description: 'Finner sider der URL-en inneholder alle ordene. Ikke kombiner med andre operatorer.',
    inputExample: 'admin login',
    category: 'site',
    platforms: ['google'],
  },

  // Søk i tittel
  {
    id: 'intitle',
    name: 'Ord i tittel',
    syntax: 'intitle:tekst',
    description: 'Finner sider der tittelen inneholder dette ordet.',
    inputExample: 'årsrapport',
    category: 'site',
    platforms: ['google'],
  },
  {
    id: 'allintitle',
    name: 'Alle i tittel',
    syntax: 'allintitle:ord1 ord2',
    description: 'Finner sider der tittelen inneholder alle ordene. Ikke kombiner med andre operatorer.',
    inputExample: 'klima rapport Norge',
    category: 'site',
    platforms: ['google'],
  },

  // Søk i brødtekst
  {
    id: 'intext',
    name: 'Ord i tekst',
    syntax: 'intext:tekst',
    description: 'Søker kun i selve innholdet, ikke i titler eller URL-er.',
    inputExample: 'konfidensielt',
    category: 'site',
    platforms: ['google'],
  },
  {
    id: 'allintext',
    name: 'Alle i tekst',
    syntax: 'allintext:ord1 ord2',
    description: 'Alle ordene må finnes i brødteksten. Ikke kombiner med andre operatorer.',
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
    description: 'Finner sider som lenkes til med alle ordene. Ikke kombiner med andre operatorer.',
    inputExample: 'gratis nedlasting',
    category: 'site',
    platforms: ['google'],
  },

  // Fil og media
  {
    id: 'filetype',
    name: 'Filtype',
    syntax: 'filetype:pdf',
    description: 'Finner kun filer av typen du skriver inn (f.eks pdf, docx, xlsx, ppt).',
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
    description: 'Filtrerer på Googles indekseringsdato. Kan være upålitelig. Bruk evt. Verktøy-menyen.',
    inputExample: '2024-01-01',
    category: 'date',
    platforms: ['google'],
  },
  {
    id: 'after',
    name: 'Indeksert etter',
    syntax: 'after:YYYY-MM-DD',
    description: 'Filtrerer på Googles indekseringsdato. Kan være upålitelig. Bruk evt. Verktøy-menyen.',
    inputExample: '2024-01-01',
    category: 'date',
    platforms: ['google'],
  },

  // Avansert
  {
    id: 'around',
    name: 'Ordavstand',
    syntax: 'AROUND(x)',
    description: 'Finner tekst der ordene står maks x ord fra hverandre.',
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

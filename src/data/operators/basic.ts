import type { Operator } from '@/types'

export const BASIC_OPERATORS: Operator[] = [
  {
    id: 'exact-phrase',
    name: 'Nøyaktig frase',
    syntax: '"søkeord"',
    description: 'Finner kun treff der ordene står i nøyaktig denne rekkefølgen.',
    inputExample: 'access denied',
    category: 'basic',
    platforms: ['google', 'nb'],
  },
  {
    id: 'or',
    name: 'Enten–eller',
    syntax: 'A OR B',
    description: 'Søker etter én eller flere alternativer. Finner resultater med minst ett av ordene.',
    inputExample: 'manual, bruksanvisning, user guide',
    category: 'basic',
    platforms: ['google', 'nb'],
  },
  {
    id: 'and',
    name: 'Begge må finnes',
    syntax: 'A AND B',
    description: 'Søker etter alle ordene sammen. Alle må være til stede i resultatet.',
    inputExample: 'config, password, admin',
    category: 'basic',
    platforms: ['google', 'nb'],
  },
  {
    id: 'exclude',
    name: 'Utelat ord',
    syntax: '-ord',
    description: 'Fjerner alle treff som inneholder dette ordet.',
    inputExample: 'deprecated',
    category: 'basic',
    platforms: ['google', 'nb'],
  },
  {
    id: 'wildcard',
    name: 'Jokertegn',
    syntax: '*',
    description:
      'Erstatter ett ord. «beste * i Oslo» finner både «beste restaurant», «beste kafé», «beste hotell» osv.',
    inputExample: 'beste * i Oslo',
    category: 'basic',
    platforms: ['google'],
  },
  {
    id: 'group',
    name: 'Gruppering',
    syntax: '(A OR B) C',
    description:
      'Organiserer søket. «(error OR warning) log» betyr: "logg-filer som inneholder enten «error» eller «warning»".',
    inputExample: '(error OR warning) log',
    category: 'basic',
    platforms: ['google', 'nb'],
  },
]

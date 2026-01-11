import type { Operator } from '@/types'

export const BASIC_OPERATORS: Operator[] = [
  {
    id: 'exact-phrase',
    name: 'Nøyaktig frase',
    syntax: '"søkeord"',
    description: 'Finner kun treff der ordene står i nøyaktig denne rekkefølgen',
    inputExample: 'access denied',
    category: 'basic',
    platforms: ['google', 'github', 'scholar', 'pubmed', 'nb', 'archive'],
  },
  {
    id: 'or',
    name: 'Enten–eller',
    syntax: 'A OR B',
    description: 'Finner treff med minst ett av ordene.',
    inputExample: 'manual, bruksanvisning, user guide',
    category: 'basic',
    platforms: ['google', 'github', 'scholar', 'pubmed', 'nb'],
  },
  {
    id: 'and',
    name: 'Begge må finnes',
    syntax: 'A AND B',
    description: 'Alle ordene må finnes.',
    inputExample: 'config, password, admin',
    category: 'basic',
    platforms: ['google', 'github', 'scholar', 'pubmed', 'nb'],
  },
  {
    id: 'exclude',
    name: 'Utelat ord',
    syntax: '-ord',
    description: 'Fjerner alle treff som inneholder dette ordet.',
    inputExample: 'deprecated',
    category: 'basic',
    platforms: ['google', 'github', 'scholar', 'shodan', 'nb'],
  },
  {
    id: 'wildcard',
    name: 'Jokertegn',
    syntax: '*',
    description:
      'Fyller inn tomrommet for deg. «beste * i Oslo» finner beste restaurant, kafé, hotell osv i Oslo.',
    inputExample: 'beste * i Oslo',
    category: 'basic',
    platforms: ['google', 'nb'],
  },
  {
    id: 'group',
    name: 'Gruppering',
    syntax: '(A OR B) C',
    description:
      'Kombinerer søkeord logisk. Når du vil se A og/eller B kombinert med C. Parenteser grupperer det du setter AND/OR mellom.',
    inputExample: '(error OR warning) log',
    category: 'basic',
    platforms: ['google', 'github', 'shodan', 'nb'],
  },
]

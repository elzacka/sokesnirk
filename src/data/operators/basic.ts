import type { Operator } from '@/types'

export const BASIC_OPERATORS: Operator[] = [
  {
    id: 'exact-phrase',
    name: 'Nøyaktig frase',
    syntax: '"søkeord"',
    description: 'Finner kun treff der ordene står i nøyaktig denne rekkefølgen',
    inputExample: 'klimaendringer i Norge',
    category: 'basic',
    platforms: ['google', 'github', 'scholar', 'pubmed', 'nb', 'archive'],
    level: 'beginner',
  },
  {
    id: 'or',
    name: 'Enten–eller',
    syntax: 'A OR B',
    description: 'Finner treff som inneholder minst ett av ordene',
    inputExample: 'hund OR katt',
    category: 'basic',
    platforms: ['google', 'github', 'scholar', 'pubmed', 'nb'],
    level: 'beginner',
  },
  {
    id: 'exclude',
    name: 'Utelat ord',
    syntax: '-ord',
    description: 'Fjerner alle treff som inneholder dette ordet',
    inputExample: 'slange',
    category: 'basic',
    platforms: ['google', 'github', 'scholar', 'shodan', 'nb'],
    level: 'beginner',
  },
  {
    id: 'wildcard',
    name: 'Erstatt ukjent ord',
    syntax: '*',
    description:
      'Erstatter ukjente ord. «beste * i Oslo» finner restaurant, kafé, hotell osv.',
    inputExample: 'beste * i Oslo',
    category: 'basic',
    platforms: ['google', 'nb'],
    level: 'beginner',
  },
  {
    id: 'group',
    name: 'Grupper logisk',
    syntax: '(A OR B) C',
    description:
      'Kombinerer søkeord logisk. «(hund OR katt) fôr» finner hundefôr eller kattefôr',
    inputExample: '(hund OR katt) fôr',
    category: 'basic',
    platforms: ['google', 'github', 'shodan', 'nb'],
    level: 'advanced',
  },
]

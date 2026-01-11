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
    description: 'Finner treff som inneholder minst ett av ordene',
    inputExample: 'error OR warning',
    category: 'basic',
    platforms: ['google', 'github', 'scholar', 'pubmed', 'nb'],
  },
  {
    id: 'and',
    name: 'Begge må finnes',
    syntax: 'A AND B',
    description: 'Krever at begge ordene finnes. Implisitt i de fleste søkemotorer',
    inputExample: 'config AND password',
    category: 'basic',
    platforms: ['google', 'github', 'scholar', 'pubmed', 'nb'],
  },
  {
    id: 'exclude',
    name: 'Utelat ord',
    syntax: '-ord',
    description: 'Fjerner alle treff som inneholder dette ordet',
    inputExample: 'deprecated',
    category: 'basic',
    platforms: ['google', 'github', 'scholar', 'shodan', 'nb'],
  },
  {
    id: 'wildcard',
    name: 'Jokertegn',
    syntax: '*',
    description:
      'Erstatter ukjente ord. «beste * i Oslo» finner restaurant, kafé, hotell osv.',
    inputExample: 'beste * i Oslo',
    category: 'basic',
    platforms: ['google', 'nb'],
  },
  {
    id: 'group',
    name: 'Gruppering',
    syntax: '(A OR B) C',
    description:
      'Kombinerer søkeord logisk. Parenteser grupperer OR/AND-uttrykk',
    inputExample: '(error OR warning) log',
    category: 'basic',
    platforms: ['google', 'github', 'shodan', 'nb'],
  },
]

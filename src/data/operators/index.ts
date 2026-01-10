import type { Operator, Platform } from '@/types'
import { BASIC_OPERATORS } from './basic'
import { GOOGLE_OPERATORS } from './google'
import { NB_OPERATORS } from './nb'
import { SHODAN_OPERATORS } from './shodan'
import { GITHUB_OPERATORS } from './github'
import { ACADEMIC_OPERATORS } from './academic'
import { CONFLUENCE_OPERATORS } from './confluence'
import { JIRA_OPERATORS } from './jira'
import { AZURE_OPERATORS } from './azure'

export const OPERATORS: Operator[] = [
  ...BASIC_OPERATORS,
  ...GOOGLE_OPERATORS,
  ...NB_OPERATORS,
  ...SHODAN_OPERATORS,
  ...GITHUB_OPERATORS,
  ...ACADEMIC_OPERATORS,
  ...CONFLUENCE_OPERATORS,
  ...JIRA_OPERATORS,
  ...AZURE_OPERATORS,
]

export function getOperatorsByPlatform(platformId: Platform): Operator[] {
  return OPERATORS.filter((op) => op.platforms.includes(platformId))
}

export function getOperatorsByCategory(category: string): Operator[] {
  return OPERATORS.filter((op) => op.category === category)
}

export function searchOperators(query: string): Operator[] {
  const q = query.toLowerCase()
  return OPERATORS.filter(
    (op) =>
      op.name.toLowerCase().includes(q) ||
      op.syntax.toLowerCase().includes(q) ||
      op.description.toLowerCase().includes(q)
  )
}

// Re-export individual platform operators for direct access if needed
export {
  BASIC_OPERATORS,
  GOOGLE_OPERATORS,
  NB_OPERATORS,
  SHODAN_OPERATORS,
  GITHUB_OPERATORS,
  ACADEMIC_OPERATORS,
  CONFLUENCE_OPERATORS,
  JIRA_OPERATORS,
  AZURE_OPERATORS,
}

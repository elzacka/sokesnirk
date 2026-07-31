import type { Operator, Platform } from '@/types'
import { BASIC_OPERATORS } from './basic'
import { GOOGLE_OPERATORS } from './google'
import { NB_OPERATORS } from './nb'

export const OPERATORS: Operator[] = [
  ...BASIC_OPERATORS,
  ...GOOGLE_OPERATORS,
  ...NB_OPERATORS,
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
export { BASIC_OPERATORS, GOOGLE_OPERATORS, NB_OPERATORS }

import { useState, useMemo, useEffect } from 'react'
import type { Platform, OperatorCategory, Operator } from '@/types'
import { getOperatorsByPlatform } from '@/data/operators/index'
import { sanitizeQueryInput, sanitizeSearchQuery } from '@/utils/sanitize'
import { CopyButton } from '@/components/ui'
import { OperatorField } from './OperatorField'
import { QueryPreview } from './QueryPreview'
import styles from './QueryBuilder.module.css'

// Check if device is touch-based
function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false)
  useEffect(() => {
    setIsTouch(window.matchMedia('(hover: none)').matches)
  }, [])
  return isTouch
}

const FREE_TEXT_OPERATOR: Operator = {
  id: 'free-text',
  name: 'Søkeord',
  syntax: 'ord',
  description: 'Vanlige søkeord uten spesielle operatorer. Legges til på slutten av søket',
  inputExample: 'klimaendringer',
  category: 'basic',
  platforms: [],
  level: 'beginner',
}

const CATEGORY_ORDER: OperatorCategory[] = [
  'basic',
  'site',
  'file',
  'date',
  'filter',
  'advanced',
  'security',
]

interface QueryBuilderProps {
  platform: Platform
}

export function QueryBuilder({ platform }: QueryBuilderProps) {
  const [operatorValues, setOperatorValues] = useState<Record<string, string>>({})
  const [freeText, setFreeText] = useState('')
  const isTouchDevice = useIsTouchDevice()

  // Get operators grouped by category
  const operatorsByCategory = useMemo(() => {
    const operators = getOperatorsByPlatform(platform)
    const grouped = new Map<OperatorCategory, typeof operators>()

    for (const op of operators) {
      const existing = grouped.get(op.category) || []
      grouped.set(op.category, [...existing, op])
    }

    return grouped
  }, [platform])

  // Flatten operators for query building
  const allOperators = useMemo(() => {
    return Array.from(operatorsByCategory.values()).flat()
  }, [operatorsByCategory])

  const queryString = useMemo(() => {
    const parts: string[] = []

    // Add operator values (sanitized)
    for (const op of allOperators) {
      const rawValue = operatorValues[op.id]?.trim()
      if (rawValue) {
        // Sanitize each input value
        const value = sanitizeQueryInput(rawValue)
        if (!value) continue

        if (op.syntax.includes(':')) {
          // Operator with value (site:, filetype:, etc.)
          const prefix = op.syntax.split(':')[0]
          const val = value.includes(' ') ? `"${value}"` : value
          parts.push(`${prefix}:${val}`)
        } else if (op.syntax === '"søkeord"') {
          // Exact phrase
          parts.push(`"${value}"`)
        } else if (op.syntax === '-ord') {
          // Exclude
          const words = value.split(/\s+/).filter(Boolean)
          parts.push(...words.map((w) => `-${w}`))
        } else if (op.syntax === 'A OR B') {
          // OR operator
          parts.push(`(${value})`)
        } else if (op.syntax === '*') {
          parts.push(value)
        } else if (op.syntax.includes('AROUND')) {
          parts.push(value)
        } else {
          parts.push(value)
        }
      }
    }

    // Add free text at the end (sanitized)
    const sanitizedFreeText = sanitizeQueryInput(freeText)
    if (sanitizedFreeText) {
      parts.push(sanitizedFreeText)
    }

    // Final sanitization of the complete query
    return sanitizeSearchQuery(parts.join(' '))
  }, [allOperators, operatorValues, freeText])

  const updateOperatorValue = (operatorId: string, value: string) => {
    setOperatorValues((prev) => ({ ...prev, [operatorId]: value }))
  }

  const clearAll = () => {
    setOperatorValues({})
    setFreeText('')
  }

  return (
    <div className={styles.builder}>
      {/* Query output bar */}
      <div className={styles.queryBar}>
        <div className={styles.queryOutput}>
          {queryString ? (
            <QueryPreview query={queryString} />
          ) : (
            <span className={styles.queryPlaceholder}>Søkestrengen vises her</span>
          )}
        </div>
        <div className={styles.queryActions}>
          {queryString && (
            <button
              className={styles.clearButton}
              onClick={clearAll}
              aria-label="Tøm alle felt"
            >
              Tøm
            </button>
          )}
          <CopyButton text={queryString} size="sm" disabled={!queryString} />
        </div>
      </div>

      {/* Section intro with hint - different for touch vs hover */}
      <p className={styles.sectionHint}>
        {isTouchDevice ? 'Trykk ⓘ for veiledning' : 'Hold over feltene for veiledning'}
      </p>

      {/* All operators in a unified flow */}
      <div className={styles.operatorGrid}>
        {/* Free text field first */}
        <OperatorField
          operator={FREE_TEXT_OPERATOR}
          value={freeText}
          onChange={setFreeText}
        />
        {/* All operators from all categories */}
        {CATEGORY_ORDER.flatMap((category) => {
          const operators = operatorsByCategory.get(category)
          if (!operators?.length) return []
          return operators.map((operator) => (
            <OperatorField
              key={operator.id}
              operator={operator}
              value={operatorValues[operator.id] || ''}
              onChange={(value) => updateOperatorValue(operator.id, value)}
            />
          ))
        })}
      </div>
    </div>
  )
}

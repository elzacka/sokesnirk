import { useState, useMemo } from 'react'
import type { Platform, OperatorCategory } from '@/types'
import { getPlatform, QUERY_LANGUAGE_LABELS } from '@/data/platforms'
import { getOperatorsByPlatform } from '@/data/operators/index'
import { sanitizeQueryInput, sanitizeSearchQuery } from '@/utils/sanitize'
import { CopyButton } from '@/components/ui'
import { OperatorField } from './OperatorField'
import { QueryPreview } from './QueryPreview'
import styles from './QueryBuilder.module.css'

const CATEGORY_LABELS: Record<OperatorCategory, string> = {
  basic: 'Søkeord og kombinasjoner',
  site: 'Avgrens til nettsted',
  file: 'Finn filer',
  date: 'Tidsperiode',
  filter: 'Filtrer resultater',
  advanced: 'Avanserte teknikker',
  security: 'Sikkerhetsanalyse',
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

  const platformConfig = getPlatform(platform)

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
      {/* Compact query output bar */}
      <div className={styles.queryBar}>
        {platformConfig && (
          <span
            className={styles.serviceBadge}
            style={{ background: platformConfig.color }}
            title={`${platformConfig.name} (${QUERY_LANGUAGE_LABELS[platformConfig.queryLanguage]})`}
          >
            {platformConfig.icon}
          </span>
        )}
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

      {/* Section intro with hint */}
      <p className={styles.sectionHint}>Hold over feltene for veiledning</p>

      {/* Operators grouped by category */}
      <div className={styles.categorySections}>
        {CATEGORY_ORDER.map((category) => {
          const operators = operatorsByCategory.get(category)
          if (!operators?.length) return null

          return (
            <section key={category} className={styles.categorySection}>
              <h3 className={styles.categoryTitle}>{CATEGORY_LABELS[category]}</h3>
              <div className={styles.operatorGrid}>
                {category === 'basic' && (
                  <div className={`${styles.field} ${freeText ? styles.hasValue : ''}`}>
                    <span className={styles.fieldLabel}>Søkeord</span>
                    <input
                      type="text"
                      className={styles.fieldInput}
                      value={freeText}
                      onChange={(e) => setFreeText(e.target.value)}
                      aria-label="Søkeord"
                    />
                  </div>
                )}
                {operators.map((operator) => (
                  <OperatorField
                    key={operator.id}
                    operator={operator}
                    value={operatorValues[operator.id] || ''}
                    onChange={(value) => updateOperatorValue(operator.id, value)}
                  />
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}

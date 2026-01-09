import { useMemo, memo, type ReactNode } from 'react'
import styles from './QueryPreview.module.css'

interface QueryPreviewProps {
  query: string
}

interface Token {
  type: 'operator' | 'value' | 'exact' | 'boolean' | 'text'
  content: string
}

function tokenizeQuery(query: string): Token[] {
  const tokens: Token[] = []
  const regex = /(\w+:)("[^"]*"|[^\s]+)|(".*?")|(\bOR\b|\bAND\b|\bNOT\b)/gi
  let lastIndex = 0

  for (const match of query.matchAll(regex)) {
    // Add text before this match
    if (match.index !== undefined && match.index > lastIndex) {
      tokens.push({ type: 'text', content: query.slice(lastIndex, match.index) })
    }

    const [, operator, value, exactPhrase, boolOp] = match
    if (operator && value) {
      tokens.push({ type: 'operator', content: operator })
      tokens.push({ type: 'value', content: value })
    } else if (exactPhrase) {
      tokens.push({ type: 'exact', content: exactPhrase })
    } else if (boolOp) {
      tokens.push({ type: 'boolean', content: boolOp })
    }

    lastIndex = (match.index ?? 0) + match[0].length
  }

  // Add remaining text
  if (lastIndex < query.length) {
    tokens.push({ type: 'text', content: query.slice(lastIndex) })
  }

  return tokens
}

export const QueryPreview = memo(function QueryPreview({ query }: QueryPreviewProps) {
  const elements = useMemo((): ReactNode[] => {
    const tokens = tokenizeQuery(query)
    return tokens.map((token, index) => {
      switch (token.type) {
        case 'operator':
          return <span key={index} className={styles.operator}>{token.content}</span>
        case 'value':
          return <span key={index} className={styles.value}>{token.content}</span>
        case 'exact':
          return <span key={index} className={styles.exact}>{token.content}</span>
        case 'boolean':
          return <span key={index} className={styles.boolean}>{token.content}</span>
        default:
          return <span key={index}>{token.content}</span>
      }
    })
  }, [query])

  return (
    <pre className={styles.query} aria-label={`Søkestreng: ${query}`}>
      {elements}
    </pre>
  )
})

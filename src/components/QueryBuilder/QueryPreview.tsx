import styles from './QueryPreview.module.css'

interface QueryPreviewProps {
  query: string
}

export function QueryPreview({ query }: QueryPreviewProps) {
  // Highlight operators in the query
  const highlightedQuery = query.replace(
    /(\w+:)("[^"]*"|[^\s]+)|(".*?")|(\bOR\b|\bAND\b|\bNOT\b)/gi,
    (match, operator, value, exactPhrase, boolOp) => {
      if (operator && value) {
        return `<span class="${styles.operator}">${operator}</span><span class="${styles.value}">${value}</span>`
      }
      if (exactPhrase) {
        return `<span class="${styles.exact}">${exactPhrase}</span>`
      }
      if (boolOp) {
        return `<span class="${styles.boolean}">${boolOp}</span>`
      }
      return match
    }
  )

  return (
    <pre
      className={styles.query}
      dangerouslySetInnerHTML={{ __html: highlightedQuery }}
      aria-label={`Søkestreng: ${query}`}
    />
  )
}

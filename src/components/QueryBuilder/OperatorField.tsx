import type { Operator } from '@/types'
import styles from './OperatorField.module.css'

interface OperatorFieldProps {
  operator: Operator
  value: string
  onChange: (value: string) => void
}

export function OperatorField({
  operator,
  value,
  onChange,
}: OperatorFieldProps) {
  return (
    <div className={`${styles.field} ${value ? styles.hasValue : ''}`}>
      <span className={styles.label}>{operator.name}</span>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={operator.name}
        aria-describedby={`tooltip-${operator.id}`}
      />
      <div className={styles.tooltip} id={`tooltip-${operator.id}`} role="tooltip">
        <p className={styles.tooltipDescription}>{operator.description}</p>
        <p className={styles.tooltipExample}>
          Eks: <code>{operator.inputExample}</code>
        </p>
      </div>
    </div>
  )
}

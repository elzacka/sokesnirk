import { useState, useRef, useEffect, useCallback, memo } from 'react'
import type { Operator } from '@/types'
import styles from './OperatorField.module.css'

interface OperatorFieldProps {
  operator: Operator
  value: string
  onChange: (value: string) => void
}

export const OperatorField = memo(function OperatorField({
  operator,
  value,
  onChange,
}: OperatorFieldProps) {
  const [showTooltip, setShowTooltip] = useState(false)
  const fieldRef = useRef<HTMLDivElement>(null)
  const isTouchDevice = typeof window !== 'undefined' &&
    window.matchMedia('(hover: none)').matches

  useEffect(() => {
    if (!isTouchDevice || !showTooltip) return

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (fieldRef.current && !fieldRef.current.contains(e.target as Node)) {
        setShowTooltip(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [showTooltip, isTouchDevice])

  const handleInfoClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setShowTooltip(!showTooltip)
  }, [showTooltip])

  return (
    <div
      ref={fieldRef}
      className={`${styles.field} ${value ? styles.hasValue : ''} ${showTooltip ? styles.showTooltip : ''}`}
    >
      <span className={styles.label}>{operator.name}</span>
      {isTouchDevice && (
        <button
          type="button"
          className={styles.infoButton}
          onClick={handleInfoClick}
          aria-label={`Vis info om ${operator.name}`}
          aria-expanded={showTooltip}
        >
          <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </button>
      )}
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={operator.name}
        aria-describedby={`tooltip-${operator.id}`}
      />
      <div
        className={styles.tooltip}
        id={`tooltip-${operator.id}`}
        role="tooltip"
        aria-hidden={!showTooltip && isTouchDevice}
      >
        <p className={styles.tooltipDescription}>{operator.description}</p>
        <p className={styles.tooltipExample}>
          Eks: <code>{operator.inputExample}</code>
        </p>
      </div>
    </div>
  )
})

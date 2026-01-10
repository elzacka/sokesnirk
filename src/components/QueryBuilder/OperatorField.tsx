import { useState, useRef, useEffect, useCallback, memo } from 'react'
import type { Operator } from '@/types'
import { useIsTouchDevice } from '@/hooks/useIsTouchDevice'
import styles from './OperatorField.module.css'

interface OperatorFieldProps {
  operator: Operator
  value: string
  onChange: (value: string) => void
}

const LONG_PRESS_DURATION = 400 // ms
const HAPTIC_FEEDBACK_DURATION = 10 // ms

export const OperatorField = memo(function OperatorField({
  operator,
  value,
  onChange,
}: OperatorFieldProps) {
  const [showTooltip, setShowTooltip] = useState(false)
  const fieldRef = useRef<HTMLDivElement>(null)
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isTouchDevice = useIsTouchDevice()

  // Close tooltip when clicking outside
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

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (longPressTimer.current) {
        clearTimeout(longPressTimer.current)
      }
    }
  }, [])

  const handleTouchStart = useCallback(() => {
    if (!isTouchDevice) return

    longPressTimer.current = setTimeout(() => {
      setShowTooltip(true)
      // Vibrate for feedback if supported
      if (navigator.vibrate) {
        navigator.vibrate(HAPTIC_FEEDBACK_DURATION)
      }
    }, LONG_PRESS_DURATION)
  }, [isTouchDevice])

  const handleTouchEnd = useCallback(() => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current)
      longPressTimer.current = null
    }
  }, [])

  const handleTouchMove = useCallback(() => {
    // Cancel long press if user moves finger
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current)
      longPressTimer.current = null
    }
  }, [])

  return (
    <div
      ref={fieldRef}
      className={`${styles.field} ${value ? styles.hasValue : ''} ${showTooltip ? styles.showTooltip : ''}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      <span className={styles.label}>{operator.name}</span>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={operator.name}
        aria-describedby={`tooltip-${operator.id}`}
      />
      {/* Backdrop for mobile tooltip */}
      {isTouchDevice && showTooltip && (
        <div
          className={styles.backdrop}
          onClick={() => setShowTooltip(false)}
          aria-hidden="true"
        />
      )}
      <div
        className={styles.tooltip}
        id={`tooltip-${operator.id}`}
        role="tooltip"
        aria-hidden={!showTooltip && isTouchDevice}
      >
        <header className={styles.tooltipHeader}>
          <span className={styles.tooltipTitle}>{operator.name}</span>
          {isTouchDevice && (
            <button
              type="button"
              className={styles.tooltipClose}
              onClick={() => setShowTooltip(false)}
              aria-label="Lukk"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          )}
        </header>
        <p className={styles.tooltipDescription}>{operator.description}</p>
        <p className={styles.tooltipExample}>
          Eks: <code>{operator.inputExample}</code>
        </p>
      </div>
    </div>
  )
})

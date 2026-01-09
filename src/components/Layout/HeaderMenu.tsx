import { useState, useRef, useEffect, useMemo } from 'react'
import type { Platform } from '@/types'
import { PLATFORMS, QUERY_LANGUAGE_LABELS, getPlatform } from '@/data/platforms'
import { ChevronDownIcon } from '@/components/Icons'
import styles from './HeaderMenu.module.css'

interface HeaderMenuProps {
  platform: Platform
  onPlatformChange: (platform: Platform) => void
}

export function HeaderMenu({ platform, onPlatformChange }: HeaderMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const currentPlatform = getPlatform(platform)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  const handlePlatformSelect = (newPlatform: Platform) => {
    onPlatformChange(newPlatform)
    setIsOpen(false)
  }

  // Sort platforms alphabetically by name
  const sortedPlatforms = useMemo(() =>
    [...PLATFORMS].sort((a, b) => a.name.localeCompare(b.name, 'nb'))
  , [])

  return (
    <div className={styles.menuContainer} ref={menuRef}>
      <button
        className={styles.pickerButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Velg tjeneste"
        style={{ '--platform-color': currentPlatform?.color } as React.CSSProperties}
      >
        <span
          className={styles.platformBadge}
        >
          {currentPlatform?.icon}
        </span>
        <span className={styles.pickerLabel}>
          <span className={styles.pickerTitle}>Tjeneste</span>
          <span className={styles.pickerValue}>{currentPlatform?.name}</span>
        </span>
        <ChevronDownIcon size={16} className={`${styles.chevron} ${isOpen ? styles.open : ''}`} />
      </button>

      {isOpen && (
        <div className={styles.dropdown} role="listbox">
          {sortedPlatforms.map((p) => (
            <button
              key={p.id}
              className={`${styles.platformOption} ${p.id === platform ? styles.selected : ''}`}
              onClick={() => handlePlatformSelect(p.id)}
              role="option"
              aria-selected={p.id === platform}
            >
              <span
                className={styles.platformBadge}
                style={{ '--platform-color': p.color } as React.CSSProperties}
              >
                {p.icon}
              </span>
              <span className={styles.platformName}>{p.name}</span>
              <span className={styles.queryLanguageTag}>
                {QUERY_LANGUAGE_LABELS[p.queryLanguage]}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

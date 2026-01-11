import { useState, useRef, useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'
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
  const [isMobile, setIsMobile] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentPlatform = getPlatform(platform)

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 640)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Handle click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node
      const clickedInMenu = menuRef.current?.contains(target)
      const clickedInDropdown = dropdownRef.current?.contains(target)

      if (!clickedInMenu && !clickedInDropdown) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  // Lock body scroll when open on mobile
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = ''
      }
    }
  }, [isOpen, isMobile])

  const handlePlatformSelect = (newPlatform: Platform) => {
    onPlatformChange(newPlatform)
    setIsOpen(false)
  }

  // Sort platforms alphabetically by name
  const sortedPlatforms = useMemo(() =>
    [...PLATFORMS].sort((a, b) => a.name.localeCompare(b.name, 'nb'))
  , [])

  const dropdownContent = isOpen && (
    <>
      <div className={styles.backdrop} onClick={() => setIsOpen(false)} />
      <div className={styles.dropdown} role="listbox" ref={dropdownRef}>
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
    </>
  )

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
        <span className={styles.platformBadge}>
          {currentPlatform?.icon}
        </span>
        <span className={styles.pickerLabel}>
          <span className={styles.pickerTitle}>Tjeneste</span>
          <span className={styles.pickerValue}>{currentPlatform?.name}</span>
        </span>
        <ChevronDownIcon size={16} className={`${styles.chevron} ${isOpen ? styles.open : ''}`} />
      </button>

      {/* On mobile, use portal to escape backdrop-filter stacking context */}
      {isMobile
        ? dropdownContent && createPortal(dropdownContent, document.body)
        : dropdownContent
      }
    </div>
  )
}

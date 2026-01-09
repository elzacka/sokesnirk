import { useState, useRef, useEffect } from 'react'
import type { Platform, QueryLanguage } from '@/types'
import { PLATFORMS, QUERY_LANGUAGE_LABELS, getPlatform } from '@/data/platforms'
import { MenuIcon, InfoIcon, XIcon, ChevronRightIcon } from '@/components/Icons'
import styles from './HeaderMenu.module.css'

interface HeaderMenuProps {
  platform: Platform
  onPlatformChange: (platform: Platform) => void
}

const QUERY_LANGUAGE_ORDER: QueryLanguage[] = [
  'boolean',
  'cql',
  'google-style',
  'jql',
  'kql',
  'lucene',
  'shodan',
  'url-based',
]

export function HeaderMenu({ platform, onPlatformChange }: HeaderMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activePanel, setActivePanel] = useState<'main' | 'platform' | 'info'>('main')
  const menuRef = useRef<HTMLDivElement>(null)

  const currentPlatform = getPlatform(platform)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setActivePanel('main')
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
    setActivePanel('main')
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setActivePanel('main')
  }

  // Group platforms by query language
  const platformsByQueryLanguage = QUERY_LANGUAGE_ORDER.map((queryLanguage) => ({
    queryLanguage,
    label: QUERY_LANGUAGE_LABELS[queryLanguage],
    platforms: PLATFORMS.filter((p) => p.queryLanguage === queryLanguage),
  })).filter((group) => group.platforms.length > 0)

  return (
    <div className={styles.menuContainer} ref={menuRef}>
      <button
        className={styles.menuButton}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Meny"
      >
        {isOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          {activePanel === 'main' && (
            <div className={styles.mainMenu}>
              <button
                className={styles.menuItem}
                onClick={() => setActivePanel('platform')}
              >
                <span
                  className={styles.platformBadge}
                  style={{ '--platform-color': currentPlatform?.color } as React.CSSProperties}
                >
                  {currentPlatform?.icon}
                </span>
                <span className={styles.menuLabel}>
                  <span className={styles.menuTitle}>Velg tjeneste</span>
                  <span className={styles.menuValue}>{currentPlatform?.name}</span>
                </span>
                <ChevronRightIcon size={16} className={styles.chevron} />
              </button>
              <button
                className={styles.menuItem}
                onClick={() => setActivePanel('info')}
              >
                <InfoIcon size={18} />
                <span className={styles.menuLabel}>
                  <span className={styles.menuTitle}>Om Søkesnirk</span>
                </span>
              </button>
            </div>
          )}

          {activePanel === 'platform' && (
            <div className={styles.platformPanel}>
              <button
                className={styles.backButton}
                onClick={() => setActivePanel('main')}
              >
                ← Tilbake
              </button>
              <div className={styles.platformList}>
                {platformsByQueryLanguage.map((group) => (
                  <div key={group.queryLanguage} className={styles.categoryGroup}>
                    <div className={styles.categoryLabel}>{group.label}</div>
                    {group.platforms.map((p) => (
                      <button
                        key={p.id}
                        className={`${styles.platformOption} ${p.id === platform ? styles.selected : ''}`}
                        onClick={() => handlePlatformSelect(p.id)}
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
                ))}
              </div>
            </div>
          )}

          {activePanel === 'info' && (
            <div className={styles.infoPanel}>
              <button
                className={styles.backButton}
                onClick={() => setActivePanel('main')}
              >
                ← Tilbake
              </button>
              <div className={styles.infoContent}>
                <p className={styles.infoText}>
                  <strong>Søkesnirk</strong> hjelper deg å lage presise søk i Google,
                  digitale arkiver, Shodan, GitHub og andre typer tjenester.
                </p>
                <p className={styles.infoText}>
                  Velg tjeneste, fyll ut feltene du trenger, kopier søkestrengen og lim inn der du skal søke. Tips: Hold musepeker over feltet for å se veiledning.
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

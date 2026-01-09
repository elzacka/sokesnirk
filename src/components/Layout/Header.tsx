import type { Platform, PlatformConfig } from '@/types'
import { QUERY_LANGUAGE_LABELS } from '@/data/platforms'
import { SearchIcon } from '../Icons'
import { HeaderMenu } from './HeaderMenu'
import styles from './Header.module.css'

interface HeaderProps {
  platform: Platform
  platformConfig: PlatformConfig | undefined
  onPlatformChange: (platform: Platform) => void
}

export function Header({ platform, platformConfig, onPlatformChange }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <SearchIcon size={14} />
          </div>
          <span className={styles.appName}>Søkesnirk</span>
        </div>

        <HeaderMenu platform={platform} onPlatformChange={onPlatformChange} />
      </div>

      {platformConfig && (
        <div className={styles.serviceBar}>
          <div className={styles.serviceInfo}>
            <span className={styles.serviceLabel}>Bygg søk for:</span>
            <span
              className={styles.serviceBadge}
              style={{ background: platformConfig.color }}
            >
              {platformConfig.icon}
            </span>
            <span className={styles.serviceName}>{platformConfig.name}</span>
            <span className={styles.serviceLanguage}>
              ({QUERY_LANGUAGE_LABELS[platformConfig.queryLanguage]})
            </span>
          </div>
          <span className={styles.serviceHint}>
            Søkestrengen vises når du fyller ut feltene. Hold over feltene for veiledning.
          </span>
        </div>
      )}
    </header>
  )
}

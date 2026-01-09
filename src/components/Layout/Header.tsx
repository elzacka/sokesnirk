import type { Platform } from '@/types'
import { HeaderMenu } from './HeaderMenu'
import styles from './Header.module.css'

interface HeaderProps {
  platform: Platform
  onPlatformChange: (platform: Platform) => void
}

export function Header({ platform, onPlatformChange }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.brandText}>
            <span className={styles.appName}>Søkesnirk</span>
            <span className={styles.tagline}>Bygg søkestreng for presise treff</span>
          </div>
        </div>

        <HeaderMenu platform={platform} onPlatformChange={onPlatformChange} />
      </div>
    </header>
  )
}

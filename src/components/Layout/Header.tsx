import type { Platform } from '@/types'
import { SearchIcon } from '../Icons'
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
          <div className={styles.logo}>
            <SearchIcon size={20} />
          </div>
          <span className={styles.appName}>Søkesnirk</span>
        </div>

        <HeaderMenu platform={platform} onPlatformChange={onPlatformChange} />
      </div>
    </header>
  )
}

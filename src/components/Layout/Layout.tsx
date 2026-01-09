import type { ReactNode } from 'react'
import type { Platform } from '@/types'
import { Header } from './Header'
import styles from './Layout.module.css'

interface LayoutProps {
  children: ReactNode
  platform: Platform
  onPlatformChange: (platform: Platform) => void
}

export function Layout({ children, platform, onPlatformChange }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <a href="#main-content" className={styles.skipLink}>
        Hopp til hovedinnhold
      </a>
      <Header platform={platform} onPlatformChange={onPlatformChange} />
      <main id="main-content" className={styles.main} tabIndex={-1}>
        {children}
      </main>
    </div>
  )
}

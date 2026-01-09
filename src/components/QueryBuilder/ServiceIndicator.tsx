import type { PlatformConfig } from '@/types'
import { QUERY_LANGUAGE_LABELS } from '@/data/platforms'
import styles from './ServiceIndicator.module.css'

interface ServiceIndicatorProps {
  platform: PlatformConfig
}

export function ServiceIndicator({ platform }: ServiceIndicatorProps) {
  return (
    <div
      className={styles.indicator}
      style={{ '--service-color': platform.color } as React.CSSProperties}
    >
      <div className={styles.serviceInfo}>
        <span className={styles.label}>Bygg søk for:</span>
        <span className={styles.badge}>{platform.icon}</span>
        <span className={styles.serviceName}>{platform.name}</span>
        <span className={styles.queryLanguageTag}>
          ({QUERY_LANGUAGE_LABELS[platform.queryLanguage]})
        </span>
      </div>
      <span className={styles.hint}>Hold over felt for veiledning</span>
    </div>
  )
}

import type { Platform } from '@/types'
import { QueryBuilder } from '@/components/QueryBuilder'
import styles from './BuildPage.module.css'

interface BuildPageProps {
  platform: Platform
}

export function BuildPage({ platform }: BuildPageProps) {
  return (
    <div className={styles.page}>
      <QueryBuilder platform={platform} />
    </div>
  )
}

import { useState } from 'react'
import type { Platform } from '@/types'
import { Layout } from '@/components/Layout'
import { BuildPage } from '@/pages'

export function App() {
  const [platform, setPlatform] = useState<Platform>('google')

  return (
    <Layout platform={platform} onPlatformChange={setPlatform}>
      <BuildPage platform={platform} />
    </Layout>
  )
}

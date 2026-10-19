export type Platform = 'google' | 'nb'

export type QueryLanguage = 'google-style' | 'lucene'

export type OperatorCategory =
  | 'basic'
  | 'filter'
  | 'site'
  | 'file'
  | 'date'
  | 'advanced'
  | 'security'

export interface Operator {
  id: string
  name: string
  syntax: string
  description: string
  inputExample: string
  category: OperatorCategory
  platforms: Platform[]
  deprecated?: boolean
}

export interface PlatformConfig {
  id: Platform
  name: string
  icon: string
  color: string
  queryLanguage: QueryLanguage
}

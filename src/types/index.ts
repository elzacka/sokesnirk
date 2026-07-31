export type Platform = 'google' | 'nb'

export type PlatformCategory = 'search' | 'archive'

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
  searchUrl: string
  placeholder: string
  category: PlatformCategory
  queryLanguage: QueryLanguage
}

export interface Template {
  id: string
  name: string
  description: string
  category: string
  platforms: Platform[]
  query: string
  variables: TemplateVariable[]
}

export interface TemplateVariable {
  id: string
  name: string
  placeholder: string
  required: boolean
}

export interface QueryPart {
  id: string
  type: 'text' | 'operator'
  value: string
  operatorId?: string
}

export interface UserPreferences {
  enabledPlatforms: Platform[]
  theme: 'dark' | 'light' | 'system'
  defaultPlatform: Platform
}

export const DEFAULT_PREFERENCES: UserPreferences = {
  enabledPlatforms: ['google', 'nb'],
  theme: 'light',
  defaultPlatform: 'google',
}

export type Platform =
  | 'google'
  | 'shodan'
  | 'github'
  | 'scholar'
  | 'pubmed'
  | 'nb'
  | 'archive'

export type PlatformCategory = 'search' | 'code' | 'academic' | 'archive' | 'security'

export type OperatorCategory =
  | 'basic'
  | 'filter'
  | 'site'
  | 'file'
  | 'date'
  | 'advanced'
  | 'security'

export type UserLevel = 'beginner' | 'advanced' | 'expert'

export interface Operator {
  id: string
  name: string
  syntax: string
  description: string
  example: string
  exampleResult: string
  category: OperatorCategory
  platforms: Platform[]
  level: UserLevel
}

export interface PlatformConfig {
  id: Platform
  name: string
  icon: string
  color: string
  searchUrl: string
  placeholder: string
  category: PlatformCategory
}

export interface Template {
  id: string
  name: string
  description: string
  category: string
  platforms: Platform[]
  level: UserLevel
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
  level: UserLevel
  enabledPlatforms: Platform[]
  theme: 'dark' | 'light' | 'system'
  defaultPlatform: Platform
}

export const DEFAULT_PREFERENCES: UserPreferences = {
  level: 'beginner',
  enabledPlatforms: ['google', 'github', 'nb'],
  theme: 'light',
  defaultPlatform: 'google',
}

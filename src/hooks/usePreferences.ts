import { useState, useEffect, useCallback } from 'react'
import type { UserPreferences, Platform, UserLevel } from '@/types'
import { DEFAULT_PREFERENCES } from '@/types'

const STORAGE_KEY = 'sokesnirk-preferences'

function loadPreferences(): UserPreferences {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return { ...DEFAULT_PREFERENCES, ...JSON.parse(stored) }
    }
  } catch {
    // Ignore parse errors
  }
  return DEFAULT_PREFERENCES
}

function savePreferences(prefs: UserPreferences): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
  } catch {
    // Ignore storage errors
  }
}

export function usePreferences() {
  const [preferences, setPreferencesState] = useState<UserPreferences>(loadPreferences)

  useEffect(() => {
    savePreferences(preferences)
  }, [preferences])

  const setLevel = useCallback((level: UserLevel) => {
    setPreferencesState((prev) => ({ ...prev, level }))
  }, [])

  const togglePlatform = useCallback((platformId: Platform) => {
    setPreferencesState((prev) => {
      const enabled = prev.enabledPlatforms.includes(platformId)
      const enabledPlatforms = enabled
        ? prev.enabledPlatforms.filter((p) => p !== platformId)
        : [...prev.enabledPlatforms, platformId]
      return { ...prev, enabledPlatforms }
    })
  }, [])

  const setDefaultPlatform = useCallback((platformId: Platform) => {
    setPreferencesState((prev) => ({ ...prev, defaultPlatform: platformId }))
  }, [])

  const resetPreferences = useCallback(() => {
    setPreferencesState(DEFAULT_PREFERENCES)
  }, [])

  return {
    preferences,
    setLevel,
    togglePlatform,
    setDefaultPlatform,
    resetPreferences,
  }
}

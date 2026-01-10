import { useState, useEffect } from 'react'

/**
 * Detects if the current device is touch-based (no hover support).
 * Uses matchMedia for reliable detection across devices.
 */
export function useIsTouchDevice(): boolean {
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: none)')
    setIsTouch(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setIsTouch(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return isTouch
}

import { useState, useCallback, useRef, useEffect } from 'react'

export function useClipboard(resetDelay = 2000) {
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Clean up timeout on unmount to prevent memory leak
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const copy = useCallback(
    async (text: string): Promise<boolean> => {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      try {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        timeoutRef.current = setTimeout(() => setCopied(false), resetDelay)
        return true
      } catch {
        // Fallback for older browsers
        try {
          const textarea = document.createElement('textarea')
          textarea.value = text
          textarea.style.position = 'fixed'
          textarea.style.opacity = '0'
          document.body.appendChild(textarea)
          textarea.select()
          document.execCommand('copy')
          document.body.removeChild(textarea)
          setCopied(true)
          timeoutRef.current = setTimeout(() => setCopied(false), resetDelay)
          return true
        } catch {
          return false
        }
      }
    },
    [resetDelay]
  )

  return { copy, copied }
}

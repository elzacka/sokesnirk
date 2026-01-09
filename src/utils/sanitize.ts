/**
 * XSS Protection utilities for Søkesnirk
 *
 * These functions sanitize user input to prevent code injection attacks
 * when building search query strings.
 */

/**
 * HTML entity map for escaping dangerous characters
 */
const HTML_ENTITIES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;',
}

/**
 * Escapes HTML special characters to prevent XSS
 * Use this when displaying user input in the DOM
 */
export function escapeHtml(input: string): string {
  if (typeof input !== 'string') return ''
  return input.replace(/[&<>"'`=/]/g, (char) => HTML_ENTITIES[char] || char)
}

/**
 * Sanitizes input for use in search query strings
 * Removes or escapes characters that could be used for injection
 */
export function sanitizeQueryInput(input: string): string {
  if (typeof input !== 'string') return ''

  // Remove null bytes and control characters (except common whitespace)
  let sanitized = input.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')

  // Normalize whitespace (collapse multiple spaces, trim)
  sanitized = sanitized.replace(/\s+/g, ' ').trim()

  // Limit length to prevent DoS
  const MAX_INPUT_LENGTH = 1000
  if (sanitized.length > MAX_INPUT_LENGTH) {
    sanitized = sanitized.substring(0, MAX_INPUT_LENGTH)
  }

  return sanitized
}

/**
 * Sanitizes a complete search query string before URL encoding
 * This is the final sanitization before the query is used
 */
export function sanitizeSearchQuery(query: string): string {
  if (typeof query !== 'string') return ''

  // Remove potential script injection patterns
  let sanitized = query
    // Remove javascript: protocol
    .replace(/javascript:/gi, '')
    // Remove data: protocol
    .replace(/data:/gi, '')
    // Remove vbscript: protocol
    .replace(/vbscript:/gi, '')
    // Remove on* event handlers
    .replace(/on\w+\s*=/gi, '')
    // Remove <script> tags
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    // Remove other HTML tags
    .replace(/<[^>]+>/g, '')

  return sanitized
}

/**
 * Validates that a URL is safe to use as a search destination
 */
export function isValidSearchUrl(url: string): boolean {
  if (typeof url !== 'string') return false

  try {
    const parsed = new URL(url)
    // Only allow http and https protocols
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return false
    }
    // Block localhost and private IPs in production
    const hostname = parsed.hostname.toLowerCase()
    if (
      hostname === 'localhost' ||
      hostname === '127.0.0.1' ||
      hostname.startsWith('192.168.') ||
      hostname.startsWith('10.') ||
      hostname.startsWith('172.')
    ) {
      // Allow in development
      if (import.meta.env.PROD) {
        return false
      }
    }
    return true
  } catch {
    return false
  }
}

/**
 * Safely encodes a query string for use in URLs
 */
export function encodeSearchQuery(query: string): string {
  const sanitized = sanitizeSearchQuery(query)
  return encodeURIComponent(sanitized)
}

/**
 * Creates a safe search URL by combining base URL with sanitized query
 */
export function createSafeSearchUrl(baseUrl: string, query: string): string | null {
  if (!isValidSearchUrl(baseUrl)) {
    console.warn('Invalid search URL:', baseUrl)
    return null
  }

  const sanitizedQuery = sanitizeSearchQuery(query)
  if (!sanitizedQuery) {
    return null
  }

  // URL encode the query
  const encodedQuery = encodeURIComponent(sanitizedQuery)

  // Handle different URL patterns
  if (baseUrl.includes('?')) {
    return `${baseUrl}${encodedQuery}`
  }
  return `${baseUrl}${encodedQuery}`
}

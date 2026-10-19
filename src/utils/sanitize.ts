// Sanitizes user input before it goes into search query strings.

export function sanitizeQueryInput(input: string): string {
  if (typeof input !== 'string') return ''

  // Remove null bytes and control characters (except common whitespace)
  // eslint-disable-next-line no-control-regex
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

// Final pass on the complete query before URL encoding.
export function sanitizeSearchQuery(query: string): string {
  if (typeof query !== 'string') return ''

  // Remove potential script injection patterns
  const sanitized = query
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

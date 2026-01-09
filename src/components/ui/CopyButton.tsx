import { useClipboard } from '@/hooks/useClipboard'
import { Button } from './Button'
import styles from './CopyButton.module.css'

interface CopyButtonProps {
  text: string
  label?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export function CopyButton({ text, label, size = 'md', className = '' }: CopyButtonProps) {
  const { copy, copied } = useClipboard()

  return (
    <Button
      variant={copied ? 'primary' : 'secondary'}
      size={size}
      icon={copied ? <CheckIcon /> : <CopyIcon />}
      onClick={() => copy(text)}
      className={`${styles.button} ${copied ? styles.copied : ''} ${className}`}
      aria-label={copied ? 'Kopiert!' : label || 'Kopier til utklippstavle'}
    >
      {label && (copied ? 'Kopiert!' : label)}
    </Button>
  )
}

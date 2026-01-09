import { useClipboard } from '@/hooks/useClipboard'
import { Button } from './Button'
import styles from './CopyButton.module.css'

interface CopyButtonProps {
  text: string
  label?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
}

function CopyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export function CopyButton({
  text,
  label,
  size = 'md',
  className = '',
  disabled = false,
}: CopyButtonProps) {
  const { copy, copied } = useClipboard()

  return (
    <Button
      variant="primary"
      size={size}
      icon={copied ? <CheckIcon /> : <CopyIcon />}
      onClick={() => copy(text)}
      className={`${styles.button} ${copied ? styles.copied : ''} ${className}`}
      aria-label={copied ? 'Kopiert!' : label || 'Kopier til utklippstavle'}
      disabled={disabled}
    >
      {label && (copied ? 'Kopiert!' : label)}
    </Button>
  )
}

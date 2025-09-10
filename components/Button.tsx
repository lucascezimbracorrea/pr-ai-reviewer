// Good implementation: Proper semantic button with accessibility
interface ButtonProps {
  onClick: () => void
  children: React.ReactNode
  disabled?: boolean
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({ 
  onClick, 
  children, 
  disabled = false, 
  variant = 'primary',
  type = 'button'
}: ButtonProps) {
  const baseStyles = {
    padding: '12px 24px',
    borderRadius: '4px',
    display: 'inline-block',
    fontSize: '16px',
    fontWeight: '500',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background-color 0.2s ease',
  }

  const variantStyles = {
    primary: {
      backgroundColor: disabled ? '#ccc' : '#007bff',
      color: 'white',
    },
    secondary: {
      backgroundColor: disabled ? '#f8f9fa' : '#6c757d',
      color: disabled ? '#6c757d' : 'white',
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      if (!disabled) {
        onClick()
      }
    }
  }

  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      style={{
        ...baseStyles,
        ...variantStyles[variant]
      }}
      aria-disabled={disabled}
    >
      {children}
    </button>
  )
}

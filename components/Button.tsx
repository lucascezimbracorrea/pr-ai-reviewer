// This component has accessibility issues - using div instead of button
export default function Button({ onClick, children, disabled = false }) {
  return (
    <div 
      onClick={disabled ? undefined : onClick}
      style={{ 
        padding: '12px 24px', 
        backgroundColor: disabled ? '#ccc' : '#007bff',
        color: 'white',
        cursor: disabled ? 'not-allowed' : 'pointer',
        borderRadius: '4px',
        display: 'inline-block',
        fontSize: '16px',
        fontWeight: '500'
      }}
    >
      {children}
    </div>
  )
}

import React from 'react'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'normal' | 'big'
  disabled?: boolean
  children: React.ReactNode
  onClick?: () => void
  style?: React.CSSProperties
}

export const Button = ({
  variant = 'primary',
  size = 'normal',
  disabled = false,
  children,
  onClick,
}: ButtonProps) => {
  const primaryColor = '#f44336'
  const secondaryColor = '#e57373'

  const sx: React.CSSProperties = {
    ...(variant === 'primary' && {
      backgroundColor: primaryColor,
      color: 'white',
    }),
    ...(variant === 'secondary' && {
      border: `2px solid ${secondaryColor}`,
      color: secondaryColor,
      backgroundColor: 'transparent',
    }),
    ...(size === 'small' && {
      padding: '4px 8px',
      fontSize: '12px',
    }),
    ...(size === 'normal' && {
      padding: '8px 16px',
      fontSize: '14px',
    }),
    ...(size === 'big' && {
      padding: '12px 24px',
      fontSize: '16px',
    }),
    ...(disabled && {
      opacity: 0.5,
      cursor: 'not-allowed',
    }),
  }

  return (
    <Button style={sx} disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  )
}

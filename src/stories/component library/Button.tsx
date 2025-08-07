import React from 'react'
import './Button.css'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  size?: 'medium' | 'large'
  disabled?: boolean
  children: React.ReactNode
  onClick?: () => void
}

export const Button = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`btn ${variant} ${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

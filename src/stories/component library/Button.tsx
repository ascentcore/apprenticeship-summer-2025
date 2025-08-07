import React from 'react'
import './Button.css'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'normal' | 'big'
  disabled?: boolean
  children: React.ReactNode
  onClick?: () => void
}

export const Button = ({
  variant = 'primary',
  size = 'normal',
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

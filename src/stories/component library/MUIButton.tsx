// src/stories/MUIButton.tsx
import * as React from 'react'
import Button from '@mui/material/Button'

export interface MUIButtonProps {
  label: string
  variant?: 'text' | 'outlined' | 'contained'
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
}

export const MUIButton: React.FC<MUIButtonProps> = ({
  label,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  onClick,
}) => (
  <Button variant={variant} color={color} size={size} onClick={onClick}>
    {label}
  </Button>
)

// src/stories/MUIButton.tsx
import * as React from 'react'
import Button from '@mui/material/Button'

export interface MUIButtonProps {
  label: string
  variant?: 'text' | 'outlined' | 'contained'
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
  onClick?: () => void
}

export const MUIButton: React.FC<MUIButtonProps> = ({
  label,
  variant = 'contained',
  color = 'primary',
  onClick,
}) => (
  <Button variant={variant} color={color} onClick={onClick}>
    {label}
  </Button>
)

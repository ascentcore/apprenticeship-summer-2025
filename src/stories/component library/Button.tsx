import React from 'react'
import { useTheme } from '@mui/material/styles'
import MuiButton from '@mui/material/Button'
import type { SxProps, Theme } from '@mui/material/styles'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'normal' | 'big'
  disabled?: boolean
  children: React.ReactNode
  onClick?: () => void
  sx?: SxProps<Theme>
}

export const CustomButton: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'normal',
  disabled = false,
  children,
  onClick = () => null,
  sx,
}) => {
  const theme = useTheme()

  const muiVariant =
    variant === 'primary'
      ? 'contained'
      : variant === 'secondary'
        ? 'outlined'
        : 'text'

  const muiSize =
    size === 'big' ? 'large' : size === 'normal' ? 'medium' : 'small'

  const customStyles: SxProps<Theme> = {
    ...(variant === 'primary' && {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.getContrastText(theme.palette.primary.main),
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    }),
    ...(variant === 'secondary' && {
      borderColor: theme.palette.secondary.main,
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.secondary.light,

      '&:hover': {
        backgroundColor: theme.palette.text.primary,
        borderColor: theme.palette.secondary.dark,
      },
    }),
    ...(size === 'small' && {
      fontSize: theme.typography.pxToRem(12),
      padding: '4px 8px',
    }),
    ...(size === 'normal' && {
      fontSize: theme.typography.pxToRem(14),
      padding: '8px 16px',
    }),
    ...(size === 'big' && {
      fontSize: theme.typography.pxToRem(16),
      padding: '12px 24px',
    }),

    // Styling pentru butoane disabled
    '&.Mui-disabled': {
      opacity: 1,
      cursor: 'not-allowed',
      ...(variant === 'primary' && {
        backgroundColor: theme.palette.primary.main,
        opacity: 0.8,
        color: '#fff',
      }),
      ...(variant === 'secondary' && {
        borderColor: theme.palette.secondary.main,
        color: theme.palette.secondary.main,
        backgroundColor: 'transparent',
      }),
    },

    '&:focus': {
      outline: 'none',
    },
    '&:focus-visible': {
      outline: 'none',
      boxShadow: 'none',
    },

    ...sx,
  }

  return (
    <MuiButton
      variant={muiVariant}
      size={muiSize}
      disabled={disabled}
      onClick={onClick}
      sx={customStyles}
    >
      {children}
    </MuiButton>
  )
}

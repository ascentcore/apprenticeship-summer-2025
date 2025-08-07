import React from 'react'
import MuiCard from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import PushPinIcon from '@mui/icons-material/PushPin'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import type { SxProps, Theme } from '@mui/material/styles'

type CardSize = 'small' | 'normal' | 'big'

interface CardProps {
  size?: CardSize
  disabled?: boolean
  onPinClick?: () => void
  onMoreClick?: () => void
  children?: React.ReactNode
}

const sizeStyles: Record<CardSize, SxProps<Theme>> = {
  small: {
    width: 200,
    padding: 1.5,
  },
  normal: {
    width: 300,
    padding: 2,
  },
  big: {
    width: 400,
    padding: 3,
  },
}

export const Card: React.FC<CardProps> = ({
  size = 'normal',
  disabled = false,
  onPinClick,
  onMoreClick,
  children,
}) => {
  const customStyles: SxProps<Theme> = {
    position: 'relative',
    borderRadius: 3,
    border: '2px solid #999',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    backgroundColor: disabled ? '#f5f5f5' : '#ffffff',
    color: disabled ? '#aaa' : '#000',
    pointerEvents: disabled ? 'none' : 'auto',
    opacity: disabled ? 0.6 : 1,
    ...sizeStyles[size],
  }

  return (
    <MuiCard sx={customStyles}>
      <div
        style={{
          position: 'absolute',
          top: 8,
          right: 8,
          display: 'flex',
          gap: 4,
        }}
      >
        <IconButton
          size="small"
          onClick={onPinClick}
          disabled={disabled || !onPinClick}
        >
          <PushPinIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          onClick={onMoreClick}
          disabled={disabled || !onMoreClick}
        >
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </div>
      <CardContent sx={{ paddingTop: 4 }}>{children}</CardContent>
    </MuiCard>
  )
}

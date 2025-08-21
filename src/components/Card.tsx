import React from 'react'
import {
  Card as MuiCard,
  CardContent,
  IconButton,
  Box,
  Typography,
} from '@mui/material'
import {
  PushPin as PushPinIcon,
  MoreVert as MoreVertIcon,
} from '@mui/icons-material'
import type { SxProps, Theme } from '@mui/material/styles'

type CardSize = 'small' | 'normal' | 'big'

interface CardProps {
  size?: CardSize
  disabled?: boolean
  onPinClick?: () => void
  onMoreClick?: () => void
  primaryText: string
  secondaryText?: string
}

const reusableStyles = {
  px: 1.5,
  py: 2,
  primaryFontSize: 16,
  secondaryFontSize: 10,
  iconFontSize: 16,
  borderRadius: 0,
  borderWidth: 0.5,
}

const sizeStyles: Record<
  CardSize,
  {
    width?: number
    height: 64
    px: number
    py: number
    primaryFontSize: number
    secondaryFontSize: number
    iconFontSize: number
    borderRadius: number
    borderWidth: number
  }
> = {
  small: {
    width: 196,
    height: 64,
    ...reusableStyles,
    primaryFontSize: 14,
    iconFontSize: 14,
  },
  normal: {
    width: 387,
    height: 64,
    ...reusableStyles,
  },
  big: {
    width: 600,
    height: 64,
    ...reusableStyles,
  },
}

export const CustomCard: React.FC<CardProps> = ({
  size = 'normal',
  disabled = false,
  onPinClick,
  onMoreClick,
  primaryText,
  secondaryText,
}) => {
  const {
    width,
    height,
    px,
    py,
    primaryFontSize,
    secondaryFontSize,
    iconFontSize,
    borderRadius,
    borderWidth,
  } = sizeStyles[size]

  const customStyles: SxProps<Theme> = {
    position: 'relative',
    width,
    height,
    borderRadius,
    border: `${borderWidth}px solid #D1D1D1`,
    boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
    backgroundColor: disabled ? '#f5f5f5' : '#ffffff',
    color: disabled ? '#aaa' : '#000',
    pointerEvents: disabled ? 'none' : 'auto',
    opacity: disabled ? 0.6 : 1,
    px: px,
    py: py,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }

  return (
    <MuiCard sx={customStyles}>
      <CardContent
        sx={{
          flexGrow: 1,
          px: 1.5,
          pt: size === 'small' ? 0 : 1.5,
          pb: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: size === 'small' ? 'center' : 'flex-start',
          position: 'relative',
        }}
      >
        {size === 'small' ? (
          <>
            <Box sx={{ pr: 0 }}>
              <Typography
                title={primaryText}
                sx={{
                  fontWeight: 600,
                  fontSize: primaryFontSize,
                  lineHeight: 1,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  mb: secondaryText ? 0.5 : 0,
                }}
              >
                {primaryText}
              </Typography>
            </Box>
            {secondaryText && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 1,
                }}
              >
                <Typography
                  title={secondaryText}
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: secondaryFontSize,
                    lineHeight: 1.2,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    flex: 1,
                  }}
                >
                  {secondaryText}
                </Typography>
                <Box sx={{ display: 'flex', gap: 0.5 }}>
                  <IconButton
                    size="small"
                    onClick={onPinClick}
                    disabled={disabled || !onPinClick}
                    sx={{ fontSize: iconFontSize }}
                  >
                    <PushPinIcon sx={{ fontSize: iconFontSize }} />
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={onMoreClick}
                    disabled={disabled || !onMoreClick}
                    sx={{ fontSize: iconFontSize }}
                  >
                    <MoreVertIcon sx={{ fontSize: iconFontSize }} />
                  </IconButton>
                </Box>
              </Box>
            )}
          </>
        ) : (
          <>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: px * 8,
                right: 48,
                transform: 'translateY(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}
            >
              <Typography
                title={primaryText}
                sx={{
                  fontWeight: 600,
                  fontSize: primaryFontSize,
                  lineHeight: 1.2,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  marginBottom: 0.5,
                }}
              >
                {primaryText}
              </Typography>
              {secondaryText && (
                <Typography
                  title={secondaryText}
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: secondaryFontSize,
                    lineHeight: 1.2,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {secondaryText}
                </Typography>
              )}
            </Box>

            <Box
              sx={{
                position: 'absolute',
                right: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                gap: 0.5,
              }}
            >
              <IconButton
                size="small"
                onClick={onPinClick}
                disabled={disabled || !onPinClick}
                sx={{ fontSize: iconFontSize }}
              >
                <PushPinIcon sx={{ fontSize: iconFontSize }} />
              </IconButton>
              <IconButton
                size="small"
                onClick={onMoreClick}
                disabled={disabled || !onMoreClick}
                sx={{ fontSize: iconFontSize }}
              >
                <MoreVertIcon sx={{ fontSize: iconFontSize }} />
              </IconButton>
            </Box>
          </>
        )}
      </CardContent>
    </MuiCard>
  )
}

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

const sizeStyles: Record<
  CardSize,
  {
    width: number
    height: number
    paddingTop: number
    paddingRight: number
    paddingBottom: number
    paddingLeft: number
    primaryFontSize: number
    secondaryFontSize: number
    iconFontSize: number
    borderRadius: number
    borderWidth: number
  }
> = {
  small: {
    width: 310,
    height: 64,
    paddingTop: 1,
    paddingRight: 1.5,
    paddingBottom: 0.75,
    paddingLeft: 1.5,
    primaryFontSize: 14,
    secondaryFontSize: 10,
    iconFontSize: 14,
    borderRadius: 0,
    borderWidth: 0.5,
  },
  normal: {
    width: 387,
    height: 64,
    paddingTop: 1.25,
    paddingRight: 2,
    paddingBottom: 1.25,
    paddingLeft: 2,
    primaryFontSize: 16,
    secondaryFontSize: 10,
    iconFontSize: 16,
    borderRadius: 0,
    borderWidth: 0.5,
  },
  big: {
    width: 600,
    height: 68,
    paddingTop: 1.5,
    paddingRight: 2,
    paddingBottom: 1.5,
    paddingLeft: 2,
    primaryFontSize: 16,
    secondaryFontSize: 10,
    iconFontSize: 16,
    borderRadius: 0,
    borderWidth: 0.5,
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
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
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
    pt: paddingTop,
    pr: paddingRight,
    pb: paddingBottom,
    pl: paddingLeft,
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
          pt: size === 'small' ? 0.5 : 1.5,
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
                sx={{
                  fontWeight: 600,
                  fontSize: primaryFontSize,
                  lineHeight: 1.2,
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
                left: paddingLeft * 8,
                right: 48,
                transform: 'translateY(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}
            >
              <Typography
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

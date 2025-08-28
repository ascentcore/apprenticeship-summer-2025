import React from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Tooltip,
} from '@mui/material'

type PresetColor = 'normal' | 'urgent' | 'custom1'

interface StatisticCardProps {
  title: string
  value: string | number
  subtitle?: string
  color?: PresetColor
  customColor?: string
  subtitleColor?: string
  backgroundImage?: string
  onClick?: () => void
  tooltip?: string
}

const formatValue = (val: number | string) => {
  if (typeof val !== 'number') return val
  if (val >= 1_000_000_000) return `${(val / 1_000_000_000).toFixed(2)}b`
  if (val >= 1_000_000) return `${(val / 1_000_000).toFixed(2)}m`
  if (val >= 1_000) return `${(val / 1_000).toFixed(2)}k`
  return val
}

const StatisticCard: React.FC<StatisticCardProps> = ({
  title,
  value,
  subtitle,
  color = 'normal',
  customColor,
  subtitleColor,
  backgroundImage,
  onClick,
  tooltip,
}) => {
  // paletă culori predefinite
  const presetColors: Record<PresetColor, { bg: string; subtitle: string }> = {
    normal: { bg: '#f9f9f9', subtitle: '#555' },
    urgent: { bg: '#ffe5e5', subtitle: '#c62828' },
    custom1: { bg: '#e3f2fd', subtitle: '#1565c0' },
  }

  const backgroundColor = customColor || presetColors[color].bg
  const subtitleTextColor = subtitleColor || presetColors[color].subtitle

  const cardContent = (
    <CardContent>
      <Typography
        variant="subtitle1"
        component="h2"
        sx={{ color: '#111', fontWeight: 600 }}
      >
        {title}
      </Typography>

      <Typography
        variant="h4"
        component="h3"
        sx={{ color: '#000', fontWeight: 700 }}
      >
        {formatValue(value)}
      </Typography>

      {subtitle && (
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ color: subtitleTextColor, fontWeight: 500 }}
        >
          {subtitle}
        </Typography>
      )}
    </CardContent>
  )

  return (
    <Tooltip title={tooltip || ''} arrow>
      <Card
        sx={{
          backgroundColor: backgroundImage ? 'transparent' : backgroundColor,
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minWidth: 'fit-content',
          borderRadius: 3,
          display: 'inline-block',
        }}
      >
        {onClick ? (
          <CardActionArea onClick={onClick}>{cardContent}</CardActionArea>
        ) : (
          cardContent
        )}
      </Card>
    </Tooltip>
  )
}

export default StatisticCard

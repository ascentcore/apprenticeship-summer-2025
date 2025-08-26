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
  const presetColors: Record<PresetColor, { bg: string; subtitle: string }> = {
    normal: { bg: '#f0f0f0', subtitle: '#555' },
    urgent: { bg: '#ffcccc', subtitle: '#a00' },
    custom1: { bg: '#cce5ff', subtitle: '#004085' },
  }

  const backgroundColor = customColor || presetColors[color].bg
  const subtitleTextColor = subtitleColor || presetColors[color].subtitle

  const cardContent = (
    <CardContent>
      <Typography
        variant="subtitle1"
        component="h2"
        sx={{ color: '#000', fontWeight: 600 }}
        aria-label={`Card title: ${title}`}
      >
        {title}
      </Typography>

      <Typography
        variant="h4"
        component="h3"
        sx={{ color: '#000', fontWeight: 700 }}
        aria-label={`Primary value: ${value}`}
      >
        {formatValue(value)}
      </Typography>

      {subtitle && (
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ color: subtitleTextColor, fontWeight: 500 }}
          aria-label={`Subtitle: ${subtitle}`}
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
        role="region"
        aria-label={`Statistic card for ${title}`}
      >
        {onClick ? (
          <CardActionArea
            onClick={onClick}
            sx={{
              '&:focus': { outline: 'none' },
              '&:focus-visible': { outline: 'none', boxShadow: 'none' },
            }}
          >
            {cardContent}
          </CardActionArea>
        ) : (
          cardContent
        )}
      </Card>
    </Tooltip>
  )
}

export default StatisticCard

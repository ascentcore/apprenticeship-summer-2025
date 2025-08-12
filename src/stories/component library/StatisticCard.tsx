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
  onClick?: () => void
  tooltip?: string
}

const presetColors: Record<PresetColor, { bg: string; subtitle: string }> = {
  normal: { bg: '#E8F2FF', subtitle: '#2E7CF6' },
  urgent: { bg: '#FFF1E9', subtitle: '#FF4D4D' },
  custom1: { bg: '#FFEAF6', subtitle: '#FF4AB8' },
}

const StatisticCard: React.FC<StatisticCardProps> = ({
  title,
  value,
  subtitle,
  color = 'normal',
  customColor,
  subtitleColor,
  onClick,
  tooltip,
}) => {
  const backgroundColor = customColor || presetColors[color].bg
  const subtitleTextColor = subtitleColor || presetColors[color].subtitle

  const cardContent = (
    <CardContent>
      <Typography
        variant="subtitle1"
        sx={{ color: '#0B0B3B', fontWeight: 600 }}
      >
        {title}
      </Typography>
      <Typography variant="h4" sx={{ color: '#0B0B3B', fontWeight: 700 }}>
        {value}
      </Typography>
      {subtitle && (
        <Typography
          variant="subtitle2"
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
          backgroundColor,
          minWidth: 200,
          borderRadius: 3,
        }}
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

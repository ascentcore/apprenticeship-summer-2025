import React from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Tooltip,
} from '@mui/material'

type PresetColor = 'normal' | 'urgent'

interface StatisticCardProps {
  title: string
  value: string | number
  subtitle?: string
  color?: PresetColor
  customColor?: string
  onClick?: () => void
  tooltip?: string
}

const presetColors: Record<PresetColor, string> = {
  normal: '#E3F2FD',
  urgent: '#FFEBEE',
}

const StatisticCard: React.FC<StatisticCardProps> = ({
  title,
  value,
  subtitle,
  color = 'normal',
  customColor,
  onClick,
  tooltip,
}) => {
  const backgroundColor =
    customColor || presetColors[color] || presetColors.normal

  const cardContent = (
    <CardContent>
      <Typography variant="subtitle1" color="textSecondary">
        {title}
      </Typography>
      <Typography variant="h4" color="textPrimary">
        {value}
      </Typography>
      {subtitle && (
        <Typography variant="subtitle2" color="textSecondary">
          {subtitle}
        </Typography>
      )}
    </CardContent>
  )

  return (
    <Tooltip title={tooltip || ''} arrow>
      <Card sx={{ backgroundColor, minWidth: 200 }}>
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

import React from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Tooltip,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'

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
  const theme = useTheme()

  const backgroundColor = customColor || theme.palette.statisticCard[color].bg
  const subtitleTextColor =
    subtitleColor || theme.palette.statisticCard[color].subtitle

  const cardContent = (
    <CardContent>
      <Typography
        variant="subtitle1"
        sx={{ color: theme.palette.statisticCard.title, fontWeight: 600 }}
      >
        {title}
      </Typography>
      <Typography
        variant="h4"
        sx={{ color: theme.palette.statisticCard.title, fontWeight: 700 }}
      >
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

import React from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Tooltip,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { NumberHandler } from '../functions/NumberHandler'

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
  const theme = useTheme()

  const backgroundColor = customColor || theme.palette.statisticCard[color].bg
  const subtitleTextColor =
    subtitleColor ||
    (theme.palette.statisticCard[color].subtitle
      ? theme.palette.statisticCard[color].subtitle
      : '#003585')

  const cardContent = (
    <CardContent>
      <Typography
        variant="subtitle1"
        component="h2"
        sx={{ color: theme.palette.statisticCard.title, fontWeight: 600 }}
        aria-label={`Card title: ${title}`}
      >
        {title}
      </Typography>

      <Typography
        variant="h4"
        component="h3"
        sx={{ color: theme.palette.statisticCard.title, fontWeight: 700 }}
        aria-label={`Primary value: ${value}`}
      >
        <NumberHandler value={value} />
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

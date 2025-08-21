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

  const textEllipsisSx = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }

  const cardContent = (
    <CardContent>
      {/* Title with ellipsis + tooltip */}
      <Tooltip title={title} arrow>
        <Typography
          variant="subtitle1"
          component="h2"
          sx={{
            ...textEllipsisSx,
            color: theme.palette.statisticCard.title,
            fontWeight: 600,
          }}
          aria-label={`Card title: ${title}`}
        >
          {title}
        </Typography>
      </Tooltip>

      {/* Value with ellipsis + tooltip */}
      <Tooltip title={value.toString()} arrow>
        <Typography
          variant="h4"
          component="h3"
          sx={{
            ...textEllipsisSx,
            color: theme.palette.statisticCard.title,
            fontWeight: 700,
          }}
          aria-label={`Primary value: ${value}`}
        >
          <NumberHandler value={value} />
        </Typography>
      </Tooltip>

      {/* Subtitle with ellipsis + tooltip */}
      {subtitle && (
        <Tooltip title={subtitle} arrow>
          <Typography
            variant="subtitle2"
            component="p"
            sx={{
              ...textEllipsisSx,
              color: subtitleTextColor,
              fontWeight: 500,
            }}
            aria-label={`Subtitle: ${subtitle}`}
          >
            {subtitle}
          </Typography>
        </Tooltip>
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

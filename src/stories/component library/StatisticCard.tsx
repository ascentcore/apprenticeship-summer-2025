import React from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Tooltip,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import NumberHandler from './NumberHandler'

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
  titleColor?: string
  invertTitle?: boolean
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
  titleColor,
  invertTitle,
}) => {
  const theme = useTheme()

  const backgroundColor = customColor || theme.palette.statisticCard[color].bg

  const subtitleTextColor =
    subtitleColor ||
    (theme.palette.statisticCard[color].subtitle
      ? theme.palette.statisticCard[color].subtitle
      : '#003585')

  const titleTextColor = titleColor
    ? titleColor
    : invertTitle
      ? '#fff'
      : theme.palette.statisticCard.title

  const cardContent = (
    <CardContent sx={{ position: 'relative', zIndex: 2 }}>
      <Typography
        variant="subtitle1"
        component="h2"
        sx={{
          color: titleTextColor,
          fontWeight: 600,
          textShadow: invertTitle ? '1px 1px 3px rgba(0,0,0,0.7)' : 'none',
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="h4"
        component="h3"
        sx={{
          color: titleTextColor,
          fontWeight: 700,
          textShadow: invertTitle ? '1px 1px 3px rgba(0,0,0,0.7)' : 'none',
        }}
      >
        <NumberHandler value={value} />
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
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: backgroundImage ? 'transparent' : backgroundColor,
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minWidth: 'fit-content',
          borderRadius: 3,
          display: 'inline-block',
          '&:hover::after': backgroundImage
            ? {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.25)',
                zIndex: 1,
              }
            : {},
        }}
      >
        {onClick ? <CardActionArea>{cardContent}</CardActionArea> : cardContent}
      </Card>
    </Tooltip>
  )
}

export default StatisticCard

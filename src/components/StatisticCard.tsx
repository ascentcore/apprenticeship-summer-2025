import React from 'react'
import { Card, CardActionArea, CardContent, Tooltip } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { NumberHandler } from '../functions/NumberHandler'
import TextWithEllipsis from './TextWithEllipsis'

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
      <TextWithEllipsis
        text={title}
        variant="subtitle1"
        fontWeight={600}
        color={theme.palette.statisticCard.title}
      />

      <TextWithEllipsis
        text={String(value)}
        variant="h4"
        fontWeight={700}
        color={theme.palette.statisticCard.title}
      >
        {/* You can still wrap NumberHandler if needed */}
        <NumberHandler value={value} />
      </TextWithEllipsis>

      {subtitle && (
        <TextWithEllipsis
          text={subtitle}
          variant="subtitle2"
          fontWeight={500}
          color={subtitleTextColor}
        />
      )}
    </CardContent>
  )

  return (
    <Tooltip title={tooltip || ''} arrow disableInteractive>
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

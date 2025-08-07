import React from 'react'
import './Card.css'
import PinIcon from '@mui/icons-material/PushPin'
import MoreVertIcon from '@mui/icons-material/MoreVert'

type CardSize = 'small' | 'normal' | 'big'

interface CardProps {
  size: CardSize
  disabled: boolean
  onPinClick: () => void
  onMoreClick: () => void
  children: React.ReactNode
}

export const Card: React.FC<CardProps> = ({
  size = 'normal',
  disabled = false,
  onPinClick,
  onMoreClick,
  children,
}) => {
  const sizeClass = `card--${size}`
  const disabledClass = disabled ? 'card--disabled' : ''

  return (
    <div className={`card ${sizeClass} ${disabledClass}`}>
      <div className="card__actions">
        <button
          className="card__icon-button"
          onClick={onPinClick}
          disabled={disabled || !onPinClick}
          aria-label="Pin"
        >
          <PinIcon fontSize="small" />
        </button>
        <button
          className="card__icon-button"
          onClick={onMoreClick}
          disabled={disabled || !onMoreClick}
          aria-label="More"
        >
          <MoreVertIcon fontSize="small" />
        </button>
      </div>
      <div className="card__content">{children}</div>
    </div>
  )
}

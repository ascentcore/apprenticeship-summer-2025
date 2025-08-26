import React from 'react'
import { Tooltip, Typography } from '@mui/material'
import type { TypographyProps } from '@mui/material'

interface TextWithEllipsisProps {
  text?: string
  fontSize?: number
  color?: string
  mb?: number
  variant?: TypographyProps['variant'] // all MUI variants allowed
  fontWeight?: number
  children?: React.ReactNode
}

const TextWithEllipsis: React.FC<TextWithEllipsisProps> = ({
  text,
  fontSize,
  color,
  mb = 0,
  variant = 'body2',
  fontWeight = 600,
  children,
}) => {
  const displayContent = children || text

  return (
    <Tooltip
      title={text || (typeof displayContent === 'string' ? displayContent : '')}
      arrow
    >
      <Typography
        variant={variant}
        sx={{
          fontWeight,
          fontSize,
          lineHeight: 1.2,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          mb,
          cursor: 'default',
          color,
          flex: 1,
        }}
      >
        {displayContent}
      </Typography>
    </Tooltip>
  )
}

export default TextWithEllipsis

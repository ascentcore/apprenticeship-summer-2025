import React from 'react'
import { Tooltip, Typography } from '@mui/material'

interface TextWithEllipsisProps {
  text: string
  fontSize?: number
  color?: string
  mb?: number
  variant?: 'body2' | 'body1' | 'subtitle1' | 'subtitle2'
  fontWeight?: number
}

const TextWithEllipsis: React.FC<TextWithEllipsisProps> = ({
  text,
  fontSize,
  color,
  mb = 0,
  variant = 'body2',
  fontWeight = 600,
}) => (
  <Tooltip title={text} arrow>
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
      {text}
    </Typography>
  </Tooltip>
)

export default TextWithEllipsis

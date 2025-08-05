import React from 'react'
import { Box, useTheme } from '@mui/material'

export type AlexComponentProps = {
  name: string
}

export const AlexComponent: React.FC<AlexComponentProps> = ({ name }) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        border: '2px solid #FF9800',
        padding: 2,
        borderRadius: 2,
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        '&:hover': {
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.secondary.contrastText,
        },
      }}
    >
      Hello, {name}!
    </Box>
  )
}

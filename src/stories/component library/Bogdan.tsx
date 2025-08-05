import * as React from 'react'
import { Box } from '@mui/material'

export interface nameProps {
  name: string
}

export const Bogdan: React.FC<nameProps> = ({ name }) => (
  <Box
    sx={{
      backgroundColor: 'primary.main',
      color: 'white',
      border: '2px solid #ff9800',
      padding: '16px',
      borderRadius: '8px',
      transition: '0.3s ease',
      textAlign: 'center',
      '&:hover': {
        backgroundColor: 'secondary.main',
      },
    }}
  >
    {name}
  </Box>
)

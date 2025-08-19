import React from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'

interface DrawerProps {
  open: boolean
  onOpen: () => void
  onClose: () => void
  anchor?: 'left' | 'right' | 'top' | 'bottom'
  children: React.ReactNode
}

export const Drawer: React.FC<DrawerProps> = ({
  open,
  onOpen,
  onClose,
  anchor = 'left',
  children,
}) => {
  return (
    <SwipeableDrawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      swipeAreaWidth={20}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <Box
        sx={{
          width: '242px',
          height: '900px',
          transform: 'rotate(0deg)',
          opacity: 1,
          overflow: 'auto',
          bgcolor: 'background.paper',
        }}
      >
        {children}
      </Box>
    </SwipeableDrawer>
  )
}

import React from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'

type BackdropType = 'darken' | 'blur' | 'none'

interface DrawerProps {
  open: boolean
  onOpen: () => void
  onClose: () => void
  anchor?: 'left' | 'right' | 'top' | 'bottom'
  children: React.ReactNode
  backdrop?: BackdropType
}

export const Drawer: React.FC<DrawerProps> = ({
  open,
  onOpen,
  onClose,
  anchor = 'left',
  children,
  backdrop = 'darken',
}) => {
  // slotProps for backdrop customization
  const slotProps =
    backdrop === 'blur'
      ? {
          backdrop: {
            sx: {
              backdropFilter: 'blur(6px)',
              backgroundColor: 'rgba(0,0,0,0.3)',
            },
          },
        }
      : {}

  return (
    <SwipeableDrawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      swipeAreaWidth={20}
      slotProps={slotProps}
      ModalProps={{
        keepMounted: true,
        hideBackdrop: backdrop === 'none',
        onClick: (e) => {
          // Handle outside click when backdrop is none
          if (backdrop === 'none') {
            const drawer = document.querySelector('.MuiDrawer-paper')
            if (drawer && !drawer.contains(e.target as Node)) {
              onClose()
            }
          }
        },
      }}
    >
      <Box
        sx={{
          width: '242px',
          height: '900px',
          overflow: 'auto',
          bgcolor: 'background.paper',
        }}
      >
        {children}
      </Box>
    </SwipeableDrawer>
  )
}

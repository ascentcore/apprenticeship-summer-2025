import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Drawer } from './Drawer'
import {
  Box,
  Button,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

import {
  Dashboard as DashboardIcon,
  Work as WorkIcon,
  Schedule as ScheduleIcon,
  People as PeopleIcon,
  Apartment as ApartmentIcon,
  HelpOutline as HelpOutlineIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material'

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Drawer>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const [activeItem, setActiveItem] = useState<string>('')

    const menuItems = [
      { text: 'Dashboard', icon: <DashboardIcon /> },
      { text: 'Recruitment', icon: <WorkIcon /> },
      { text: 'Schedule', icon: <ScheduleIcon /> },
      { text: 'Employee', icon: <PeopleIcon /> },
      { text: 'Department', icon: <ApartmentIcon /> },
    ]

    const otherItems = [
      { text: 'Support', icon: <HelpOutlineIcon /> },
      { text: 'Settings', icon: <SettingsIcon /> },
    ]

    return (
      <Box
        sx={{
          width: '1440px',
          height: '900px',
          backgroundColor: '#f0f0f0',
          p: 2,
        }}
      >
        <Button
          variant="contained"
          onClick={() => setOpen(true)}
          sx={{ mb: 2 }}
        >
          Open Drawer
        </Button>
        <Drawer
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          anchor="left"
        >
          <Box sx={{ p: 2, width: 250 }}>
            <Typography
              variant="h3"
              sx={{ textAlign: 'center', fontWeight: 'bold' }}
            >
              WeHR
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: 'text.secondary', fontSize: '0.75rem', mb: 1 }}
            >
              MAIN MENU
            </Typography>
            <List>
              {menuItems.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton onClick={() => setActiveItem(item.text)}>
                    <ListItemIcon
                      sx={{
                        color: activeItem === item.text ? 'red' : 'inherit',
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{
                        sx: {
                          color: activeItem === item.text ? 'red' : 'inherit',
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>

            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                fontSize: '0.75rem',
                mt: 2,
                mb: 1,
              }}
            >
              OTHERS
            </Typography>
            <List>
              {otherItems.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton onClick={() => setActiveItem(item.text)}>
                    <ListItemIcon
                      sx={{
                        color: activeItem === item.text ? 'red' : 'inherit',
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{
                        sx: {
                          color: activeItem === item.text ? 'red' : 'inherit',
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    )
  },
}

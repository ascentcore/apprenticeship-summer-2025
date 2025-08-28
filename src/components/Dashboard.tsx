import React, { useState } from 'react'
import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from '@mui/material'
import { Drawer } from './Drawer'
import StatisticCard from './StatisticCard'
import GraphCard from './GraphCard'

export default function Dashboard() {
  const [drawerOpen, setDrawerOpen] = useState(true)

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Drawer */}
      <Drawer
        open={drawerOpen}
        onOpen={() => setDrawerOpen(true)}
        onClose={() => setDrawerOpen(false)}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="🏠 Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="📊 Reports" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="⚙️ Settings" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>

        {/* Statistic cards */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={6} md={3}>
            <StatisticCard
              title="Users"
              value={1234}
              subtitle="Active this month"
              color="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatisticCard
              title="Revenue"
              value={56789}
              subtitle="USD"
              color="custom1"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatisticCard
              title="Errors"
              value={12}
              subtitle="Critical"
              color="urgent"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatisticCard title="Tickets" value={89} subtitle="Open" />
          </Grid>
        </Grid>

        {/* Graph cards */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <GraphCard
              title="Monthly Sales"
              value="$45k"
              secondaryText="vs last month"
              chartType="line"
              chartData={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                  {
                    data: [10, 20, 15, 25, 30, 45],
                    borderColor: 'blue',
                    backgroundColor: 'rgba(0,0,255,0.1)',
                    tension: 0.3,
                  },
                ],
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <GraphCard
              title="Support Tickets"
              value="134"
              secondaryText="last 6 months"
              chartType="bar"
              chartData={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                  {
                    data: [5, 10, 8, 12, 6, 9],
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                  },
                ],
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

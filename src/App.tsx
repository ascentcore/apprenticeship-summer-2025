import { useState } from 'react'
import { Box, Typography, Button, Card, CardContent, Link } from '@mui/material'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box
      sx={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
        <Link href="https://vite.dev" target="_blank">
          <Box
            component="img"
            src={viteLogo}
            alt="Vite logo"
            sx={{
              height: '6em',
              padding: '1.5em',
              willChange: 'filter',
              transition: 'filter 300ms',
              '&:hover': {
                filter: 'drop-shadow(0 0 2em #646cffaa)',
              },
            }}
          />
        </Link>
        <Link href="https://react.dev" target="_blank">
          <Box
            component="img"
            src={reactLogo}
            alt="React logo"
            className="react"
            sx={{
              height: '6em',
              padding: '1.5em',
              willChange: 'filter',
              transition: 'filter 300ms',
              '&:hover': {
                filter: 'drop-shadow(0 0 2em #61dafbaa)',
              },
              '@media (prefers-reduced-motion: no-preference)': {
                animation: 'logo-spin infinite 20s linear',
              },
            }}
          />
        </Link>
      </Box>

      <Typography
        variant="h1"
        sx={{ fontSize: '3.2em', lineHeight: 1.1, mb: 2 }}
      >
        Vite + React
      </Typography>

      <Card sx={{ padding: '2em', mb: 2 }}>
        <CardContent>
          <Button
            variant="contained"
            onClick={() => setCount((count) => count + 1)}
            sx={{ mb: 2 }}
          >
            count is {count}
          </Button>
          <Typography variant="body1">
            Edit <code>src/App.tsx</code> and save to test HMR
          </Typography>
        </CardContent>
      </Card>

      <Typography
        variant="body2"
        sx={{
          color: '#888',
        }}
      >
        Click on the Vite and React logos to learn more
      </Typography>
    </Box>
  )
}

export default App

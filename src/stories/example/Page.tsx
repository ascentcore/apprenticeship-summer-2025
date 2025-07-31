import React from 'react'
import { Box, Typography, Link, List, ListItem, Chip } from '@mui/material'

import { Header } from './Header'

type User = {
  name: string
}

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>()

  return (
    <Box component="article">
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <Box
        component="section"
        sx={{
          margin: '0 auto',
          padding: '48px 20px',
          maxWidth: '600px',
          color: '#333',
          fontSize: '14px',
          lineHeight: '24px',
          fontFamily:
            "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            display: 'inline-block',
            verticalAlign: 'top',
            margin: '0 0 4px',
            fontWeight: 700,
            fontSize: '32px',
            lineHeight: 1,
          }}
        >
          Pages in Storybook
        </Typography>
        <Typography variant="body1" sx={{ margin: '1em 0' }}>
          We recommend building UIs with a{' '}
          <Link
            href="https://componentdriven.org"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'inherit' }}
          >
            <strong>component-driven</strong>
          </Link>{' '}
          process starting with atomic components and ending with pages.
        </Typography>
        <Typography variant="body1" sx={{ margin: '1em 0' }}>
          Render pages with mock data. This makes it easy to build and review
          page states without needing to navigate to them in your app. Here are
          some handy patterns for managing page data in Storybook:
        </Typography>
        <List sx={{ margin: '1em 0', paddingLeft: '30px' }}>
          <ListItem sx={{ marginBottom: '8px', display: 'list-item' }}>
            Use a higher-level connected component. Storybook helps you compose
            such data from the "args" of child component stories
          </ListItem>
          <ListItem sx={{ marginBottom: '8px', display: 'list-item' }}>
            Assemble data in the page component from your services. You can mock
            these services out using Storybook.
          </ListItem>
        </List>
        <Typography variant="body1" sx={{ margin: '1em 0' }}>
          Get a guided tutorial on component-driven development at{' '}
          <Link
            href="https://storybook.js.org/tutorials/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'inherit' }}
          >
            Storybook tutorials
          </Link>
          . Read more in the{' '}
          <Link
            href="https://storybook.js.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'inherit' }}
          >
            docs
          </Link>
          .
        </Typography>
        <Box
          sx={{
            marginTop: '40px',
            marginBottom: '40px',
            fontSize: '13px',
            lineHeight: '20px',
          }}
        >
          <Chip
            label="Tip"
            size="small"
            sx={{
              display: 'inline-block',
              verticalAlign: 'top',
              marginRight: '10px',
              borderRadius: '1em',
              backgroundColor: '#e7fdd8',
              color: '#357a14',
              fontWeight: 700,
              fontSize: '11px',
              lineHeight: '12px',
              height: 'auto',
              '& .MuiChip-label': {
                padding: '4px 12px',
              },
            }}
          />
          Adjust the width of the canvas with the{' '}
          <svg
            width="10"
            height="10"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              display: 'inline-block',
              verticalAlign: 'top',
              marginTop: '3px',
              marginRight: '4px',
              width: '12px',
              height: '12px',
            }}
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
                id="a"
                fill="#999"
              />
            </g>
          </svg>
          Viewports addon in the toolbar
        </Box>
      </Box>
    </Box>
  )
}

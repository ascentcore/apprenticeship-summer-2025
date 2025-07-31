import React from 'react'
import { Box, Typography, Stack } from '@mui/material'

import { MUIButton } from '../component library/MUIButton'

type User = {
  name: string
}

export interface HeaderProps {
  user?: User
  onLogin?: () => void
  onLogout?: () => void
  onCreateAccount?: () => void
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => (
  <Box
    component="header"
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
      padding: '15px 20px',
      fontFamily:
        "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'inline-block', verticalAlign: 'top' }}
      >
        <g fill="none" fillRule="evenodd">
          <path
            d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
            fill="#FFF"
          />
          <path
            d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
            fill="#555AB9"
          />
          <path
            d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
            fill="#91BAF8"
          />
        </g>
      </svg>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          display: 'inline-block',
          verticalAlign: 'top',
          margin: '6px 0 6px 10px',
          fontWeight: 700,
          fontSize: '20px',
          lineHeight: 1,
        }}
      >
        Acme
      </Typography>
    </Box>
    <Stack direction="row" spacing={1} alignItems="center">
      {user ? (
        <>
          <Typography
            variant="body2"
            sx={{
              marginRight: '10px',
              color: '#333',
              fontSize: '14px',
            }}
          >
            Welcome, <strong>{user.name}</strong>!
          </Typography>
          <MUIButton size="small" onClick={onLogout} label="Log out" />
        </>
      ) : (
        <>
          <MUIButton size="small" onClick={onLogin} label="Log in" />
          <MUIButton
            variant="contained"
            size="small"
            onClick={onCreateAccount}
            label="Sign up"
          />
        </>
      )}
    </Stack>
  </Box>
)

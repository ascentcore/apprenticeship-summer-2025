import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff8383ff',
    },
    secondary: {
      main: '#FF9B6A',
    },
    background: {
      default: '#ffe3c5ff',
      paper: '#ffffffff',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
    },
  },
  typography: {
    fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
    h1: {
      fontSize: '3.2em',
      lineHeight: 1.1,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          display: 'flex',
          placeItems: 'center',
          minWidth: '320px',
          minHeight: '100vh',
          fontSynthesis: 'none',
          textRendering: 'optimizeLegibility',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        a: {
          fontWeight: 500,
          color: '#646cff',
          textDecoration: 'inherit',
          '&:hover': {
            color: '#535bf2',
          },
        },
        button: {
          borderRadius: '8px',
          border: '1px solid transparent',
          padding: '0.6em 1.2em',
          fontSize: '1em',
          fontWeight: 500,
          fontFamily: 'inherit',
          backgroundColor: '#1a1a1a',
          cursor: 'pointer',
          transition: 'border-color 0.25s',
          '&:hover': {
            borderColor: '#646cff',
          },
          '&:focus, &:focus-visible': {
            outline: '4px auto -webkit-focus-ring-color',
          },
        },
        '@keyframes logo-spin': {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
      },
    },
  },
})

// Light mode theme variant
export const lightTheme = createTheme({
  ...theme,
  palette: {
    mode: 'light',
    primary: {
      main: '#FF5151',
    },
    secondary: {
      main: '#ff907aff',
      light: '#fff1eaff',
    },
    background: {
      default: '#ffffff',
      paper: '#f9f9f9',
    },
    text: {
      primary: '#ffd8c5ff',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          display: 'flex',
          placeItems: 'center',
          minWidth: '320px',
          minHeight: '100vh',
          fontSynthesis: 'none',
          textRendering: 'optimizeLegibility',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        a: {
          fontWeight: 500,
          color: '#646cff',
          textDecoration: 'inherit',
          '&:hover': {
            color: '#747bff',
          },
        },
        button: {
          borderRadius: '8px',
          border: '1px solid transparent',
          padding: '0.6em 1.2em',
          fontSize: '1em',
          fontWeight: 500,
          fontFamily: 'inherit',
          backgroundColor: '#f9f9f9',
          cursor: 'pointer',
          transition: 'border-color 0.25s',
          '&:hover': {
            borderColor: '#646cff',
          },
          '&:focus, &:focus-visible': {
            outline: '4px auto -webkit-focus-ring-color',
          },
        },
        '@keyframes logo-spin': {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
      },
    },
  },
})

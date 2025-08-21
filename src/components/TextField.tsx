import { useState } from 'react'
import {
  TextField as TextFieldMui,
  InputAdornment,
  IconButton,
  Tooltip,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'

interface TextFieldProps {
  label?: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: 'text' | 'password' | 'number'
  error?: boolean
  errorMessage?: string
  disabled?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  variant?: 'normal' | 'compact'
  ellipsis?: boolean // new prop to enable ellipsis
}

const TextField = ({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  error = false,
  errorMessage,
  disabled = false,
  startIcon,
  endIcon,
  variant = 'normal',
  ellipsis = false,
}: TextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const [focused, setFocused] = useState(false)
  const theme = useTheme()

  const height = variant === 'compact' ? 36 : 48
  const isPassword = type === 'password'

  const inputElement = (
    <TextFieldMui
      label={label}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      type={isPassword && !showPassword ? 'password' : 'text'}
      error={error}
      helperText={error ? errorMessage : ''}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      InputProps={{
        startAdornment: startIcon ? (
          <InputAdornment position="start">{startIcon}</InputAdornment>
        ) : undefined,
        endAdornment: isPassword ? (
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ) : endIcon ? (
          <InputAdornment position="end">{endIcon}</InputAdornment>
        ) : undefined,
        sx: {
          backgroundColor: 'transparent',
          boxSizing: 'border-box',
        },
        inputProps: {
          title: ellipsis ? value : undefined, // show full text on hover
          style: ellipsis
            ? {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }
            : {},
        },
      }}
      InputLabelProps={{
        shrink: true,
        sx: {
          color: theme.palette.text.primary,
          px: 0.5,
          zIndex: 1,
          lineHeight: 1.2,
          backgroundColor: 'transparent',
          display: 'inline-block',
          width: 'auto',
        },
      }}
      sx={{
        width: '100%',
        '& .MuiOutlinedInput-root': {
          backgroundColor: 'transparent',
          minHeight: height,
          borderRadius: theme.shape.borderRadius,
          '& fieldset': {
            borderColor: error
              ? theme.palette.error.main
              : focused
                ? theme.palette.primary.main
                : theme.palette.divider,
          },
          '&:hover fieldset': {
            borderColor: focused
              ? theme.palette.primary.dark
              : theme.palette.text.primary,
          },
          '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.main,
            borderWidth: 2,
          },
        },
        '& .MuiInputBase-input': {
          color: theme.palette.text.primary,
          height: height,
          padding: `0 ${theme.spacing(1.5)}`,
          fontSize: theme.typography.pxToRem(14),
          boxSizing: 'border-box',
          backgroundColor: 'transparent',
          '&::placeholder': {
            color: theme.palette.text.secondary,
            opacity: 1,
          },
        },
        '& .MuiFormHelperText-root': {
          color: error
            ? theme.palette.error.main
            : theme.palette.text.secondary,
        },
      }}
    />
  )

  return ellipsis ? (
    <Tooltip title={value}>{inputElement}</Tooltip>
  ) : (
    inputElement
  )
}

export default TextField

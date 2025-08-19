import { useState } from 'react'
import {
  TextField as TextFieldMui,
  InputAdornment,
  IconButton,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

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
}: TextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const [focused, setFocused] = useState(false)

  const height = variant === 'compact' ? 36 : 48
  const textColor = '#000000' // negru pur
  const backgroundColor = '#ffffff' // alb pur
  const borderColorDefault = '#000000'
  const orangeLight = '#fd8941ff'
  const isPassword = type === 'password'

  return (
    <div style={{ backgroundColor, padding: '4px', display: 'inline-block' }}>
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
            backgroundColor,
            boxSizing: 'border-box',
          },
        }}
        InputLabelProps={{
          shrink: true,
          sx: {
            color: textColor,
            px: 0.5, // padding stânga-dreapta pentru efect decupat
            zIndex: 1, // ca să stea deasupra border-ului
            lineHeight: 1.2,
            backgroundColor, // alb, dar aplicat doar sub text
            display: 'inline-block',
            width: 'auto',
          },
        }}
        sx={{
          width: '100%',
          '& .MuiOutlinedInput-root': {
            backgroundColor,
            minHeight: height,
            borderRadius: 1,
            '& fieldset': {
              borderColor: error
                ? '#ff0000'
                : focused
                  ? orangeLight
                  : borderColorDefault,
            },
            '&:hover fieldset': {
              borderColor: focused ? orangeLight : borderColorDefault,
            },
            '&.Mui-focused fieldset': {
              borderColor: orangeLight,
              borderWidth: 2,
            },
          },
          '& .MuiInputBase-input': {
            color: textColor,
            height: height,
            padding: '0 12px',
            fontSize: '1rem',
            boxSizing: 'border-box',
            backgroundColor,
            '&::placeholder': {
              color: textColor,
              opacity: 1,
            },
          },
          '& .MuiFormHelperText-root': {
            color: error ? '#ff0000' : textColor,
          },
        }}
      />
    </div>
  )
}

export default TextField

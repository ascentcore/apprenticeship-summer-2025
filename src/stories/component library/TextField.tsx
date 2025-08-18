import TextFieldMui from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import type { FC, ChangeEvent, ReactNode } from 'react'
import { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'

interface TextFieldProps {
  label?: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  disabled?: boolean
  error?: boolean
  errorMessage?: string
  type?: string
  suggestions?: string[]
  startIcon?: ReactNode
  endIcon?: ReactNode
  variant?: 'normal' | 'compact'
  selected?: boolean
}

const grayColor = '#1f2937' // dark gray

const TextField: FC<TextFieldProps> = ({
  label,
  value,
  onChange,
  placeholder,
  disabled = false,
  error = false,
  errorMessage = '',
  type = 'text',
  suggestions = [],
  startIcon,
  endIcon,
  variant = 'normal',
  selected = false,
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const [focused, setFocused] = useState(false)
  const isPassword = type === 'password'

  const padding = variant === 'compact' ? '8px' : '16px'

  return (
    <>
      <TextFieldMui
        label={label}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        helperText={error ? errorMessage : ''}
        type={isPassword && showPassword ? 'text' : type}
        fullWidth
        variant="outlined"
        size={variant === 'compact' ? 'small' : 'medium'}
        sx={{
          '& .MuiInputBase-input': {
            color: grayColor,
            padding,
          },
          '& .MuiInputLabel-root': {
            color: grayColor,
          },
          '& .MuiInputBase-input::placeholder': {
            color: grayColor,
            opacity: 1,
          },
          '& .MuiOutlinedInput-root': {
            borderColor: error
              ? 'red'
              : selected || focused
                ? '#3b82f6' // blue if focused/selected
                : 'rgba(0,0,0,0.23)',
          },
        }}
        InputProps={{
          startAdornment: startIcon ? (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ) : undefined,
          endAdornment: isPassword ? (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
                size="small"
                tabIndex={-1}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ) : endIcon ? (
            <InputAdornment position="end">{endIcon}</InputAdornment>
          ) : undefined,
        }}
        inputProps={{
          list: suggestions.length > 0 ? `${label}-suggestions` : undefined,
          onFocus: () => setFocused(true),
          onBlur: () => setFocused(false),
        }}
        select={suggestions.length > 0}
      >
        {suggestions.map((option, i) => (
          <MenuItem key={i} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextFieldMui>

      {suggestions.length > 0 && (
        <datalist id={`${label}-suggestions`}>
          {suggestions.map((s, i) => (
            <option key={i} value={s} />
          ))}
        </datalist>
      )}
    </>
  )
}

export default TextField

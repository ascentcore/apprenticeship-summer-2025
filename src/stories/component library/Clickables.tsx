import React from 'react'
import { styled } from '@mui/material/styles'
import {
  Switch as MuiSwitch,
  Checkbox as MuiCheckbox,
  Radio as MuiRadio,
  RadioGroup as MuiRadioGroup,
  Slider as MuiSlider,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from '@mui/material'

const CompactSwitch = styled(MuiSwitch)({
  padding: 4,
  '& .MuiSwitch-thumb': { width: 18, height: 18 },
  '& .MuiSwitch-switchBase': { padding: 2 },
  '& .MuiSwitch-track': {
    borderRadius: 12,
    height: 14,
    width: '100%',
    marginTop: 2,
    marginBottom: 2,
    boxSizing: 'border-box',
  },
  '& .Mui-checked': {
    transform: 'translateX(38px)',
  },
})

const CompactCheckbox = styled(MuiCheckbox)({
  padding: 4,
  '& svg': { fontSize: 18 },
})

const CompactRadio = styled(MuiRadio)({
  padding: 4,
  '& svg': { fontSize: 18 },
})

const CompactSlider = styled(MuiSlider)({
  height: 4,
  '& .MuiSlider-thumb': { width: 14, height: 14 },
})

export interface BaseControlProps {
  label?: string | React.ReactNode
  helperText?: string
  error?: boolean
  disabled?: boolean
  variant?: 'normal' | 'compact'
}

export type SwitchProps = BaseControlProps &
  Omit<React.ComponentProps<typeof MuiSwitch>, 'error'>
export type CheckboxProps = BaseControlProps &
  Omit<React.ComponentProps<typeof MuiCheckbox>, 'error'>
export type RadioProps = BaseControlProps &
  Omit<React.ComponentProps<typeof MuiRadio>, 'error'>
export type SliderProps = BaseControlProps &
  Omit<React.ComponentProps<typeof MuiSlider>, 'error'>

interface ControlComponentMap {
  normal: React.ElementType
  compact: React.ElementType
}

function withFormControl<T extends BaseControlProps>(
  ControlComponent: ControlComponentMap
) {
  return function ControlWrapper({
    label,
    helperText,
    error = false,
    disabled = false,
    variant = 'normal',
    ...props
  }: T) {
    const Control =
      variant === 'compact' ? ControlComponent.compact : ControlComponent.normal

    return (
      <FormControl error={error} disabled={disabled} sx={{ m: 1 }}>
        <FormControlLabel
          control={<Control {...props} disabled={disabled} />}
          label={label}
        />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    )
  }
}

export const Switch = withFormControl<SwitchProps>({
  normal: MuiSwitch,
  compact: CompactSwitch,
})

export const Checkbox = withFormControl<CheckboxProps>({
  normal: MuiCheckbox,
  compact: CompactCheckbox,
})

export const Radio = withFormControl<RadioProps>({
  normal: MuiRadio,
  compact: CompactRadio,
})

export interface RadioGroupWrapperProps {
  label?: string
  helperText?: string
  error?: boolean
  disabled?: boolean
  row?: boolean
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void
  children: React.ReactNode
}

export function RadioGroupWrapper({
  label,
  helperText,
  error = false,
  disabled = false,
  row = false,
  value,
  onChange,
  children,
}: RadioGroupWrapperProps) {
  return (
    <FormControl error={error} disabled={disabled} sx={{ m: 1 }}>
      {label && <label style={{ marginBottom: 4 }}>{label}</label>}
      <MuiRadioGroup row={row} value={value} onChange={onChange}>
        {children}
      </MuiRadioGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export function Slider({
  label,
  helperText,
  error = false,
  disabled = false,
  variant = 'normal',
  ...props
}: SliderProps) {
  const Control = variant === 'compact' ? CompactSlider : MuiSlider
  return (
    <FormControl error={error} disabled={disabled} sx={{ m: 1 }}>
      {label && <label style={{ marginBottom: 4 }}>{label}</label>}
      <Control {...props} disabled={disabled} />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}

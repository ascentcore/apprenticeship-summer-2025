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

function withFormControl<T extends BaseControlProps, P>(ControlComponent: {
  normal: React.ComponentType<P>
  compact: React.ComponentType<P>
}) {
  return function ControlWrapper(
    props: T &
      P & {
        onChange?: (
          e: React.ChangeEvent<HTMLInputElement> | Event,
          value?: unknown
        ) => void
        checked?: boolean // for Checkbox, Switch, Radio
        value?: unknown // for Radio, etc.
      }
  ) {
    const {
      label,
      helperText,
      error = false,
      disabled = false,
      variant = 'normal',
      onChange,
      checked,
      value,
      ...rest
    } = props

    const [hasValue, setHasValue] = React.useState<boolean>(
      !!checked || value !== undefined
    )

    const Control =
      variant === 'compact' ? ControlComponent.compact : ControlComponent.normal

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement> | Event,
      val?: unknown
    ) => {
      if ('target' in e && e.target instanceof HTMLInputElement) {
        setHasValue(e.target.checked)
      } else if (val !== undefined) {
        setHasValue(val !== '' && val !== null)
      }
      onChange?.(e, val)
    }

    const showError = error && !hasValue
    const showHelperText = helperText && !hasValue

    return (
      <FormControl error={showError} disabled={disabled} sx={{ m: 1 }}>
        <FormControlLabel
          control={
            <Control
              {...(rest as P)}
              checked={checked}
              value={value}
              disabled={disabled}
              onChange={handleChange}
            />
          }
          label={label}
        />
        {showHelperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    )
  }
}

export const Switch = withFormControl<
  SwitchProps,
  React.ComponentProps<typeof MuiSwitch>
>({
  normal: MuiSwitch,
  compact: CompactSwitch,
})

export const Checkbox = withFormControl<
  CheckboxProps,
  React.ComponentProps<typeof MuiCheckbox>
>({
  normal: MuiCheckbox,
  compact: CompactCheckbox,
})

export const Radio = withFormControl<
  RadioProps,
  React.ComponentProps<typeof MuiRadio>
>({
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
  const [hasValue, setHasValue] = React.useState<boolean>(false)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    val: string
  ) => {
    setHasValue(val !== '' && val !== null)
    onChange?.(event, val)
  }

  const showError = error && !hasValue
  const showHelperText = helperText && !hasValue

  // clone children so they respect the "disabled" prop from wrapper
  const clonedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement<React.ComponentProps<typeof Radio>>(child)) {
      return React.cloneElement(child, { disabled })
    }
    return child
  })

  return (
    <FormControl error={showError} disabled={disabled} sx={{ m: 1 }}>
      {label && <label style={{ marginBottom: 4 }}>{label}</label>}
      <MuiRadioGroup row={row} value={value ?? ''} onChange={handleChange}>
        {clonedChildren}
      </MuiRadioGroup>
      {showHelperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export function Slider({
  label,
  helperText,
  error = false,
  disabled = false,
  variant = 'normal',
  onChange,
  value,
  ...props
}: SliderProps & {
  onChange?: (e: Event, value: number | number[]) => void
}) {
  const [hasValue, setHasValue] = React.useState<boolean>(() => {
    if (Array.isArray(value)) {
      return value.every((v) => v > 50)
    }
    return typeof value === 'number' ? value > 50 : false
  })

  const Control = variant === 'compact' ? CompactSlider : MuiSlider

  const handleChange = (e: Event, val: number | number[]) => {
    if (Array.isArray(val)) {
      setHasValue(val.every((v) => v > 50))
    } else {
      setHasValue(val > 50)
    }
    onChange?.(e, val)
  }

  const showError = error && !hasValue
  const showHelperText = helperText && !hasValue

  return (
    <FormControl error={showError} disabled={disabled} sx={{ m: 1 }}>
      {label && <label style={{ marginBottom: 4 }}>{label}</label>}
      <Control
        {...props}
        value={value}
        disabled={disabled}
        onChange={handleChange}
      />
      {showHelperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}

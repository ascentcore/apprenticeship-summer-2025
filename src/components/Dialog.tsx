import { useState } from 'react'
import type { ChangeEvent, FC } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
} from '@mui/material'
import type { DialogProps, TextFieldProps } from '@mui/material' // type-only import

type CustomDialogProps = Omit<DialogProps, 'onSubmit'> & {
  title?: string
  message?: string
  showTextField?: boolean
  showSubmitButton?: boolean
  /** Your value-based submit callback (not the DOM submit) */
  onSubmit?: (value: string) => void
  submitButtonText?: string
  textFieldProps?: TextFieldProps
}

const CustomDialog: FC<CustomDialogProps> = ({
  title,
  message,
  showTextField = false,
  showSubmitButton = false,
  onSubmit,
  submitButtonText = 'Submit',
  textFieldProps,
  ...props // all other Dialog props (open, onClose, sx, etc.)
}) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = () => {
    onSubmit?.(inputValue)
    // Let the consumer's onClose handle closing (provided via ...props)
    props.onClose?.({}, 'escapeKeyDown')
  }

  return (
    <Dialog fullWidth maxWidth="sm" {...props}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent dividers>
        {message && <Typography>{message}</Typography>}
        {showTextField && (
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            label="Your input"
            value={inputValue}
            onChange={handleInputChange}
            {...textFieldProps}
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.onClose?.({}, 'backdropClick')}>
          Cancel
        </Button>
        {showSubmitButton && (
          <Button variant="contained" onClick={handleSubmit}>
            {submitButtonText}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  )
}

export default CustomDialog

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

interface CustomDialogProps {
  open: boolean
  onClose: () => void
  title?: string
  message?: string
  showTextField?: boolean
  showSubmitButton?: boolean
  onSubmit?: (value: string) => void
  submitButtonText?: string
}

const CustomDialog: FC<CustomDialogProps> = ({
  open,
  onClose,
  title,
  message,
  showTextField = false,
  showSubmitButton = false,
  onSubmit,
  submitButtonText = 'Submit',
}) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(inputValue)
    }
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
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
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
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

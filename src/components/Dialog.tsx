import { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
} from '@mui/material'

const CustomDialog = ({
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

  const handleInputChange = (event) => {
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

CustomDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  message: PropTypes.string,
  showTextField: PropTypes.bool,
  showSubmitButton: PropTypes.bool,
  onSubmit: PropTypes.func,
  submitButtonText: PropTypes.string,
}

export default CustomDialog

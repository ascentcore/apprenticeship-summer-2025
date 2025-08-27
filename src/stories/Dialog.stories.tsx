import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import CustomDialog from '../components/Dialog'

const meta: Meta<typeof CustomDialog> = {
  title: 'Components/CustomDialog',
  component: CustomDialog,
  tags: ['autodocs'],
  argTypes: {
    fullScreen: { control: 'boolean' },
    maxWidth: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', false],
    },
    sx: { control: 'object' },
  },
}

export default meta
type Story = StoryObj<typeof CustomDialog>

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)
    const handleSubmit = (value: string) => alert(`Submitted: ${value}`)

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Dialog</button>
        <CustomDialog
          {...args}
          open={open}
          onClose={() => handleClose()}
          onSubmit={handleSubmit}
        />
      </>
    )
  },
  args: {
    title: 'Sample Dialog',
    message: 'This is a custom dialog message.',
    showTextField: true,
    showSubmitButton: true,
    submitButtonText: 'Send',

    maxWidth: 'md',
  },
}

export const NoTextField: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Dialog</button>
        <CustomDialog {...args} open={open} onClose={() => handleClose()} />
      </>
    )
  },
  args: {
    title: 'Dialog without Input',
    message: 'This dialog does not have a text field.',
    showTextField: false,
    showSubmitButton: true,
    submitButtonText: 'Ok',

    fullScreen: true,
  },
}

export const NoSubmitButton: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Dialog</button>
        <CustomDialog {...args} open={open} onClose={() => handleClose()} />
      </>
    )
  },
  args: {
    title: 'Dialog without Submit',
    message: 'This dialog does not have a submit button.',
    showTextField: true,
    showSubmitButton: false,

    sx: { '& .MuiDialog-paper': { border: '2px solid red' } },
  },
}

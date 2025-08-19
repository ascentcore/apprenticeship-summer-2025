import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import TextField from './TextField'
import { User, Search } from 'lucide-react'

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    variant: { control: 'radio', options: ['normal', 'compact'] },
  },
}

export default meta
type Story = StoryObj<typeof TextField>

export const Playground: Story = {
  args: {
    label: 'Playground',
    placeholder: 'Type something...',
    variant: 'normal',
  },
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <TextField
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        startIcon={<User />}
        endIcon={<Search />}
      />
    )
  },
}

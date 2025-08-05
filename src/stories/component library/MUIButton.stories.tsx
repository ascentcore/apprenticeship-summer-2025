import type { Meta, StoryObj } from '@storybook/react-vite'
import { MUIButton } from './MUIButton'
import type { MUIButtonProps } from './MUIButton'

const meta: Meta<MUIButtonProps> = {
  title: 'Components/MUI Button',
  component: MUIButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

export default meta

type Story = StoryObj<MUIButtonProps>

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'contained',
    color: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'outlined',
    color: 'secondary',
  },
}

export const Text: Story = {
  args: {
    label: 'Text Button',
    variant: 'text',
    color: 'primary',
  },
}

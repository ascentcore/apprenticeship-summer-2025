import type { Meta, StoryObj } from '@storybook/react-vite'
import { CustomButton } from './Button'

const meta: Meta<typeof CustomButton> = {
  title: 'Components/Button',
  component: CustomButton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CustomButton>

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'normal',
    children: 'Primary Button',
  },
}

export const Disabled_primary: Story = {
  args: {
    variant: 'primary',
    size: 'normal',
    children: 'Primary Button',
    disabled: true,
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'normal',
    children: 'Secondary Button',
  },
}

export const Disabled_secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'normal',
    children: 'Secondary Button',
    disabled: true,
  },
}

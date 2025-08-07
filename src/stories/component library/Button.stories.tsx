import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'normal',
    children: 'Primary Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'normal',
    children: 'Secondary Button',
  },
}

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'normal',
    children: 'Primary Button',
    disabled: true,
  },
}

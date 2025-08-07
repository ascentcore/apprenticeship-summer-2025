import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card } from './Card'

const meta: Meta<typeof Card> = {
  title: 'Custom/Card',
  component: Card,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Card>

export const Normal: Story = {
  args: {
    size: 'normal',
    children: 'This is a normal card.',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    children: 'This is a small card.',
  },
}

export const Big: Story = {
  args: {
    size: 'big',
    children: 'This is a big card.',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'This card is disabled.',
  },
}

export const WithActions: Story = {
  args: {
    size: 'normal',
    children: 'Click the pin or more icon.',
    onPinClick: () => alert('Pin clicked!'),
    onMoreClick: () => alert('More clicked!'),
  },
}

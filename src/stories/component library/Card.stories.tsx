import type { Meta, StoryObj } from '@storybook/react-vite'
import { CustomCard } from './Card'

const meta: Meta<typeof CustomCard> = {
  title: 'Components/Card',
  component: CustomCard,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof CustomCard>

export const Normal: Story = {
  args: {
    size: 'normal',
    primaryText: 'This is a noarmal card.',
    secondaryText: 'Additional info goes here.',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    primaryText: 'This is a small card.',
    secondaryText: 'Compact view',
  },
}

export const Big: Story = {
  args: {
    size: 'big',
    primaryText: 'This is a big card.',
    secondaryText: 'Extra detail can be shown here.',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    size: 'normal',
    primaryText: 'This card is disabled.',
    secondaryText: 'Unavailable right now.',
  },
}

export const WithActions: Story = {
  args: {
    size: 'normal',
    primaryText: 'Click the pin or more icon.',
    secondaryText: 'These trigger alert handlers.',
    onPinClick: () => alert('Pin clicked!'),
    onMoreClick: () => alert('More clicked!'),
  },
}

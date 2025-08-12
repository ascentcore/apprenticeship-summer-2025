import type { Meta, StoryObj } from '@storybook/react-vite'
import StatisticCard from './StatisticCard'

const meta: Meta<typeof StatisticCard> = {
  title: 'Components/StatisticCard',
  component: StatisticCard,
}
export default meta

type Story = StoryObj<typeof StatisticCard>

export const Normal: Story = {
  args: {
    title: 'Available Position',
    value: 24,
    subtitle: '4 Urgently needed',
    color: 'normal',
    tooltip: 'This is a normal statistic',
  },
}

export const Urgent: Story = {
  args: {
    title: 'Job Open',
    value: 10,
    subtitle: '4 Actively hiring',
    color: 'urgent',
    tooltip: 'This is urgent',
  },
}

export const CustomColor: Story = {
  args: {
    title: 'New Employees',
    value: 24,
    subtitle: '4 Department',
    customColor: '#F3E5F5',
    tooltip: 'Custom background color',
  },
}

export const Clickable: Story = {
  args: {
    title: 'Clickable Card',
    value: 42,
    subtitle: 'Click me',
    color: 'normal',
    onClick: () => alert('Card clicked!'),
    tooltip: 'You can click this card',
  },
}

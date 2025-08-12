import type { Meta, StoryObj } from '@storybook/react-vite'
import StatisticCard from './StatisticCard'

const meta: Meta<typeof StatisticCard> = {
  title: 'Components/StatisticCard',
  component: StatisticCard,
}
export default meta

type Story = StoryObj<typeof StatisticCard>

export const Urgent: Story = {
  args: {
    title: 'Available Position',
    value: 24,
    subtitle: '4 Urgently needed',
    color: 'urgent',
    tooltip: 'This is urgent',
  },
}

export const Normal: Story = {
  args: {
    title: 'Job Open',
    value: 10,
    subtitle: '4 Active hiring',
    color: 'normal',
    tooltip: 'This is a normal stat',
  },
}

export const CustomPink: Story = {
  args: {
    title: 'New Employees',
    value: 24,
    subtitle: '4 Department',
    color: 'custom1',
    tooltip: 'Custom pink card',
  },
}

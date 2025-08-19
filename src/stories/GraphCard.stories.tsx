import type { Meta, StoryObj } from '@storybook/react-vite'
import GraphCard from '../components/GraphCard'

const meta: Meta<typeof GraphCard> = {
  title: 'Components/GraphCard',
  component: GraphCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'inline-block',
          width: 'max-content',
        }}
      >
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof GraphCard>

const sampleChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [12, 19, 15, 17, 22, 18, 25],
      borderColor: '#FF5151',
      backgroundColor: '#FF5151',
      tension: 0.4,
    },
  ],
}

export const LineGraph: Story = {
  args: {
    title: 'Weekly Sales',
    value: '$4,200',
    secondaryText: '+12% from last week',
    chartType: 'line',
    chartData: sampleChartData,
  },
}

export const BarGraph: Story = {
  args: {
    title: 'Active Users',
    value: '$1,245',
    secondaryText: '-5% from last week',
    chartType: 'bar',
    chartData: sampleChartData,
  },
}

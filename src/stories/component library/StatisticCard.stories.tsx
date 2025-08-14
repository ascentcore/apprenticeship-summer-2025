import type { Meta, StoryObj } from '@storybook/react-vite'
import StatisticCard from './StatisticCard'
import { ThemeProvider } from '@mui/material/styles'
import { statisticCardTheme } from '../../theme'
import { Box } from '@mui/material'

const meta: Meta<typeof StatisticCard> = {
  title: 'Components/Statistic Card',
  component: StatisticCard,
  decorators: [
    (Story) => (
      <ThemeProvider theme={statisticCardTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof StatisticCard>

export const AvailablePosition: Story = {
  args: {
    title: 'Available Position',
    value: 24,
    subtitle: '4 Urgently needed',
    color: 'urgent',
    tooltip: 'Click to view available positions',
    onClick: () => alert('Available Position clicked!'),
  },
  render: (args) => (
    <Box sx={{ display: 'inline-block' }}>
      <StatisticCard {...args} />
    </Box>
  ),
}

export const JobOpen: Story = {
  args: {
    title: 'Job Open',
    value: 10,
    subtitle: '4 Active hiring',
    color: 'normal',
    tooltip: 'Click to view job openings',
    onClick: () => alert('Job Open clicked!'),
  },
  render: (args) => (
    <Box sx={{ display: 'inline-block' }}>
      <StatisticCard {...args} />
    </Box>
  ),
}

export const NewEmployees: Story = {
  args: {
    title: 'New Employees',
    value: 24,
    subtitle: '4 Department',
    color: 'custom1',
    tooltip: 'Click to view new employees',
    onClick: () => alert('New Employees clicked!'),
  },
  render: (args) => (
    <Box sx={{ display: 'inline-block' }}>
      <StatisticCard {...args} />
    </Box>
  ),
}

/*
//variante ce nu se poate modifica din storybook

export const NewEmployees: Story = {
  render: () => (
    <StatisticCard
      title="New Employees"
      value={24}
      subtitle="4 Department"
      color="custom1"
      tooltip="Click to view new employees"
      onClick={() => alert('New Employees clicked!')}
    />
  ),
}
*/

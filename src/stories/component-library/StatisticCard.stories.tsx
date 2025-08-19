import type { Meta, StoryObj } from '@storybook/react-vite'
import StatisticCard from './StatisticCard'
import { ThemeProvider } from '@mui/material/styles'
import { statisticCardTheme } from '../../theme'
import { Box } from '@mui/material'

const meta: Meta<typeof StatisticCard> = {
  title: 'Components/StatisticCard',
  component: StatisticCard,
  decorators: [
    (Story) => (
      <ThemeProvider theme={statisticCardTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    color: {
      control: 'select',
      options: ['normal', 'urgent', 'custom1'],
    },
    customColor: { control: 'color' },
    subtitleColor: { control: 'color' },
    backgroundImage: {
      control: 'text',
      description: 'URL for background image',
    },
    value: {
      control: 'number',
      description: 'Large numbers will be formatted (k, m, b)',
    },
  },
}
export default meta

type Story = StoryObj<typeof StatisticCard>

export const AvailablePosition: Story = {
  args: {
    title: 'Available Position',
    value: 24500,
    subtitle: '4 Urgently needed',
    color: 'urgent',
    subtitleColor: '#c23700ff',
    tooltip: 'Click to view available positions',
    onClick: () => alert('Available Position clicked!'),
    backgroundImage: '',
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
    value: 1500000,
    subtitle: '4 Active hiring',
    color: 'normal',
    subtitleColor: '#003585',
    tooltip: 'Click to view job openings',
    onClick: () => alert('Job Open clicked!'),
    backgroundImage: '',
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
    value: 3500000000,
    subtitle: '4 Department',
    color: 'custom1',
    subtitleColor: '#72007aff',
    tooltip: 'Click to view new employees',
    onClick: () => alert('New Employees clicked!'),
    backgroundImage: '',
  },
  render: (args) => (
    <Box sx={{ display: 'inline-block' }}>
      <StatisticCard {...args} />
    </Box>
  ),
}

export const memeCard: Story = {
  args: {
    title: '🤙🏻😜🤘🏻',
    value: 69000000000,
    subtitle: 'Click to add meme',
    color: 'custom1',
    subtitleColor: '#ff00f2ff',
    tooltip: 'add memes',
    onClick: () => alert('Tzeapa boss'),
    backgroundImage:
      'https://media1.tenor.com/m/JXRh3PBLwdAAAAAd/omg-sorprendido-meme.gif',
  },
  render: (args) => (
    <Box sx={{ display: 'inline-block' }}>
      <StatisticCard {...args} />
    </Box>
  ),
}

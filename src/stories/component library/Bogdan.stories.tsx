import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bogdan } from './Bogdan'
import type { nameProps } from './Bogdan'

const meta: Meta<nameProps> = {
  title: 'Components/Bogdan',
  component: Bogdan,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<nameProps>

export const Primary: Story = {
  args: {
    name: 'Bogdan',
  },
}

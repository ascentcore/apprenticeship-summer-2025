import type { Meta, StoryObj } from '@storybook/react-vite'
import { AlexComponent } from './RaulComponent'
import type { AlexComponentProps } from './RaulComponent'

const meta: Meta<AlexComponentProps> = {
  title: 'Components/Alex Component',
  component: AlexComponent,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<AlexComponentProps>

export const Default: Story = {
  args: {
    name: 'Alex',
  },
}

export const AnotherName: Story = {
  args: {
    name: 'Taylor',
  },
}

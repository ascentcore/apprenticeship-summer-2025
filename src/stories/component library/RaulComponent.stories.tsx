import type { Meta, StoryObj } from '@storybook/react-vite'
import { RaulComponent } from './RaulComponent'
import type { RaulComponentProps } from './RaulComponent'

const meta: Meta<RaulComponentProps> = {
  title: 'Components/Alex Component',
  component: RaulComponent,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<RaulComponentProps>

export const Default: Story = {
  args: {
    name: 'Raul',
  },
}

export const AnotherName: Story = {
  args: {
    name: 'Taylor',
  },
}

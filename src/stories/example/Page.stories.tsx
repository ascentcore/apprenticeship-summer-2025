import type { Meta, StoryObj } from '@storybook/react-vite'

import { expect, userEvent, within } from 'storybook/test'

import { Page } from './Page'

const meta = {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'This is an example Storybook project. Every story should include a documentation file that explains its usage, props, and best practices. Good documentation helps your team and users understand and use your components effectively.',
      },
    },
  },
} satisfies Meta<typeof Page>

export default meta
type Story = StoryObj<typeof meta>

export const LoggedOut: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Default state when user is not logged in. Shows login and sign up buttons.',
      },
    },
  },
}

// More on component testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const LoggedIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const loginButton = canvas.getByRole('button', { name: /Log in/i })
    await expect(loginButton).toBeInTheDocument()
    await userEvent.click(loginButton)
    await expect(loginButton).not.toBeInTheDocument()

    const logoutButton = canvas.getByRole('button', { name: /Log out/i })
    await expect(logoutButton).toBeInTheDocument()
  },
  parameters: {
    docs: {
      description: {
        story:
          'State after user logs in. Shows welcome message and logout button. Includes interaction testing to verify login functionality.',
      },
    },
  },
}

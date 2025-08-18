import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import TextField from './TextField'
import { User, Search } from 'lucide-react'

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
}
export default meta

type Story = StoryObj<typeof TextField>

export const AllStates: Story = {
  render: () => {
    const [normal, setNormal] = useState('')
    const [compact, setCompact] = useState('')
    const [password, setPassword] = useState('')
    const [withIcons, setWithIcons] = useState('')
    const [withSuggestions, setWithSuggestions] = useState('')
    const [errorValue, setErrorValue] = useState('')
    const [selected, setSelected] = useState('Selected')

    return (
      <div style={{ display: 'grid', gap: '2rem', maxWidth: 500 }}>
        {/* Normal */}
        <TextField
          label="Normal"
          value={normal}
          onChange={(e) => setNormal(e.target.value)}
          placeholder="Enter username"
        />

        {/* Compact */}
        <TextField
          label="Compact"
          value={compact}
          onChange={(e) => setCompact(e.target.value)}
          placeholder="Compact username"
          variant="compact"
        />

        {/* Disabled */}
        <TextField
          label="Disabled"
          value="Cannot edit"
          onChange={() => {}}
          disabled
        />

        {/* Selected */}
        <TextField
          label="Selected"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          selected
        />

        {/* Password */}
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          error={password.length > 0 && password.length < 6}
          errorMessage="Password must be at least 6 characters"
        />

        {/* With Icons */}
        <TextField
          label="With Icons"
          value={withIcons}
          onChange={(e) => setWithIcons(e.target.value)}
          placeholder="Enter username"
          startIcon={<User />}
          endIcon={<Search />}
        />

        {/* Suggestions / Dropdown */}
        <TextField
          label="Suggestions"
          value={withSuggestions}
          onChange={(e) => setWithSuggestions(e.target.value)}
          suggestions={['Bogdan', 'Raul', 'Andu']}
        />

        {/* Error State */}
        <TextField
          label="Error State"
          value={errorValue}
          onChange={(e) => setErrorValue(e.target.value)}
          error
          errorMessage="This field has an error"
        />
      </div>
    )
  },
}

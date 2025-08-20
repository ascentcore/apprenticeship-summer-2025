import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Switch,
  Checkbox,
  Radio,
  RadioGroupWrapper,
  Slider,
} from './Clickables'
import { Box, Stack, Typography } from '@mui/material'
import { useState } from 'react'

const meta: Meta = {
  title: 'Components/Clickables',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj

export const SwitchExamples: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="h6">Switch</Typography>
      <Switch label="Normal" />
      <Switch label="Compact" variant="compact" />
      <Switch label="Disabled" disabled />
      <Switch label="Error" error helperText="Must be ON" />
    </Stack>
  ),
}

export const CheckboxExamples: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="h6">Checkbox</Typography>
      <Checkbox label="Normal" />
      <Checkbox label="Compact" variant="compact" />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Error" error helperText="Required" />
    </Stack>
  ),
}

export const RadioExamples: Story = {
  render: () => {
    const [normalValue, setNormalValue] = useState('optionA')
    const [compactValue, setCompactValue] = useState('optionA')
    const [disabledValue, setDisabledValue] = useState('optionA')
    const [errorValue, setErrorValue] = useState('optionA')

    return (
      <Stack spacing={2}>
        <Typography variant="h6">Radio</Typography>

        <RadioGroupWrapper
          label="Normal"
          value={normalValue}
          onChange={(e, val) => setNormalValue(val)}
        >
          <Radio label="Option A" value="optionA" />
          <Radio label="Option B" value="optionB" />
          <Radio label="Option C" value="optionC" />
        </RadioGroupWrapper>

        <RadioGroupWrapper
          label="Compact"
          value={compactValue}
          onChange={(e, val) => setCompactValue(val)}
        >
          <Radio label="Option A" value="optionA" variant="compact" />
          <Radio label="Option B" value="optionB" variant="compact" />
          <Radio label="Option C" value="optionC" variant="compact" />
        </RadioGroupWrapper>

        <RadioGroupWrapper
          label="Disabled"
          value={disabledValue}
          onChange={(e, val) => setDisabledValue(val)}
          disabled
        >
          <Radio label="Option A" value="optionA" />
          <Radio label="Option B" value="optionB" />
        </RadioGroupWrapper>

        <RadioGroupWrapper
          label="Error"
          value={errorValue}
          onChange={(e, val) => setErrorValue(val)}
          error
          helperText="Choose one"
        >
          <Radio label="Option A" value="optionA" />
          <Radio label="Option B" value="optionB" />
        </RadioGroupWrapper>
      </Stack>
    )
  },
}

export const SliderExamples: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Typography variant="h6">Slider</Typography>
      <Slider label="Normal" defaultValue={30} />
      <Slider label="Compact" variant="compact" defaultValue={50} />
      <Slider label="Disabled" disabled defaultValue={70} />
      <Slider
        label="Error"
        error
        helperText="Value must be above 50"
        defaultValue={20}
      />
    </Stack>
  ),
}

export const ContainerTests: Story = {
  render: () => {
    const [radioValue1, setRadioValue1] = useState('optionA')
    const [radioValue2, setRadioValue2] = useState('optionA')

    return (
      <Stack spacing={4}>
        <Box sx={{ width: 200, border: '1px solid #ccc', p: 2 }}>
          <Typography variant="body2">Small Container</Typography>
          <Switch label="Switch" />
          <Checkbox label="Checkbox" />
        </Box>

        <Box sx={{ width: 500, border: '1px solid #ccc', p: 2 }}>
          <Typography variant="body2">Wide Container</Typography>

          <RadioGroupWrapper
            label="Radio"
            value={radioValue1}
            onChange={(e, val) => setRadioValue1(val)}
          >
            <Radio label="Option A" value="optionA" />
            <Radio label="Option B" value="optionB" />
          </RadioGroupWrapper>

          <Slider label="Slider" defaultValue={40} />

          <RadioGroupWrapper
            label="Another Radio Group"
            value={radioValue2}
            onChange={(e, val) => setRadioValue2(val)}
          >
            <Radio label="Option A" value="optionA" />
            <Radio label="Option B" value="optionB" />
          </RadioGroupWrapper>
        </Box>
      </Stack>
    )
  },
}

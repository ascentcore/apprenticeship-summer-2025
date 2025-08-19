import React from 'react'

interface NumberHandlerProps {
  value: number | string
}

const formatNumber = (val: number | string): string => {
  const num = typeof val === 'string' ? parseFloat(val) : val
  if (isNaN(num)) return String(val)

  const rounded = Math.round(num)

  if (rounded >= 1_000_000) return `${Math.round(rounded / 1_000_000)}M`
  if (rounded >= 1_000) return `${Math.round(rounded / 1_000)}K`
  return String(rounded)
}

export const NumberHandler: React.FC<NumberHandlerProps> = ({ value }) => {
  return <>{formatNumber(value)}</>
}

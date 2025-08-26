import React from 'react'

interface NumberHandlerProps {
  value: number | string
}

export const NumberHandler: React.FC<NumberHandlerProps> = ({ value }) => {
  let val: number
  if (typeof value !== 'number') val = parseFloat(value)
  else val = value

  if (isNaN(val)) return <span>{value}</span>

  const formatNumber = (num: number, divisor: number, suffix: string) => {
    const result = num / divisor
    let formatted: string

    if (result < 10 && result % 1 !== 0) {
      formatted = result.toFixed(1)
    } else {
      formatted = Math.round(result).toString()
    }

    return `${formatted}${suffix}`
  }

  let formatted: string
  if (val >= 1e15) formatted = formatNumber(val, 1e15, 'qa')
  else if (val >= 1e12) formatted = formatNumber(val, 1e12, 't')
  else if (val >= 1e9) formatted = formatNumber(val, 1e9, 'b')
  else if (val >= 1e6) formatted = formatNumber(val, 1e6, 'm')
  else if (val >= 1e3) formatted = formatNumber(val, 1e3, 'k')
  else formatted = val.toString()

  let fontSize = 24
  const extraChars = formatted.length - 6
  if (extraChars >= 3) fontSize -= 2
  if (extraChars >= 6) fontSize -= 2

  return <span style={{ fontSize: `${fontSize}px` }}>{formatted}</span>
}

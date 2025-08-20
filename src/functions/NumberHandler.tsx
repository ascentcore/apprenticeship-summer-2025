import React from 'react'

interface NumberHandlerProps {
  value: number | string
}

export const NumberHandler: React.FC<NumberHandlerProps> = ({ value }) => {
  let val: number
  if (typeof value !== 'number') val = parseFloat(value)
  else val = value

  if (isNaN(val)) return <span>{value}</span>

  // Formatarea numerelor mari
  let formatted: string
  if (val >= 1e15) formatted = `${(val / 1e15).toFixed(2)}qa`
  else if (val >= 1e12) formatted = `${(val / 1e12).toFixed(2)}t`
  else if (val >= 1e9) formatted = `${(val / 1e9).toFixed(2)}b`
  else if (val >= 1e6) formatted = `${(val / 1e6).toFixed(2)}m`
  else if (val >= 1e3) formatted = `${(val / 1e3).toFixed(2)}k`
  else formatted = val.toString()

  // Ajustarea dimensiunii fontului în funcție de lungime
  let fontSize = 24 // dimensiune default
  const extraChars = formatted.length - 6
  if (extraChars >= 3) fontSize -= 2
  if (extraChars >= 6) fontSize -= 2

  return <span style={{ fontSize: `${fontSize}px` }}>{formatted}</span>
}

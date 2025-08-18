import React from 'react'

interface NumberHandlerProps {
  value: number | string
}

const NumberHandler: React.FC<NumberHandlerProps> = ({ value }) => {
  if (typeof value !== 'number') return <>{value}</>

  if (value >= 1_000_000_000) return <>{Math.round(value / 1_000_000_000)}b</>
  if (value >= 1_000_000) return <>{Math.round(value / 1_000_000)}m</>
  if (value >= 1_000) return <>{Math.round(value / 1_000)}k</>

  return <>{value}</>
}

export default NumberHandler

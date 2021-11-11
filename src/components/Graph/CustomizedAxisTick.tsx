import React from 'react'
import { Text } from 'recharts'

interface PayloadType {
  value: number
}

export interface TickType {
  x?: number
  y?: number
  payload?: PayloadType
}

const CustomizedAxisTick = ({ x, y, payload }: TickType) => {
  let tickValue: number | string = '-'

  if (!payload || !y || !x) {
    return null
  }

  if (Math.floor(payload.value) % 2 === 0) {
    tickValue = Math.floor(payload.value)
  }

  return (
    <Text y={y + 3.5} x={x} textAnchor='end' fill='#7f7f7f' fontSize={12} fontFamily='Roboto' dx={-2}>
      {tickValue}
    </Text>
  )
}

export default CustomizedAxisTick

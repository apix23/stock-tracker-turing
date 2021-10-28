import React from 'react'
import { Text } from 'recharts'

const CustomizedAxisTick = ({ x, y, payload }) => {
  let tickValue = '-'

  if (payload.value % 2 === 0) {
    tickValue = payload.value
  }

  return (
    <Text y={y + 3.5} x={x} textAnchor='end' fill='#7f7f7f' fontSize={12} fontFamily='Roboto' dx={-2}>
      {tickValue}
    </Text>
  )
}

export default CustomizedAxisTick

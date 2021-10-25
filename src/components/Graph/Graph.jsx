import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, Text } from 'recharts'
import './Graph.css'

const CustomizedAxisTick = ({ x, y, payload }) => {
  let tickValue = payload.value

  if (payload.value % 2 !== 0) {
    tickValue = '-'
  }

  return (
    <Text y={y + 3.5} x={x} textAnchor="end" fill="#7f7f7f" fontSize={12} fontFamily="Roboto" dx={-2}>
      {tickValue}
    </Text>
  )
}

const Graph = () => {
  const [liveData, setLiveData] = useState()
  const [yesterdayData, setYesterdayData] = useState()
  const [yesterdayClose, setYesterdayClose] = useState('')

  useEffect(() => {
    fetch(
      'https://sandbox.iexapis.com/stable/stock/aapl/intraday-prices/?token=Tpk_095b8e5990924d0c8c41c2209556da53&chartInterval=5',
    )
      .then((response) => response.json())
      .then((data) => setLiveData(data))
  }, [])

  useEffect(() => {
    fetch(
      'https://sandbox.iexapis.com/stable/stock/aapl/chart/date/20211020?token=Tpk_095b8e5990924d0c8c41c2209556da53&chartInterval=5',
    )
      .then((response) => response.json())
      .then((data) => setYesterdayData(data))
  }, [])

  useEffect(() => {
    fetch('https://sandbox.iexapis.com/stable/stock/aapl/previous/?token=Tpk_095b8e5990924d0c8c41c2209556da53')
      .then((response) => response.json())
      .then((data) => setYesterdayClose(data))
    return () => {}
  }, [])

  return (
    <div className="chart">
      <LineChart width={1000} height={477}>
        <CartesianGrid stroke="#eaebeb" strokeWidth={0.6} verticalFill={['#ededed80', '#ffffff00']} />

        <YAxis
          stroke="#eaebeb"
          tickSize={10}
          tick={<CustomizedAxisTick />}
          interval="preserveEnd"
          tickCount={12}
          allowDecimals={false}
          domain={['dataMin-1', 'auto']}
          padding={{ top: 18 }}
          dx={-5}
        />

        <XAxis
          stroke="#eaebeb"
          tickSize={10}
          tick={{ fill: '#7f7f7f', fontSize: 12, fontFamily: 'Roboto' }}
          interval="preserveStart"
          allowDuplicatedCategory={false}
          data={yesterdayData}
          dataKey="label"
          dy={5}
        />

        <Tooltip contentStyle={{ fontSize: 14, borderColor: '#aaabd1', textAlign: 'center', fontFamily: 'Roboto' }} />

        <ReferenceLine y={yesterdayClose.open} stroke="#aaabd1" strokeDasharray="5 3" />

        <Line
          hide={false}
          name="OPEN"
          data={liveData}
          dataKey="open"
          stroke="#aaabd1"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4 }}
        />

        <Line
          hide={true}
          name="21ST OCTOBER OPEN"
          data={yesterdayData}
          dataKey="open"
          stroke="grey"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4 }}
        />
      </LineChart>
    </div>
  )
}

export default Graph

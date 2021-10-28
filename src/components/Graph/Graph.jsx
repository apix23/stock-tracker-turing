import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine } from 'recharts'
import CustomizedAxisTick from './CustomizedAxisTick'
import './Graph.css'

const Graph = ({ StockSymbol }) => {
  const [liveData, setLiveData] = useState('')
  const [yesterdayData, setYesterdayData] = useState('')
  const [yesterdayClose, setYesterdayClose] = useState('')

  useEffect(() => {
    fetch(
      `https://sandbox.iexapis.com/stable/stock/${StockSymbol}/intraday-prices/?token=Tpk_095b8e5990924d0c8c41c2209556da53&chartInterval=5`,
    )
      .then((response) => response.json())
      .then((data) => setLiveData(data))
  }, [StockSymbol])

  useEffect(() => {
    fetch(
      `https://sandbox.iexapis.com/stable/stock/${StockSymbol}/chart/date/20211027?token=Tpk_095b8e5990924d0c8c41c2209556da53&chartInterval=5`,
    )
      .then((response) => response.json())
      .then((data) => setYesterdayData(data))
  }, [StockSymbol])

  useEffect(() => {
    fetch(
      `https://sandbox.iexapis.com/stable/stock/${StockSymbol}/previous/?token=Tpk_095b8e5990924d0c8c41c2209556da53`,
    )
      .then((response) => response.json())
      .then((data) => setYesterdayClose(data))
    return () => {}
  }, [StockSymbol])

  return (
    <div className='chart'>
      <LineChart width={1000} height={477}>
        <CartesianGrid stroke='#eaebeb' strokeWidth={0.6} verticalFill={['#ededed80', '#ffffff00']} />

        <YAxis
          stroke='#eaebeb'
          tickSize={10}
          tickCount={12}
          interval='preserveEndStart'
          allowDecimals={false}
          domain={['dataMin-1', 'auto']}
          padding={{ top: 18 }}
          dx={-5}
          tick={<CustomizedAxisTick />}
        />

        <XAxis
          stroke='#eaebeb'
          tickSize={10}
          tick={{ fill: '#7f7f7f', fontSize: 12, fontFamily: 'Roboto' }}
          interval={5}
          allowDuplicatedCategory={false}
          data={yesterdayData}
          dataKey='label'
          dy={5}
          textAnchor='beginning'
        />

        <Tooltip contentStyle={{ fontSize: 14, borderColor: '#aaabd1', textAlign: 'center', fontFamily: 'Roboto' }} />

        <ReferenceLine y={yesterdayClose.close} stroke='#aaabd1' strokeDasharray='5 3' />

        <Line
          hide={false}
          name='Open'
          data={liveData}
          dataKey='open'
          stroke='#aaabd1'
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4 }}
        />

        <Line
          hide={true}
          name='Yesterday Open'
          data={yesterdayData}
          dataKey='open'
          stroke='grey'
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4 }}
        />
      </LineChart>
    </div>
  )
}

export default Graph

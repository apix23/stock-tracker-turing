import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, ResponsiveContainer } from 'recharts'
import CustomizedAxisTick from './CustomizedAxisTick'
import useFetchArray from '../../hooks/useFetchArray'
import useFetchObject from '../../hooks/useFetchObject'
import GraphLoading from './GraphLoading'
import './Graph.css'

interface GraphProps {
  stockSymbol: string
}

const Graph = ({ stockSymbol }: GraphProps) => {
  const liveDataUrl = `https://sandbox.iexapis.com/stable/stock/${stockSymbol}/intraday-prices/?token=Tpk_095b8e5990924d0c8c41c2209556da53&chartInterval=5`
  const yesterdayDataUrl = `https://sandbox.iexapis.com/stable/stock/${stockSymbol}/chart/date/20211110?token=Tpk_095b8e5990924d0c8c41c2209556da53&chartInterval=5`
  const yesterdayCloseUrl = `https://sandbox.iexapis.com/stable/stock/${stockSymbol}/previous/?token=Tpk_095b8e5990924d0c8c41c2209556da53`
  const [liveData] = useFetchArray(liveDataUrl)
  const [yesterdayData] = useFetchArray(yesterdayDataUrl)
  const [yesterdayClose] = useFetchObject(yesterdayCloseUrl)

  if (!liveData) {
    return <GraphLoading />
  }

  return (
    <div className='chart'>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart>
          <CartesianGrid stroke='#e0e0e0' strokeWidth={0.6} verticalFill={['#ededed80', '#ffffff00']} />

          <YAxis
            stroke='#eaebeb'
            tickSize={10}
            // tickCount={10}
            interval='preserveStartEnd'
            allowDecimals={false}
            domain={['dataMin-1', 'auto']}
            padding={{ top: 20 }}
            dx={-5}
            tick={<CustomizedAxisTick />}
          />

          <XAxis
            stroke='#eaebeb'
            tickSize={10}
            tick={{ fill: '#7f7f7f', fontSize: 12, fontFamily: 'Roboto' }}
            interval={5}
            allowDuplicatedCategory={false}
            dataKey='label'
            dy={5}
            textAnchor='beginning'
          />

          <Tooltip contentStyle={{ fontSize: 14, borderColor: '#aaabd1', textAlign: 'center', fontFamily: 'Roboto' }} />

          <ReferenceLine y={yesterdayClose?.close} stroke='#aaabd1' strokeDasharray='5 3' />

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
      </ResponsiveContainer>
    </div>
  )
}

export default Graph

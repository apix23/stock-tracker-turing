import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, ResponsiveContainer } from 'recharts'
import CustomizedAxisTick from './CustomizedAxisTick'
import useFetchArray from '../../hooks/useFetchArray'
import useFetchObject from '../../hooks/useFetchObject'
import GraphLoading from './GraphLoading'
import GraphFailedToLoad from './GraphError'
import './Graph.css'

interface GraphProps {
  stockSymbol?: string
}

const token = '?token=Tpk_9f8a1a489e684df8ad8a935fab4b3504'

const Graph = ({ stockSymbol }: GraphProps) => {
  const liveDataUrl = `https://sandbox.iexapis.com/stable/stock/${stockSymbol}/intraday-prices/?token=Tpk_095b8e5990924d0c8c41c2209556da53&chartInterval=5`
  const yesterdayDataUrl = `https://sandbox.iexapis.com/stable/stock/${stockSymbol}/chart/date/20211115?token=Tpk_095b8e5990924d0c8c41c2209556da53&chartInterval=5`
  const yesterdayCloseUrl = `https://sandbox.iexapis.com/stable/stock/${stockSymbol}/previous/?token=Tpk_095b8e5990924d0c8c41c2209556da53`
  const [liveData, liveDataError] = useFetchArray(liveDataUrl)
  const [yesterdayData, yesterdayDataError] = useFetchArray(yesterdayDataUrl)
  const [yesterdayClose] = useFetchObject(yesterdayCloseUrl)

  if (liveDataError || yesterdayDataError) {
    return <GraphFailedToLoad />
  }

  if (!liveData) {
    return <GraphLoading />
  }

  return (
    <div className='chart'>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart>
          <CartesianGrid stroke='#d1d1d1' strokeWidth={0.4} verticalFill={['#ffffff00', '#ededed80']} />

          <YAxis
            stroke='#eaebeb'
            tickSize={10}
            tickCount={12}
            interval='preserveStartEnd'
            allowDecimals={true}
            domain={['auto', 'auto']}
            padding={{ top: 18 }}
            dx={-5}
            tick={<CustomizedAxisTick />}
          />

          <XAxis
            stroke='#eaebeb'
            tickSize={10}
            tickCount={12}
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
            name='Close'
            data={liveData}
            dataKey='close'
            stroke='#aaabd1'
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />

          <Line
            hide={true}
            name='Yesterday Close'
            data={yesterdayData}
            dataKey='close'
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

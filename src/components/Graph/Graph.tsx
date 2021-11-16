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
  const liveDataUrl = `https://sandbox.iexapis.com/stable/stock/${stockSymbol}/intraday-prices/${token}&chartInterval=5`
  const yesterdayDataUrl = `https://sandbox.iexapis.com/stable/stock/${stockSymbol}/chart/date/20211111${token}&chartInterval=5`
  const yesterdayCloseUrl = `https://sandbox.iexapis.com/stable/stock/${stockSymbol}/previous/${token}`
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
          <CartesianGrid stroke='#e0e0e0' strokeWidth={0.6} verticalFill={['#ffffff00', '#ededed80']} />

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
            interval={4}
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

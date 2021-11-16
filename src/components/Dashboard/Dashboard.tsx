import React, { FC } from 'react'
import Graph from '../Graph/Graph'
import { News } from '../News/News'
import { KeyStats } from '../KeyStats/KeyStats'
import { Peers } from '../TopPeers/TopPeers'
import './dashboard.css'
import { Summary } from '../Summary/Summary'
import Fte from '../Fte/Fte'
import SearchBar from '../SearchBar'
import LivePrice from '../LivePrice/LivePrice'

interface DashboardProps {
  symbol: string
  stockName: string
}

const Dashboard: FC<DashboardProps> = ({ symbol, stockName }) => {
  return (
    <div className='dashboard'>
      <div className='main-section'>
        <div className='search-live'>
          <SearchBar currentResult={`${symbol} - ${stockName}`} style={{ marginTop: '40px' }} />
          <LivePrice stockSymbol={symbol} />
        </div>
        <Graph stockSymbol={symbol} />
        <KeyStats stockSymbol={symbol} />
        <Fte />
      </div>
      <div className='right-sidebar'>
        <News stockSymbol={symbol} />
        <Summary stockSymbol={symbol} />
        <Peers stockSymbol={symbol} />
      </div>
    </div>
  )
}

export default Dashboard

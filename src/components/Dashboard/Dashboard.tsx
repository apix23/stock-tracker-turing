import React, { FC } from 'react'
import Graph from '../Graph/Graph'
import { News } from '../News/News'
import { KeyStats } from '../KeyStats/KeyStats'
import { Peers } from '../TopPeers/TopPeers'
import './dashboard.css'
import { Summary } from '../Summary/Summary'
import Fte from '../Fte/Fte'
import SearchBar from '../SearchBar'

interface DashboardProps {
  symbol: string
  setSelectedResult: (symbol: string) => void
}

const Dashboard: FC<DashboardProps> = ({ symbol, setSelectedResult }) => {
  return (
    <div className='dashboard'>
      <div className='main-section'>
        <SearchBar style={{ margin: '4vh' }} />
        <Graph StockSymbol={symbol} />
        <KeyStats />
        <Fte />
      </div>
      <div className='right-sidebar'>
        <News />
        <Summary />
        <Peers />
      </div>
    </div>
  )
}

export default Dashboard

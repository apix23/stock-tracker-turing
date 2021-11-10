import React from 'react'
import Graph from './Graph/Graph'
import { News } from './News/News'
import { KeyStats } from './KeyStats/KeyStats'
import { Peers } from './TopPeers/TopPeers'
import './dashboard.css'
import { Summary } from './Summary/Summary'
import Fte from './Fte/Fte'
import LivePrice from './LivePrice/LivePrice'

const Dashboard = ({ selectedResult }) => {
  return (
    <div className='dashboard'>
      <div className='main-section'>
        <LivePrice StockSymbol={selectedResult} />
        <Graph StockSymbol={selectedResult} />
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

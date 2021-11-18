import React, { FC } from 'react'
import Graph from '../Graph/Graph'
import { News } from '../News/News'
import { KeyStats } from '../KeyStats/KeyStats'
import { Peers } from '../TopPeers/TopPeers'
import './dashboard.css'
import { Summary } from '../Summary/Summary'
import Indexes from '../Indexes/Indexes'
import SearchBar from '../SearchBar'
import LivePrice from '../LivePrice/LivePrice'
import { useParams } from 'react-router-dom'

interface DashboardProps {
  stockName: string
}

const Dashboard: FC<DashboardProps> = ({ stockName }) => {
  const { stock } = useParams()

  return (
    <div className='dashboard'>
      <div className='main-section'>
        <div className='search-live'>
          <SearchBar currentResult={`${stock} - ${stockName}`} style={{ marginTop: '40px' }} />
          <LivePrice stockSymbol={stock} />
        </div>
        <Graph stockSymbol={stock} />
        <KeyStats stockSymbol={stock} />
        <Indexes />
      </div>
      <div className='right-sidebar'>
        <News stockSymbol={stock} />
        <Summary stockSymbol={stock} />
        <Peers stockSymbol={stock} />
      </div>
    </div>
  )
}

export default Dashboard

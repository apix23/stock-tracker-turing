import React, { FC, useEffect, useState } from 'react'
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

import LeftSidebar from '../LeftSidebar/LeftSidebar'
import { queryFetch } from '../../services/queryService'
interface DashboardProps {
  stockName: string
}

const Dashboard: FC<DashboardProps> = ({ stockName }) => {
  const { stock } = useParams()
  const [stockNameA, setStockNameA] = useState('')
  useEffect(() => {
    queryFetch(stock).then((data) => {
      console.log('receiving stock', stock)
      if (data.length > 0) {
        setStockNameA(data[0].name)
      } else {
        setStockNameA('Name not available')
      }
    })
  }, [stock])
  return (
    <div className='dashboard'>
      <LeftSidebar />
      <div className='main-section'>
        <div className='search-live'>
          <SearchBar currentResult={`${stock} - ${stockNameA}`} style={{ marginTop: '40px' }} />
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

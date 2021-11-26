import React, { useEffect, useState } from 'react'
import Graph from '../Graph/Graph'
import { News } from '../News/News'
import { KeyStats } from '../KeyStats/KeyStats'
import { Peers } from '../TopPeers/TopPeers'
import './dashboard.css'
import { Summary } from '../Summary/Summary'
import Indexes from '../Indexes/Indexes'
import SearchBar from '../SearchBar'
import { useParams } from 'react-router-dom'
import LeftSidebar from '../LeftSidebar/LeftSidebar'
import TopBar from '../TopBar/TopBar'
import { queryFetch } from '../../services/queryService'

const Dashboard = () => {
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
      <div className='left-sidebar'>
        <LeftSidebar />
      </div>
      <div className='top-bar'>
        <TopBar />
      </div>
      <div className='main-section'>
        <div className='search-live'>
          <SearchBar currentResult={`${stock} - ${stockNameA}`} style={{ marginTop: '40px' }} />
        </div>
        <Graph stockSymbol={stock} />
        <KeyStats stockSymbol={stock} />
      </div>
      <div className='right-sidebar'>
        <News stockSymbol={stock} />
        <Summary stockSymbol={stock} />
        <Peers stockSymbol={stock} />
      </div>
      <div className='footer'>
        <Indexes />
      </div>
    </div>
  )
}

export default Dashboard

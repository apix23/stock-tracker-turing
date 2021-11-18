import React from 'react'
import TopPeersLoading from './TopPeersLoading'
import useFetchTopPeers from '../../hooks/useFetchTopPeers'
import { Link } from 'react-router-dom'
import './TopPeers.css'

export const Peers = ({ stockSymbol }: { stockSymbol: string | undefined }) => {
  const token = 'sandbox_c5rtke2ad3ibf61ruc9g'
  const peersURL = `https://finnhub.io/api/v1/stock/peers?symbol=${stockSymbol}&token=${token}`

  const [peers, error] = useFetchTopPeers(peersURL)

  if (!peers) {
    return <TopPeersLoading />
  }

  if (error) {
    return <div>Error...</div>
  }

  return (
    <div className='peers-wrapper'>
      <h2 className='peers-title'>Top Peers</h2>
      <div className='peers-container'>
        {peers?.map((peer, i) => {
          return (
            <Link to={`/${peer}`} key={i}>
              <button className='peer'>{peer}</button>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

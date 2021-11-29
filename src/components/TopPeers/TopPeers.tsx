import React from 'react'
import TopPeersLoading from './TopPeersLoading'
import TopPeersError from './TopPeersError'
import useFetchTopPeers from '../../hooks/useFetchTopPeers'
import { Link } from 'react-router-dom'
import './TopPeers.css'

export const Peers = ({ stockSymbol }: { stockSymbol: string | undefined }) => {
  const token = 'sandbox_c5rtke2ad3ibf61ruc9g'
  const peersURL = `https://finnhub.io/api/v1/stock/peers?symbol=${stockSymbol}&token=${token}`
  // const token = `?token=Tpk_9f8a1a489e684df8ad8a935fab4b3504`
  // const peersURL = `https://sandbox.iexapis.com/stable/stock/${stockSymbol}/peers${token}`
  const [peers, error] = useFetchTopPeers(peersURL)

  if (error || peers?.length === 0) {
    return <TopPeersError />
  }

  if (!peers) {
    return <TopPeersLoading />
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

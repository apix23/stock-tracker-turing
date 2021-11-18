import React, { useState, useEffect } from 'react'
import { fetchPeers } from '../../services/peersService'
import './TopPeers.css'
import { Link } from 'react-router-dom'

export const Peers = ({ stockSymbol }: { stockSymbol: string | undefined }) => {
  const [peers, setPeers] = useState<string[] | undefined>([])

  useEffect(() => {
    let mounted = true

    fetchPeers(stockSymbol).then((data) => {
      if (mounted) {
        setPeers(data)
      }
    })
    return () => {
      mounted = false
    }
  }, [stockSymbol])

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

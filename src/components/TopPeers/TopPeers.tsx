import React, { useState, useEffect, useContext } from 'react'
import { fetchPeers } from '../../services/peersService'
import './TopPeers.css'
import { SetSymbolContext } from '../../context/SetSymbolContext'
import {Link} from 'react-router-dom'

export const Peers = ({ stockSymbol }: { stockSymbol: string | undefined }) => {
  const [peers, setPeers] = useState<string[] | undefined>([])
  const { setSelectedResult } = useContext(SetSymbolContext)

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
            <a data-testid="button-peer" href={`/${peer}`} onClick={() => setSelectedResult({ symbol: peer, stockName: '' })} className='peer' key={i}>
              {peer}
            </a>
          )
        })}
      </div>
    </div>
  )
}

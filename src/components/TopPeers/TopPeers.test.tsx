import { Peers } from './TopPeers'
import React from 'react'
import 'regenerator-runtime/runtime.js'
import { render, screen } from '@testing-library/react'
import { fetchPeers } from '../../services/peersService'
import { BrowserRouter } from 'react-router-dom'

jest.mock('../../services/peersService')

const mockFetch = fetchPeers as jest.MockedFunction<typeof fetchPeers>

const mockArray = ['AAPL', 'DELL', 'HPQ', 'NTAP', 'HPE', '1337.HK', 'WDC', 'PSTG', 'DDD', 'XRX']

it('should render Top Peers', async () => {
  mockFetch.mockResolvedValue(mockArray)
  render(
    <BrowserRouter>
      <Peers stockSymbol={'AAPL'} />
    </BrowserRouter>,
  )
  screen.findByText('Top Peers')
  screen.findByText('1337.HK')

  // const title = screen.findByRole('heading')
  // title
  //   .then((res) => {
  //     expect(res).toHaveClass('peers-title')
  //   })
  //   .catch((err) => console.error(err))
  const allPeers = await screen.findAllByRole('button')
  expect(allPeers).toHaveLength(10)
  // })
})

//expect(res).toHaveStyle({ border: '2px solid #d8d9d9' }))

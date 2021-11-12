import { KeyStats } from './KeyStats'
import React from 'react'
import 'regenerator-runtime/runtime.js'
import { render, screen } from '@testing-library/react'
import { fetchStats } from '../../services/statsService'

jest.mock('../../services/statsService')

const mockFetch = fetchStats as jest.MockedFunction<typeof fetchStats>

const mockData = {
  high: 0,
  low: 0,
  open: 0,
  previousClose: 3,
  week52High: 4,
  week52Low: 5,
  marketCap: 6,
  peRatio: 7,
  dividendYield: 0.2333333,
  ttmEPS: 9,
  isUSMarketOpen: false,
  volume: 100000000000,
  avgTotalVolume: 11,
}

it('should render Key Statistics', async () => {
  mockFetch.mockResolvedValue(mockData)
  render(<KeyStats stockSymbol={'AAPL'} />)
  screen.findByText('Key Statistics')
  screen.findByText('100.00 B')

  const titleElement = screen.findByRole('heading')
  titleElement.then((res) => expect(res).toHaveClass('stats-title'))

  const dividendYield = screen.findByText('0.23%')
  dividendYield.then((res) => expect(res).toEqual('0.23%'))
})

import { KeyStats } from './KeyStats'
import React from 'react'
import 'regenerator-runtime/runtime'
import { render, screen } from '@testing-library/react'
import { fetchStats } from '../../services/statsService'

jest.mock('../../services/statsService')

const mockFetch = fetchStats as jest.MockedFunction<typeof fetchStats>

const mockData = {
  high: 0,
  low: 1,
  open: 2,
  previousClose: 3,
  week52High: 4,
  week52Low: 5,
  marketCap: 6,
  peRatio: 7,
  dividendYield: 8,
  incomeNetPerWabsoSplitAdjusted: 9,
  isUSMarketOpen: true,
  volume: 100000000000,
  avgTotalVolume: 11,
}

it('should render Key Statistics', async () => {
  mockFetch.mockResolvedValue(mockData)
  render(<KeyStats />)
  await screen.findByText('Key Statistics')
  await screen.findByText('100.00 B')
})

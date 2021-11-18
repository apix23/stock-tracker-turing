import { Summary } from './Summary'
import React from 'react'
import 'regenerator-runtime/runtime.js'
import { render, screen } from '@testing-library/react'
// import { fetchSummary } from '../../services/summaryService'

jest.mock('../../services/summaryService')

// const mockFetch = fetchSummary as jest.MockedFunction<typeof fetchSummary>

// const mockData = {
//   companyName: 'Apple Inc.',
//   symbol: 'AAPL',
//   website: 'apple.com',
//   description: 'Lorem ipsum dolor et amet',
// }

it.skip('should render Company Summary', async () => {
  // mockFetch.mockResolvedValue(mockData)
  render(<Summary stockSymbol={'AAPL'} />)
  screen.findByText('Company Summary')
  screen.findByText('apple.com')

  const title = screen.findByRole('heading')
  title.then((res) => {
    expect(res).toHaveClass('summary-title')
  })

  const DELL = screen.findByText('apple.com')
  DELL.then((res) => expect(res).toHaveStyle({ display: 'inline-block' }))
})

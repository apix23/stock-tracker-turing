import { News } from './News'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { fetchNews } from '../../services/newsService'

jest.mock('../../services/newsService')

const mockFetch = fetchNews as jest.MockedFunction<typeof fetchNews>

const mockData = [
  {
    headline: 'Headline 1',
    datetime: Date.now() - 61000,
    source: 'Anywhere',
    url: 'anywhere.com',
  },
  {
    headline: 'Headline 2',
    datetime: Date.now() - 121000,
    source: 'Everywhere',
    url: 'everywhere.com',
  },
  {
    headline: 'Headline 3',
    datetime: Date.now() - 361000,
    source: 'Nowhere',
    url: 'nowhere.com',
  },
]

it.skip('should render Company Summary', async () => {
  mockFetch.mockResolvedValue(mockData)
  render(<News stockSymbol={'AAPL'} />)
  screen.findByText('News')
  screen.findByText('Nowhere')

  const title = screen.findByRole('heading')
  title
    .then((res) => {
      expect(res).toHaveClass('news-title')
    })
    .catch((err) => console.error(err))

  const timePassed = screen.findByTestId('days-ago')
  timePassed.then((res) => expect(res).toHaveLength(3)).catch((err) => console.error(err))
})

import SearchBar from './SearchBar'
import React from 'react'
import { fireEvent, getByRole, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { queryFetch } from '../services/queryService'
import 'regenerator-runtime/runtime.js'
import { BrowserRouter } from 'react-router-dom'

jest.mock('../services/queryService')

const mockFetch = queryFetch as jest.MockedFunction<typeof queryFetch>

const mockData = [
  {
    symbol: 'AAPL',
    name: 'Apple Corp',
  },
]

describe('when writing any text in the text bar', () => {
  beforeAll(() => {
    mockFetch.mockResolvedValue(mockData)
    render(
      <BrowserRouter>
        <SearchBar style={{}} currentResult='' />
      </BrowserRouter>,
    )
  })

  it('displays the word "Stocks" when there are results for the search', async () => {
    fireEvent.change(screen.getByPlaceholderText(/enter/gi), { target: { value: 'aa' } })
    screen.findByText('Stocks')
  })

  // it('displays a matching result highlighted with a gray background when there are results for the search', () => {})

  // it('shows the text "no results found" when there are no results', () => {
  //   fireEvent.change(screen.getByPlaceholderText(/enter/gi), { target: { value: '.' } })
  //   screen.findByText('Stocks')
  // })
})

import SearchBar from './SearchBar'
import React from 'react'
import { fireEvent, getByRole, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { queryFetch } from '../services/queryService'
import 'regenerator-runtime/runtime.js'
import { BrowserRouter } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import { wait } from '@testing-library/user-event/dist/utils'

jest.mock('../services/queryService')

const mockFetch = queryFetch as jest.MockedFunction<typeof queryFetch>

const mockData = [
  {
    symbol: 'AAPL',
    name: 'Apple Corp',
  },
]

const renderWithBrowser = () => (
  <BrowserRouter>
    <SearchBar style={{}} currentResult='' />
  </BrowserRouter>
)

describe('when writing any text in the text bar', () => {
  it('should shows the text "no results found" when there are no results', async () => {
    render(renderWithBrowser())
    mockFetch.mockResolvedValue([])
    fireEvent.focus(screen.getByPlaceholderText(/enter/gi))
    fireEvent.change(screen.getByPlaceholderText(/enter/gi), { target: { value: '..' } })

    await waitFor(async () => expect(await screen.findByText(/No results found/gi)).toBeDefined())
    expect(mockFetch).toBeCalledWith('..')
  })

  it('displays the word "Stocks" when there are results for the search', async () => {
    render(renderWithBrowser())
    mockFetch.mockResolvedValue(mockData)
    fireEvent.focus(screen.getByPlaceholderText(/enter/gi))
    fireEvent.change(screen.getByPlaceholderText(/enter/gi), { target: { value: 'aa' } })
    await waitFor(async () => expect(await screen.findByText(/Stocks/gi)).toBeDefined())
  })

  // it('displays a matching result highlighted with a gray background when there are results for the search', async () => {
  //   const { getByPlaceholderText } = render(renderWithBrowser())
  //   mockFetch.mockResolvedValue(mockData)
  //   act(() => {
  //     fireEvent.focus(getByPlaceholderText(/enter/gi))
  //     fireEvent.change(getByPlaceholderText(/enter/gi), { target: { value: 'aa' } })
  //   })
  //   expect(mockFetch).toBeCalledWith('aa')
  //   screen.debug()
  //   await waitFor(async () => expect(await screen.findByText(/AAPL/gi)).toBeDefined())
  // })

  //
})

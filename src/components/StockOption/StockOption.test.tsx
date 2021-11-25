import React, { useState } from 'react'
import StockOption from './StockOption'
import { SetSymbolContext, SetSymbolState } from '../../context/SetSymbolContext'
import { fireEvent, getByRole, render, screen, waitFor } from '@testing-library/react'
import 'regenerator-runtime/runtime.js'
import { BrowserRouter } from 'react-router-dom'

// const mockSetResult = jest.fn()
// const setResult = { setSelectedResult: (symbol: string) => {} }

// const renderWithBrowser = () => (
//   <BrowserRouter>
//     <SetSymbolContext.Provider value={{}}>
//       <StockOption></StockOption>
//     </SetSymbolContext.Provider>
//   </BrowserRouter>
// )

describe('when writing any text in the text bar', () => {
  it('The', () => {})
})

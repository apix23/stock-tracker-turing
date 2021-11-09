import SplashScreen from './SplashScreen'
import React from 'react'
import 'regenerator-runtime/runtime'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

it('should render splash screen', () => {
  render(<SplashScreen completed={99} />)
  expect(screen.getByAltText('deneme'))
})

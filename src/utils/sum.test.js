import React from 'react'
const { render } = require('@testing-library/react')
const { default: App } = require('../App')
const sum = require('./sum')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('testing app', () => {
  render(<App />)
  expect(true)
})

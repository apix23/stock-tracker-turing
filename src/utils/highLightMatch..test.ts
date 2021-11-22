import { highlightMatch } from './highLightMatch'

it('the text should matched should be returned', () => {
  const [storngText] = highlightMatch('AAPL', 'AA')

  expect(storngText).toBe('AA')
})

it('the text that doe not match should be returned as well', () => {
  const [_, normalText] = highlightMatch('AAPL', 'AA')

  expect(normalText).toBe('PL')
})

it('if there is not match, the entired text should be returned', () => {
  const [_, normalText] = highlightMatch('Corp', 'AAPL')

  expect(normalText).toBe('Corp')
})

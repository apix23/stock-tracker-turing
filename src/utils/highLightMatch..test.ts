import { highlightMatch } from './highLightMatch'

describe('when writing any text in the input', () => {
  it('the text matched should be returned', () => {
    const [strongText] = highlightMatch('AAPL', 'AA')

    expect(strongText).toBe('AA')
  })

  it('the text that does not match should be returned as well', () => {
    const [_, normalText] = highlightMatch('AAPL', 'AA')

    expect(normalText).toBe('PL')
  })

  it('if there is no match, the entire text should be returned', () => {
    const [_, normalText] = highlightMatch('Corp', 'AAPL')

    expect(normalText).toBe('Corp')
  })
})


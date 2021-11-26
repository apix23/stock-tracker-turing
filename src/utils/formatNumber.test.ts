import { formatNumber } from './formatNumber'

describe('Should format numbers with K, M, B, or T', () => {
  it('should shorten trillions to T', () => {
    const trillion: string = formatNumber(539769483674738)
    expect(trillion).toEqual('539.77 T')
  })
  it('should shorten billions to B', () => {
    const billion: string = formatNumber(987483674738)
    expect(billion).toEqual('987.48 B')
  })
  it('should shorten millions to M', () => {
    const million: string = formatNumber(483674738)
    expect(million).toEqual('483.67 M')
  })
  it('should shorten thousands to K', () => {
    const thousand: string = formatNumber(674738)
    expect(thousand).toEqual('674.74 K')
  })
  it('should not format under a thousand', () => {
    const hundred: string = formatNumber(738)
    expect(hundred).toEqual('738.00 ')
  })
})

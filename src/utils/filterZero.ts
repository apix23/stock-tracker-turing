import { DataType } from '../hooks/useFetchGraphData'

export const filterZero = (data: DataType[]) => {
  const result = data.filter((prices) => prices.close > 0)
  return result
}

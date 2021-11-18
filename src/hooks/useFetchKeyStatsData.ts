import { useEffect, useState } from 'react'

export interface DataType {
  high: number
  low: number
  open: number
  previousClose: number
  week52High: number
  week52Low: number
  marketCap: number
  peRatio: number
  dividendYield: number
  ttmEPS: number
  isUSMarketOpen: boolean
  volume: number
  avgTotalVolume: number
}

const useFetchKeyStatsData = (url1: string, url2: string) => {
  const [data, setData] = useState<DataType>()
  const [error, setError] = useState<boolean>()

  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        const response1 = await fetch(url1)
        const response2 = await fetch(url2)

        if (!response1.ok || !response2.ok) {
          setError(true)
          console.error(response1, response2)
        }

        const data1 = await response1.json()
        const data2 = await response2.json()
        setError(false)
        setData({ ...data1, ...data2 })
      }
      fetchData()
    }, 200)
  }, [url1, url2])

  return [data, error] as const
}

export default useFetchKeyStatsData

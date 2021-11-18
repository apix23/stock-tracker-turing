import { useEffect, useState } from 'react'

export interface DataType {
  indexPrice: number
  indexChange: number
  indexPercentChange: number
}

const useFetchIndexData = (url: string) => {
  const [data, setData] = useState<DataType>()
  const [error, setError] = useState<boolean>()

  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        const response = await fetch(url)

        if (!response.ok) {
          setError(true)
          console.error(response)
        }

        const data = await response.json()
        setError(false)
        setData({
          indexPrice: data.latestPrice.toFixed(2),
          indexChange: data.change.toFixed(2),
          indexPercentChange: data.changePercent.toFixed(2),
        })
      }
      fetchData()
    }, 400)
  }, [url])

  return [data, error] as const
}

export default useFetchIndexData

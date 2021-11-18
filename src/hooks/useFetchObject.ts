import { useEffect, useState } from 'react'

export interface DataType {
  close: number
  indexPrice: number
  indexChange: number
  indexPercentChange: number
  companyName: string
  symbol: string
  website: string
  description: string
}

const useFetchObject = (url: string) => {
  const [data, setData] = useState<DataType>()
  const [error, setError] = useState<boolean>()
  const [loading, setLoading] = useState<boolean>()

  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        setLoading(true)
        const response = await fetch(url)

        if (!response.ok) {
          setLoading(false)
          setError(true)
          console.error(response)
        }

        const data = await response.json()
        setError(false)
        setLoading(false)
        setData(data)
      }
      fetchData()
    }, 400)
  }, [url])

  return [data, error, loading] as const
}

export default useFetchObject

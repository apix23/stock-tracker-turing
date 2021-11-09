import { useEffect, useState } from 'react'

interface dataType {
  close: number
  indexPrice: number
  indexChange: number
  indexPercentChange: number
}

const useFetchObject = (url: string) => {
  const [data, setData] = useState<dataType>()
  const [error, setError] = useState<number>()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      if (!response.ok) {
        setError(response.status)
      }
      const data = await response.json()
      setData(data)
    }

    fetchData()
  }, [url])

  return [data, error] as const
}

export default useFetchObject

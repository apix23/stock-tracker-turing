import { useEffect, useState } from 'react'

export interface DataType {
  close: number
}

const useFetchGraphClose = (url: string) => {
  const [data, setData] = useState<DataType>()
  const [error, setError] = useState<boolean>()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)

      if (!response.ok) {
        setError(true)
        console.error(response)
      }

      const data = await response.json()
      setError(false)
      setData(data)
    }
    fetchData()
  }, [url])

  return [data, error] as const
}

export default useFetchGraphClose

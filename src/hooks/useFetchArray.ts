import { useEffect, useState } from 'react'

const useFetchArray = (url: string) => {
  const [data, setData] = useState<object[]>()
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

export default useFetchArray

import { useEffect, useState } from 'react'

interface prices {
  open: number
}
const filterZero = (data: []) => {
  const result = data.filter((prices: prices) => prices.open > 0)
  return result
}

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
      setData(filterZero(data))
    }

    fetchData()
  }, [url])

  return [data, error] as const
}

export default useFetchArray

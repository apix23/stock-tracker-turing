import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState()
  const [error, setError] = useState()

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

  return [data, error]
}

export default useFetch

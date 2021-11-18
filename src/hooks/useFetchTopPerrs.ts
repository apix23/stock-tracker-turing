import { useEffect, useState } from 'react'

const useFetchTopPeers = (url: string) => {
  const [data, setData] = useState<Array<string>>()
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
        setData(data)
      }
      fetchData()
    }, 200)
  }, [url])

  return [data, error] as const
}

export default useFetchTopPeers

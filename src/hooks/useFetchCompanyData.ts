import { useEffect, useState } from 'react'

export interface DataType {
  companyName: string
  symbol: string
  website: string
  description: string
}

const useFetchCompanyData = (url: string) => {
  const [data, setData] = useState<DataType>()
  const [error, setError] = useState<boolean>()

  useEffect(() => {
    setTimeout(() => {
      setData(undefined)
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

export default useFetchCompanyData

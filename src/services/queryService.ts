export interface QueryMarket {
  symbol: string
  name: string
}

export const token = import.meta.env.VITE_API_TOKEN

export const queryFetch = (setState: (data: QueryMarket[]) => void, stockSearch: string) => {
  const URL = `https://cloud.iexapis.com/stable/search/${stockSearch}/${token}`
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      setState(data)
    })
    .catch((error) => {
      setState([])
      console.log(error)
    })
}

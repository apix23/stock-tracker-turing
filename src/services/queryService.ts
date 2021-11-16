export interface QueryMarket {
  symbol: string
  name: string
}

export const token = '?token=Tpk_9f8a1a489e684df8ad8a935fab4b3504'

export const queryFetch = (setState: (data: QueryMarket[]) => void, stockSearch: string) => {
  const URL = `https://sandbox.iexapis.com/stable/search/${stockSearch}/${token}`
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

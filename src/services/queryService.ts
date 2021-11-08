export interface QueryMarket {
  symbol: string
  name: string
}

export const queryFetch = (setState: (data: QueryMarket[]) => void, stockSearch: string) => {
  const URL = `https://sandbox.iexapis.com/stable/search/${stockSearch}/?token=Tpk_4171507c85734b4f824fe5b208d9c1e2`
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

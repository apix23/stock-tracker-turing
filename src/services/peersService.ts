import 'regenerator-runtime/runtime.js'
export const token = import.meta.env.VITE_PEERS_TOKEN

export const fetchPeers = async (stockSymbol: string) => {
  const peersURL = `https://finnhub.io/api/v1/stock/peers?symbol=${stockSymbol}${token}`
  try {
    const peersData: Array<string> = await fetch(peersURL).then((res) => res.json())
    return peersData
  } catch (err) {
    console.error(err)
  }
}

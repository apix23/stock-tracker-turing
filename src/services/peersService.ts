import 'regenerator-runtime/runtime.js'
export const token = 'sandbox_c5rtke2ad3ibf61ruc9g'

export const fetchPeers = async (stockSymbol: string | undefined) => {
  const peersURL = `https://finnhub.io/api/v1/stock/peers?symbol=${stockSymbol}&token=${token}`
  try {
    const peersData: Array<string> = await fetch(peersURL).then((res) => res.json())
    return peersData
  } catch (err) {
    console.error(err)
  }
}

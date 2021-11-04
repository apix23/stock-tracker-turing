const umitToken = `&token=sandbox_c5rtke2ad3ibf61ruc9g`
const stockSymbol = 'GOOG'
const peersURL = `https://finnhub.io/api/v1/stock/peers?symbol=${stockSymbol}${umitToken}`

export const fetchPeers = async () => {
  try {
    const peersData: Array<string> = await fetch(peersURL).then((res) => res.json())
    return peersData
  } catch (err) {
    console.error(err)
  }
}

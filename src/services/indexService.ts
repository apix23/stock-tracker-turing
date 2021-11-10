const token = 'Tpk_095b8e5990924d0c8c41c2209556da53'
const spyUrl = `https://sandbox.iexapis.com/stable/stock/SPY/quote/?token=${token}`
const diaUrl = `https://sandbox.iexapis.com/stable/stock/DIA/quote/?token=${token}`
const iwmUrl = `https://sandbox.iexapis.com/stable/stock/IWM/quote/?token=${token}`

export interface IndexTypes {
  indexPrice: number
  indexChange: number
  indexPercentChange: number
}

export const fetchSpyData = async () => {
  try {
    const spyData = await fetch(spyUrl).then((data) => data.json())
    return {
      indexPrice: spyData.latestPrice,
      indexChange: spyData.change.toFixed(2),
      indexPercentChange: spyData.changePercent.toFixed(2),
    }
  } catch (error) {
    console.error(error)
  }
}

export const fetchDiaData = async () => {
  try {
    const diaData = await fetch(diaUrl).then((data) => data.json())
    return {
      indexPrice: diaData.latestPrice,
      indexChange: diaData.change.toFixed(2),
      indexPercentChange: diaData.changePercent.toFixed(2),
    }
  } catch (error) {
    console.error(error)
  }
}

export const fetchIwmData = async () => {
  try {
    const iwmData = await fetch(iwmUrl).then((data) => data.json())
    return {
      indexPrice: iwmData.latestPrice,
      indexChange: iwmData.change.toFixed(2),
      indexPercentChange: iwmData.changePercent.toFixed(2),
    }
  } catch (error) {
    console.error(error)
  }
}

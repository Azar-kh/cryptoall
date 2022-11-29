import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './style.css'
import axios from 'axios'
import Footer from '../footer/index'
import Loading from '../loading'
import Chart from '../chart'

const CoinData = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [coinData, setCoinData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getCoinData = async () => {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}?tickers=false&community_data=false&developer_data=false`,
      )
      const data = await response.data

      setCoinData(data)
      setLoading(false)
    }

    getCoinData()
  }, [])

  const formatNum = (num) => {
    const formattedNum = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(num)

    return formattedNum
  }
  const formatBigNum = (num) => {
    const formattedNum = new Intl.NumberFormat('en-US', {
      notation: 'compact',
      compactDisplay: 'short',
    }).format(num)

    return formattedNum
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="coin-info-container">
          <div className="button" onClick={() => navigate('/')}>
            Go back
          </div>
          <div className="coin-info">
            <img src={coinData.image.large} alt="" />
            <h1>
              {coinData.name} <span>{coinData.symbol.toUpperCase()}</span>
            </h1>

            <div className="coin-major-data">
              <div>
                <span>Current Price</span>
                <h4>{formatNum(coinData.market_data.current_price.usd)}</h4>
              </div>
              <div>
                <span>24h change</span>
                <h4>
                  {formatNum(
                    coinData.market_data.price_change_24h_in_currency.usd,
                  )}
                </h4>
              </div>
            </div>

            <div className="chart">
              <Chart data={coinData} />
            </div>

            <div className="table">
              <div className="first-row">
                <div className="table-data">
                  <span>Today's High</span>
                  <h4 id="high">
                    {formatNum(coinData.market_data.high_24h.usd)}
                  </h4>
                </div>
                <div className="table-data">
                  <span>Today's Low</span>
                  <h4 id="low">
                    {formatNum(coinData.market_data.low_24h.usd)}
                  </h4>
                </div>
              </div>

              <div className="second-row">
                <div className="table-data">
                  <span>Market Cap</span>
                  <h4>{formatBigNum(coinData.market_data.market_cap.usd)}</h4>
                </div>
                <div className="table-data">
                  <span>Total Supply</span>
                  <h4>{formatBigNum(coinData.market_data.total_supply)}</h4>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  )
}

export default CoinData

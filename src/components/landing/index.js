import { getCoins } from '../../services/api'
import React, { useState, useEffect } from 'react'
import Coin from '../coin'
import Footer from '../footer'
import Loading from '../loading'
import './style.css'

const Landing = () => {
  const [coins, setCoins] = useState([])
  const [searchedCoin, setSearchedCoin] = useState('')

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoins()

      setCoins(data)
    }

    fetchAPI()
  }, [])

  const searchHandler = (e) => {
    setSearchedCoin(e.target.value)
  }

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchedCoin.toLowerCase()),
  )

  return (
    <>
      <div className="input">
        <h3>Explore over 100 coins that are available to trade.</h3>
        <input
          type="text"
          placeholder="Search coins"
          value={searchedCoin}
          onChange={searchHandler}
        />
      </div>
      <div className="container">
        {!coins.length ? (
          <Loading />
        ) : (
          <div className="coin-container">
            {filteredCoins.map((coin) => (
              <Coin
                key={coin.id}
                id={coin.id}
                symbol={coin.symbol}
                name={coin.name}
                image={coin.image}
                current_price={coin.current_price}
                price_change={coin.price_change_percentage_24h}
              />
            ))}
          </div>
        )}

        <Footer />
      </div>
    </>
  )
}

export default Landing

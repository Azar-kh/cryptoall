import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

const Coin = ({ id, name, symbol, image, current_price }) => {
  const navigate = useNavigate()

  const formatNum = (num) => {
    const formattedNum = new Intl.NumberFormat('en-US', {
      maximumSignificantDigits: 3,
      style: 'currency',
      currency: 'USD',
    }).format(num)

    return formattedNum
  }

  return (
    <div onClick={() => navigate(`/${id}`)} className="coin">
      <img src={image} alt="" />

      <div className="first-col">
        <h3>{name}</h3>
        <p>{symbol.toUpperCase()}</p>
      </div>

      <div className="second-col">
        <h3>{formatNum(current_price)}</h3>
      </div>
    </div>
  )
}

export default Coin

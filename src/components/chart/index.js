import React from 'react'
import './style.css'
import { Line } from 'react-chartjs-2'
import { Chart } from 'react-chartjs-2'

const Chart = ({ data }) => {
  const chartData = {
    labels: ['7d', '14d', '30d', '60d', '200d', '1y'],

    datasets: [
      {
        label: 'Percentage',
        data: [
          data.market_data.price_change_percentage_7d,
          data.market_data.price_change_percentage_14d,
          data.market_data.price_change_percentage_30d,
          data.market_data.price_change_percentage_60d,
          data.market_data.price_change_percentage_200d,
          data.market_data.price_change_percentage_1y,
        ],
        borderWidth: 3,
        borderColor: 'white',
        tension: 0.3,
      },
    ],
  }

  return (
    <div className="chart-container">
      <Line
        data={chartData}
        options={{
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Price Change Percentage Over the Past Year',
              color: '#007acc',
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  )
}

export default Chart

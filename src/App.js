import './App.css'
import Landing from './components/landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CoinData from './components/coinData'

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/:id" element={<CoinData />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

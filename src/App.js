import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Deposito from './pages/Deposito';
import Home from './pages/Home';
import Retiro from './pages/Retiro';
import Convertir from './pages/Convertir';
import DepositoMoneda from './components/DepositoMoneda';
import RetiroMoneda from './components/RetiroMoneda';

function App() {

  const [saldo, setSaldo] = useState([
    {
      currency: 'ARS',
      id: 'ars',
      name: 'Pesos',
      balance: 0,
      price: 1,
      symbol: '$',
      img: 'https://icongr.am/fontawesome/dollar.svg?size=148&color=currentColor'
    },
    {
      currency: 'BTC',
      id: 'btc',
      name: 'Bitcoin',
      balance: 0,
      price: 8061300,
      symbol: 'BTC',
      img: 'img/btc.png'
    },
    {
      currency: 'ETH',
      id: 'eth',
      name: 'Ethereum',
      balance: 0,
      price: 564100,
      symbol: 'ETH',
      img: 'img/eth.png'
    },
    {
      currency: 'DAI',
      id: 'dai',
      name: 'DAI',
      balance: 0,
      price: 220,
      symbol: 'DAI',
      img: 'img/dai.png'
    },
    {
      currency: 'USDT',
      id: 'usdt',
      name: 'Tether',
      balance: 0,
      price: 220,
      symbol: 'USDT',
      img: 'img/usdt.png'
    }
  ])

  const [saldoTotal, setSaldoTotal] = useState(0)
  const [saldoUpdate, setSaldoUpdate] = useState(false)

  const [movimientosArray, setMovimientosArray] = useState([])

  useEffect(() => {
    if(saldoUpdate){
      let saldoParcial = 0
      saldo.forEach( curr => {
          saldoParcial += (curr.balance*curr.price)
      })
  
      setSaldoTotal(saldoParcial.toFixed(2))
      console.log('cambio saldo')
      setSaldoUpdate(false)
    }
    // eslint-disable-next-line
  }, [saldoUpdate])

  return (
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={
              <Home
                saldo={saldo}
                saldoTotal={saldoTotal}
                setSaldoTotal={setSaldoTotal}
                movimientosArray={movimientosArray} 
              />} />
            <Route exact path="/convertir" element={
              <Convertir
                saldo={saldo}
                setSaldo={setSaldo}
                setSaldoUpdate={setSaldoUpdate}
                movimientosArray={movimientosArray}
                setMovimientosArray={setMovimientosArray} />}
            />
            <Route exact path="/deposito" element={<Deposito saldo={saldo} />} /> 
            <Route exact path="/deposito/:currencyId" element={
              <DepositoMoneda 
                saldo={saldo}
                setSaldo={setSaldo} 
                setMovimientosArray={setMovimientosArray}
                setSaldoUpdate={setSaldoUpdate}
                movimientosArray={movimientosArray} />} />
            <Route exact path="/retiro/:currencyId" element={
              <RetiroMoneda
                saldo={saldo}
                setSaldo={setSaldo}
                movimientosArray={movimientosArray}
                setSaldoUpdate={setSaldoUpdate}
                setMovimientosArray={setMovimientosArray} />} />            
            <Route exact path="/retiro" element={<Retiro saldo={saldo} />} />
          </Routes>
        </Router>
      </>
  );
}

export default App;

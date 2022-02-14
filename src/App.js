import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Deposito from './pages/Deposito';
import Home from './pages/Home';
import Retiro from './pages/Retiro';
import Convertir from './pages/Convertir';
import DepositoMoneda from './components/DepositoMoneda';
import RetiroMoneda from './components/RetiroMoneda';
import Saldo from './components/Saldo';
import Saldos from './components/Saldos';

function App() {

  const [cotizaciones, setCotizaciones] = useState([])
  const [saldo, setSaldo] = useState([
    {
      currency: 'ARS',
      id: 'ars',
      name: 'Pesos',
      balance: 0,
      decimals: 2,
      symbol: '$',
      img: 'https://icongr.am/fontawesome/dollar.svg?size=148&color=currentColor'
    },
    {
      currency: 'BTC',
      id: 'btc',
      name: 'Bitcoin',
      balance: 0,
      decimals: 8,
      symbol: 'BTC',
      img: '/img/btc.png'
    },
    {
      currency: 'ETH',
      id: 'eth',
      name: 'Ethereum',
      balance: 0,
      decimals: 6,
      symbol: 'ETH',
      img: '/img/eth.png'
    },
    {
      currency: 'DAI',
      id: 'dai',
      name: 'DAI',
      balance: 0,
      decimals: 2,
      symbol: 'DAI',
      img: '/img/dai.png'
    },
    {
      currency: 'USDT',
      id: 'usdt',
      name: 'Tether',
      balance: 0,
      decimals: 2,
      symbol: 'USDT',
      img: '/img/usdt.png'
    }
  ])

  const [saldoTotal, setSaldoTotal] = useState(0)
  const [saldoUpdate, setSaldoUpdate] = useState(false)
  const [ocultar, setOcultar] = useState(false)
  const [swap1, setSwap1] = useState('ars')
  const [swap2, setSwap2] = useState('btc')

  const [movimientosArray, setMovimientosArray] = useState([])

  useEffect(() => {
    if(saldoUpdate){
      let saldoParcial = 0
      saldo.forEach( curr => {
          let cotizacion = cotizaciones.filter( cot => cot.id === curr.id)
          saldoParcial += (curr.balance*cotizacion[0].bid)
      })
      setSaldoTotal(saldoParcial.toFixed(2))
      setSaldoUpdate(false)
    }
    // eslint-disable-next-line
  }, [saldoUpdate])

  useEffect(() => {
    const consultarDai = async () => {
      const url = 'https://criptoya.com/api/belo/dai/ars/0.5'
      const respuesta = await fetch(url)
      const resultadoApi = await respuesta.json()
      let dai = {
        id: 'dai',
        bid: resultadoApi.bid,
        ask: resultadoApi.ask
      }

      const url2 = 'https://criptoya.com/api/belo/btc/ars/0.5'
      const respuesta2 = await fetch(url2)
      const resultadoApi2 = await respuesta2.json()
      let btc = {
        id: 'btc',
        bid: resultadoApi2.bid,
        ask: resultadoApi2.ask
      }

      const url3 = 'https://criptoya.com/api/belo/eth/ars/0.5'
      const respuesta3 = await fetch(url3)
      const resultadoApi3 = await respuesta3.json()
      let eth = {
        id: 'eth',
        bid: resultadoApi3.bid,
        ask: resultadoApi3.ask
      }

      const url4 = 'https://criptoya.com/api/belo/usdt/ars/0.5'
      const respuesta4 = await fetch(url4)
      const resultadoApi4 = await respuesta4.json()
      let usdt = {
        id: 'usdt',
        bid: resultadoApi4.bid,
        ask: resultadoApi4.ask
      }

      let ars = {
        id: 'ars',
        bid: 1,
        ask: 1
      }

      let cotizacionesArray = [btc, eth, dai, usdt, ars]
      setCotizaciones(cotizacionesArray)
    }
    consultarDai()

  }, [])

  return (
      <>
        {cotizaciones.length > 0 ?
          <main className='main-container'>
          <Router>
            <Routes>
              <Route exact path="/" element={
                <Home
                  saldo={saldo}
                  saldoTotal={saldoTotal}
                  setSaldoTotal={setSaldoTotal}
                  movimientosArray={movimientosArray}
                  cotizaciones={cotizaciones}
                  ocultar={ocultar}
                  setOcultar={setOcultar}
                  setSwap1={setSwap1}
                  setSwap2={setSwap2}
                />} />
              <Route exact path="/convertir" element={
                <Convertir
                  saldo={saldo}
                  setSaldo={setSaldo}
                  setSaldoUpdate={setSaldoUpdate}
                  movimientosArray={movimientosArray}
                  setMovimientosArray={setMovimientosArray}
                  cotizaciones={cotizaciones}
                  swap1={swap1}
                  setSwap1={setSwap1}
                  setSwap2={setSwap2}
                  swap2={swap2}/>}
              />
              <Route exact path="/deposito" element={<Deposito saldo={saldo} cotizaciones={cotizaciones} />} /> 
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
              <Route exact path="/saldos" element={
                <Saldos saldo={saldo} cotizaciones={cotizaciones} ocultar={ocultar} />
              } />
              <Route exact path="/saldos/:saldoId" element={
                <Saldo
                  saldo={saldo}
                  cotizaciones={cotizaciones}
                  setSwap1={setSwap1}
                  setSwap2={setSwap2} />} />
            </Routes>
          </Router>
          </main> :
          <p>Cargando...</p>
        
      }
      </>
  );
}

export default App;

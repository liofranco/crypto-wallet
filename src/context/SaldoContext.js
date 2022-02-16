import React, { createContext, useState, useEffect } from 'react'

export const SaldoContext = createContext()

const SaldoProvider = (props) => {

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
    const [movimientosArray, setMovimientosArray] = useState([])
    const [cotizaciones, setCotizaciones] = useState([])
    const [swap1, setSwap1] = useState('ars')
    const [swap2, setSwap2] = useState('btc')

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
      const consultarApi = async () => {
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
      consultarApi()
  
    }, [])

    return (
        <SaldoContext.Provider
            value={{
                saldo,
                setSaldo,
                saldoTotal,
                setSaldoTotal,
                saldoUpdate,
                setSaldoUpdate,
                ocultar,
                setOcultar,
                movimientosArray,
                setMovimientosArray,
                cotizaciones,
                swap1,
                swap2,
                setSwap1,
                setSwap2
            }}
        >
            {props.children}
        </SaldoContext.Provider>
    )
}

export default SaldoProvider;
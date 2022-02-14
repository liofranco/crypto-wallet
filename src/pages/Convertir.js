import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Convertir = 
    ({saldo, 
    setSaldo, 
    setSaldoUpdate, 
    movimientosArray, 
    setMovimientosArray,
    cotizaciones,
    swap1, setSwap1,
    swap2, setSwap2}) => {

    const [balanceSwap1, setBalanceSwap1] = useState('')
    const [balanceSwap2, setBalanceSwap2] = useState('')
    const [swapStatus, setSwapStatus] = useState(false)

    let array1 = saldo.filter( curr => curr.id !== swap2)
    let array2 = saldo.filter( curr => curr.id !== swap1)
    let currency1 = saldo.filter( curr => curr.id === swap1)
    let cotizacion1 = cotizaciones.filter( curr => curr.id === swap1)
    let cotizacion2 = cotizaciones.filter( curr => curr.id === swap2) 

    const handleSwap1 = e => {
        setSwap1(e.target.value)
        setBalanceSwap1('')
        setBalanceSwap2('')
    }

    const handleSwap2 = e => {
        setSwap2(e.target.value)
        setBalanceSwap1('')
        setBalanceSwap2('')
    }

    const handleClick = () => {
        setSwap1(swap2)
        setSwap2(swap1)
        setBalanceSwap1(balanceSwap2)
        setBalanceSwap2(balanceSwap1)
    }

    const maxSwap = () => {
        let input1 = currency1[0].balance
        setBalanceSwap1(parseFloat(input1))
        setBalanceSwap2(parseFloat(((input1*cotizacion1[0].bid)/cotizacion2[0].ask).toFixed(8)))
    }

    const submitSwap = e => {
        e.preventDefault()
        if(balanceSwap1 > 0 && balanceSwap1 <= currency1[0].balance){
            saldo.forEach( curr => {
                if(curr.id === swap1){
                    curr.balance -= parseFloat(balanceSwap1)
                } else if(curr.id === swap2){
                    curr.balance += parseFloat(balanceSwap2)
                    const d = new Date()
                    movimientosArray.unshift({
                        nombre: `Cambio ${swap1.toUpperCase()}→${swap2.toUpperCase()}`,
                        saldo: `+${balanceSwap2.toFixed(curr.decimals)} ${swap2.toUpperCase()}`,
                        cambio: `-${balanceSwap1.toFixed(currency1[0].decimals)} ${swap1.toUpperCase()}`,
                        img: "https://icongr.am/material/swap-horizontal.svg?size=128&color=614ad9",
                        style: "entrada-saldo",
                        date: {
                            hour: d.getHours(),
                            minutes: d.getMinutes(),
                            day: d.getDate(),
                            month: d.getMonth()+1,
                            year: d.getFullYear(), 
                        }
                    })
                }
    
    
                setMovimientosArray(movimientosArray)
                setSaldo(saldo)
                setSaldoUpdate(true)
                setSwapStatus(true)
            })
        }
    }

    const handleChangeSwap1 = e => {
        let input1 = e.target.value
        if(input1 > 0){
            setBalanceSwap1(parseFloat(input1))
            setBalanceSwap2(parseFloat(((input1*cotizacion1[0].bid)/cotizacion2[0].ask).toFixed(8)))
        } else {
            setBalanceSwap1('')
            setBalanceSwap2('')
        } 
    }

    const handleChangeSwap2 = e => {
        let input2 = e.target.value
        if(input2 > 0){
            setBalanceSwap2(parseFloat(input2))
            setBalanceSwap1(parseFloat(((input2*cotizacion2[0].ask)/cotizacion1[0].bid).toFixed(8)))
        } else {
            setBalanceSwap1('')
            setBalanceSwap2('')
        } 
    }

    const goBack = e => {
        e.preventDefault()
        window.history.back()
    }

    return (
        <>
            {!swapStatus ? 
                    <div className="convertir-page">
                    <div className='swap'>
                        <div className="swap-container">
                            <div className="swap-select">
                                <div className='swap-disponible'>
                                    <p>Disponible: {currency1[0].balance.toFixed(currency1[0].decimals)} {currency1[0].currency}</p>
                                    <button onClick={maxSwap} className='max-swap'>MAX</button>
                                </div>
                                <select name="" id="" value={swap1} onChange={handleSwap1}>
                                    {array1.map( curr => {
                                        return (
                                            <option value={curr.id} key={curr.id}>{curr.currency}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <form onSubmit={submitSwap}>
                                <input className={`swap-input ${balanceSwap1 > currency1[0].balance ? 'input-error' : ''}`} type="number" onChange={handleChangeSwap1} value={balanceSwap1} />
                            </form>
                            {balanceSwap1 > currency1[0].balance ?
                                <p className='saldo-error'>Saldo en {swap1.toUpperCase()} insuficiente</p> : null}
                        </div>
                        <img onClick={handleClick} src="https://icongr.am/material/swap-vertical.svg?size=30&color=614ad9" className='movimiento-img' alt="" />
                        <div className="swap-container">
                            <div className="swap-select">
                                <select name="" id="" value={swap2} onChange={handleSwap2}>
                                    {array2.map( curr => {
                                        return (
                                            <option value={curr.id} key={curr.id}>{curr.currency}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <form onSubmit={submitSwap}>
                                <input className='swap-input' onChange={handleChangeSwap2} value={balanceSwap2} type="number" />
                            </form>
                        </div>
                        <div className="btn-form-container">
                            <button type='button' onClick={goBack} className='btn-cancelar'>
                                Cancelar
                            </button>
                            <button onClick={submitSwap} className='btn-confirmar' type='submit'>Confirmar</button>
                        </div>
        
                    </div>
                </div> : 
                <div className="retiro-moneda-container">
                    <div className='deposit-success-container'>
                        <img src="https://icongr.am/material/check-circle.svg?size=80&color=ffffff" alt="" />
                        <h3>Cambio confirmado</h3>
                        <p>Tu cambio fue realizado con exito</p>
                        <Link to="/" className='btn-volver-inicio'>
                            <h3>Volver a inicio</h3>
                        </Link>
                    </div>
                </div> }
        </>
    );
};

export default Convertir;
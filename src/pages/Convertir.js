import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

const Convertir = ({saldo, setSaldo, setSaldoUpdate, movimientosArray, setMovimientosArray}) => {

    const [swap1, setSwap1] = useState('ars')
    const [swap2, setSwap2] = useState('btc')
    const [balanceSwap1, setBalanceSwap1] = useState('')
    const [balanceSwap2, setBalanceSwap2] = useState('')
    const [swapStatus, setSwapStatus] = useState(false)

    let array1 = saldo.filter( curr => curr.id !== swap2)
    let array2 = saldo.filter( curr => curr.id !== swap1)
    let currency1 = saldo.filter( curr => curr.id === swap1)
    let currency2 = saldo.filter( curr => curr.id === swap2)

    const handleSwap1 = e => {
        setSwap1(e.target.value)
    }

    const handleSwap2 = e => {
        setSwap2(e.target.value)
    }

    const handleClick = () => {
        setSwap1(swap2)
        setSwap2(swap1)
        setBalanceSwap1(balanceSwap2)
        setBalanceSwap2(balanceSwap1)
    }

    const maxSwap = () => {
        let input1 = currency1[0].balance
        setBalanceSwap1(input1)
        setBalanceSwap2(parseFloat(((input1*currency1[0].price)/currency2[0].price).toFixed(8)))
    }

    const submitSwap = e => {
        e.preventDefault()
        if(balanceSwap1 > 0 && balanceSwap1 <= currency1[0].balance){
            saldo.forEach( curr => {
                if(curr.id === swap1){
                    curr.balance -= parseFloat(balanceSwap1)
                } else if(curr.id === swap2){
                    curr.balance += parseFloat(balanceSwap2)
                    movimientosArray.unshift({
                        nombre: `Cambio ${swap1.toUpperCase()}→${swap2.toUpperCase()}`,
                        saldo: `+${balanceSwap2} ${swap2.toUpperCase()}`,
                        img: "https://icongr.am/material/swap-horizontal.svg?size=128&color=614ad9",
                        style: "entrada-saldo"
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
            setBalanceSwap1(input1)
            setBalanceSwap2(parseFloat(((input1*currency1[0].price)/currency2[0].price).toFixed(8)))
        } else {
            setBalanceSwap1('')
            setBalanceSwap2('')
        } 
    }

    const handleChangeSwap2 = e => {
        let input2 = e.target.value
        if(input2 > 0){
            setBalanceSwap2(input2)
            setBalanceSwap1(parseFloat(((input2*currency2[0].price)/currency1[0].price).toFixed(8)))
        } else {
            setBalanceSwap1('')
            setBalanceSwap2('')
        } 
    }

    return (
        <>
            {!swapStatus ? 
                    <div className="convertir-page">
                    <div className='swap'>
                        <div className="swap-container">
                            <div className="swap-select">
                                <div className='swap-disponible'>
                                    <p>Disponible: {currency1[0].balance} {currency1[0].currency}</p>
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
                                <input type="number" onChange={handleChangeSwap1} value={balanceSwap1} />
                            </form>
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
                                <input onChange={handleChangeSwap2} value={balanceSwap2} type="text" />
                            </form>
                        </div>
                        <div className="btn-form-container">
                            <Link to="/" className='btn-cancelar'>
                                Cancelar
                            </Link>
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
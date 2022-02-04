import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom'

const RetiroMoneda = ({saldo, setSaldo, movimientosArray, setMovimientosArray, setSaldoUpdate}) => {

    const [retiro, setRetiro] = useState(0)
    const [mostrarError, setMostrarError] = useState(false)
    const {currencyId} = useParams()
    const [retiroStatus, setRetiroStatus] = useState(false)

    let monedaRetiro = saldo.filter( curr => curr.id === currencyId)

    const { balance } = monedaRetiro[0]

    const handleRetiro = e => {
        setRetiro(parseFloat(e.target.value))
        if(balance < e.target.value){
            setMostrarError(true)
        } else setMostrarError(false)
    }

    const submitRetiro = e => {
        e.preventDefault()
        saldo.forEach( curr => {
            if(curr.id === currencyId){
                if(curr.balance >= retiro){
                    curr.balance -= retiro            
                    movimientosArray.unshift({
                        nombre: `Retiro`,
                        saldo: `-${retiro} ${currencyId.toUpperCase()}`,
                        img: "https://icongr.am/material/arrow-up.svg?size=128&color=614ad9",
                        style: ""
                    })
            
                    setMovimientosArray(movimientosArray)
                    setSaldo(saldo)
                    setSaldoUpdate(true)
                    setRetiroStatus(true)
                } else {
                    setMostrarError(true)
                }
            }
        })

    }

    return (
        <>
            {!retiroStatus ? 
                <div className='retiro-moneda-container'>
                    <div className="retiro-form-container">
                        <h2 className="deposito-title section-title">Ingresá el monto</h2>
                        <form className="retiro-form" onSubmit={submitRetiro}>
                            <p className='currencyid'>{currencyId}</p>
                            <input className={`input-deposito ${mostrarError ? 'saldo-error' : '' }`} placeholder='0' type="number" step="0.00001" onChange={handleRetiro} />
                            {mostrarError ? <p className='saldo-error'>Saldo insuficiente</p> : 
                                <p className='balance-disponible'>Tenes {balance} {currencyId.toUpperCase()} disponible</p>}
                            <div className="btn-form-container">
                                <Link to="/" className='btn-cancelar'>
                                    Cancelar
                                </Link>
                                <button className='btn-confirmar' type='submit'>Confirmar</button>
                            </div>
                        </form>
                    </div>
                </div> : 
                <div className="retiro-moneda-container">
                    <div className='deposit-success-container'>
                        <img src="https://icongr.am/material/check-circle.svg?size=80&color=ffffff" alt="" />
                        <h3>Retiro confirmado</h3>
                        <p>Tu retiro por {retiro} {currencyId.toUpperCase()} fue realizado con exito</p>
                        <Link to="/" className='btn-volver-inicio'>
                            <h3>Volver a inicio</h3>
                        </Link>
                    </div>
                </div>}
        </>
    );
};

export default RetiroMoneda;
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom'

const DepositoMoneda = ({saldo, setSaldo, setMovimientosArray, movimientosArray, setSaldoUpdate}) => {

    const [deposito, setDeposito] = useState('')
    const [depositoStatus, setDepositoStatus] = useState(false)

    const {currencyId} = useParams()

    const handleDeposito = e => {
        setDeposito(parseFloat(e.target.value))
    }

    const submitDeposito = e => {
        e.preventDefault()
        if(deposito > 0){
            saldo.forEach( curr => {
                if(curr.id === currencyId){
                    curr.balance += deposito
                }
            })
            
            movimientosArray.unshift({
                nombre: `Deposito`,
                saldo: `+${deposito} ${currencyId.toUpperCase()}`,
                img: "https://icongr.am/material/arrow-down.svg?size=128&color=614ad9",
                style: "entrada-saldo"
            })
            
            setSaldo(saldo)
            setSaldoUpdate(true)
            setMovimientosArray(movimientosArray)
            setDepositoStatus(true)
        }
    }

    return (
        <>
        {!depositoStatus ? 
        <div className='retiro-moneda-container'>
            <div className='retiro-form-container'>
                <h2 className="deposito-title section-title">¿Cuánto queres depositar?</h2>
                <form className='retiro-form' onSubmit={submitDeposito}>
                    <div className="input-container">
                        <p className='currencyid'>{currencyId}</p>
                        <input placeholder='0' className="input-deposito" type="number" step="0.00001" onChange={handleDeposito} />
                    </div>
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
                <h3>Deposito confirmado</h3>
                <p>Tu deposito por {deposito} {currencyId.toUpperCase()} fue realizado con exito</p>
                <Link to="/" className='btn-volver-inicio'>
                    <h3>Volver a inicio</h3>
                </Link>
            </div>
        </div>}
         
        </>
    );
}

export default DepositoMoneda;
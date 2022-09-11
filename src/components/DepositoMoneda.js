import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom'
import { SaldoContext } from '../context/SaldoContext';
import ModalConfirmacion from './ModalConfirmacion';
import style from '../styles/depositoRetiro.module.css'

const DepositoMoneda = () => {

    const {
        saldo,
        setSaldo,
        setMovimientosArray,
        movimientosArray,
        setSaldoUpdate
    } = useContext(SaldoContext)
    const [deposito, setDeposito] = useState('')
    const [depositoStatus, setDepositoStatus] = useState(false)

    const {currencyId} = useParams()
    let currency = saldo.filter(curr => curr.id === currencyId)

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

            const d = new Date()
            
            movimientosArray.unshift({
                nombre: `Deposito`,
                saldo: `+${deposito.toFixed(currency[0].decimals)} ${currencyId.toUpperCase()}`,
                img: "https://icongr.am/material/arrow-down.svg?size=128&color=0b0e11",
                style: "entrada_saldo",
                date: {
                    hour: d.getHours(),
                    minutes: d.getMinutes(),
                    day: d.getDate(),
                    month: d.getMonth()+1,
                    year: d.getFullYear(), 
                }
            })
            
            setSaldo(saldo)
            setSaldoUpdate(true)
            setMovimientosArray(movimientosArray)
            setDepositoStatus(true)
        }
    }

    const goBack = e => {
        e.preventDefault()
        window.history.back()
    }

    return (
        <>
        {!depositoStatus ? 
        <div className={style.container}>
            <div className={style.form_container}>
                <h2 className={style.title}>¿Cuánto queres depositar?</h2>
                <form className={style.form} onSubmit={submitDeposito}>
                    <div className={style.input_container}>
                        <p className={style.currencyid}>{currencyId}</p>
                        <input placeholder='0' className={style.input} type="number" step="0.00001" onChange={handleDeposito} />
                    </div>
                    <div className="btn-form-container">
                        <button type='button' onClick={goBack} className='btn-cancelar'>
                            Cancelar
                        </button>
                        <button className='btn-confirmar' type='submit'>Confirmar</button>
                    </div>
                </form>
            </div>
        </div> :
        <ModalConfirmacion 
        operacion={'deposito'}
        cantidad={deposito}
        currency={currencyId}
        />}
         
        </>
    );
}

export default DepositoMoneda;
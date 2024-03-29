import React, { useState,useContext } from 'react';
import { useParams } from 'react-router-dom'
import { SaldoContext } from '../context/SaldoContext';
import ModalConfirmacion from './ModalConfirmacion';
import style from '../styles/depositoRetiro.module.css'

const RetiroMoneda = () => {

    const {saldo, setSaldo, movimientosArray, setMovimientosArray, setSaldoUpdate} = useContext(SaldoContext)

    const [retiro, setRetiro] = useState('')
    const [mostrarError, setMostrarError] = useState(false)
    const {currencyId} = useParams()
    const [retiroStatus, setRetiroStatus] = useState(false)

    let monedaRetiro = saldo.filter( curr => curr.id === currencyId)

    const { balance } = monedaRetiro[0]

    const handleRetiro = e => {
        if(e.target.value === ''){
            setRetiro('')
        } else setRetiro(parseFloat(e.target.value))
        
        if(balance < e.target.value){
            setMostrarError(true)
        } else setMostrarError(false)
    }

    const submitRetiro = e => {
        e.preventDefault()
        if(retiro > 0){
            saldo.forEach( curr => {
                if(curr.id === currencyId){
                    if(curr.balance >= retiro){
                        curr.balance -= retiro
                        const d = new Date()           
                        movimientosArray.unshift({
                            nombre: `Retiro`,
                            saldo: `-${retiro.toFixed(curr.decimals)} ${currencyId.toUpperCase()}`,
                            img: "https://icongr.am/material/arrow-up.svg?size=128&color=0b0e11",
                            style: "",
                            date: {
                                hour: d.getHours(),
                                minutes: d.getMinutes(),
                                day: d.getDate(),
                                month: d.getMonth()+1,
                                year: d.getFullYear(), 
                            }
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

    }

    const maxRetiro = e => {
        e.preventDefault()
        setRetiro(balance)
    }

    const goBack = e => {
        e.preventDefault()
        window.history.back()
    }

    return (
        <>
            {!retiroStatus ? 
                (<div className={style.container}>
                    <div className={style.form_container}>
                        <h2 className={style.title}>¿Cuánto queres retirar?</h2>
                        <form className={style.form} onSubmit={submitRetiro}>
                            <p className={style.currencyid}>{currencyId}</p>
                            <input 
                                className={`${style.input} ${mostrarError ? 'saldo-error' : '' }`}
                                placeholder='0'
                                type="number"
                                step="0.00001"
                                onChange={handleRetiro}
                                value={retiro}
                            />
                            {mostrarError ? <p className='saldo-error'>Saldo insuficiente</p> :
                                <> 
                                    <p className={style.disponible}>Tenes {balance} {currencyId.toUpperCase()} disponible</p>
                                    <button type='button' onClick={maxRetiro} className='btn_max'>MAX</button>
                                </>
                                }
                            <div className="btn-form-container">
                                <button type='button' onClick={goBack} className='btn-cancelar'>
                                    Cancelar
                                </button>
                                <button className='btn-confirmar' type='submit'>Confirmar</button>
                            </div>
                        </form>
                    </div>
                </div>): 
                (<ModalConfirmacion 
                    operacion={'retiro'}
                    cantidad={retiro}
                    currency={currencyId}
                /> )}
        </>
    );
};

export default RetiroMoneda;
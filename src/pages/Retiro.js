import React, { useContext } from 'react';
import Saldo from '../components/Saldo';
import Skeleton from '../components/Skeleton';
import { SaldoContext } from '../context/SaldoContext';
import style from '../styles/saldos.module.css'

const Retiro = () => {

    const {saldo, cotizaciones} = useContext(SaldoContext)

    return (
        <div className="section-container">
            <h2 className="section-title">¿ Que queres retirar ?</h2>    
            <div className={style.saldos_container}>
                {saldo.map( currency => {
                    if(cotizaciones.length > 0){
                        let cotizacion = cotizaciones.filter( curr => curr.id === currency.id)
                        return(
                            <Saldo key={currency.id} currency={currency} cotizacion={cotizacion} route={'retiro'} />       
                        )
                    } else {
                        return (<Skeleton key={currency.id} />)
                    }
                })}
            </div>
        </div>
    );
};

export default Retiro;
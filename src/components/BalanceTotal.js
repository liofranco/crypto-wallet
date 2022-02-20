import React, { useContext} from 'react';
import { SaldoContext } from '../context/SaldoContext';
import style from '../styles/balanceTotal.module.css'

const BalanceTotal = () => {

    const {saldoTotal, ocultar, setOcultar, cotizaciones} = useContext(SaldoContext)

    const ocultarSaldo = () => {
        if(ocultar){
            setOcultar(false)
        } else setOcultar(true)
    }

    return (
        <div className={style.balancetotal_container}>
            <div className={style.balancetotal}>
                <p>Saldo total</p>
                {cotizaciones.length > 0 ? 
                    <div className={style.saldototal}>
                    <p>{!ocultar ? saldoTotal : '****'} ARS</p>
                    <img onClick={ocultarSaldo} src="https://icongr.am/material/eye.svg?size=25&color=614ad9" alt="" />
                    </div> : 
                    <ul className='loading-dots'>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul> 
                } 
            </div>
        </div>
    );
};

export default BalanceTotal;
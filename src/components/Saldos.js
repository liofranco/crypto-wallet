import React, { useContext} from 'react';
import { SaldoContext } from '../context/SaldoContext';
import { Link } from 'react-router-dom';

const Saldos = () => {

    const {saldo, cotizaciones, ocultar} = useContext(SaldoContext)

    return (
        <div className='mis-saldos'>
            <h3>Mis saldos</h3>
            {cotizaciones.length > 0 ?
                <div className="flex-center saldos-container">
                    {saldo.map( currency => {
                        let cotizacion = cotizaciones.filter( curr => curr.id === currency.id)
                        return(
                            <Link to={`/saldos/${currency.id}`} key={currency.name} className="saldo-container">
                                <div className="currency-container">
                                    <img src={currency.img} alt="" className="coin-img" />
                                    <p>{currency.name}</p>
                                </div>
                                <div className="balance-container">
                                    {!ocultar ? 
                                    currency.balance > 0 ? 
                                        <p>{currency.balance.toFixed(currency.decimals)} {currency.currency}</p> : 
                                        <p>0 {currency.currency}</p> :
                                        <p>**** {currency.currency}</p>
                                    }
                                    {currency.id !== 'ars' ?
                                    !ocultar ?
                                        <p className='balance-ars'>{(currency.balance*cotizacion[0].bid).toFixed(2)} ARS</p> : 
                                        <p className='balance-ars'>**** ARS</p> : null }
                                </div>
                                
                            </Link>        
                        )
                    })}
                </div> : <p>Cargando...</p> }
        </div>
    );
};

export default Saldos;
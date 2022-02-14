import React from 'react';
import { Link } from 'react-router-dom'

const Deposito = ({saldo, cotizaciones}) => {

    return (
        <div className="deposito-container section-container">
            <h2 className="deposito-title section-title">¿ Que queres depositar ?</h2>
            <div className="flex-center saldos-container">
                {saldo.map(currency => {
                    let cotizacion = cotizaciones.filter(curr => curr.id === currency.id)
                    return(
                        <Link key={currency.id} to={`/deposito/${currency.id}`} className="saldo-container">
                            <div className="currency-container">
                                <img src={currency.img} alt="" className="coin-img" />
                                <p>{currency.name}</p>
                            </div>
                            <div className="balance-container">
                                {currency.balance > 0 ? 
                                    <p>{currency.balance.toFixed(currency.decimals)} {currency.currency}</p> : 
                                    <p>0 {currency.currency}</p>
                                }
                                {currency.id !== 'ars' ?
                                    <p className='balance-ars'>{(currency.balance*cotizacion[0].bid).toFixed(2)} ARS</p> : null }
                            </div>
                        </Link>    
                    )
                })}
            </div>
        </div>
    );
};

export default Deposito;
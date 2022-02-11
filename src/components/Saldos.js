import React from 'react';

const Saldos = ({saldo, cotizaciones, ocultar}) => {

    return (
        <div className='mis-saldos'>
            <h3>Mis saldos</h3>
            <div className="flex-center saldos-container">
                {saldo.map( currency => {
                    let cotizacion = cotizaciones.filter( curr => curr.id === currency.id)
                    return(
                        <div key={currency.name} className="saldo-container">
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
                            
                        </div>        
                    )
                })}
            </div>
        </div>
    );
};

export default Saldos;
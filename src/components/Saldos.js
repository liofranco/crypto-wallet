import React from 'react';

const Saldos = ({saldo, cotizaciones}) => {

    return (
        <>
        <h3>Mis saldos</h3>
        <div className="flex-center saldos-container">
            {saldo.map( currency => {
                let cotizacion = cotizaciones.filter( curr => curr.id === currency.id)
                return(
                    <div key={currency.name} className="saldo-container">
                        <div className="currency-container">
                            <img src={currency.img} alt="" className="coin-img" />
                            <h3>{currency.name}</h3>
                        </div>
                        <div className="balance-container">
                            {currency.balance > 0 ? 
                                <p>{currency.balance.toFixed(currency.decimals)} {currency.currency}</p> : 
                                <p>0 {currency.currency}</p>
                            }
                            {currency.id !== 'ars' ?
                                <p>{(currency.balance*cotizacion[0].bid).toFixed(2)} ARS</p> : null }
                        </div>
                        
                    </div>        
                )
            })}
        </div>
        </>
    );
};

export default Saldos;
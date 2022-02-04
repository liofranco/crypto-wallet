import React from 'react';

const Saldos = ({saldo}) => {

    return (
        <div className="flex-center saldos-container">
            {saldo.map( currency => {
                return(
                    <div key={currency.name} className="saldo-container">
                        <div className="currency-container">
                            <img src={currency.img} alt="" className="coin-img" />
                            <h3>{currency.name}</h3>
                        </div>
                        <p>{currency.balance} {currency.currency}</p>
                    </div>        
                )
            })}
        </div>
    );
};

export default Saldos;
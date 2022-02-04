import React from 'react';
import { Link } from 'react-router-dom'

const Deposito = ({saldo}) => {

    return (
        <div className="deposito-container section-container">
            <h2 className="deposito-title section-title">¿ Que queres depositar ?</h2>
            <div className="flex-center saldos-container">
                {saldo.map(currency => {
                    return(
                        <Link key={currency.id} to={`/deposito/${currency.id}`} className="saldo-container">
                            <div className="currency-container">
                                <img src={currency.img} alt="" className="coin-img" />
                                <h3>{currency.name}</h3>
                            </div>
                            <p>{currency.balance} {currency.currency}</p>
                        </Link>    
                    )
                })}
            </div>
        </div>
    );
};

export default Deposito;
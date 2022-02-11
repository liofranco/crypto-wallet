import React from 'react';
import { Link } from 'react-router-dom';

const Retiro = ({saldo}) => {

    return (
        <div className="retiro-container section-container">
            <h2 className="retiro-title section-title">¿ Que queres retirar ?</h2>
            <div className="flex-center saldos-container">
                {saldo.map(currency => {
                    return(
                        <Link key={currency.id} to={`/retiro/${currency.id}`} className="saldo-container">
                            <div className="currency-container">
                                <img src={currency.img} alt="" className="coin-img" />
                                <h3>{currency.name}</h3>
                            </div>
                            <p>{currency.balance.toFixed(currency.decimals)} {currency.currency}</p>
                        </Link>    
                    )
                })}
            </div>
        </div>
    );
};

export default Retiro;
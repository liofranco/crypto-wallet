import React, { useContext } from 'react';
import { SaldoContext } from '../context/SaldoContext';
import style from '../styles/cotizaciones.module.css';
import { Link } from 'react-router-dom';

const Cotizaciones = () => {

    const {cotizaciones} = useContext(SaldoContext)
    const coins = cotizaciones.filter( curr => curr.id !== 'ars')
    console.log(coins)

    return (
        <div className="section-container">
            <h2 className="section-title">Cotizaciones</h2>
            <div className={style.container}>
                {coins.length > 0 && (
                    coins.map((coin) => {
                        let usd = coins[3].bid
                        return (
                            <Link to={`/saldos/${coin.id}`} className={style.coin} key={coin.id}>
                                <img src={coin.img} alt="" className="coin-img" />
                                <div className={style.coin_info}>
                                    <p>{coin.name}</p>
                                    <p>{coin.currency}</p>
                                </div>
                                <div className={style.price}>
                                    <p>{(coin.bid/usd).toFixed(2)} USD</p>
                                    <p>{coin.bid.toFixed(2)} ARS</p>
                                </div>
                            </Link>
                        )
                    })
                )}
            </div>
        </div>
    );
};

export default Cotizaciones;
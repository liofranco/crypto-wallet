import React from 'react';
import { Link } from 'react-router-dom'

const Deposito = ({saldo}) => {

    const {ars, btc, eth, dai, usdt} = saldo

    return (
        <div className="deposito-container section-container">
            <h2 className="deposito-title section-title">¿ Que queres depositar ?</h2>
            <div className="flex-center saldos-container">
                <Link to="/deposito/ars" className="saldo-container">
                    <img src="https://icongr.am/fontawesome/dollar.svg?size=148&color=currentColor" alt="" className="coin-img" />
                    <h3>Pesos</h3>
                    <p>{ars} ARS</p>
                </Link>
                <Link to="/deposito/btc" className="saldo-container">
                    <img src="img/btc.png" alt="" className="coin-img"/>
                    <h3>Bitcoin</h3>
                    <p>{btc} BTC</p>
                </Link>
                <Link to="/deposito/eth" className="saldo-container">
                    <img src="img/eth.png" alt="" className="coin-img"/>
                    <h3>Ethereum</h3>
                    <p>{eth} ETH</p>
                </Link>
                <Link to="/deposito/dai" className="saldo-container">
                    <img src="img/dai.png" alt="" className="coin-img"/>
                    <h3>DAI</h3>
                    <p>{dai} DAI</p>
                </Link>
                <Link to="/deposito/usdt" className="saldo-container">
                    <img src="img/usdt.png" alt="" className="coin-img"/>
                    <h3>Tether</h3>
                    <p>{usdt} USDT</p>
                </Link>
            </div>
        </div>
    );
};

export default Deposito;
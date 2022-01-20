import React from 'react';
import { Link } from 'react-router-dom';

const Retiro = ({saldo}) => {

    const {ars, btc, eth, dai, usdt} = saldo

    return (
        <div className="retiro-container section-container">
            <h2 className="retiro-title section-title">¿ Que queres retirar ?</h2>
            <div className="flex-center saldos-container">
                <Link to="/retiro/ars" className="saldo-container">
                    <img src="https://icongr.am/fontawesome/dollar.svg?size=148&color=currentColor" alt="" className="coin-img" />
                    <h3>Pesos</h3>
                    <p>{ars} ARS</p>
                </Link>
                <Link to="/retiro/btc" className="saldo-container">
                    <img src="img/btc.png" alt="" className="coin-img"/>
                    <h3>Bitcoin</h3>
                    <p>{btc} BTC</p>
                </Link>
                <Link to="/retiro/eth" className="saldo-container">
                    <img src="img/eth.png" alt="" className="coin-img"/>
                    <h3>Ethereum</h3>
                    <p>{eth} ETH</p>
                </Link>
                <Link to="/retiro/dai" className="saldo-container">
                    <img src="img/dai.png" alt="" className="coin-img"/>
                    <h3>DAI</h3>
                    <p>{dai} DAI</p>
                </Link>
                <Link to="/retiro/usdt" className="saldo-container">
                    <img src="img/usdt.png" alt="" className="coin-img"/>
                    <h3>Tether</h3>
                    <p>{usdt} USDT</p>
                </Link>
            </div>
        </div>
    );
};

export default Retiro;
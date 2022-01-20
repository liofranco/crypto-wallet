import React from 'react';

const Saldos = ({saldo}) => {

    const {ars, btc, eth, dai, usdt} = saldo

    return (
        <div className="flex-center saldos-container">
            <div className="saldo-container">
                <img src="https://icongr.am/fontawesome/dollar.svg?size=148&color=currentColor" alt="" className="coin-img" />
                <h3>Pesos</h3>
                <p>{ars} ARS</p>
            </div>
            <div className="saldo-container">
                <img src="img/btc.png" alt="" className="coin-img"/>
                <h3>Bitcoin</h3>
                <p>{btc} BTC</p>
            </div>
            <div className="saldo-container">
                <img src="img/eth.png" alt="" className="coin-img"/>
                <h3>Ethereum</h3>
                <p>{eth} ETH</p>
            </div>
            <div className="saldo-container">
                <img src="img/dai.png" alt="" className="coin-img"/>
                <h3>DAI</h3>
                <p>{dai} DAI</p>
            </div>
            <div className="saldo-container">
                <img src="img/usdt.png" alt="" className="coin-img"/>
                <h3>Tether</h3>
                <p>{usdt} USDT</p>
            </div>
        </div>
    );
};

export default Saldos;
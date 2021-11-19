import React from 'react';

const Saldos = () => {
    return (
        <div className="flex-center saldos-container">
            <div className="saldo-container">
                <img src="https://icongr.am/fontawesome/dollar.svg?size=148&color=currentColor" alt="" className="coin-img" />
                <h3>Pesos</h3>
                <p>0,00 AR$</p>
            </div>
            <div className="saldo-container">
                <img src="img/btc.png" alt="" className="coin-img"/>
                <h3>Bitcoin</h3>
                <p>0,00 BTC</p>
            </div>
            <div className="saldo-container">
                <img src="img/eth.png" alt="" className="coin-img"/>
                <h3>Ethereum</h3>
                <p>0,00 ETH</p>
            </div>
            <div className="saldo-container">
                <img src="img/dai.png" alt="" className="coin-img"/>
                <h3>DAI</h3>
                <p>0,00 DAI</p>
            </div>
            <div className="saldo-container">
                <img src="img/bnb.png" alt="" className="coin-img"/>
                <h3>Binance Coin</h3>
                <p>0,00 BNB</p>
            </div>
        </div>
    );
};

export default Saldos;
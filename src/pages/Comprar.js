import React from 'react';

const Comprar = () => {
    return (
        <div className="comprar-container section-container">
            <h2 className="comprar-title section-title">¿ Que queres comprar ?</h2>
            <div className="flex-center saldos-container">
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
                    <img src="img/usdt.png" alt="" className="coin-img"/>
                    <h3>Tether</h3>
                    <p>0,00 USDT</p>
                </div>
            </div>
        </div>
    );
};

export default Comprar;
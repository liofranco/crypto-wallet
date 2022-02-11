import React from 'react';

const Header = ({saldoTotal, ocultar, setOcultar}) => {

    

    const ocultarSaldo = () => {
        if(ocultar){
            setOcultar(false)
        } else setOcultar(true)
    }

    return (
        <div className="header-container flex-center">
            <div className="flex-center header">
                <p>Saldo total</p>
                <div className="saldo">
                    <p>{!ocultar ? saldoTotal : '****'} ARS</p>
                    <img onClick={ocultarSaldo} src="https://icongr.am/material/eye.svg?size=30&color=614ad9" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;
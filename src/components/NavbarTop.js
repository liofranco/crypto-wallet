import React from 'react';

const NavbarTop = ({setDepositoStyle, setRetiroStyle}) => {

    const clickDeposito = () => {
        setDepositoStyle({
            display: 'flex'
        })
    }

    const clickEnviar = () => {
        setDepositoStyle({
            display: 'flex'
        })
    }

    const clickRetiro = () => {
        setRetiroStyle({
            display: 'flex'
        })
    }

    return (
        <nav className="flex-center navbar-top-container">
            <ul className="flex-center navbar-top">
                <li onClick={clickEnviar}>
                    <div className="prestamos-icon icon-navtop flex-center">
                        <img src="https://icongr.am/material/swap-horizontal.svg?size=128&color=614ad9" alt=""/>
                    </div>
                    <h3>Transferir</h3>
                    
                </li>
                <li onClick={clickDeposito}>
                    <div className="prestamos-icon icon-navtop flex-center">
                        <img src="https://icongr.am/material/arrow-down.svg?size=128&color=614ad9" alt=""/>
                    </div>
                    <h3>Depositar</h3>
                    
                </li>
                <li onClick={clickRetiro}>
                    <div className="prestamos-icon icon-navtop flex-center">
                        <img src="https://icongr.am/material/arrow-up.svg?size=128&color=614ad9" alt=""/>
                    </div>
                    <h3>Retirar</h3>                    
                </li>
            </ul>
        </nav>
    );
};

export default NavbarTop;
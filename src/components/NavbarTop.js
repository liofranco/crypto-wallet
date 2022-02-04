import React from 'react';
import { Link } from 'react-router-dom'

const NavbarTop = () => {

    return (
        <nav className="flex-center navbar-top-container">
            <ul className="flex-center navbar-top">
                <Link to="/deposito" className="link-navbar-top">
                    <div className="icon-navtop flex-center">
                        <img src="https://icongr.am/material/arrow-down.svg?size=128&color=614ad9" alt=""/>
                    </div>
                    <h3>Depositar</h3>                    
                </Link>
                <Link to="/convertir" className="link-navbar-top">
                    <div className="icon-navtop flex-center">
                        <img src="https://icongr.am/material/swap-horizontal.svg?size=128&color=614ad9" alt=""/>
                    </div>
                    <h3>Cambiar</h3>    
                </Link>
                <Link to="/retiro" className="link-navbar-top">
                    <div className="icon-navtop flex-center">
                        <img src="https://icongr.am/material/arrow-up.svg?size=128&color=614ad9" alt=""/>
                    </div>
                    <h3>Retirar</h3>                    
                </Link>
            </ul>
        </nav>
    );
};

export default NavbarTop;
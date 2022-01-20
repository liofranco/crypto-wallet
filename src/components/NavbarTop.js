import React from 'react';
import { Link } from 'react-router-dom'

const NavbarTop = () => {

    return (
        <nav className="flex-center navbar-top-container">
            <ul className="flex-center navbar-top">
                <Link to="/comprar" className="link-navbar-top">
                    <div className="icon-navtop flex-center">
                        <img src="https://icongr.am/clarity/plus.svg?size=148&color=614ad9" alt=""/>
                    </div>
                    <h3>Comprar</h3>
                    
                </Link>
                <Link to="/vender" className="link-navbar-top">
                    <div className="icon-navtop flex-center">
                        <img src="https://icongr.am/clarity/minus.svg?size=148&color=614ad9" alt=""/>
                    </div>
                    <h3>Vender</h3>
                    
                </Link>
                <Link to="/deposito" className="link-navbar-top">
                    <div className="icon-navtop flex-center">
                        <img src="https://icongr.am/material/arrow-down.svg?size=128&color=614ad9" alt=""/>
                    </div>
                    <h3>Depositar</h3>
                    
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
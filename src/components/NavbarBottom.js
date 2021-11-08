import React from 'react';

const NavbarBottom = () => {
    return (
        <nav className="navbar-bottom-container flex-center">
            <ul className="flex-center navbar-bottom">
                <li className="flex-center page-active">
                    <img src="img/icons/inicio.png" alt="" className="bottom-icons" />
                    <p>Inicio</p>
                </li>
                <li className="flex-center">
                    <img src="img/icons/tarjetas.png" alt="" className="bottom-icons" />
                    <p>Tarjetas</p>
                </li>
                <li className="flex-center">
                    <img src="img/icons/transferencias.png" alt="" className="bottom-icons" />
                    <p>Transferir</p>
                </li>
                <li className="flex-center">
                    <img src="img/icons/analisis.png" alt="" className="bottom-icons" />
                    <p>Analisis</p>
                </li>
                <li className="flex-center">
                    <img src="img/icons/servicios.png" alt="" className="bottom-icons" />
                    <p>Servicios</p>
                </li>
            </ul>
        </nav>
    );
};

export default NavbarBottom;
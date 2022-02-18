import React from 'react';

const Sidebar = () => {
    return (
        <aside>
            <div className="sidebar">
                <div className="user-info">
                    <img src="https://icongr.am/material/account-circle.svg?size=30&color=000000" alt="" />
                    <h4>Nombre</h4>
                </div>
                <ul className='sidebar-nav'>
                    <li>Inicio</li>
                    <li>Depositar</li>
                    <li>Cambiar</li>
                    <li>Retirar</li>
                    <li>Movimientos</li>
                </ul>
                <p>Salir</p>
            </div>
        </aside>
    );
};

export default Sidebar;
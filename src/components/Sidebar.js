import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { MenuContext } from '../context/MenuContext';

const Sidebar = ({userStorage, setUserStorage}) => {

    const {menu, setMenu} = useContext(MenuContext)

    const handleMenu = () => {
        if(menu){
            setMenu(false)
        } else setMenu(true)
    }

    const logOutUser = () => {
        setUserStorage('')
    }
    

    return (
        <aside>
            <div className={`sidebar ${menu ? 'sidebar-visible' : ''}`}>
                <div className="user-info">
                    <img src="https://icongr.am/material/account-circle.svg?size=35&color=222222" alt="" />
                    <h4>Hola <span>{userStorage}</span></h4>
                </div>
                <ul className='sidebar-nav'>
                    <li>
                        <NavLink onClick={handleMenu} className='sidebar-link' to='/'>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleMenu} className='sidebar-link' to='/deposito'>Depositar</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleMenu} className='sidebar-link' to='/retiro'>Retirar</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleMenu} className='sidebar-link' to='/convertir'>Cambiar</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleMenu} className='sidebar-link' to='/movimientos'>Movimientos</NavLink>
                    </li>
                </ul>
                <p onClick={logOutUser} className='sidebar-link'>Salir</p>
            </div>
        </aside>
    );
};

export default Sidebar;
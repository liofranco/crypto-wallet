import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { MenuContext } from '../context/MenuContext';
import { SaldoContext } from '../context/SaldoContext';
import style from '../styles/sidebar.module.css'

const Sidebar = ({userStorage, setUserStorage}) => {

    const {menu, setMenu} = useContext(MenuContext)
    const {setMovimientosArray, saldo, setSaldo, setSaldoTotal} = useContext(SaldoContext)

    const handleMenu = () => {
        if(menu){
            setMenu(false)
        } else setMenu(true)
    }

    const logOutUser = () => {
        setUserStorage('')
        setMovimientosArray([])
        setSaldoTotal(0)
        saldo.forEach( curr => {
            curr.balance = 0
        })
        setSaldo(saldo)
    }
    

    return (
        <aside>
            <div className={`${style.sidebar} ${menu ? style.visible : ''}`}>
                <div className={style.user_info}>
                    <img src="https://icongr.am/material/account-circle.svg?size=35&color=222222" alt="" />
                    <h4>Hola <span>{userStorage}</span></h4>
                </div>
                <ul>
                    <li>
                        <NavLink onClick={handleMenu} className={style.link} to='/'>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleMenu} className={style.link} to='/deposito'>Depositar</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleMenu} className={style.link} to='/retiro'>Retirar</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleMenu} className={style.link} to='/convertir'>Cambiar</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleMenu} className={style.link} to='/movimientos'>Movimientos</NavLink>
                    </li>
                </ul>
                <p onClick={logOutUser} className={style.link}>Salir</p>
            </div>
        </aside>
    );
};

export default Sidebar;
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { MenuContext } from '../context/MenuContext';
import { SaldoContext } from '../context/SaldoContext';
import { AiOutlineHome, AiOutlineHistory } from 'react-icons/ai';
import { BsBoxArrowInDown, BsBoxArrowUp, BsArrowLeftRight, BsBoxArrowLeft } from 'react-icons/bs';
import { BiLineChart } from 'react-icons/bi';
import style from '../styles/sidebar.module.css';

const Sidebar = ({userStorage, setUserStorage}) => {

    const {menu, setMenu} = useContext(MenuContext)
    const {setMovimientosArray, saldo, setSaldo, setSaldoTotal, setOcultar} = useContext(SaldoContext)

    const handleMenu = () => {
        if(menu){
            setMenu(false)
        } else setMenu(true)
    }

    const logOutUser = () => {
        setUserStorage('')
        setMovimientosArray([])
        setSaldoTotal(0)
        setOcultar(false)
        saldo.forEach( curr => {
            curr.balance = 0
        })
        setSaldo(saldo)
        handleMenu()
    }

    return (
        <aside>
            <div className={`${style.sidebar} ${menu ? style.visible : ''}`}>
                <div className={style.user_info}>
                    <img src="https://icongr.am/material/account-circle.svg?size=35&color=222222" alt="" />
                    <h4>Hola, <span>{userStorage}</span> 👋</h4>
                </div>
                <ul>
                    <li>
                        <NavLink onClick={handleMenu} className={({ isActive }) =>
                            isActive ? `${style.link_active} ${style.link}` : style.link}
                            to='/'>
                            <AiOutlineHome className={style.icon} />
                            <p>Inicio</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleMenu} className={({ isActive }) =>
                            isActive ? `${style.link_active} ${style.link}` : style.link}
                            to='/deposito'>
                            <BsBoxArrowInDown className={style.icon} />
                            <p>Depositar</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleMenu} className={({ isActive }) =>
                            isActive ? `${style.link_active} ${style.link}` : style.link}
                            to='/retiro'>
                            <BsBoxArrowUp className={style.icon} />
                            <p>Retirar</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleMenu} className={({ isActive }) =>
                            isActive ? `${style.link_active} ${style.link}` : style.link}
                            to='/convertir'>
                            <BsArrowLeftRight className={style.icon} />
                            <p>Cambiar</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleMenu} className={({ isActive }) =>
                            isActive ? `${style.link_active} ${style.link}` : style.link}
                            to='/cotizaciones'>
                            <BiLineChart className={style.icon} />
                            <p>Cotizaciones</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleMenu} className={({ isActive }) =>
                            isActive ? `${style.link_active} ${style.link}` : style.link}
                            to='/movimientos'>
                            <AiOutlineHistory className={style.icon} />
                            <p>Movimientos</p>
                        </NavLink>
                    </li>
                </ul>
                <div onClick={logOutUser} className={style.link}>
                    <BsBoxArrowLeft className={style.icon} />
                    <p>Salir</p>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
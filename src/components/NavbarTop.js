import React, { useContext} from 'react';
import { SaldoContext } from '../context/SaldoContext';
import { Link } from 'react-router-dom';
import style from '../styles/navbarTop.module.css'


const NavbarTop = ({currency}) => {

    const {setSwap1, setSwap2} = useContext(SaldoContext)

    const setSwap = () => {
        if(currency){
            if(currency[0].id !== 'ars'){
                setSwap1(currency[0].id)
                setSwap2('ars')
            }
        } else {
            setSwap1('ars')
            setSwap2('btc')
        }
    }

    return (
        <nav className={style.navbar_top_container}>
            <ul className={style.navbar_top}>
                <Link to={currency ? `/deposito/${currency[0].id}` : `/deposito`} className={style.link_navbar_top}>
                    <img className={style.icon_navtop} src="https://icongr.am/material/arrow-down.svg?size=128&color=999999" alt=""/>
                    <h3>Depositar</h3>                    
                </Link>
                <Link to="/convertir" className={style.link_navbar_top} onClick={setSwap}>
                    <img className={style.icon_navtop} src="https://icongr.am/material/swap-horizontal.svg?size=128&color=999999" alt=""/>
                    <h3>Cambiar</h3>    
                </Link>
                <Link to={currency ? `/retiro/${currency[0].id}`: `/retiro`} className={style.link_navbar_top}>
                    <img className={style.icon_navtop} src="https://icongr.am/material/arrow-up.svg?size=128&color=999999" alt=""/>
                    <h3>Retirar</h3>                    
                </Link>
            </ul>
        </nav>
    );
};

export default NavbarTop;
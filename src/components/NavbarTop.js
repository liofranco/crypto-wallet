import React, { useContext} from 'react';
import { SaldoContext } from '../context/SaldoContext';
import { Link } from 'react-router-dom'

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
        <nav className="flex-center navbar-top-container">
            <ul className="flex-center navbar-top">
                <Link to={currency ? `/deposito/${currency[0].id}` : `/deposito`} className="link-navbar-top">
                    <div className="icon-navtop flex-center">
                        <img src="https://icongr.am/material/arrow-down.svg?size=128&color=614ad9" alt=""/>
                    </div>
                    <h3>Depositar</h3>                    
                </Link>
                <Link to="/convertir" className="link-navbar-top" onClick={setSwap}>
                    <div className="icon-navtop flex-center">
                        <img src="https://icongr.am/material/swap-horizontal.svg?size=128&color=614ad9" alt=""/>
                    </div>
                    <h3>Cambiar</h3>    
                </Link>
                <Link to={currency ? `/retiro/${currency[0].id}`: `/retiro`} className="link-navbar-top">
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
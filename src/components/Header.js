import React, { useContext} from 'react';
import { SaldoContext } from '../context/SaldoContext';

const Header = () => {

    const {saldoTotal, ocultar, setOcultar, cotizaciones} = useContext(SaldoContext)

    const ocultarSaldo = () => {
        if(ocultar){
            setOcultar(false)
        } else setOcultar(true)
    }

    return (
        <div className="header-container flex-center">
            <div className="flex-center header">
                <p>Saldo total</p>
                {cotizaciones.length > 0 ? 
                    <div className="saldo">
                    <p>{!ocultar ? saldoTotal : '****'} ARS</p>
                    <img onClick={ocultarSaldo} src="https://icongr.am/material/eye.svg?size=25&color=614ad9" alt="" />
                    </div> : <p>...</p>    
                }
                
            </div>
        </div>
    );
};

export default Header;
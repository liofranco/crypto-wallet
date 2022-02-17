import React, { useContext} from 'react';
import { SaldoContext } from '../context/SaldoContext';
import Saldo from './Saldo';

const Saldos = () => {

    const {saldo, cotizaciones} = useContext(SaldoContext)

    return (
        <div className='mis-saldos'>
            <h3>Mis saldos</h3>
            {cotizaciones.length > 0 ?
                <div className="flex-center saldos-container">
                    {saldo.map( currency => {
                        let cotizacion = cotizaciones.filter( curr => curr.id === currency.id)
                        return(
                            <Saldo key={currency.id} currency={currency} cotizacion={cotizacion} route={'saldos'} />       
                        )
                    })}
                </div> : <p>Cargando...</p> }
        </div>
    );
};

export default Saldos;
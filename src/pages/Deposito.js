import React, { useContext} from 'react';
import { SaldoContext } from '../context/SaldoContext';
import Saldo from '../components/Saldo';

const Deposito = () => {

    const {saldo, cotizaciones} = useContext(SaldoContext)

    return (
        <div className="retiro-container section-container">
            <h2 className="retiro-title section-title">¿ Que queres depositar ?</h2>
            {cotizaciones.length > 0 ?
                <div className="flex-center saldos-container">
                    {saldo.map( currency => {
                        let cotizacion = cotizaciones.filter( curr => curr.id === currency.id)
                        return(
                            <Saldo key={currency.id} currency={currency} cotizacion={cotizacion} route={'deposito'} />       
                        )
                    })}
                </div> : <p>Cargando...</p> }
        </div>
    );
};

export default Deposito;
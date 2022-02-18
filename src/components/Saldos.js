import React, { useContext} from 'react';
import { SaldoContext } from '../context/SaldoContext';
import Saldo from './Saldo';
import Skeleton from './Skeleton';

const Saldos = () => {

    const {saldo, cotizaciones} = useContext(SaldoContext)

    return (
        <div className='mis-saldos'>
            <h3>Mis saldos</h3>
            <div className="flex-center saldos-container">
                    {saldo.map( currency => {
                        if(cotizaciones.length > 0){
                            let cotizacion = cotizaciones.filter( curr => curr.id === currency.id)
                            return(
                                <Saldo key={currency.id} currency={currency} cotizacion={cotizacion} route={'saldos'} />       
                            )
                        } else {
                            return (<Skeleton key={currency.id} />)
                        }
                    })}
            </div>
        </div>
    );
};

export default Saldos;
import React, { useContext} from 'react';
import { SaldoContext } from '../context/SaldoContext';
import Movimiento from './Movimiento';
import style from '../styles/movimientos.module.css'

const Movimientos = () => {

    const {movimientosArray} = useContext(SaldoContext)

    return (
        <div className={style.section}>
            <h3>Movimientos</h3>
            {movimientosArray.length > 0 ? <div className={style.container}>
            {movimientosArray.map( (movimiento, i) => {
                return (
                    <Movimiento movimiento={movimiento} key={i}/>
                )
            })}
            </div> : 
                <div className={style.container}>
                    <p>No hay movimientos</p>    
                </div>}
            
        </div>
    );
};

export default Movimientos;
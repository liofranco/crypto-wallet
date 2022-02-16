import React, { useContext} from 'react';
import { SaldoContext } from '../context/SaldoContext';
import Movimiento from './Movimiento';

const Movimientos = () => {

    const {movimientosArray} = useContext(SaldoContext)

    return (
        <div className="flex-center movimientos-section">
            <h3 className='movimientos-title'>Movimientos</h3>
            {movimientosArray.length > 0 ? <div className="movimientos-container flex-center">
            {movimientosArray.map( (movimiento, i) => {
                return (
                    <Movimiento movimiento={movimiento} key={i}/>
                )
            })}
            </div> : 
                <div className="movimientos-container flex-center">
                    <p>No hay movimientos</p>    
                </div>}
            
        </div>
    );
};

export default Movimientos;
import React from 'react';
import Movimiento from './Movimiento';

const Movimientos = ({movimientosArray}) => {

    return (
        <div className="flex-center movimientos-section">
            <h3>Movimientos</h3>
            <div className="movimientos-container flex-center">
            {movimientosArray.map( (movimiento, i) => {
                return (
                    <Movimiento movimiento={movimiento} key={i}/>
                )
            })}
            </div>
        </div>
    );
};

export default Movimientos;
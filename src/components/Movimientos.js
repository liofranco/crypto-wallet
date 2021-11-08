import React from 'react';
import Movimiento from './Movimiento';

const Movimientos = ({setMovimientosArray, movimientosArray}) => {

    return (
        <div className="flex-center movimiento-container">
            {movimientosArray.map( (movimiento, i) => {
                return (
                    <Movimiento movimiento={movimiento} key={i}/>
                )
            })}
        </div>
    );
};

export default Movimientos;
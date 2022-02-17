import React, { useState } from 'react';
import ModalMovimiento from './ModalMovimiento';

const Movimiento = ({movimiento}) => {

    const [movimientoDetalles, setMovimientosDetalles] = useState(false)

    const handleMovimiento = () => {
        setMovimientosDetalles(true)
    }

    return (
        <>
        <div onClick={handleMovimiento} className="movimiento">
            <div className="movimiento-info flex-center">
                <img src={movimiento.img} className="movimiento-img" alt=""/>
                <div className="movimiento-detalles">
                    <h3 className="movimiento-nombre">{movimiento.nombre}</h3>
                    <p className="movimiento-date"></p>
                </div>
            </div>
            <div className="movimiento-saldo-info">
                <p className={`movimiento-saldo ${movimiento.style}`}>{movimiento.saldo}</p>
                {movimiento.cambio ? <p className='movimiento-cambio'>{movimiento.cambio}</p> : null}
            </div>
        </div>
        {movimientoDetalles ?
            <ModalMovimiento 
                movimiento={movimiento}
                movimientoDetalles={movimientoDetalles}
                setMovimientosDetalles={setMovimientosDetalles}
            />
             : null}
        </>
    );
};

export default Movimiento;
import React, { useState } from 'react';

const Movimiento = ({movimiento}) => {

    const [movimientoDetalles, setMovimientosDetalles] = useState(false)

    const { day, month, year, hour, minutes } = movimiento.date
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
            <div className='mov-detalles'>
                <h4>{movimiento.nombre}</h4>
                <h2>{movimiento.saldo}</h2>
                <h4>{movimiento.cambio || null}</h4>
                <p>Estado: Aprobado</p>
                <p>Fecha: {day}/{month}/{year} - {hour}:{minutes}</p>
                <p>{movimiento.compra}</p>
            </div> : null}
        </>
    );
};

export default Movimiento;
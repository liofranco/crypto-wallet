import React, { useState } from 'react';

const Movimiento = ({movimiento}) => {

    const [movimientoDetalles, setMovimientosDetalles] = useState(false)

    const { day, month, year, hour, minutes } = movimiento.date
    const handleMovimiento = () => {
        setMovimientosDetalles(true)
    }

    const closeModal = () => {
        setMovimientosDetalles(false)
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
            <div className="modal-container">
                <div className={`mov-detalles ${movimientoDetalles ? `visible` : ''}`}>
                    <button className='close-modal' onClick={closeModal}>X</button>
                    <h4 className='mov-name'>{movimiento.nombre}</h4>
                    <h2 className={`mov-saldo ${movimiento.style}`}>{movimiento.saldo}</h2>
                    <h4>{movimiento.cambio || null}</h4>
                    <div className="mov-info">
                        <p>Estado</p>
                        <p className='entrada-saldo'>Aprobado</p>
                    </div>
                    <div className="mov-info">
                        <p>Fecha</p>
                        <p>{day}/{month}/{year} - {hour}:{minutes}</p>
                    </div>
                </div>
            </div>
             : null}
        </>
    );
};

export default Movimiento;
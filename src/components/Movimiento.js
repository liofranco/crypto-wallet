import React from 'react';

const Movimiento = ({movimiento}) => {

/*     const { dia, mes, year } = movimiento.date */

    return (
        <div className="movimiento">
            <div className="movimiento-info flex-center">
                <img src={movimiento.img} className="movimiento-img" alt=""/>
                <div className="movimiento-detalles">
                    <h3 className="movimiento-nombre">{movimiento.nombre}</h3>
                    <p className="movimiento-date"></p>
                </div>
            </div>
            <p className={`movimiento-saldo ${movimiento.style}`}>{movimiento.saldo}</p>
        </div>
    );
};

export default Movimiento;
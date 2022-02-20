import React, { useState } from 'react';
import style from '../styles/movimientos.module.css'
import ModalMovimiento from './ModalMovimiento';

const Movimiento = ({movimiento}) => {

    const [movimientoDetalles, setMovimientosDetalles] = useState(false)

    const handleMovimiento = () => {
        setMovimientosDetalles(true)
    }

    return (
        <>
        <div onClick={handleMovimiento} className={style.movimiento}>
            <div className={style.info}>
                <img src={movimiento.img} className={style.img} alt=""/>
                <h4 className={style.nombre}>{movimiento.nombre}</h4>
            </div>
            <div className={style.saldo_info}>
                <p className={`${style.saldo} ${movimiento.style}`}>{movimiento.saldo}</p>
                {movimiento.cambio ? <p className={style.cambio}>{movimiento.cambio}</p> : null}
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
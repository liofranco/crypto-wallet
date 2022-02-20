import React from "react";
import style from '../styles/movimientos.module.css'

const ModalMovimiento = ({movimiento, setMovimientosDetalles, movimientoDetalles}) => {

    const { day, month, year, hour, minutes } = movimiento.date

    const closeModal = () => {
        setMovimientosDetalles(false)
    }

  return (
    <div className={style.modal_container}>
      <div className={`${style.modal_detalles} ${movimientoDetalles ? `visible` : ""}`}>
        <button className={style.close_modal} onClick={closeModal}>
          X
        </button>
        <h4 className={style.modal_name}>{movimiento.nombre}</h4>
        <h2 className={`${style.modal_saldo} ${movimiento.style}`}>{movimiento.saldo}</h2>
        <h4>{movimiento.cambio || null}</h4>
        <div className={style.modal_info}>
          <p>Estado</p>
          <p className='entrada_saldo'>Aprobado</p>
        </div>
        <div className={style.mov_info}>
          <p>Fecha</p>
          <p>
            {day}/{month}/{year} - {hour}:{minutes}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalMovimiento;

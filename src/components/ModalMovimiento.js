import React from "react";

const ModalMovimiento = ({movimiento, setMovimientosDetalles, movimientoDetalles}) => {

    const { day, month, year, hour, minutes } = movimiento.date

    const closeModal = () => {
        setMovimientosDetalles(false)
    }

  return (
    <div className="modal-container">
      <div className={`mov-detalles ${movimientoDetalles ? `visible` : ""}`}>
        <button className="close-modal" onClick={closeModal}>
          X
        </button>
        <h4 className="mov-name">{movimiento.nombre}</h4>
        <h2 className={`mov-saldo ${movimiento.style}`}>{movimiento.saldo}</h2>
        <h4>{movimiento.cambio || null}</h4>
        <div className="mov-info">
          <p>Estado</p>
          <p className="entrada-saldo">Aprobado</p>
        </div>
        <div className="mov-info">
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

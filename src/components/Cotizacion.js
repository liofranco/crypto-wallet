import React from "react";
import style from '../styles/cotizacion.module.css'

const Cotizacion = ({cotizacion}) => {
  return (
    <div className={style.container}>
      <div className={style.cotizacion}>
        <p>Compra</p>
        <p>{cotizacion[0].ask.toFixed(2)} ARS</p>
      </div>
      <div className={style.cotizacion}>
        <p>Venta</p>
        <p>{cotizacion[0].bid.toFixed(2)} ARS</p>
      </div>
    </div>
  );
};

export default Cotizacion;

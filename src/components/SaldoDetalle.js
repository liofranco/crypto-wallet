import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { SaldoContext } from "../context/SaldoContext";
import NavbarTop from "./NavbarTop";
import style from '../styles/saldoDetalle.module.css'
import Cotizacion from "./Cotizacion";

const SaldoDetalle = () => {
    const {saldo, cotizaciones} = useContext(SaldoContext)
    const { saldoId } = useParams();
    const currency = saldo.filter((curr) => curr.id === saldoId);
    const cotizacion = cotizaciones.filter((curr) => curr.id === saldoId);

    return (
        <div className={style.page}>
          <div className={style.currency_container}>
            <img src={currency[0].img} alt="" className="coin-img" />
            <p>{currency[0].name}</p>
          </div>
          <div className={style.balance_detalles}>
            {currency[0].balance > 0 ?
                <p>{currency[0].balance.toFixed(currency[0].decimals)} {currency[0].currency}</p> : 
                <p>0 {currency[0].currency}</p> }
            {currency[0].id !== "ars" ?
                <p className="balance-ars">
                  {(currency[0].balance * cotizacion[0].bid).toFixed(2)} ARS
                </p> : null
            }
    
          </div>
          <NavbarTop currency={currency}/>
          {currency[0].id !== "ars" ?
                <Cotizacion cotizacion={cotizacion} /> : null
          }  
        </div>
      );
};

export default SaldoDetalle;
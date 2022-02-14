import React from "react";
import { useParams } from "react-router-dom";
import NavbarTop from "./NavbarTop";

export default function Saldo({ saldo, cotizaciones, swap1, swap2, setSwap1, setSwap2 }) {
  const { saldoId } = useParams();
  const currency = saldo.filter((curr) => curr.id === saldoId);
  const cotizacion = cotizaciones.filter((curr) => curr.id === saldoId);

  return (
    <div className="saldo-page">
      <div className="currency-container">
        <img src={currency[0].img} alt="" className="coin-img" />
        <p>{currency[0].name}</p>
      </div>
      <div className="balance-detalles">
        {currency[0].balance > 0 ?
            <p>{currency[0].balance.toFixed(currency[0].decimals)} {currency[0].currency}</p> : 
            <p>0 {currency[0].currency}</p> }
        {currency[0].id !== "ars" ?
            <p className="balance-ars">
              {(currency[0].balance * cotizacion[0].bid).toFixed(2)} ARS
            </p> : null
        }

      </div>
      <NavbarTop 
        currency={currency}
        setSwap1={setSwap1}
        setSwap2={setSwap2}
        />
        {currency[0].id !== "ars" ?
            <div className="cotizacion-container">
              <div className="cotizacion">
                <p>Compra</p>
                <p>{cotizacion[0].ask.toFixed(2)} ARS</p>
              </div>
              <div className="cotizacion">
                <p>Venta</p>
                <p>{cotizacion[0].bid.toFixed(2)} ARS</p>
              </div>
            </div> : null
        }  
    </div>
  );
}

import React, { useContext } from "react";
import { SaldoContext } from "../context/SaldoContext";
import { Link } from 'react-router-dom';
import style from '../styles/saldos.module.css'

export default function Saldo({currency, cotizacion, route}) {
  const { ocultar } = useContext(SaldoContext);

  return (
    <Link
      to={`/${route}/${currency.id}`}
      className={style.saldo_container}
    >
      <div className={style.currency_container}>
        <img src={currency.img} alt="" className="coin-img" />
        <p>{currency.name}</p>
      </div>
      <div className={style.balance_container}>
        {!ocultar ? (
          currency.balance > 0 ? (
            <p>
              {currency.balance.toFixed(currency.decimals)} {currency.currency}
            </p>
          ) : (
            <p>0 {currency.currency}</p>
          )
        ) : (
          <p>**** {currency.currency}</p>
        )}
        {currency.id !== "ars" ? (
          !ocultar ? (
            <p className="balance-ars">
              {(currency.balance * cotizacion[0].bid).toFixed(2)} ARS
            </p>
          ) : (
            <p className="balance-ars">**** ARS</p>
          )
        ) : null}
      </div>
    </Link>
  );
}

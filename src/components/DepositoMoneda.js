import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom'

const DepositoMoneda = ({saldo, setSaldo, setMovimientosArray, movimientosArray}) => {

    const [deposito, setDeposito] = useState(0)

    const {currency} = useParams()

    const handleDeposito = e => {
        setDeposito(parseFloat(e.target.value))
    }

    const submitDeposito = e => {
        e.preventDefault()
        setSaldo(prevState => ({
            ...prevState,
            [currency]: saldo[currency] + deposito
        }))

        movimientosArray.unshift({
            nombre: `Deposito`,
            saldo: `+${deposito} ${currency.toUpperCase()}`,
            img: "https://icongr.am/material/arrow-down.svg?size=128&color=614ad9",
            style: "entrada-saldo"
        })

        setMovimientosArray(movimientosArray)
    }

    return (
        <>
            <form className="input-deposito" onSubmit={submitDeposito}>
                <input type="number" step="any" onChange={handleDeposito} />
                <p>{currency}</p>
            </form>
            <Link to="/">
                <h3>Inicio</h3>
            </Link>
        </>
    );
}

export default DepositoMoneda;
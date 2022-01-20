import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom'

const RetiroMoneda = ({saldo, setSaldo}) => {

    const [retiro, setRetiro] = useState(0)

    const {currency} = useParams()

    const handleRetiro = e => {
        setRetiro(parseInt(e.target.value))
    }

    const submitRetiro = e => {
        e.preventDefault()
        setSaldo(prevState => ({
            ...prevState,
            [currency]: saldo[currency] - retiro
        }))
    }

    return (
        <>
            <form className="input-deposito" onSubmit={submitRetiro}>
                <input type="number" onChange={handleRetiro} />
                <p>{currency}</p>
            </form>
            <Link to="/">
                <h3>Inicio</h3>
            </Link>
        </>
    );
};

export default RetiroMoneda;
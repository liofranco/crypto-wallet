import React from 'react';

const Deposito = ({setDeposito, deposito, depositoStyle, setDepositoStyle, setSaldo, saldo, setMovimientosArray, movimientosArray}) => {


    const handleDeposito = e => {
        let input = e.target.value
        setDeposito(parseInt(input))
    }

    const handleDepositoSubmit = e => {
        e.preventDefault()
        let date = new Date()
        let fecha_hora = {
            dia: date.getDate(),
            mes: parseInt(date.getMonth()) + 1,
            year: date.getFullYear(),
            hora: date.getHours(),
            minutos: date.getMinutes()
        }
        setSaldo(parseInt(saldo+deposito))
        if(deposito > 0) {
            movimientosArray.unshift({
                nombre: 'Deposito',
                date: fecha_hora,
                saldo: `+$${deposito}`,
                style: 'entrada-saldo',
                img: "https://icongr.am/material/arrow-down.svg?size=10&color=614ad9"
            })
            setMovimientosArray(movimientosArray)
        }
        setDeposito('')
        setDepositoStyle({
            display: 'none'
        })

    }

    const cancelarDeposito = e => {
        e.preventDefault()
        setDeposito('')
        setDepositoStyle({
            display: 'none'
        })
    }


    return (
        <div className="deposito-container flex-center" style={depositoStyle}>
            <h2>¿Cuánto queres depositar?</h2>

            <form action="" className="form-deposito flex-center" onSubmit={handleDepositoSubmit}>
                <div className="input-container flex-center">
                    <input value={`${deposito}`} type="number" name="deposit" id="deposit" placeholder="$0" className="input-deposito" onChange={handleDeposito} />
                </div>
                <div>
                    <button className="btn btn-cancel" onClick={cancelarDeposito}>Cancelar</button>
                    <input className="btn btn-confirm" type="submit" value="Confirmar" />
                </div>
            </form>
        </div>
    );
};

export default Deposito;
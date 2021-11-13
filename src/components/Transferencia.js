import React from 'react';

const Transferencia = ({saldo, setSaldo, userTransfer, setUserTransfer, setMovimientosArray, movimientosArray, transferenciaStyle, setTranferenciaStyle, retiro, setRetiro}) => {

    const handleUser = e => {
        setUserTransfer(e.target.value)
    }

    const handleTransferencia = e => {
        setRetiro(parseInt(e.target.value))
        /* if(e.target.value > saldo){
            setRetiroError(true)
            seInputError('input-error')
        } else {
            setRetiroError(false)
            seInputError('')
        } */
    }

    const submitTransfer = e => {
        e.preventDefault()
        setSaldo(parseInt(saldo-retiro))
        let date = new Date()
        let fecha_hora = {
            dia: date.getDate(),
            mes: parseInt(date.getMonth()) + 1,
            year: date.getFullYear(),
            hora: date.getHours(),
            minutos: date.getMinutes()
        }
        movimientosArray.unshift({
            nombre: `Enviaste a ${userTransfer}`,
            date: fecha_hora,
            saldo: `-$${retiro}`,
            style: '',
            img: "https://icongr.am/material/arrow-up.svg?size=128&color=614ad9"
        })
        setMovimientosArray(movimientosArray)
        setRetiro('')
    }

    return (
        <div>
            <form className="transferencia-container flex-center" onSubmit={submitTransfer}>
                <label htmlFor="transfer">¿A quien queres enviarle?</label>
                <input name="transfer" id="transfer" type="text" onChange={handleUser} />
                <h2>¿Cuánto queres enviar?</h2>
                <div className="input-container">
                    <input type="number" name="deposit" id="deposit" placeholder="$0" className="input-deposito" onChange={handleTransferencia} />
                </div>
                <div>
                    <div className="btn btn-cancel">Cancelar</div>
                    <input className="btn btn-confirm" type="submit" value="Confirmar" />
                </div>
            </form>
        </div>
    );
};

export default Transferencia;
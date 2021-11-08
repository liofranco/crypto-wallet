import React, {useState} from 'react';

const Retiro = ({setRetiro, retiro, retiroStyle, setRetiroStyle, setSaldo, saldo, setMovimientosArray, movimientosArray}) => {

    const [retiroError, setRetiroError] = useState(false)
    const [inputError, seInputError] = useState('')

    const handleRetiro = e => { 
        setRetiro(parseInt(e.target.value))
        console.log(retiroError)
        if(e.target.value > saldo){
            setRetiroError(true)
            seInputError('input-error')
        } else {
            setRetiroError(false)
            seInputError('')
        }
    }

    const handleRetiroSubmit = e => {
        e.preventDefault()
        if(retiro < saldo){
            let date = new Date()
            let fecha_hora = {
                dia: date.getDate(),
                mes: parseInt(date.getMonth()) + 1,
                year: date.getFullYear(),
                hora: date.getHours(),
                minutos: date.getMinutes()
            }
            setSaldo(parseInt(saldo-retiro))
            if(retiro > 0) {
                movimientosArray.unshift({
                    nombre: 'Retiro',
                    date: fecha_hora,
                    saldo: `-$${retiro}`,
                    style: '',
                    img: "https://icongr.am/material/arrow-up.svg?size=128&color=614ad9"
                })
                setMovimientosArray(movimientosArray)
            }
            setRetiro('')
            setRetiroStyle({
                display: 'none'
            })
        } else {
            setRetiroError(true)
            seInputError('input-error')   
        }


    }

    const cancelarRetiro = e => {
        e.preventDefault()
        setRetiro('')
        setRetiroError(false)
        seInputError('')
        setRetiroStyle({
            display: 'none'
        })
    }

    const SaldoError = () => {
        if(retiroError){
            return <p className="">Saldo insuficiente</p>
        } else return null
    }


    return (
        <div className="retiro-container flex-center" style={retiroStyle}>
            <h2>¿Cuánto queres retirar?</h2>
            <p>Saldo disponible: ${saldo}</p>

            <form action="" className="form-deposito flex-center" onSubmit={handleRetiroSubmit}>
                <div className="input-container flex-center">
                    <input value={retiro} type="number" name="deposit" id="deposit" placeholder="0" className={`input-deposito ${inputError}`} onChange={handleRetiro} />
                </div>
                <SaldoError />
                <div>
                    <button className="btn btn-cancel" onClick={cancelarRetiro}>Cancelar</button>
                    <input className="btn btn-confirm" type="submit" value="Confirmar" />
                </div>
            </form>
        </div>
    );
};

export default Retiro;
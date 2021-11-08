import React from 'react';

const Transferencia = () => {
    return (
        <div>
            <form className="flex-center">
                <label htmlFor="transfer">¿A quien queres enviarle?</label>
                <input name="transfer" id="transfer" type="text" />
                <h2>¿Cuánto queres enviar?</h2>
                <div className="input-container">
                    <input type="number" name="deposit" id="deposit" placeholder="$0" className="input-deposito" />
                </div>
                <div>
                    <button className="btn btn-cancel">Cancelar</button>
                    <input className="btn btn-confirm" type="submit" value="Confirmar" />
                </div>
            </form>
        </div>
    );
};

export default Transferencia;
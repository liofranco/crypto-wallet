import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/modalConfirmacion.module.css'

const ModalConfirmacion = ({operacion, cantidad, currency}) => {

    const [loader, setLoader] = useState(true)

    setTimeout(() => {
        setLoader(false)
    }, 2000);

    return (
        <div className={style.container}>
            <div className={style.success_container}>
                {!loader ? (
                    <>
                    <img className={style.img} src="https://icongr.am/material/check-circle.svg?size=80&color=fcd535" alt="" />
                    <h3>Operación confirmada</h3>
                    <p>Tu {operacion} por {cantidad} {currency.toUpperCase()} fue realizado con exito</p>
                    <Link to="/" className='btn-volver-inicio'>
                        <h3>Volver a inicio</h3>
                    </Link>
                    </>
                ): (
                    <>
                        <ul className='loading-dots success-dots'>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <p>Procesando</p>
                    </> 
                )}
            </div>
        </div>
    );
};

export default ModalConfirmacion;
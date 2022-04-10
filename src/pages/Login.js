import React, { useState } from 'react';
import style from '../styles/login.module.css'

const Login = ({setUserStorage, userStorage}) => {

    const [user, setUser] = useState('')

    const handleInput = e => {
        setUser(e.target.value)
    }

    const submitLogin = e => {
        e.preventDefault()
        setUserStorage(user)
    }

    return (
        <div className={style.page}>
            <h1>CryptoLF</h1>
            <div className={style.login}>
                <h2>Bienvenido</h2>
                <h4>Ingrese su nombre para iniciar sesión</h4>
                <form onSubmit={submitLogin}>
                    <input onChange={handleInput} type="text" name="user" id="user" placeholder='Tu nombre'/>
                    <button className='btn-confirmar' type="submit">Confirmar</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
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
            <div className={style.login}>
                <h1>CryptoLF</h1>
                <h3>Ingresá tu nombre</h3>
                <form onSubmit={submitLogin}>
                    <input onChange={handleInput} type="text" name="user" id="user" placeholder='Tu nombre'/>
                    <button className='btn-confirmar' type="submit">Confirmar</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
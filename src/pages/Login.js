import React, { useState } from 'react';

const Login = ({setUserStorage}) => {

    const [user, setUser] = useState('')

    const handleInput = e => {
        setUser(e.target.value)
    }

    const submitLogin = e => {
        e.preventDefault()
        setUserStorage(user)
    }

    return (
        <div className='login-page'>
            <h1>Bienvenido</h1>
            <h4>Ingrese su nombre para iniciar sesión</h4>
            <form onSubmit={submitLogin}>
                <input onChange={handleInput} type="text" name="user" id="user" placeholder='Tu nombre'/>
                <button className='btn-confirmar' type="submit">Confirmar</button>
            </form>
        </div>
    );
};

export default Login;
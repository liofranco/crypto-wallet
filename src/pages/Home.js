import React, { useState } from 'react';
import Header from '../components/Header';
import Movimientos from '../components/Movimientos';
import NavbarTop from '../components/NavbarTop';
import Saldos from '../components/Saldos';

const Home = ({saldo, movimientosArray}) => {

    return (
        <>
            <Header />
            <NavbarTop />
            <Saldos saldo={saldo} />
            <Movimientos 
                movimientosArray={movimientosArray}
            />
        </>
    );
};

export default Home;
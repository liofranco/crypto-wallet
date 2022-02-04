import React from 'react';
import Header from '../components/Header';
import Movimientos from '../components/Movimientos';
import NavbarTop from '../components/NavbarTop';
import Saldos from '../components/Saldos';

const Home = ({saldo, movimientosArray, saldoTotal}) => {

    return (
        <>
            <Header saldoTotal={saldoTotal} />
            <NavbarTop />
            <Saldos saldo={saldo} />
            <Movimientos 
                movimientosArray={movimientosArray}
            />
        </>
    );
};

export default Home;
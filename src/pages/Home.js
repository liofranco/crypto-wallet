import React from 'react';
import BalanceTotal from '../components/BalanceTotal';
import Movimientos from '../components/Movimientos';
import NavbarTop from '../components/NavbarTop';
import Saldos from '../components/Saldos';

const Home = () => {

    return (
        <>
            <BalanceTotal />
            <NavbarTop />
            <Saldos />
            <Movimientos />
        </>
    );
};

export default Home;
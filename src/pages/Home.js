import React from 'react';
import Header from '../components/Header';
import Movimientos from '../components/Movimientos';
import NavbarTop from '../components/NavbarTop';
import Saldos from '../components/Saldos';

const Home = () => {

    return (
        <>
            <Header />
            <NavbarTop />
            <Saldos />
            <Movimientos />
        </>
    );
};

export default Home;
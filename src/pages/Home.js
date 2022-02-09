import React from 'react';
import Header from '../components/Header';
import Movimientos from '../components/Movimientos';
import NavbarTop from '../components/NavbarTop';
import Saldos from '../components/Saldos';

const Home = ({saldo, movimientosArray, saldoTotal, cotizaciones}) => {

    return (
        <>
            <Header saldoTotal={saldoTotal} />
            <NavbarTop />
            <Saldos saldo={saldo} cotizaciones={cotizaciones} />
            {/* {cotizaciones.map( curr => {
                return (
                    <p key={`${curr.id}-price`}>{curr.id}: {curr.bid.toFixed(2)} ARS</p>
                )
            })} */}
            <Movimientos 
                movimientosArray={movimientosArray}
            />
        </>
    );
};

export default Home;
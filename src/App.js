import './App.css';
import NavbarBottom from './components/NavbarBottom';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Comprar from './pages/Comprar';
import Deposito from './pages/Deposito';
import Home from './pages/Home';
import Retiro from './pages/Retiro';
import Vender from './pages/Vender';
import DepositoMoneda from './components/DepositoMoneda';
import RetiroMoneda from './components/RetiroMoneda';

function App() {

  const [saldo, setSaldo] = useState({
    ars: 0,
    btc: 0,
    eth: 0,
    dai: 0,
    usdt:0
  })

  const [movimientosArray, setMovimientosArray] = useState([])

  return (
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home saldo={saldo} movimientosArray={movimientosArray} />} />
            <Route exact path="/comprar" element={<Comprar />} />
            <Route exact path="/vender" element={<Vender />} />
            <Route exact path="/deposito" element={<Deposito saldo={saldo} />} /> 
            <Route exact path="/deposito/:currency" element={
              <DepositoMoneda 
                saldo={saldo}
                setSaldo={setSaldo} 
                setMovimientosArray={setMovimientosArray}
                movimientosArray={movimientosArray} />} /> 
            <Route exact path="/retiro/:currency" element={<RetiroMoneda saldo={saldo}  setSaldo={setSaldo} />} />            
            <Route exact path="/retiro" element={<Retiro saldo={saldo} />} />
          </Routes>
        </Router>
      </>
  );
}

export default App;

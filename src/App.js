import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Deposito from './pages/Deposito';
import Home from './pages/Home';
import Retiro from './pages/Retiro';
import Convertir from './pages/Convertir';
import DepositoMoneda from './components/DepositoMoneda';
import RetiroMoneda from './components/RetiroMoneda';
import Saldo from './components/Saldo';
import Saldos from './components/Saldos';
import SaldoProvider from './context/SaldoContext';

function App() {

  return (
      <SaldoProvider>
          <main className='main-container'>
            <Router>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/convertir" element={<Convertir />}
                />
                <Route exact path="/deposito" element={<Deposito />} /> 
                <Route exact path="/deposito/:currencyId" element={<DepositoMoneda />} />
                <Route exact path="/retiro/:currencyId" element={<RetiroMoneda />} />            
                <Route exact path="/retiro" element={<Retiro />} />
                <Route exact path="/saldos" element={<Saldos />
                } />
                <Route exact path="/saldos/:saldoId" element={<Saldo />} />
              </Routes>
            </Router>
          </main>
      </SaldoProvider>
  );
}

export default App;

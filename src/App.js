import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Deposito from './pages/Deposito';
import Home from './pages/Home';
import Retiro from './pages/Retiro';
import Convertir from './pages/Convertir';
import DepositoMoneda from './components/DepositoMoneda';
import RetiroMoneda from './components/RetiroMoneda';
import Saldos from './components/Saldos';
import SaldoProvider from './context/SaldoContext';
import SaldoDetalle from './components/SaldoDetalle';

function App() {

  return (
      <SaldoProvider>
          <main className='main-container'>
            <div className="main">
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
                  <Route exact path="/saldos/:saldoId" element={<SaldoDetalle />} />
                </Routes>
              </Router>
            </div>
          </main>
      </SaldoProvider>
  );
}

export default App;

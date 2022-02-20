import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Deposito from './pages/Deposito';
import Home from './pages/Home';
import Retiro from './pages/Retiro';
import Cambiar from './pages/Cambiar';
import DepositoMoneda from './components/DepositoMoneda';
import RetiroMoneda from './components/RetiroMoneda';
import Saldos from './components/Saldos';
import SaldoProvider from './context/SaldoContext';
import SaldoDetalle from './components/SaldoDetalle';
import Sidebar from './components/Sidebar';
import HeaderMobile from './components/HeaderMobile';
import MenuProvider from './context/MenuContext';
import Movimientos from './components/Movimientos';
import Login from './pages/Login';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {

  const [userStorage, setUserStorage] = useLocalStorage('username', '')

  return (
      <MenuProvider>
      <SaldoProvider>
          <main className='main-container'>
            {userStorage === '' ? (
              <Login setUserStorage={setUserStorage} />
            ) :
            (
              <Router>
              <Sidebar userStorage={userStorage} setUserStorage={setUserStorage} />
                <div className="main">
                  <HeaderMobile />
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/convertir" element={<Cambiar />}
                  />
                  <Route exact path="/deposito" element={<Deposito />} /> 
                  <Route exact path="/deposito/:currencyId" element={<DepositoMoneda />} />
                  <Route exact path="/retiro/:currencyId" element={<RetiroMoneda />} />            
                  <Route exact path="/retiro" element={<Retiro />} />
                  <Route exact path="/saldos" element={<Saldos />
                  } />
                  <Route exact path="/saldos/:saldoId" element={<SaldoDetalle />} />
                  <Route exact path="/movimientos" element={<Movimientos />}/>
                </Routes>
                </div>
              </Router>
            ) 
            }
          </main>
      </SaldoProvider>
      </MenuProvider>
  );
}

export default App;

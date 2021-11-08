import './App.css';
import Movimientos from './components/Movimientos';
import Header from './components/Header';
import NavbarTop from './components/NavbarTop';
import NavbarBottom from './components/NavbarBottom';
import Deposito from './components/Deposito';
import { useState } from 'react';
import Retiro from './components/Retiro';
import Transferencia from './components/Transferencia';

function App() {

  const [deposito, setDeposito] = useState('')
  const [retiro, setRetiro] = useState('')
  const [saldo, setSaldo] = useState(0)
  const [depositoStyle, setDepositoStyle] = useState({})
  const [retiroStyle, setRetiroStyle] = useState({})
  const [transferenciaStyle, setTransferenciaStyle] = useState({})
  const [movimientosArray, setMovimientosArray] = useState([])


  return (
      <>
        <Header
          saldo={saldo}
        />
        <NavbarTop
          setDepositoStyle={setDepositoStyle}
          setRetiroStyle={setRetiroStyle}
        />
        <Movimientos
          movimientosArray={movimientosArray}
          setMovimientosArray={setMovimientosArray}
        />
        {/* <NavbarBottom /> */}
        <Deposito
          deposito={deposito}
          setDeposito={setDeposito}
          setDepositoStyle={setDepositoStyle}
          depositoStyle={depositoStyle}
          setSaldo={setSaldo}
          saldo={saldo}
          setMovimientosArray={setMovimientosArray}
          movimientosArray={movimientosArray}
        />
        <Retiro
          retiro={retiro}
          setRetiro={setRetiro}
          setRetiroStyle={setRetiroStyle}
          retiroStyle={retiroStyle}
          setSaldo={setSaldo}
          saldo={saldo}
          setMovimientosArray={setMovimientosArray}
          movimientosArray={movimientosArray}
        />
        {/* <Transferencia
          transferenciaStyle={transferenciaStyle}
          setTransferenciaStyle={setTransferenciaStyle}
        /> */}
      </>
  );
}

export default App;

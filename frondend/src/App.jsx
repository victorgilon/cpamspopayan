import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import CrearCuenta from './pages/CrearCuenta';
import Inicio from './pages/Inicio';
import './App.css';
import Talleres from './pages/Talleres';
import Perfil from './pages/Perfil'

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/crear-cuenta' element={<CrearCuenta />} />
        <Route path='/Inicio' element={<Inicio />} />
        <Route path='/Talleres' element={<Talleres/>}/>
        <Route path='/Perfil' element={<Perfil/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



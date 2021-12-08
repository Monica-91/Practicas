import logo from './faviconn.jpeg';
import image from './header-bg.jpg';
import React, { Fragment } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch,Routes, Route, Link} from "react-router-dom";
import { UsuarioseList } from './pages/UsuarioseList';

import { Header } from './pages/Home';
import { Navbar } from './pages/CrearUsuarioInterno';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Registro_adulto } from './pages/Registro_adulto';
import { Registro_nino } from './pages/Registro_nino';
import { Login } from './pages/Login';
import { VistaExterno } from './pages/VistaExterno';


function App() {
  return (
    <div className="App">
      <Router>
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/registro-adulto" element={<Registro_adulto/>}/>
          <Route path="/registro-nino" element={<Registro_nino/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/externo" element={<VistaExterno/>}/>
          <Route path="/lista" element={<UsuarioseList />}/>
        </Routes> 
      
      </Router>
    </div>
  );
}
export default App;
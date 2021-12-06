import logo from './faviconn.jpeg';
import image from './header-bg.jpg';
import React, { Fragment } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch,Routes, Route, Link} from "react-router-dom";

import { Header } from './pages/Header';
import { Navbar } from './pages/CrearUsuarioInterno';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Works } from './pages/Works';
import { Registro_adulto } from './pages/Registro_adulto';
import { Registro_niño } from './pages/Registro_niño';

function App() {
  return (
    <div className="App">
      <Router>
      
        <Routes>
          <Route path="/" element={<Header/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/works" element={<Works/>}/>
          <Route path="/registro-adulto" element={<Registro_adulto/>}/>
          <Route path="/registro-niño" element={<Registro_niño/>}/>
        </Routes> 
      
      </Router>
    </div>
  );
}
export default App;
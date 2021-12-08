import logo from "./faviconn.jpeg";
import image from "./header-bg.jpg";
import React, { Fragment } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { UsuarioseList } from "./pages/UsuarioseList";

import { Header } from "./pages/Home";
import { Navbar } from "./pages/CrearUsuarioInterno";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

import { Registro_adulto } from "./pages/Registro_adulto";
import { Registro_nino } from "./pages/Registro_nino";
import { Login } from "./pages/Login";
import { VistaExterno } from "./pages/VistaExterno";
import { ActualizarDatos } from "./pages/ActualizarDatos";
import { IngresarEsquema } from "./pages/IngresarEsquema";
import { AgendarCitas } from "./pages/AgendarCitas";

import { VistaInterno } from "./pages/Vistas_interno/VistaInterno";
import { Inventario_vacuna } from "./pages/Vistas_interno/Inventario_vacuna";
import { ModificarStock } from "./pages/Vistas_interno/ModificarStock";
import { BuscarUsuario } from "./pages/Vistas_interno/BuscarUsuario";
import { EsquemaNino } from "./pages/Vistas_interno/EsquemaNino";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro-adulto" element={<Registro_adulto />} />
          <Route path="/registro-nino" element={<Registro_nino />} />
          <Route path="/login" element={<Login />} />
          <Route path="/externo" element={<VistaExterno />} />
          <Route path="/actualizar-datos" element={<ActualizarDatos />} />
          <Route path="/ingresar-esquema" element={<IngresarEsquema />} />
          <Route path="/citas-agendadas" element={<AgendarCitas />} />

          <Route path="/interno" element={<VistaInterno />} />
          <Route path="/inventario_vacuna" element={<Inventario_vacuna />} />

          <Route path="/modificar_stock" element={<ModificarStock />} />

          <Route path="/buscarUsuario" element={<BuscarUsuario />} />
          <Route path="/EsquemaNino" element={<EsquemaNino />} />

          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/externo" element={<VistaExterno />} />
          <Route path="/lista" element={<UsuarioseList />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;

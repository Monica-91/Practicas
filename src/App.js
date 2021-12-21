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
import { UsuarioseList } from "./pages/Vistas_externo/UsuarioseList";
import { UsuariosiList } from "./pages/Vista_Administrador/UsuariosiList";
import { Header } from "./pages/Home";
import {
  CrearUsuarioInterno,
  Navbar,
} from "./pages/Vista_Administrador/CrearUsuarioInterno";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

import { Registro_adulto } from "./pages/Vistas_externo/Registro_adulto";
import { Registro_nino } from "./pages/Vistas_externo/Registro_nino";
import { Login } from "./pages/Login";
import { VistaExterno } from "./pages/Vistas_externo/VistaExterno";
import { ActualizarDatos } from "./pages/Vistas_externo/ActualizarDatos";
import { IngresarEsquema } from "./pages/Vistas_externo/IngresarEsquema";
import { AgendarCitas } from "./pages/Vistas_externo/AgendarCitas";

import { VistaInterno } from "./pages/Vistas_interno/VistaInterno";
import { Inventario_vacuna } from "./pages/Vistas_interno/Inventario_vacuna";
import { ModificarStock } from "./pages/Vistas_interno/ModificarStock";
import { BuscarUsuario } from "./pages/Vistas_interno/BuscarUsuario";
import { EsquemaNino } from "./pages/Vistas_interno/EsquemaNino";
import { VistaAdministrador } from "./pages/Vista_Administrador/VistaAdministrador";
import { BuscarUsuarioInterno } from "./pages/Vista_Administrador/BuscarUsuarioInterno";
import { Inventario_vacunaAdministrador } from "./pages/Vista_Administrador/Inventario_vacunaAdministrador";
import { UsuariosiListInterno } from "./pages/Vistas_interno/UsuariosiListInterno";
import { VacunaList } from "./pages/Vistas_interno/VacunaList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Rutas de Vista Externo */}
          <Route path="/registro-adulto" element={<Registro_adulto />} />
          <Route path="/registro-nino" element={<Registro_nino />} />
          <Route path="/login" element={<Login />} />
          <Route path="/externo" element={<VistaExterno />} />
          <Route path="/actualizar-datos" element={<ActualizarDatos />} />
          <Route path="/ingresar-esquema" element={<IngresarEsquema />} />
          <Route path="/agendar-citas" element={<AgendarCitas />} />

          {/* Rutas de Vista Interno */}
          <Route path="/interno" element={<VistaInterno />} />
          <Route path="/inventario_vacuna" element={<Inventario_vacuna />} />
          <Route path="/vacunaList" element={<VacunaList />} />
          <Route path="/modificar_stock" element={<ModificarStock />} />
          <Route path="/buscarUsuario" element={<BuscarUsuario />} />
          <Route path="/EsquemaNino" element={<EsquemaNino />} />
          <Route path="/listaInterno" element={<UsuariosiListInterno />} />

          {/* Rutas vista Administrador */}
          <Route path="/administrador" element={<VistaAdministrador />} />
          <Route
            path="/crearUsuarioInterno"
            element={<CrearUsuarioInterno />}
          />
          <Route
            path="/buscarUsuarioInterno"
            element={<BuscarUsuarioInterno />}
          />
          <Route
            path="/inventario_vacunaAdministrador"
            element={<Inventario_vacunaAdministrador />}
          />

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/lista" element={<UsuarioseList />} />
          <Route path="/listai" element={<UsuariosiList />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;

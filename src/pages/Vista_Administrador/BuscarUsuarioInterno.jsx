import React, { Fragment, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Formulario,
  Label,
  ContenedorTerminos,
  ContenedorBotonCentrado,
  Boton,
  MensajeExito,
  MensajeError,
  Titulo,
} from "../../elementos/Formularios";
import Input from "../Input";
import { Footer } from "../../Componentes/Footer";
import { HeadAdministrador } from "../../Componentes/HeadAdministrador";
import "./interno.css";

export const BuscarUsuarioInterno = () => {
  var usuarioRef = useRef();
  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [apellido, cambiarApellido] = useState({ campo: "", valido: null });
  const [password, cambiarPassword] = useState({ campo: "", valido: null });
  const [correo, cambiarCorreo] = useState({ campo: "", valido: null });
  const [telefono, cambiarTelefono] = useState({ campo: "", valido: null });
  const [direccion, cambiarDireccion] = useState({ campo: "", valido: null });
  const [fechan, cambiarFechan] = useState({ campo: "", valido: null });
  const [genero, cambiarGenero] = useState({ campo: "", valido: null });

  const expresiones = {
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    fechan: /^\d{1,2}\/\d{1,2}\/\d{2,4}$/, // Letras y espacios, pueden llevar acentos.
    genero: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    documento: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    direccion: /^[a-zA-Z0-9_.+-]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  };

  function consultar(e) {
    e.preventDefault();
    const doc = usuarioRef.current.value;
    fetch(`http://localhost:9000/api/users/${doc}`)
      .then((res) => res.json())
      .then((res) => {
        cambiarNombre({ campo: res.nom, valido: null });
        cambiarApellido({ campo: res.apell, valido: null });
        cambiarCorreo({ campo: res.corr, valido: null });
        cambiarTelefono({ campo: res.cel, valido: null });
        cambiarDireccion({ campo: res.dir, valido: null });
        cambiarFechan({ campo: res.fen, valido: null });
        cambiarGenero({ campo: res.gen, valido: null });
      });
  }

  return (
    <Fragment>
      <HeadAdministrador />
      <div id="headerwrap_r_a">
        <div className="container">
          <div className="row centered">
            <div className="col-lg-6">
              <label for="">Buscar Usuario Interno</label>
              <br />
              <br />
              <br />
              <form action="">
                <label htmlFor="">Numero de Documento</label>
                <input type="number" ref={usuarioRef} />
                <button onClick={consultar}>Buscar</button>
              </form>
              <main>
                <Formulario action="">
                  <Input
                    estado={nombre}
                    cambiarEstado={cambiarNombre}
                    tipo="text"
                    label="Nombre"
                    placeholder=""
                    name="nombre"
                    leyendaError="El nombre solo puede contener letras y espacios."
                    expresionRegular={expresiones.nombre}
                  />
                  <Input
                    estado={apellido}
                    cambiarEstado={cambiarApellido}
                    tipo="text"
                    label="Apellido"
                    placeholder=""
                    name="apellido"
                    leyendaError="El nombre solo puede contener letras y espacios."
                    expresionRegular={expresiones.apellido}
                  />

                  <Input
                    estado={correo}
                    cambiarEstado={cambiarCorreo}
                    tipo="email"
                    label="Correo Electrónico"
                    placeholder="john@correo.com"
                    name="correo"
                    leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
                    expresionRegular={expresiones.correo}
                  />
                  <Input
                    estado={telefono}
                    cambiarEstado={cambiarTelefono}
                    tipo="text"
                    label="Teléfono"
                    placeholder=""
                    name="telefono"
                    leyendaError="El telefono solo puede contener numeros y el maximo son 14 dígitos."
                    expresionRegular={expresiones.telefono}
                  />
                  <Input
                    estado={direccion}
                    cambiarEstado={cambiarDireccion}
                    tipo="text"
                    label="Direccion"
                    placeholder=""
                    name="direccion"
                  />
                  <Input
                    estado={fechan}
                    cambiarEstado={cambiarFechan}
                    tipo="text"
                    label="Fecha de nacimiento"
                    placeholder=""
                    name="fechan"
                    leyendaError="El valor debe corresponder a una fecha."
                    expresionRegular={expresiones.fechan}
                  />
                  <Input
                    estado={genero}
                    cambiarEstado={cambiarGenero}
                    tipo="text"
                    label="Genero"
                    placeholder=""
                    name="genero"
                    leyendaError="El genero solo puede contener letras y espacios."
                    expresionRegular={expresiones.genero}
                  />
                </Formulario>
              </main>
            </div>
          </div>
          {/* <!-- row --> */}
        </div>
        {/* <!-- container --> */}
      </div>
      {/*  <!-- headerwrap --> */}

      {/* {/*  <!-- FOOTER --> */}
      <Footer />
    </Fragment>
  );
};

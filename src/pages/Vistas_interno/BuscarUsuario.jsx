import React, { Fragment, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../Componentes/Footer";
import { HeadUsuarioInterno } from "../../Componentes/HeadUsuarioInterno";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import "./interno.css";

export const BuscarUsuario = () => {
  var usuarioRef = useRef();
  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [apellido, cambiarApellido] = useState({ campo: "", valido: null });
  const [correo, cambiarCorreo] = useState({ campo: "", valido: null });
  const [telefono, cambiarTelefono] = useState({ campo: "", valido: null });
  const [direccion, cambiarDireccion] = useState({ campo: "", valido: null });
  const [fechan, cambiarFechan] = useState({ campo: "", valido: null });
  const [genero, cambiarGenero] = useState({ campo: "", valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);
  const [formularioEncontrado, cambiarFormularioEncontrado] = useState({
    campo: "",
    valido: null,
  });
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
        try {
          cambiarNombre({ campo: res.nom, valido: "true" });
          cambiarApellido({ campo: res.apell, valido: "true" });
          cambiarCorreo({ campo: res.corr, valido: "true" });
          cambiarTelefono({ campo: res.cel, valido: "true" });
          cambiarDireccion({ campo: res.dir, valido: "true" });
          cambiarFechan({ campo: res.fen, valido: "true" });
          cambiarGenero({ campo: res.gen, valido: "true" });
          cambiarFormularioEncontrado({ campo: "true" });
        } catch (error) {
          cambiarNombre({ campo: "" });
          cambiarApellido({ campo: "" });
          cambiarCorreo({ campo: "" });
          cambiarTelefono({ campo: "" });
          cambiarDireccion({ campo: "" });
          cambiarFechan({ campo: "" });
          cambiarGenero({ campo: "" });
          cambiarFormularioEncontrado({ campo: "false" });
        }
      });
  }
  function update() {
    const doc = usuarioRef.current.value;
    if (
      nombre.valido === "true" &&
      apellido.valido === "true" &&
      fechan.valido === "true" &&
      genero.valido === "true" &&
      correo.valido === "true" &&
      telefono.valido === "true"
    ) {
      //Captura los datos de las cajas de texto
      const nom = nombre.campo;
      const apell = apellido.campo;
      const fen = fechan.campo;
      const gen = genero.campo;
      const dir = direccion.campo;
      const corr = correo.campo;
      const cel = telefono.campo;
      const token = localStorage.getItem("token");
      fetch(`http://localhost:9000/api/users/${doc}`, {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        method: "PUT",
        body: JSON.stringify({
          nom,
          apell,
          corr,
          cel,
          dir,
          fen,
          gen,
        }),
      })
        .then((res) => res.json()) // Obtener los datos
        .then((res) => {
          // Mostrar mensaje error :(

          //Crea un objeto JSON, con los datos capturados
          // const usui = { nom, apell,fen, gen, doc, dir,corr, cel, cla};
          //Obtiene los usuarios Externos guardados en Local Storage
          //listadoUsuarioi = JSON.parse(localStorage.getItem("listaUsuariosi")) || [];
          //Se adiciona el nuevo usuarios Externo al array
          //listadoUsuarioi.push(usui);
          //Se guarda en local storage
          //localStorage.setItem("listaUsuariosi", JSON.stringify(listadoUsuarioi));
          // Borrar los campos
          cambiarFormularioValido(true);
          cambiarNombre({ campo: "", valido: null });
          cambiarApellido({ campo: "", valido: null });
          cambiarCorreo({ campo: "", valido: null });
          cambiarTelefono({ campo: "", valido: null });
          cambiarDireccion({ campo: "", valido: null });
          cambiarFechan({ campo: "", valido: null });
          cambiarGenero({ campo: "", valido: null });
        });

      // ...
    } else {
      cambiarFormularioValido(false);
    }
  }

  function borrar() {
    const doc = usuarioRef.current.value;
    if (
      nombre.valido === "true" &&
      apellido.valido === "true" &&
      fechan.valido === "true" &&
      genero.valido === "true" &&
      correo.valido === "true" &&
      telefono.valido === "true"
    ) {
      //Captura los datos de las cajas de texto
      const nom = nombre.campo;
      const apell = apellido.campo;
      const fen = fechan.campo;
      const gen = genero.campo;
      const dir = direccion.campo;
      const corr = correo.campo;
      const cel = telefono.campo;
      const token = localStorage.getItem("token");
      fetch(`http://localhost:9000/api/users/${doc}`, {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        method: "DELETE",
        body: JSON.stringify({
          nom,
          apell,
          corr,
          cel,
          dir,
          fen,
          gen,
        }),
      })
        .then((res) => res.json()) // Obtener los datos
        .then((res) => {
          // Mostrar mensaje error :(

          //Crea un objeto JSON, con los datos capturados
          // const usui = { nom, apell,fen, gen, doc, dir,corr, cel, cla};
          //Obtiene los usuarios Externos guardados en Local Storage
          //listadoUsuarioi = JSON.parse(localStorage.getItem("listaUsuariosi")) || [];
          //Se adiciona el nuevo usuarios Externo al array
          //listadoUsuarioi.push(usui);
          //Se guarda en local storage
          //localStorage.setItem("listaUsuariosi", JSON.stringify(listadoUsuarioi));
          // Borrar los campos
          cambiarFormularioValido(true);
          cambiarNombre({ campo: "", valido: null });
          cambiarApellido({ campo: "", valido: null });
          cambiarCorreo({ campo: "", valido: null });
          cambiarTelefono({ campo: "", valido: null });
          cambiarDireccion({ campo: "", valido: null });
          cambiarFechan({ campo: "", valido: null });
          cambiarGenero({ campo: "", valido: null });
        });

      // ...
    } else {
      cambiarFormularioValido(false);
    }
  }

  return (
    <Fragment>
      <HeadUsuarioInterno />
      <div id="headerwrap_r_a">
        <div className="container">
          <div className="row centered">
            <div className="col-lg-6">
              <label for="">Buscar Usuario</label>
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

                  {"\n"}
                  <p></p>
                  <Boton type="button" onClick={update}>
                    Editar
                  </Boton>
                  {"\n"}
                  <p></p>
                  <Boton type="button" onClick={borrar}>
                    Borrar
                  </Boton>
                  {"\n"}
                  <p></p>
                  <Link to="/listaInterno">
                    <Boton>Listar</Boton>{" "}
                  </Link>
                  {formularioValido === true && (
                    <MensajeExito>
                      Formulario enviado exitosamente!
                    </MensajeExito>
                  )}
                </Formulario>
              </main>
              <Link to="/EsquemaNino">
                <Boton>Vacunas</Boton>{" "}
              </Link>
              <br />
              <br />
              <br />
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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

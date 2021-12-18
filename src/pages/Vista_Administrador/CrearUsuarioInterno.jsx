import React, { Fragment, useState } from "react";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Input from "../Input";
import { Footer } from "../../Componentes/Footer";
import { HeadAdministrador } from "../../Componentes/HeadAdministrador";
export const CrearUsuarioInterno = () => {
  //formulario
  //Array de Lista de usuarios Externos
  let listadoUsuarioi;

  var host = "http://localhost:9000";

  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [apellido, cambiarApellido] = useState({ campo: "", valido: null });
  const [password, cambiarPassword] = useState({ campo: "", valido: null });
  const [password2, cambiarPassword2] = useState({ campo: "", valido: null });
  const [correo, cambiarCorreo] = useState({ campo: "", valido: null });
  const [telefono, cambiarTelefono] = useState({ campo: "", valido: null });
  const [direccion, cambiarDireccion] = useState({ campo: "", valido: null });
  const [fechan, cambiarFechan] = useState({ campo: "", valido: null });
  const [genero, cambiarGenero] = useState({ campo: "", valido: null });
  const [documento, cambiarDocumento] = useState({ campo: "", valido: null });
  const [terminos, cambiarTerminos] = useState(false);
  const [formularioValido, cambiarFormularioValido] = useState(null);

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

  const validarPassword2 = () => {
    if (password.campo.length > 0) {
      if (password.campo !== password2.campo) {
        cambiarPassword2((prevState) => {
          return { ...prevState, valido: "false" };
        });
      } else {
        cambiarPassword2((prevState) => {
          return { ...prevState, valido: "true" };
        });
      }
    }
  };

  const onChangeTerminos = (e) => {
    cambiarTerminos(e.target.checked);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      nombre.valido === "true" &&
      apellido.valido === "true" &&
      fechan.valido === "true" &&
      genero.valido === "true" &&
      documento.valido === "true" &&
      correo.valido === "true" &&
      telefono.valido === "true" &&
      password.valido === "true" &&
      terminos
    ) {
      //Captura los datos de las cajas de texto
      const nom = nombre.campo;
      const apell = apellido.campo;
      const fen = fechan.campo;
      const gen = genero.campo;
      const doc = documento.campo;
      const dir = direccion.campo;
      const corr = correo.campo;
      const cel = telefono.campo;
      const cla = password.campo;

      fetch(`http://localhost:9000/api/users/`, {
        headers: { "content-type": "application/json" },
        method: "POST",
        body: JSON.stringify({
          nom,
          apell,
          cla,
          corr,
          cel,
          dir,
          fen,
          gen,
          doc,
        }),
      })
        .then((data) => data.json()) // Obtener los datos
        .then((data) => alert(data.msg)) // Mostrar mensaje OK    :)
        .catch((error) => alert(error)); // Mostrar mensaje error :(

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
      cambiarPassword({ campo: "", valido: null });
      cambiarPassword2({ campo: "", valido: null });
      cambiarCorreo({ campo: "", valido: null });
      cambiarTelefono({ campo: "", valido: null });
      cambiarDireccion({ campo: "", valido: null });
      cambiarFechan({ campo: "", valido: null });
      cambiarGenero({ campo: "", valido: null });
      cambiarDocumento({ campo: "", valido: null });

      // ...
    } else {
      cambiarFormularioValido(false);
    }
  };

  function consultar() {
    const nom = nombre.campo;
    fetch(`${host}/api/users/:${nom}`)
      .then((res) => res.json())
      .then((res) => {
        cambiarApellido({ campo: res.apell, valido: null });
        cambiarPassword({ campo: res.cla, valido: null });
        cambiarCorreo({ campo: res.corr, valido: null });
        cambiarTelefono({ campo: res.cel, valido: null });
        cambiarDireccion({ campo: res.dir, valido: null });
        cambiarFechan({ campo: res.fen, valido: null });
        cambiarGenero({ campo: res.gen, valido: null });
        cambiarDocumento({ campo: res.doc, valido: null });
      });
  }

  return (
    <Fragment>
      <HeadAdministrador />
      <div id="headerwrap_r_a">
        <div className="container">
          <div className="row centered">
            <p>
              <h1>
                <b>Crear Usuario Interno</b>
              </h1>
            </p>

            {/*  <!-- Formulario --> */}
            <main>
              <Formulario action="" onSubmit={onSubmit}>
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
                  estado={password}
                  cambiarEstado={cambiarPassword}
                  tipo="password"
                  label="Contraseña"
                  name="password1"
                  leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
                  expresionRegular={expresiones.password}
                />
                <Input
                  estado={password2}
                  cambiarEstado={cambiarPassword2}
                  tipo="password"
                  label="Repetir Contraseña"
                  name="password2"
                  leyendaError="Ambas contraseñas deben ser iguales."
                  funcion={validarPassword2}
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
                <Input
                  estado={documento}
                  cambiarEstado={cambiarDocumento}
                  tipo="text"
                  label="Documento"
                  name="documento"
                  leyendaError="el documento tiene que ser de 4 a 12 dígitos."
                  expresionRegular={expresiones.documento}
                />

                <ContenedorTerminos>
                  <Label>
                    <input
                      type="checkbox"
                      name="terminos"
                      id="terminos"
                      checked={terminos}
                      onChange={onChangeTerminos}
                    />
                    Acepto los Terminos y Condiciones
                  </Label>
                </ContenedorTerminos>
                {formularioValido === false && (
                  <MensajeError>
                    <p>
                      <FontAwesomeIcon icon={faExclamationTriangle} />
                      <b>Error:</b> Por favor rellena el formulario
                      correctamente.
                    </p>
                  </MensajeError>
                )}
                <ContenedorBotonCentrado>
                  <Boton type="submit">Guardar</Boton>
                  <p></p>
                  <Boton type="button" onclick={consultar}>
                    Buscar
                  </Boton>
                  {"\n"}
                  <p></p>
                  <Boton type="button" onclick="editar()">
                    Editar
                  </Boton>
                  {"\n"}
                  <p></p>
                  <Boton type="button" onclick="borrar()">
                    Borrrar
                  </Boton>
                  {"\n"}
                  <p></p>
                  <Link to="/listai">Listar</Link>
                  {formularioValido === true && (
                    <MensajeExito>
                      Formulario enviado exitosamente!
                    </MensajeExito>
                  )}
                </ContenedorBotonCentrado>
              </Formulario>
            </main>
          </div>
        </div>
        {/* <!-- row --> */}
      </div>
      {/* <!-- container --> */}

      <Footer />
    </Fragment>
  );
};

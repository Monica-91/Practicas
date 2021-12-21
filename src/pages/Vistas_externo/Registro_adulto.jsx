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

export const Registro_adulto = () => {
  //formulario
  //Array de Lista de usuarios Externos
  let listadoUsuarioe;
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
  const [rolU, cambiarRolU] = useState({ campo: "", valido: null });

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
      const rol = rolU.campo;

      fetch(`http://localhost:9000/api/usersEX/`, {
        headers: {
          "content-type": "application/json",
        },
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
          rol,
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
      cambiarRolU({ campo: "", valido: null });

      // ...
    } else {
      cambiarFormularioValido(false);
    }
  };

  return (
    <Fragment>
      <nav className="navbar navbar-default">
        <div className="container">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li className="pull-rigth">
              <img
                src="https://www.imbanaco.com/wp-content/themes/imbanaco/assets/img/logo-imbanaco1.svg"
                alt="Logo-Embanaco"
                width="350"
                height="120"
              ></img>
            </li>
            <li className="pull-rigth">
              <img src="./img/fondo.png" alt="" width="700" height="50"></img>
            </li>
            <li className="pull-rigth">
              <img src="./img/fondo.png" alt="" width="50" height="50"></img>
            </li>
            <li className="pull-rigth">
              <img
                src="https://s3-alpha-sig.figma.com/img/f323/cb54/fc0c457aacd809fb5b7bacc2a6a808d0?Expires=1639353600&Signature=g5vLxOSBwHiXfK~K1gYgZ1tmTB5V3bjRoEnKeqMKg1UkhJmKve02oUBnWyOURpQgb1zWgpgpdE0MLJ2hjbNKyha-YcFA3BwhWcRpYKPCby2~GddhtB5DVPeapdQGLAf9NkGA1I-dQHx9BSskryBZjsg4Xx~ubFd7HsDTkQf9rbYrxwnnRPUVs1eZucZpNjy34iNMfnHS04VQWiNa~eUB1k8F5vp9jPr4D0J0UaaOm52wG~SGTI-TfVYTyFziG0QrcmoDE15hUHy~CYwyCO4cCHVOQAjapEea2qRYz~DgiPU4jza6YWrhEeoTHow2EGNe5DWFrpqsgJQFjaF-XKolBw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt=""
                width="140"
                height="125"
              ></img>
            </li>
          </ul>
        </div>
      </nav>

      <div className="navbar navbar-inverse ">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="active">
                <Link to="/">
                  {" "}
                  CANCELAR <br /> REGISTRO{" "}
                </Link>
              </li>
              <li>
                <Link data-toggle="modal" data-target="#myModal" to="#myModal">
                  <i className="fa fa-envelope-o"></i>
                </Link>
              </li>
            </ul>
          </div>
          {/* .nav-collapse --> */}
        </div>
      </div>

      <div id="headerwrap_r_a">
        <div className="container">
          <div className="row centered">
            <p>
              <h1>
                <b>Registro</b>
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
                <Input
                  estado={rolU}
                  cambiarEstado={cambiarRolU}
                  tipo="text"
                  label="rol"
                  name="rol"
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

      {/* {/*  <!-- FOOTER --> */}
      <Footer />
    </Fragment>
  );
};

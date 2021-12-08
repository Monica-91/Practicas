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
  let listadoUsuarioe;

  const [nombre_n, cambiarNombre_n] = useState({ campo: "", valido: null });
  const [apellido_n, cambiarApellido_n] = useState({ campo: "", valido: null });
  const [documento_n, cambiarDocumento_n] = useState({
    campo: "",
    valido: null,
  });
  const [fecha_nac, cambiarFecha_nac] = useState({ campo: "", valido: null });
  const [genero_n, cambiarGenero_n] = useState({ campo: "", valido: null });
  const [tipo_sangre, cambiarTipo_sangre] = useState({
    campo: "",
    valido: null,
  });

  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [apellido, cambiarApellido] = useState({ campo: "", valido: null });
  const [documento, cambiarDocumento] = useState({ campo: "", valido: null });
  const [genero, cambiarGenero] = useState({ campo: "", valido: null });
  const [parentezco, cambiarParentezco] = useState({ campo: "", valido: null });
  const [direccion, cambiarDireccion] = useState({ campo: "", valido: null });
  const [correo, cambiarCorreo] = useState({ campo: "", valido: null });
  const [telefono, cambiarTelefono] = useState({ campo: "", valido: null });
  const [password, cambiarPassword] = useState({ campo: "", valido: null });
  const [password2, cambiarPassword2] = useState({ campo: "", valido: null });
  const [terminos, cambiarTerminos] = useState(false);
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const expresiones = {
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras, numeros, guion y guion_bajo
    apellido_n: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    nombre_n: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos..
    parentezco: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    genero: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    genero_n: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    fecha_nac: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras, numeros, guion y guion_bajo
    tipo_sangre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras, numeros, guion y guion_bajo
    password: /^.{4,12}$/, // 4 a 12 digitos.
    documento: /^.{4,12}$/, // 4 a 12 digitos.
    documento_n: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    direccion: /^[a-zA-ZÀ-ÿ\s0-9_.+-]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    telefono: /^[a-zA-Z0-9_.+-]+$/,
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
      nombre_n.valido === "true" &&
      apellido_n.valido === "true" &&
      documento_n.valido === "true" &&
      fecha_nac.valido === "true" &&
      genero_n.valido === "true" &&
      tipo_sangre.valido === "true" &&
      nombre.valido === "true" &&
      apellido.valido === "true" &&
      documento.valido === "true" &&
      genero.valido === "true" &&
      parentezco.valido === "true" &&
      direccion.valido === "true" &&
      correo.valido === "true" &&
      telefono.valido === "true" &&
      password.valido === "true" &&
      terminos
    ) {
      //Captura los datos de las cajas de texto

      const nom_n = nombre_n.campo;
      const apell_n = apellido_n.campo;
      const doc_n = documento.campo;
      const fec_nac = fecha_nac.campo;
      const gen_n = genero_n.campo;
      const sang = tipo_sangre.campo;

      const nom = nombre.campo;
      const apell = apellido.campo;
      const doc = documento.campo;
      const gen = genero.campo;
      const part = parentezco.campo;
      const dir = direccion.campo;
      const corr = correo.campo;
      const cel = telefono.campo;
      const cla = password.campo;

      //Crea un objeto JSON, con los datos capturados
      const usue = {
        nom_n,
        apell_n,
        doc_n,
        fec_nac,
        gen_n,
        sang,
        nom,
        apell,
        doc,
        gen,
        part,
        dir,
        corr,
        cel,
        cla,
      };
      //Obtiene los usuarios Externos guardados en Local Storage
      listadoUsuarioe =
        JSON.parse(localStorage.getItem("listaUsuariose")) || [];
      //Se adiciona el nuevo usuarios Externo al array
      listadoUsuarioe.push(usue);
      //Se guarda en local storage
      localStorage.setItem("listaUsuariose", JSON.stringify(listadoUsuarioe));
      // Borrar los campos
      cambiarFormularioValido(true);
      cambiarNombre_n({ campo: "", valido: null });
      cambiarApellido_n({ campo: "", valido: null });
      cambiarDocumento_n({ campo: "", valido: null });
      cambiarFecha_nac({ campo: "", valido: null });
      cambiarGenero_n({ campo: "", valido: null });
      cambiarTipo_sangre({ campo: "", valido: null });

      cambiarNombre({ campo: "", valido: null });
      cambiarApellido({ campo: "", valido: null });
      cambiarDocumento({ campo: "", valido: null });
      cambiarGenero({ campo: "", valido: null });
      cambiarParentezco({ campo: "", valido: null });
      cambiarDireccion({ campo: "", valido: null });
      cambiarCorreo({ campo: "", valido: null });
      cambiarTelefono({ campo: "", valido: null });
      cambiarPassword({ campo: "", valido: null });
      cambiarPassword2({ campo: "", valido: null });

      // ...
    } else {
      cambiarFormularioValido(false);
    }
  };

  return (
    <Fragment>
      <HeadAdministrador />
      <div id="headerwrap_r_a">
        <div className="container">
          <div className="row centered">
            <p>
              <h1>
                <b>Datos del Niño</b>
              </h1>
            </p>

            <main>
              <Formulario action="" onSubmit={onSubmit}>
                <Input
                  estado={nombre_n}
                  cambiarEstado={cambiarNombre_n}
                  tipo="text"
                  label="Nombre"
                  placeholder=""
                  name="nombre_n"
                  leyendaError="El nombre solo puede contener letras y espacios."
                  expresionRegular={expresiones.nombre_n}
                />
                <Input
                  estado={apellido_n}
                  cambiarEstado={cambiarApellido_n}
                  tipo="text"
                  label="Apellido"
                  placeholder=""
                  name="apellido_n"
                  leyendaError="El nombre solo puede contener letras y espacios."
                  expresionRegular={expresiones.apellido_n}
                />

                <Input
                  estado={documento_n}
                  cambiarEstado={cambiarDocumento_n}
                  tipo="text"
                  label="Documento"
                  name="documento_n"
                  leyendaError="el documento tiene que ser de 4 a 12 dígitos."
                  expresionRegular={expresiones.documento_n}
                />

                <Input
                  estado={fecha_nac}
                  cambiarEstado={cambiarFecha_nac}
                  tipo="text"
                  label="Fecha Nacimiento"
                  name="fecha_nac"
                  leyendaError="seleccione una fecha del calendario."
                  expresionRegular={expresiones.fecha_nac}
                />

                <Input
                  estado={genero_n}
                  cambiarEstado={cambiarGenero_n}
                  tipo="text"
                  label="Genero"
                  placeholder=""
                  name="genero_n"
                  leyendaError="El genero solo puede contener letras y espacios."
                  expresionRegular={expresiones.genero_n}
                />

                <Input
                  estado={tipo_sangre}
                  cambiarEstado={cambiarTipo_sangre}
                  tipo="text"
                  label="Tipo Sangre"
                  placeholder=""
                  name="tipo_sangre"
                  leyendaError="El tipo de sangre solo puede contener letras y espacios."
                  expresionRegular={expresiones.tipo_sangre}
                />

                <ContenedorTerminos>
                  <Titulo>Datos del Adulto</Titulo>
                </ContenedorTerminos>

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
                  estado={documento}
                  cambiarEstado={cambiarDocumento}
                  tipo="text"
                  label="Documento"
                  name="documento"
                  leyendaError="el documento tiene que ser de 4 a 12 dígitos."
                  expresionRegular={expresiones.documento}
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
                  estado={parentezco}
                  cambiarEstado={cambiarParentezco}
                  tipo="text"
                  label="Parentezco"
                  placeholder=""
                  name="parentezco"
                  leyendaError="El parentezco solo puede contener letras y espacios."
                  expresionRegular={expresiones.parentezco}
                />

                <Input
                  estado={direccion}
                  cambiarEstado={cambiarDireccion}
                  tipo="text"
                  label="Dirección"
                  placeholder=""
                  name="direccion"
                  leyendaError="la direccion solo puede contener letras y espacios."
                  expresionRegular={expresiones.direccion}
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
                  <Boton type="submit">Enviar</Boton>
                  <Link to="/lista">Listar</Link>
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

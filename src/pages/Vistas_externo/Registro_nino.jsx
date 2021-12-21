import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../Componentes/Footer";
import { HeadUsuarioExterno } from "../../Componentes/HeadUsuarioExterno";
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

export const Registro_nino = () => {
  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [apellido, cambiarApellido] = useState({ campo: "", valido: null });
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
    documento: /^.{4,12}$/, // 4 a 12 digitos.
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
      terminos
    ) {
      //Captura los datos de las cajas de texto
      const nom = nombre.campo;
      const apell = apellido.campo;
      const fen = fechan.campo;
      const gen = genero.campo;
      const doc = documento.campo;

      const token = localStorage.getItem("token");
      fetch(`http://localhost:9000/api/users/`, {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: JSON.stringify({
          nom,
          apell,
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
      cambiarFechan({ campo: "", valido: null });
      cambiarGenero({ campo: "", valido: null });
      cambiarDocumento({ campo: "", valido: null });

      // ...
    } else {
      cambiarFormularioValido(false);
    }
  };

  return (
    <Fragment>
      <HeadUsuarioExterno />
      <div id="headerwrap_r_a">
        <div className="container">
          <div className="row centered">
            <div className="col-lg-12">
              <br />
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
                    <Boton type="button">Buscar</Boton>
                    {"\n"}
                    <p></p>
                    <Boton type="button" onClick="editar()">
                      Editar
                    </Boton>
                    {"\n"}
                    <p></p>
                    <Boton type="button" onClick="borrar()">
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
      </div>
      {/*  <!-- headerwrap --> */}

      {/* {/*  <!-- FOOTER --> */}
      <div id="f">
        <div className="container">
          <div className="row centered">
            <Link to="#">
              <i className="fa fa-twitter"></i>
            </Link>
            <Link to="#">
              <i className="fa fa-facebook"></i>
            </Link>
            <Link to="#">
              <i className="fa fa-dribbble"></i>
            </Link>
          </div>
          {/* {/*  <!-- row --> */}
        </div>
        {/* {/*  <!-- container --> */}
      </div>
      {/* {/*  <!-- Footer --> */}

      {/* {/*  <!-- MODAL FOR CONTACT --> */}
      {/* {/*  <!-- Modal --> */}
      <Footer />
    </Fragment>
  );
};

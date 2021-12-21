import React, { Fragment, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Formulario,
  FormularioVacuna,
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import "./interno.css";

export const Inventario_vacunaAdministrador = () => {
  //aqui empieza delete update create and read
  var usuarioRef = useRef();
  let listadoUsuarioi;

  var host = "http://localhost:9000";

  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [codigo, cambiarCodigo] = useState({ campo: "", valido: null });
  const [cantidadMinima, cambiarCantidadMinima] = useState({
    campo: "",
    valido: null,
  });
  const [cantidad, cambiarCantidad] = useState({ campo: "", valido: null });

  const [terminos, cambiarTerminos] = useState(false);
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    codigo: /^.{2,12}$/, // 4 a 12 digitos.
    cantidadMinima: /^.{2,12}$/, // 4 a 12 digitos.
    cantidad: /^.{2,12}$/, // 4 a 12 digitos.
  };
  const onChangeTerminos = (e) => {
    cambiarTerminos(e.target.checked);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      nombre.valido === "true" &&
      codigo.valido === "true" &&
      cantidadMinima.valido === "true" &&
      cantidad.valido === "true" &&
      terminos
    ) {
      //Captura los datos de las cajas de texto
      const nom = nombre.campo;
      const cod = codigo.campo;
      const cantmin = cantidadMinima.campo;
      const cant = cantidad.campo;

      const token = localStorage.getItem("token");
      fetch(`http://localhost:9000/api/vacunas/`, {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: JSON.stringify({
          nom,
          cod,
          cantmin,
          cant,
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
      cambiarCodigo({ campo: "", valido: null });
      cambiarCantidadMinima({ campo: "", valido: null });
      cambiarCantidad({ campo: "", valido: null });

      // ...
    } else {
      cambiarFormularioValido(false);
    }
  };

  function consultar(e) {
    e.preventDefault();
    const cod = usuarioRef.current.value;
    fetch(`http://localhost:9000/api/vacunas/${cod}`)
      .then((res) => res.json())
      .then((res) => {
        try {
          cambiarNombre({ campo: res.nom, valido: "true" });
          cambiarCodigo({ campo: res.cod, valido: "true" });
          cambiarCantidadMinima({ campo: res.cantmin, valido: "true" });
          cambiarCantidad({ campo: res.cant, valido: "true" });
        } catch (error) {
          cambiarNombre({ campo: "" });
          cambiarCodigo({ campo: "" });
          cambiarCantidadMinima({ campo: "" });
          cambiarCantidad({ campo: "" });
        }
      });
  }
  function update() {
    const cod = usuarioRef.current.value;
    if (
      nombre.valido === "true" &&
      codigo.valido === "true" &&
      cantidadMinima.valido === "true" &&
      cantidad.valido === "true"
    ) {
      //Captura los datos de las cajas de texto
      const nom = nombre.campo;
      const cod = codigo.campo;
      const cantmin = cantidadMinima.campo;
      const cant = cantidad.campo;
      const token = localStorage.getItem("token");
      fetch(`http://localhost:9000/api/vacunas/${cod}`, {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        method: "PUT",
        body: JSON.stringify({
          nom,
          cod,
          cantmin,
          cant,
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
          cambiarNombre({ campo: "", valido: "null" });
          cambiarCodigo({ campo: "", valido: "null" });
          cambiarCantidadMinima({ campo: "", valido: "null" });
          cambiarCantidad({ campo: "", valido: "null" });
        });

      // ...
    } else {
      cambiarFormularioValido(false);
    }
  }

  function borrar() {
    const cod = usuarioRef.current.value;
    if (
      nombre.valido === "true" &&
      codigo.valido === "true" &&
      cantidadMinima.valido === "true" &&
      cantidad.valido === "true"
    ) {
      //Captura los datos de las cajas de texto
      const nom = nombre.campo;
      const cod = codigo.campo;
      const cantmin = cantidadMinima.campo;
      const cant = cantidad.campo;
      const token = localStorage.getItem("token");
      fetch(`http://localhost:9000/api/vacunas/${cod}`, {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        method: "DELETE",
        body: JSON.stringify({
          nom,
          cod,
          cantmin,
          cant,
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

          cambiarNombre({ campo: "", valido: "null" });
          cambiarCodigo({ campo: "", valido: "null" });
          cambiarCantidadMinima({ campo: "", valido: "null" });
          cambiarCantidad({ campo: "", valido: "null" });
        });

      // ...
    } else {
      cambiarFormularioValido(false);
    }
  }

  return (
    <Fragment>
      <HeadAdministrador />
      <div id="headerwrap_r_a">
        <div className="container-tabla">
          <div className="row centered">
            <div className="col-lg-7">
              <form action="">
                <label htmlFor="">Numero de Documento</label>
                <input type="number" ref={usuarioRef} />
                <button onClick={consultar}>Buscar</button>
              </form>
              <label for="">Crear Vacunas - Inventario</label>
              <br />
              <br />
              <br />

              <main>
                <FormularioVacuna action="" onSubmit={onSubmit}>
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
                    estado={codigo}
                    cambiarEstado={cambiarCodigo}
                    tipo="text"
                    label="Codigo"
                    name="codigo"
                    leyendaError="el documento tiene que ser de 4 a 12 dígitos."
                    expresionRegular={expresiones.codigo}
                  />
                  <Input
                    estado={cantidadMinima}
                    cambiarEstado={cambiarCantidadMinima}
                    tipo="text"
                    label="Cantidad Minima"
                    name="cantidad minima"
                    leyendaError="el documento tiene que ser de 4 a 12 dígitos."
                    expresionRegular={expresiones.cantidadMinima}
                  />
                  <Input
                    estado={cantidad}
                    cambiarEstado={cambiarCantidad}
                    tipo="text"
                    label="Cantidad"
                    name="cantidad"
                    leyendaError="el documento tiene que ser de 4 a 12 dígitos."
                    expresionRegular={expresiones.cantidad}
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
                    <Boton type="button" onClick={update}>
                      Editar
                    </Boton>
                    {"\n"}
                    <p></p>
                    <Boton type="button" onClick={borrar}>
                      Borrrar
                    </Boton>
                    {"\n"}
                    <Link to="/vacunaListAdmin">Listar vacunas</Link>
                    <p></p>
                    {formularioValido === true && (
                      <MensajeExito>Esta seguro de esta Acción!</MensajeExito>
                    )}
                  </ContenedorBotonCentrado>
                </FormularioVacuna>
              </main>
            </div>
          </div>
          {/* <!-- row --> */}
        </div>
        {/* <!-- container --> */}
      </div>
      {/*  <!-- headerwrap --> */}

      <Footer />
    </Fragment>
  );
};

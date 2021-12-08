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
} from "./../elementos/Formularios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";

export const Registro_adulto = () => {
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
    direccion: /^[a-zA-Z0-9_.+-]+$/,
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
              </Formulario>
              <br />
              <br />
              <div className="row centered">
                <p>
                  <h1>
                    <b>Datos del Adulto</b>
                  </h1>
                </p>
              </div>

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
      <div
        className="modal fade"
        id="myModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
              <h4 className="modal-title" id="myModalLabel">
                contact us
              </h4>
            </div>
            <div className="modal-body">
              <div className="row centered">
                <p>We are available 24/7, so don't hesitate to contact us.</p>
                <p>
                  Somestreet Ave, 987
                  <br /> London, UK.
                  <br /> +44 8948-4343
                  <br /> contact@example.com
                </p>

                <form
                  className="contact-form php-mail-form"
                  role="form"
                  action="contactform/contactform.php"
                  method="POST"
                >
                  <div className="form-group">
                    <label for="contact-name">Your Name</label>
                    <input
                      type="name"
                      name="name"
                      className="form-control"
                      id="contact-name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div className="validate"></div>
                  </div>
                  <div className="form-group">
                    <label for="contact-email">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="contact-email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                    <div className="validate"></div>
                  </div>
                  <div className="form-group">
                    <label for="contact-subject">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      id="contact-subject"
                      placeholder="Subject"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 8 chars of subject"
                    />
                    <div className="validate"></div>
                  </div>

                  <div className="form-group">
                    <label for="contact-message">Your Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      id="contact-message"
                      placeholder="Your Message"
                      rows="5"
                      data-rule="required"
                      data-msg="Please write something for us"
                    ></textarea>
                    <div className="validate"></div>
                  </div>

                  <div className="loading"></div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>

                  <div className="form-send">
                    <button type="submit" className="btn btn-large">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* {/*  <!-- /.modal-content --> */}
        </div>
        {/* {/*  <!-- /.modal-dialog --> */}
      </div>
      {/* {/*  <!-- /.modal --> */}

      <div id="copyrights">
        <div className="container">
          <p>
            &copy; Copyrights <br /> <strong>Grupo 8 - NRC 1257</strong>
            <br />
            <strong>MISION TIC 2022</strong>
          </p>
        </div>
      </div>

      {/*  <!-- JavaScript Libraries --> */}
      <script src="lib/jquery/jquery.min.js"></script>
      <script src="lib/bootstrap/js/bootstrap.min.js"></script>
      <script src="lib/php-mail-form/validate.js"></script>
      <script src="lib/chart/chart.js"></script>

      {/*  <!-- Template Main Javascript File --> */}
      <script src="js/main.js"></script>
    </Fragment>
  );
};

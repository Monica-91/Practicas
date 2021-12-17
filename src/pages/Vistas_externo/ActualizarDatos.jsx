import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../Componentes/Footer";
import { HeadUsuarioExterno } from "../../Componentes/HeadUsuarioExterno";

export const ActualizarDatos = () => {
  return (
    <Fragment>
      <HeadUsuarioExterno />
      <div id="headerwrap_r_a">
        <div className="container">
          <div className="row centered">
            <div className="col-lg-7">
              <label for="">Actualizar Datos Usuario Externo</label>
              <br />
              <br />
              <br />

              <br />
              <form action="">
                <label for="">Nombre</label>
                <input type="text" />
                <span> </span>
                <label for="">Apellido</label>
                <input type="text" />
                <br />
                <br />
                <br />
                <label for="">Nacimiento</label>
                <input type="text" />
                <label for="">Genero</label>
                <input type="text" />
                <br />
                <br />
                <br />
                <label for="">Numero de documento</label>
                <input type="number" />
                <label for="">Dirección</label>
                <input type="text" />
                <br />
                <br />
                <br />
                <label for="">Correo Electronico</label>
                <input type="text" />
                <label for="">Celular</label>
                <input type="text" />
                <br />
                <br />
                <br />
                <label for="">Clave</label>
                <input type="text" />
                <br />
                <br />
                <br />
                <br />
                <button>Anterior</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button>Siguiente</button>
              </form>
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

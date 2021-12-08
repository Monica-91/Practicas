import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../Componentes/Footer";
import { HeadUsuarioExterno } from "../../Componentes/HeadUsuarioExterno";

export const Registro_nino = () => {
  return (
    <Fragment>
      <HeadUsuarioExterno />
      <div id="headerwrap_r_a">
        <div className="container">
          <div className="row centered">
            <div className="col-lg-12">
              <br />
              <form action="">
                <label for="">Nombre</label>
                <input type="text" />
                <label for="">Apellido</label>
                <input type="text" />
                <label for="">Nacimiento</label>
                <input type="text" />
                <label for="">Genero</label>
                <input type="text" />
                <label for="">Numero de documento</label>
                <input type="number" />
                <label for="">Dirección</label>
                <input type="text" />
                <label for="">Correo Electronico</label>
                <input type="text" />
                <label for="">Celular</label>
                <input type="text" />
                <br />
                <label for="">Clave</label>
                <input type="text" />

                <button>Anterior</button>
                <button>Siguiente</button>
              </form>
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

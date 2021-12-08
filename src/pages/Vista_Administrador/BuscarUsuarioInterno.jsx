import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../Componentes/Footer";
import { HeadUsuarioInterno } from "../../Componentes/HeadUsuarioInterno";
import "./interno.css";

export const BuscarUsuarioInterno = () => {
  return (
    <Fragment>
      <HeadUsuarioInterno />
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
                <input type="number" />
                <button>Buscar</button>
              </form>
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

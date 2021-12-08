import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Footer";
import { HeadUsuarioInterno } from "./HeadUsuarioInterno";
import "./interno.css";

export const BuscarUsuario = () => {
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
                <input type="number" />
                <button>Buscar</button>
              </form>
              <table>
                <thead>
                  <tr>
                    <th>Nombre Del Niño</th>

                    <th>Id del niño</th>

                    <th>Meses</th>

                    <th>Nombre Del Adulto</th>

                    <th>Id del Adulto</th>

                    <th>Celular</th>

                    <th>Email</th>

                    <th>Direccion</th>

                    <th>Esquema</th>
                  </tr>
                </thead>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <button>
                      <Link to="/EsquemaNino">Ver</Link>
                    </button>
                  </td>
                </tr>
              </table>
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

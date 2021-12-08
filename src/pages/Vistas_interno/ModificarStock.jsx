import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../Componentes/Footer";
import { HeadUsuarioInterno } from "../../Componentes/HeadUsuarioInterno";
import "./interno.css";

export const ModificarStock = () => {
  return (
    <Fragment>
      <HeadUsuarioInterno />
      <div id="headerwrap_r_a">
        <div className="container">
          <div className="row centered">
            <div className="col-lg-7">
              <label for="">Crear Vacunas - Inventario</label>
              <br />
              <br />
              <br />
              <table>
                <thead>
                  <tr>
                    <th>Biologico</th>
                    <th>Stock</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tr>
                  <td>Epatitis B</td>
                  <td></td>
                  <td>
                    <button>Actualizar</button>
                    <button>Borrar</button>
                  </td>
                </tr>
                <tr>
                  <td>Antipolio Intramuscular</td>
                  <td></td>
                  <td>
                    <button>Actualizar</button>
                    <button>Borrar</button>
                  </td>
                </tr>
                <tr>
                  <td>Antipolio Oral</td>
                  <td></td>
                  <td>
                    <button>Actualizar</button>
                    <button>Borrar</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    Pentabalente (Diteferia, Tetanos, Tos Ferina, Heamophilus
                    Influensae tipo B, Hepatitis B)
                  </td>
                  <td></td>
                  <td>
                    <button>Actualizar</button>
                    <button>Borrar</button>
                  </td>
                </tr>
                <tr>
                  <td>Rotavirus</td>
                  <td></td>
                  <td>
                    <button>Actualizar</button>
                    <button>Borrar</button>
                  </td>
                </tr>
                <tr>
                  <td>Anti Neumococo</td>
                  <td></td>
                  <td>
                    <button>Actualizar</button>
                    <button>Borrar</button>
                  </td>
                </tr>
                <tr>
                  <td>Tripe Viral (Ssarapion, Rubeola y paperas)</td>
                  <td></td>
                  <td>
                    <button>Actualizar</button>
                    <button>Borrar</button>
                  </td>
                </tr>
                <tr>
                  <td>Fiebre Amarilla</td>
                  <td></td>
                  <td>
                    <button>Actualizar</button>
                    <button>Borrar</button>
                  </td>
                </tr>
                <tr>
                  <td>Hepatitis A</td>
                  <td></td>
                  <td>
                    <button>Actualizar</button>
                    <button>Borrar</button>
                  </td>
                </tr>
                <tr>
                  <td>Varicela</td>
                  <td></td>
                  <td>
                    <button>Actualizar</button>
                    <button>Borrar</button>
                  </td>
                </tr>
                <tr>
                  <td>DTP (Difteria, Tetanos, Tosferina)</td>
                  <td></td>
                  <td>
                    <button>Actualizar</button>
                    <button>Borrar</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    Anti Influenza (Se aplica desde los 6 meses hasta los 23)
                  </td>
                  <td></td>
                  <td>
                    <button>Actualizar</button>
                    <button>Borrar</button>
                  </td>
                </tr>
              </table>
              <br />
              <br />
              <br />
              <br />
              <br />
              <button>Anterior</button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button>Crear Vacunas</button>
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

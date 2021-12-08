import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../Componentes/Footer";
import { HeadUsuarioInterno } from "../../Componentes/HeadUsuarioInterno";
import "./interno.css";

export const Inventario_vacuna = () => {
  return (
    <Fragment>
      <HeadUsuarioInterno />
      <div id="headerwrap_r_a">
        <div className="container-tabla">
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
                    <th>Se tiene</th>
                    <th>Llega</th>
                  </tr>
                </thead>
                <tr>
                  <td>Epatitis B</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Antipolio Intramuscular</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Antipolio Oral</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    Pentabalente (Diteferia, Tetanos, Tos Ferina, Heamophilus
                    Influensae tipo B, Hepatitis B)
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Rotavirus</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Anti Neumococo</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Tripe Viral (Ssarapion, Rubeola y paperas)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Fiebre Amarilla</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Hepatitis A</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Varicela</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>DTP (Difteria, Tetanos, Tosferina)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    Anti Influenza (Se aplica desde los 6 meses hasta los 23)
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
              <br />
              <br />
              <br />
              <br />
              <br />
              <button type="button">
                <Link to="/modificar_stock">Modificar</Link>
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button>Ingresar</button>
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

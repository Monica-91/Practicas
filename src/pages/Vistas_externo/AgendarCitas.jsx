import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../fecha.css";
import { Footer } from "../../Componentes/Footer";
import { HeadUsuarioExterno } from "../../Componentes/HeadUsuarioExterno";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";


export const AgendarCitas = () => {
  const dateValue: Date = new Date("21/12/2021 10:30 AM");
  const minDate: Date = new Date("21/12/2021 09:00 AM");
  const maxDate: Date = new Date("21/12/2021 05:00 PM");
  return (
    <Fragment>
      <HeadUsuarioExterno />
      <div id="headerwrap_r_a">
        <div className="container">
          <div className="row centered">
            <div className="col-lg-7"></div>
            <DateTimePickerComponent
              placeholder="Elija la Fecha y Hora"
              value={dateValue}
              min={minDate}
              max={maxDate}
              format="dd-MMM-yy  HH:mm"
              step={15}
            ></DateTimePickerComponent>
            <input/>
            <label for="">Esquema Niño</label>
            <br />
            <br />
            <br />
            <label htmlFor="">Nombre del niño</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button>Agendar</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button>Notificar</button>
            <br />
            <br />
            <table>
              <thead>
                <tr>
                  <th>Biologico</th>
                  <th>RN</th>
                  <th>2 Meses</th>
                  <th>4 Meses</th>
                  <th>6 Meses</th>
                  <th>12 Meses</th>
                  <th>18 Meses</th>
                  <th>5 Años</th>
                </tr>
              </thead>
              <tr>
                <td>Epatitis B</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Antipolio Intramuscular</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Antipolio Oral</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
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
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Rotavirus</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Anti Neumococo</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Tripe Viral (Ssarapion, Rubeola y paperas)</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Fiebre Amarilla</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Hepatitis A</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Varicela</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>DTP (Difteria, Tetanos, Tosferina)</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  Anti Influenza (Se aplica desde los 6 meses hasta los 23)
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

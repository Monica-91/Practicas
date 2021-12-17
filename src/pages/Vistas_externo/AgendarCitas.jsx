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
          </div>
        </div>
      </div>
      
      
    </Fragment>
  );
};

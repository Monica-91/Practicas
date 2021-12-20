import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../Componentes/Footer";
import { HeadUsuarioExterno } from "../../Componentes/HeadUsuarioExterno";

export const VistaExterno = () => {
  return (
    <Fragment>
      <HeadUsuarioExterno />
      <div id="headerwrap_r_a">
        <div className="container">
          <div className="row rigth">
            <div className="col-lg-11">
              <div>
                <h1>
                  <b>
                    {" "}
                    Las vacunas pueden prevenir enfermedades infecciosas que
                    antes causaban muerte o daño a otros bebes, niños y adultos.
                  </b>
                </h1>
              </div>
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

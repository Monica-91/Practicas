import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../Componentes/Footer";
import { HeadAdministrador } from "../../Componentes/HeadAdministrador";

export const VistaAdministrador = () => {
  return (
    <Fragment>
      <HeadAdministrador />
      <div id="headerwrap_e">
        <div className="container">
          <div className="row centered">
            <div className="col-lg-7"></div>
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

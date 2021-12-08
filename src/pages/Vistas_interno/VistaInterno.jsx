import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { HeadUsuarioInterno } from "./HeadUsuarioInterno";

export const VistaInterno = () => {
  return (
    <Fragment>
      <HeadUsuarioInterno />
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

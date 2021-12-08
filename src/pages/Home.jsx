import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Head } from "../Componentes/Head";
import { Footer } from "../Componentes/Footer";

export const Home = () => {
  return (
    <Fragment>
      <Head />
      <div id="headerwrap">
        <div className="container">
          <div className="row centered">
            <img src="header-bg.jpg" alt="" />
            <div className="col-lg-6">
              <h1>
                <b>45 años</b> trabajando por la comunidad Colombiana
              </h1>
              <br />
              <br />
              <h2>
                <b>"Por un mejor mañana para toda la Comunidad"</b>
              </h2>
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

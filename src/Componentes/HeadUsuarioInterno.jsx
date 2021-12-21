import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const HeadUsuarioInterno = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-default">
        <div className="container">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li className="pull-rigth">
              <img
                src="https://www.imbanaco.com/wp-content/themes/imbanaco/assets/img/logo-imbanaco1.svg"
                alt="Logo-Embanaco"
                width="350"
                height="120"
              ></img>
            </li>
            <li className="pull-rigth">
              <img src="./img/fondo.png" alt="" width="700" height="50"></img>
            </li>
            <li className="pull-rigth">
              <img src="./img/fondo.png" alt="" width="50" height="50"></img>
            </li>
            <li className="pull-rigth">
              <img
                src="https://s3-alpha-sig.figma.com/img/f323/cb54/fc0c457aacd809fb5b7bacc2a6a808d0?Expires=1641168000&Signature=aHhBIqQNI5xQQCJwOnQpl9SFJxpxJ4XwUNwpYA4WLOJSoEMafsbf66-h1Ry3G~tBQ5MxvbRpihk1I83wu216-GYlyrpYsmn211VO2cIr3OM9RNSYMxCMx~fvaoPauPVuKlJ60~uFLTXwlBLnLCPX06t5Ivn4Skc~jgS8u9ZzkmgWVGOn6db2SAZ9AmzsomJ6eTThiV-JphAHw-LioDwWBg58aeo~TLUuaZ-tdCwfMKjrm22LQ-R2fMQSrACBKtkUcLYjAUjixNFP0aTaxf7N7t4oyrViWt5Vmb1oVZJ~Tq0vpeNQ-aF6vOa7ZfAeHpBSdyvaFBGZ2zS9jjFVUuhYUw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt=""
                width="140"
                height="125"
              ></img>
            </li>
          </ul>
        </div>
      </nav>

      <div className="navbar navbar-inverse ">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="active">
                <Link to="/inventario_vacuna"> Vacunas </Link>
              </li>
              <li className="active">
                <Link to="/buscarUsuario"> Buscar Usuario </Link>
              </li>
              <li className="active">
                <Link to="/"> Cerrar Sesion </Link>
              </li>
              <img src="nombre.png" alt="" />
              <li>
                <Link data-toggle="modal" data-target="#myModal" to="#myModal">
                  <i className="fa fa-envelope-o"></i>
                </Link>
              </li>
            </ul>
          </div>
          {/* .nav-collapse --> */}
        </div>
      </div>
    </Fragment>
  );
};

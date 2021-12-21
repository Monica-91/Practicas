import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Boton } from "../../elementos/Formularios";

export function UsuariosiListInterno() {
    const [listado, setListado] = useState([]);

    useEffect(() => {
    fetch(`http://localhost:9000/api/users/`)
    .then(res => res.json())
    .then(res => {

        setListado(res);

    })
   }, [])

          
    //const listado = JSON.parse(localStorage.getItem("listaUsuariosi")) || [];
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Documento</th>
              <th>Fecha de nacimiento</th>
              <th>Direccion</th>
              <th>Genero</th>
              <th>Correo</th>
              <th>Telefono</th>
            </tr>
          </thead>
          <tbody>
            {listado.map((usui) => (
              <tr>
                <td>{usui.nom}</td>
                <td>{usui.apell}</td>
                <td>{usui.doc}</td>
                <td>{usui.fen}</td>
                <td>{usui.dir}</td>
                <td>{usui.gen}</td>
                <td>{usui.corr}</td>
                <td>{usui.cel}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Boton>
          <Link to="/buscarUsuario">Regresar</Link>
        </Boton>
      </>
    );
}
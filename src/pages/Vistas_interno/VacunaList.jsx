import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Boton } from "../../elementos/Formularios";

export function VacunaList() {
    const [listado, setListado] = useState([]);

    useEffect(() => {
    fetch(`http://localhost:9000/api/vacunas/`)
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
              <th>Codigo</th>
              <th>Cantidad Minima</th>
              <th>Cantidad Actual</th>
            </tr>
          </thead>
          <tbody>
            {listado.map((vacuna) => (
              <tr>
                <td>{vacuna.nom}</td>
                <td>{vacuna.cod}</td>
                <td>{vacuna.cantmin}</td>
                <td>{vacuna.cant}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Boton>
          <Link to="/inventario_vacuna">Regresar</Link>
        </Boton>
      </>
    );
}
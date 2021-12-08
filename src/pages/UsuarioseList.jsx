import React from 'react';

export function UsuarioseList() {
    const listado = JSON.parse(localStorage.getItem("listaUsuariose")) || [];
    return(
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre del Niño</th>
                        <th>Apellido del Niño</th>
                        <th>Número Documento</th>
                        <th>Genero del Niño</th>
                        <th>Nombre Acudiente</th>
                        <th>Apellido Acudiente</th>
                        <th>Direccion</th>
                        <th>Correo</th>
                        <th>Telefono</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      listado.map(usue => <tr>
                          <td>{usue.nom_n}</td>
                          <td>{usue.apell_n}</td>
                          <td>{usue.doc_n}</td>
                          <td>{usue.gen_n}</td>
                          <td>{usue.nom}</td>
                          <td>{usue.apell}</td>
                          <td>{usue.dir}</td>
                          <td>{usue.corr}</td>
                          <td>{usue.cel}</td>
                          </tr>
                        )  
                    }
                </tbody>
            </table>
        </>
    )
}
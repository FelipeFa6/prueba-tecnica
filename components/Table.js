import React from 'react';

const Table = ({ workers = [] }) => (
    <div className="overflow-auto">
  <table className="table">
    <thead>
      <tr>
        <th>RUT</th>
        <th>Nombre</th>
        <th>Edad</th>
        <th>Profesión</th>
        <th>Cargo</th>
      </tr>
    </thead>
    <tbody>
      {workers.map((worker) => (
        <tr key={worker.RUT_TRABAJADOR}>
          <td>{worker.RUT_TRABAJADOR}</td>
          <td>{worker.NOMBRE_TRABAJADOR}</td>
          <td>{worker.EDAD}</td>
          <td>{worker.PROFESION}</td>
          <td>{worker.CARGO}</td>
        </tr>
      ))}
    </tbody>
  </table>
    </div>
);

export default Table;


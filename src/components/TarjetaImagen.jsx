// TarjetaImagen.jsx
import React, { useState } from 'react';

const TarjetaImagen = ({ mensaje, eliminar, editar }) => {
  const [editando, setEditando] = useState(false);
  const [nuevoMensaje, setNuevoMensaje] = useState(mensaje);

  const handleGuardar = () => {
    editar(nuevoMensaje);
    setEditando(false);
  };

  return (
    <div className="tarjeta-imagen">
      {editando ? (
        <>
          <input
            type="text"
            value={nuevoMensaje}
            onChange={(e) => setNuevoMensaje(e.target.value)}
          />
          <button onClick={handleGuardar}>Guardar</button>
        </>
      ) : (
        <>
          <p>{mensaje}</p>
          <button onClick={() => setEditando(true)}>Editar</button>
          <button onClick={eliminar}>Eliminar</button>
        </>
      )}
    </div>
  );
};

export default TarjetaImagen;

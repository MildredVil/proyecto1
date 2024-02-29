// Mensaje.jsx
import React, { useState } from 'react';
import TarjetaImagen from './TarjetaImagen';
import '../App.css';

const Mensaje = () => {
  const [mensajes, setMensajes] = useState([]);
  const [nuevoMensaje, setNuevoMensaje] = useState('');
  const [busqueda, setBusqueda] = useState('');

  const agregarMensaje = () => {
    if (nuevoMensaje.trim() !== '') {
      setMensajes([...mensajes, nuevoMensaje]);
      setNuevoMensaje('');
    }
  };

  const eliminarMensaje = (index) => {
    const nuevosMensajes = [...mensajes];
    nuevosMensajes.splice(index, 1);
    setMensajes(nuevosMensajes);
  };

  const editarMensaje = (index, nuevoMensaje) => {
    const nuevosMensajes = [...mensajes];
    nuevosMensajes[index] = nuevoMensaje;
    setMensajes(nuevosMensajes);
  };

  return (
    <div className="mensaje-container">
      <h2>Agregar Computadora</h2>
      <input
        type="text"
        value={nuevoMensaje}
        onChange={(e) => setNuevoMensaje(e.target.value)}
      />
      <button onClick={agregarMensaje}>Agregar</button>

      <div>
        <h2>Buscar:</h2>
        <input
          type="text"
          placeholder="Buscar mensajes..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      {mensajes
        .filter((mensaje) =>
          mensaje.toLowerCase().includes(busqueda.toLowerCase())
        )
        .map((mensaje, index) => (
          <TarjetaImagen
            key={index}
            mensaje={mensaje}
            eliminar={() => eliminarMensaje(index)}
            editar={(nuevoMensaje) => editarMensaje(index, nuevoMensaje)}
          />
        ))}
    </div>
  );
};

export default Mensaje;

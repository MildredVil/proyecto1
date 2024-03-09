import React, { useState } from 'react';
import TarjetaImagen from './TarjetaImagen';
import '../App.css';

const Mensaje = () => {
  const [mensajes, setMensajes] = useState([]);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [direccionIP, setDireccionIP] = useState('');
  const [direccionMAC, setDireccionMAC] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [nodo, setNodo] = useState('');
  const [busqueda, setBusqueda] = useState('');

  const agregarMensaje = () => {
    if (nombre.trim() !== '' && descripcion.trim() !== '' && direccionIP.trim() !== '' && direccionMAC.trim() !== '' && departamento.trim() !== '' && nodo.trim() !== '') {
      const nuevoMensaje = {
        nombre: nombre,
        descripcion: descripcion,
        direccionIP: direccionIP,
        direccionMAC: direccionMAC,
        departamento: departamento,
        nodo: nodo
      };
      setMensajes([...mensajes, nuevoMensaje]);
      setNombre('');
      setDescripcion('');
      setDireccionIP('');
      setDireccionMAC('');
      setDepartamento('');
      setNodo('');
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
      <h2>Registrar Computadora</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <input
        type="text"
        placeholder="Dirección IP"
        value={direccionIP}
        onChange={(e) => setDireccionIP(e.target.value)}
      />
      <input
        type="text"
        placeholder="Dirección MAC"
        value={direccionMAC}
        onChange={(e) => setDireccionMAC(e.target.value)}
      />
      <input
        type="text"
        placeholder="Departamento"
        value={departamento}
        onChange={(e) => setDepartamento(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nodo"
        value={nodo}
        onChange={(e) => setNodo(e.target.value)}
      />
      <button onClick={agregarMensaje}>Agregar</button>

      <div>
        <h2>Buscar:</h2>
        <input
          type="text"
          placeholder="Buscar ..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      {mensajes
        .filter((mensaje) =>
          mensaje.nombre.toLowerCase().includes(busqueda.toLowerCase())
        )
        .map((mensaje, index) => (
          <TarjetaImagen
            key={index}
            mensaje={mensaje.nombre}
            descripcion={mensaje.descripcion}
            direccionIP={mensaje.direccionIP}
            direccionMAC={mensaje.direccionMAC}
            departamento={mensaje.departamento}
            nodo={mensaje.nodo}
            eliminar={() => eliminarMensaje(index)}
            editar={(nuevoMensaje) => editarMensaje(index, nuevoMensaje)}
          />
        ))}
    </div>
  );
};

export default Mensaje;

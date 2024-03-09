import React, { useState, useEffect } from 'react';

const TarjetaImagen = ({ mensaje, eliminar, editar }) => {
  const [editando, setEditando] = useState(false);
  const [nuevoMensaje, setNuevoMensaje] = useState(mensaje);
  const [descripcion, setDescripcion] = useState('');
  const [direccionIP, setDireccionIP] = useState('');
  const [direccionMAC, setDireccionMAC] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [nodo, setNodo] = useState('');
  const [codigoQR, setCodigoQR] = useState('');
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [informacionSistema, setInformacionSistema] = useState({
    nombre: '',
    descripcion: '',
    direccionIP: '',
    direccionMAC: '',
    departamento: '',
    nodo: ''
  });

  const handleGuardar = () => {
    editar(nuevoMensaje);
    setEditando(false);
  };

  useEffect(() => {
    const generarCodigoQR = async () => {
      const datosParaQR = nuevoMensaje || mensaje;

      try {
        const response = await fetch(
          `https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${encodeURIComponent(
            datosParaQR
          )}`
        );

        if (response.ok) {
          setCodigoQR(response.url);
        } else {
          console.error('Error al generar el código QR');
        }
      } catch (error) {
        console.error('Error de red al generar el código QR', error);
      }
    };

    generarCodigoQR();
  }, [mensaje, nuevoMensaje]);

  const mostrarPopupInformacion = () => {
    setMostrarPopup(true);
    setInformacionSistema({
      nombre: nuevoMensaje,
      descripcion: descripcion,
      direccionIP: direccionIP,
      direccionMAC: direccionMAC,
      departamento: departamento,
      nodo: nodo
    });
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
          {codigoQR && <img src={codigoQR} alt="Código QR" />}
          <button onClick={() => setEditando(true)}>Editar</button>
          <button onClick={eliminar}>Eliminar</button>
          <button onClick={mostrarPopupInformacion}>Ver más detalles</button>
        </>
      )}
      {mostrarPopup && (
        <div className="popup">
          <h2>Información del Sistema</h2>
          <p>Nombre: {informacionSistema.nombre}</p>
          <p>Descripción: {informacionSistema.descripcion}</p>
          <p>Dirección IP: {informacionSistema.direccionIP}</p>
          <p>Dirección MAC: {informacionSistema.direccionMAC}</p>
          <p>Departamento: {informacionSistema.departamento}</p>
          <p>Nodo: {informacionSistema.nodo}</p>
          <button onClick={() => setMostrarPopup(false)}>Cerrar</button>
        </div>
      )}
    </div>
  );
};

export default TarjetaImagen;

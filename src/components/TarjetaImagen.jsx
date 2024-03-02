// TarjetaImagen.jsx
import React, { useState, useEffect } from 'react';

const TarjetaImagen = ({ mensaje, eliminar, editar }) => {
  const [editando, setEditando] = useState(false);
  const [nuevoMensaje, setNuevoMensaje] = useState(mensaje);
  const [codigoQR, setCodigoQR] = useState('');

  const handleGuardar = () => {
    editar(nuevoMensaje);
    setEditando(false);
  };

  useEffect(() => {
    const generarCodigoQR = async () => {
      const datosParaQR = nuevoMensaje || mensaje;

      try {
        // Aqui utilizo la API de Google Chart QR Code para generar el código QR pero me manda a buscar lo que introduci en google
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
        </>
      )}
    </div>
  );
};

export default TarjetaImagen;

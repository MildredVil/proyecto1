import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TarjetaImagen from './components/TarjetaImagen';
import Carrusel from './components/Carrusel';
import Mensaje from './components/Mensaje';
import AboutUs from './components/AboutUs';  // Import your AboutUs component
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [showAboutUs, setShowAboutUs] = useState(false);

  return (
    <div>
      <Navbar onAboutUsClick={() => setShowAboutUs(true)} />
      
      {showAboutUs ? (
        <AboutUs onClose={() => setShowAboutUs(false)} />
      ) : (
        <>
          <Carrusel />
          <Mensaje />
          <TarjetaImagen computadora />
        </>
      )}

      <Footer />
    </div>
  );
};

export default App;

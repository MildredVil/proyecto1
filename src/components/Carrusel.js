import React from 'react';
import Slider from 'react-slick';

const Carrusel = () =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Carrusel>
        <div className="carrusel-container">
        <Slider {...settings}>
          <div>
            <img src="imagen1.jpg" alt="Slide 1" />
          </div>
          <div>
            <img src="imagen2.jpg" alt="Slide 2" />
          </div>
          {/* Agrega más elementos div con imágenes según sea necesario */}
        </Slider>
      </div>
      </Carrusel>
    );
};
export default Carrusel;
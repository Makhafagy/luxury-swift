import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import Carousel1 from '../images/carousel-1.jpg';
import Carousel2 from '../images/carousel-2.jpg';
import Carousel3 from '../images/carousel-3.jpg';

const images = [Carousel1, Carousel2, Carousel3];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full xl:w-10/12 mx-auto">
      <div className="relative w-full overflow-hidden rounded-lg">
        <img
          className="w-full h-auto"
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
        <a
          className="absolute top-1/2 left-4 transform -translate-y-1/2 opacity-70 rounded-full text-gray-300 text-3xl sm:text-5xl ease-in-out duration-300 hover:text-gray-400"
          href="#"
          onClick={(e) => { e.preventDefault(); prevImage(); }}
        >
          <FaArrowAltCircleLeft />
        </a>
        <a
          className="absolute top-1/2 right-4 transform -translate-y-1/2 opacity-70 rounded-full text-gray-300 text-3xl sm:text-5xl ease-in-out duration-300 hover:text-gray-400"
          href="#"
          onClick={(e) => { e.preventDefault(); nextImage(); }}
        >
          <FaArrowAltCircleRight />
        </a>
      </div>
    </div>
  );
};

export default Carousel;

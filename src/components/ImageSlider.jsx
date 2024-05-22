// import React, { useState } from 'react';
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

// import Carousel1 from '../images/carousel-1.jpg';
// import Carousel2 from '../images/carousel-2.jpg';
// import Carousel3 from '../images/carousel-3.jpg';

// const images = [Carousel1, Carousel2, Carousel3];

// const Carousel = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const prevImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 mx-auto">
//       <div className="relative w-full overflow-hidden rounded-lg">
//         <img
//           className="w-full h-auto"
//           src={images[currentImageIndex]}
//           alt={`Image ${currentImageIndex + 1}`}
//         />
//         <a
//           className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full text-gray-600"
//           href="#"
//           onClick={(e) => { e.preventDefault(); prevImage(); }}
//         >
//           <FaArrowAltCircleLeft />
//         </a>
//         <a
//           className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full text-gray-600"
//           href="#"
//           onClick={(e) => { e.preventDefault(); nextImage(); }}
//         >
//           <FaArrowAltCircleRight />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Carousel;

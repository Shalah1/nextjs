// import { useState } from 'react';
// import img from '../../../public/image/citizen/banner2.png';
// const images = [
//   'https://www.daily-sun.com/assets/news_images/2016/07/07/Community-Health.jpg',
//   'https://reliefweb.int/sites/default/files/styles/large/public/images/reports/0f/e9/0fe9c37e-42c3-3b95-b14e-c30577fda425.jpg',
//   'https://images.unsplash.com/photo-1620007025143-c3fd3aee7769',
// ];

// function ImageCarousel() {
//   const [currentImage, setCurrentImage] = useState(0);

//   const prevImage = () => {
//     setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
//   };

//   const nextImage = () => {
//     setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
//   };

//   return (
//     <div className="relative">
//       <div className="h-96 w-full overflow-hidden">
//         {images.map((imageUrl, index) => (
//           <img
//             key={index}
//             src={imageUrl}
//             alt={`image ${index}`}
//             className={`h-full w-full absolute transition-all duration-300 ${
//               currentImage === index ? 'opacity-100' : 'opacity-0'
//             }`}
//           />
//         ))}
//       </div>
//       <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-2">
//         <button onClick={prevImage}>
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
//             <path
//               fillRule="evenodd"
//               d="M10 19a9 9 0 110-18a9 9 0 010 18zm-.707-4.293a1 1 0 011.414-1.414l3.5 3.5a1 1 0 11-1.414 1.414l-3.5-3.5a1 1 0 010-1.414z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </button>
//         <button onClick={nextImage}>
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
//             <path
//               fillRule="evenodd"
//               d="M10 19a9 9 0 110-18a9 9 0 010 18zm-1.707-4.293a1 1 0 111.414-1.414l3.5 3.5a1 1 0 01-1.414 1.414l-3.5-3.5z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ImageCarousel;


import React, { useState, useEffect } from 'react';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  return (
    <div className="relative">

      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between">
        <img
          src={images[prevIndex]}
          alt="Previous Image"
          className="w-80 opacity-25"
        />
        <img
          src={images[nextIndex]}
          alt="Next Image"
          className="w-80 opacity-25"
        />
      </div>
      <img
        src={images[currentIndex]}
        alt="Slider Image"
        className="w-1/2 mx-auto opacity-100 rounded-lg hover:opacity-90 transition-opacity duration-300"
      />
    </div>
  );
};

export default Slider;

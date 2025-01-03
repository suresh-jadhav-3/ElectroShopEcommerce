import React, { useState, useEffect } from 'react';
import poco from '../assets/poco.jpg';
import Iphone from '../assets/Iphone.png';
import Realme from '../assets/Realme.jpg';
import samsung from '../assets/samsung.jpg';

const BrandSlider = () => {
  const brands = [
    { id: 1, name: 'Redmi', image: Iphone },
    { id: 2, name: 'Poco', image: samsung },
    { id: 3, name: 'iPhone', image: Realme },
    { id: 4, name: 'Samsung', image: poco },
    { id: 5, name: 'Realme', image: samsung },
  ];

  const duplicatedBrands = [...brands, ...brands, ...brands];

  const [currentIndex, setCurrentIndex] = useState(brands.length);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= duplicatedBrands.length - 1) {
        setIsTransitioning(false);
        return brands.length;
      }
      return prevIndex + 1;
    });
    setTimeout(() => setIsTransitioning(true), 0);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
 if (prevIndex <= 0) {
        setIsTransitioning(false);
        return brands.length * 2 - 1;
      }
      return prevIndex - 1;
    });
    setTimeout(() => setIsTransitioning(true), 0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-8">
      <h2 className="text-center text-2xl font-bold mb-6">Top Brand Categories</h2>
      <div className="relative overflow-hidden">
        <div
          className="mx-16 flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / brands.length)}%)`,
            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div key={index} className="w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-2">
              <div className="text-center">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover"
                />
                <p className="mt-4 text-lg font-medium">{brand.name}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          aria-label="Previous slide"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          aria-label="Next slide"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default BrandSlider;
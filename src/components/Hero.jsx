import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import axios from 'axios';

const API_URL = 'https://fakestoreapi.in/api/products/category?type=mobile';
const SLIDE_INTERVAL = 5000; 
const MAX_PRODUCTS = 4; 

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch product data from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(API_URL);
        const products = response.data.products
  .slice(0, MAX_PRODUCTS)
  .map((product) => ({
    title: product.title.split(' ').slice(0, 3).join(' '),
    subtitle: `Only $${product.price}`,
    img: encodeURI(product.image),  // <-- FIX HERE
  }));

        setSlides(products);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const nextSlide = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      setFade(true);
    }, 300);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
      setFade(true);
    }, 300);
  }, [slides.length]);

  
  useEffect(() => {
    const interval = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [nextSlide]);

  
  const handleKeyDown = useCallback((event) => {
    if (event.key === 'ArrowRight') {
      nextSlide();
    } else if (event.key === 'ArrowLeft') {
      prevSlide();
    }
  }, [nextSlide, prevSlide]);

 

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-600">{error}</div>;
  }

  return (
    <div 
      className="relative h-[40vh] md:h-[50vh] lg:h-[60vh]" 
      onKeyDown={handleKeyDown} 
      tabIndex="0"
      role="region"
      aria-label="Product Carousel"
    >
      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between z-10">
        <button 
          aria-label="Previous Slide" 
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white ml-4 transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          aria-label="Next Slide" 
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white mr-4 transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      {/* Slide Content */}
      
      <div className="w-full h-full flex items-center justify-center">
        <div className={`w-full h-full transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative w-full h-full">
            <img 
              src={slides[currentSlide]?.img} 
              alt={slides[currentSlide]?.title} 
              className="w-full h-full object-contain" 
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-white text-center">
              <span className="text-lg md:text-xl mb-2">{slides[currentSlide]?.subtitle}</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{slides[currentSlide]?.title}</h1>
              
            </div>
          </div>
        </div>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div key={index} className={`w-4 h-1 rounded ${index === currentSlide ? 'bg-red-600' : 'bg-white/50'}`}></div>
        ))}
      </div>
    </div>
  );
}

export default Hero;

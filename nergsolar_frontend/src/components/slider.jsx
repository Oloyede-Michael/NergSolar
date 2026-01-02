import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Battery, Sun, Zap, Grid3x3, Watch, CircuitBoard } from 'lucide-react';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "images/solar_engineers.jpg",
      badge: "New Year Sale | Jan",
      title: "Welcome To Drivex Energy",
      subtitle: "Fast, reliable solar-designed devices",
      details: "Solar Products from ₦10,000"
    },
    {
      image: "images/solar_panels.jpg", 
      badge: "Limited Time Offer",
      title: "Up to 40% OFF",
      subtitle: "Free Delivery & Extended Warranty",
      details: "Solar Kits from ₦200,000"
    },
    {
      image: "images/solar-power-panel.jpg",
      badge: "Exclusive Deal | Feb",
      title: "Save Big Today",
      subtitle: "Best Prices Guaranteed",
      details: "Controllers from ₦80,000"
    },
    {
      image: "/images/solar_image1.jpg",
      badge: "BigTime Deal",
      title: "Premium Solar Watches",
      subtitle: "Quality & Style Combined",
      details: "Solar watches from ₦50,000"
    },
    {
      image: "images/solar-power-panel.jpg", 
      badge: "Training & Certification",
      title: "Get Certified",
      subtitle: "Become a Solar Engineer",
      details: "Professional Training Programs"
    }
  ];

  const categories = [
    { name: "Batteries", icon: Battery },
    { name: "Solar Panels", icon: Sun },
    { name: "Solar Watches", icon: Watch },
    { name: "Solar Solutions", icon: Grid3x3 },
    { name: "Inverters", icon: Zap },
    { name: "Battery Chargers", icon: Battery },
    { name: "Controllers", icon: CircuitBoard }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-gray-50 overflow-x-hidden">
      {/* Image Slider Section */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] bg-gradient-to-br from-cyan-500 via-blue-400 to-white overflow-hidden">
        {/* Background Image */}
        {slides[currentSlide].image && (
          <img 
            src={slides[currentSlide].image} 
            alt={`Slide ${currentSlide + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Slide content */}
        <div className="relative h-full flex items-center overflow-hidden">
          <div className="w-full max-w-[100vw] px-4 sm:px-6 md:px-8 lg:px-16 mx-auto">
            <div className="max-w-xl lg:max-w-2xl">
              {/* Badge - Responsive sizing */}
              <div className="inline-block mb-3 sm:mb-4 md:mb-6">
                <span className="bg-cyan-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2 rounded-full text-xs sm:text-sm font-semibold">
                  {slides[currentSlide].badge}
                </span>
              </div>

              {/* Title - Responsive sizing */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 sm:mb-3 md:mb-4 drop-shadow-lg leading-tight">
                {slides[currentSlide].title}
              </h1>

              {/* Subtitle - Responsive sizing */}
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-2 sm:mb-3 md:mb-4 drop-shadow-md">
                {slides[currentSlide].subtitle}
              </h2>

              {/* Details - Responsive sizing */}
              <p className="text-white text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 drop-shadow-md">
                {slides[currentSlide].details}
              </p>

              {/* CTA Button - Responsive sizing */}
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg text-sm sm:text-base md:text-lg transition-all transform hover:scale-105 shadow-lg">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows - Responsive sizing */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} className="sm:w-8 sm:h-8" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight size={24} className="sm:w-8 sm:h-8" />
        </button>

        {/* Slide Indicators - Responsive positioning */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all ${
                index === currentSlide ? 'w-8 sm:w-12 bg-cyan-500' : 'w-1.5 sm:w-2 bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Categories Section - Responsive grid */}
      <div className="w-full max-w-[100vw] px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 mx-auto overflow-x-hidden">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 md:gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-2 sm:mb-3 md:mb-4 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-cyan-50 transition-colors">
                  <IconComponent size={28} className="sm:w-8 sm:h-8 md:w-10 md:h-10 text-gray-700 group-hover:text-cyan-500 transition-colors" />
                </div>
                <span className="text-center font-semibold text-gray-800 text-xs sm:text-sm break-words">
                  {category.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
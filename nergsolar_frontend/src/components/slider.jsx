import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Battery, Sun, Zap, Grid3x3, Watch, CircuitBoard } from 'lucide-react';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "images/solar_engineers.jpg",
      badge: "Early Black Friday | Nov. 5-19",
      title: "Welcome To Drivex Energy",
      subtitle: "A fast driving portable  energy company known for it reliable solar-designed devices",
      details: "Solar Products from ₦10,000 | Solar Panels from ₦100,000"
    },
    {
      image: "images/solar_panels.jpg", 
      badge: "Limited Time Offer",
      title: "Up to 40% OFF",
      subtitle: "Free Delivery | Extended Warranty | VIP Access",
      details: "Solar Kits from ₦200,000 | Inverters from ₦200,000"
    },
    {
      image: "images/solar-power-panel.jpg",
      badge: "Exclusive Deal",
      title: "Save Big Today",
      subtitle: "Best Prices Guaranteed | Premium Quality",
      details: "Controllers from ₦80,000 | Chargers from ₦20,000"
    },
    {
      image: "/images/solar_image1.jpg",
      badge: "BigTime Deal",
      title: "Save Big Today",
      subtitle: "Best Prices Guaranteed | Premium Quality",
      details: "Solar watches from ₦50,000 | Chargers from ₦20,000"
    },
    {
      image: "images/solar-power-panel.jpg", 
      badge: "Traning and Certification",
      title: "Get certified with Drivex Energy",
      subtitle: "Best Certificates | Premium Quality",
      details: "Traning | Certification as Solar Engineers"
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
    <div className="w-full bg-gray-50">
      {/* Image Slider Section */}
      <div className="relative w-full h-[500px] bg-gradient-to-br from-cyan-500 via-blue-400 to-white overflow-hidden">
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
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-8 md:px-16">
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-block mb-6">
                <span className="bg-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  {slides[currentSlide].badge}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
                {slides[currentSlide].title}
              </h1>

              {/* Subtitle */}
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 drop-shadow-md">
                {slides[currentSlide].subtitle}
              </h2>

              {/* Details */}
              <p className="text-white text-lg mb-8 drop-shadow-md">
                {slides[currentSlide].details}
              </p>

              {/* CTA Button */}
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg">
                Shop Now
              </button>
            </div>
          </div>

          {/* Product showcase (decorative) */}
          <div className="absolute right-0 bottom-0 w-1/2 h-full flex items-end justify-center pb-8 pointer-events-none">
            {/* This space is reserved for your custom product images */}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all cursor-pointer"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all cursor-pointer"
        >
          <ChevronRight size={32} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'w-12 bg-cyan-500' : 'w-2 bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="w-20 h-20 mb-4 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-cyan-50 transition-colors">
                  <IconComponent size={40} className="text-gray-700 group-hover:text-cyan-500 transition-colors" />
                </div>
                <span className="text-center font-semibold text-gray-800 text-sm">
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
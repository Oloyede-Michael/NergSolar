import React from 'react';
import { Sun, Battery, Package, Zap, Shield, Truck, ArrowRight, Star } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex-grow bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to Drivex Energy Solutions
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 mb-10">
              Trusted Energy Solutions for Your Home and Business
            </p>

            {/* Buttons Responsive */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600 transition-colors flex items-center gap-2 justify-center">
                Shop Now
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-cyan-500 text-cyan-500 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Explore Our Solutions
          </h2>

          {/* ✅ Responsive grid: 1-column → 2-column → 3-column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl hover:shadow-xl transition-all group cursor-pointer">
              <div className="bg-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sun size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Solar Panels</h3>
              <p className="text-gray-600 mb-4">
                High-efficiency solar panels for maximum energy production and long-lasting performance
              </p>
              <a href="#" className="text-cyan-500 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Explore Panels <ArrowRight size={18} />
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl hover:shadow-xl transition-all group cursor-pointer">
              <div className="bg-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Battery size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Power Storage</h3>
              <p className="text-gray-600 mb-4">
                Advanced battery systems for reliable energy storage day and night
              </p>
              <a href="#" className="text-cyan-500 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                View Batteries <ArrowRight size={18} />
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl hover:shadow-xl transition-all group cursor-pointer">
              <div className="bg-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Package size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Complete Kits</h3>
              <p className="text-gray-600 mb-4">
                All-in-one solar solutions for any application, ready to install
              </p>
              <a href="#" className="text-cyan-500 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Browse Kits <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Drivex Energy?
          </h2>

          {/* ✅ 1 → 2 → 3 responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={36} className="text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">High Efficiency</h3>
              <p className="text-gray-600">Industry-leading efficiency ratings for maximum power generation</p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={36} className="text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">25-Year Warranty</h3>
              <p className="text-gray-600">Comprehensive warranty coverage for peace of mind</p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck size={36} className="text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Free Shipping</h3>
              <p className="text-gray-600">Fast and free delivery on all orders across Nigeria</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What Our Customers Say
          </h2>

          {/* ✅ Responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Drivex Energy transformed our home with reliable solar power. The installation was smooth and the support team was excellent!"
              </p>
              <p className="font-semibold text-gray-900">- Adebayo M., Lagos</p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Best investment for our business. We've significantly reduced our energy costs and the system is very reliable."
              </p>
              <p className="font-semibold text-gray-900">- Chioma O., Abuja</p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Outstanding quality and performance. The complete kit had everything we needed. Highly recommend Drivex Energy!"
              </p>
              <p className="font-semibold text-gray-900">- Ibrahim K., Kano</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Go Solar?
          </h2>
          <p className="text-lg md:text-xl text-white mb-8 opacity-90">
            Join thousands of satisfied customers powering their homes with clean energy
          </p>
          <button className="bg-white text-cyan-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
            Get Started Today
          </button>
        </div>
      </section>
    </main>
  );
}
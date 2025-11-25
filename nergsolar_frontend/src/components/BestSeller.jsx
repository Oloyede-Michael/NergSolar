import React, { useState } from 'react';

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState('hot');

  const hotProducts = [
    {
      badge: 'Up to 19% off',
      image: 'images/power_pack.jpg',
      tag: 'New',
      title: 'Core - 12V 300Ah LiFePO4 Battery w/ Low-Temperature...',
      description: 'Max 4P4S, expandable to 61.44kWh Low-Temperature Cut-Off',
      oldPrice: '₦30,000',
      newPrice: '₦20,000',
      wasPrice: '₦22,000'
    },
    {
      badge: 'Up to 24% off',
      image: 'images/solar_fan.jpg',
      tag: 'Hot',
      title: 'PUH 12V 3000W solar fan,expandable to 61.44kWh Low-Temperature Cut-Off',
      description: 'Up to 25% cell efficiency with N-... 13.5% smaller, 17.2% lighter',
      oldPrice: '₦30,000',
      newPrice: '₦18,000',
      wasPrice: '₦26,000'
    },
    {
      badge: 'Up to 10% off',
      image: 'images/solar_watch.png',
      tag: 'Hot',
      title: 'Casio G-Shock GW-17500 “Watchman” (Tough Solar), triple sensor (altimeter/compass/time)..',
      description: 'rugged G-Shock with Casio’s Tough Solar charging..',
      oldPrice: '₦19,000',
      newPrice: '₦12,000',
      wasPrice: '₦18,000'
    },
    {
      badge: 'Up to 15% off',
      image: 'images/solar_watch2.png',
      tag: 'Hot',
      title: 'Casio G-Shock GW-9400 “Rangeman” (Tough Solar), triple sensor (altimeter/barometer/compass)..',
      description: 'rugged G-Shock with Casio’s Tough Solar charging, triple sensor (altimeter/barometer/compass), shock + mud resistance, and multi-band atomic timekeeping.',
      oldPrice: '₦19,000',
      newPrice: '₦14,000',
      wasPrice: '₦20,000'
    },
    {
      badge: 'Up to 26% off',
      image: '/assets/charger.jpg',
      tag: 'Hot',
      title: 'Casio G-Shock GW-9400 “Rangeman” (Tough Solar)',
      description: 'shock + mud resistance, and multi-band atomic timekeeping',
      oldPrice: '₦14,500',
      newPrice: '₦10,500',
      wasPrice: '₦20,000'
    }
  ];

  const bestSellerProducts = [
    {
      badge: 'Up to 30% off',
      image: '/assets/bestseller1.jpg',
      tag: 'Best Seller',
      title: 'Premium Solar Kit 500W Complete System',
      description: 'Everything you need for off-grid power Easy installation included',
      oldPrice: '$1299.99',
      newPrice: '$899.99',
      wasPrice: '$1199.99'
    },
    {
      badge: 'Up to 20% off',
      image: '/assets/bestseller2.jpg',
      tag: 'Best Seller',
      title: 'Smart MPPT Solar Controller 40A',
      description: 'Advanced charging algorithm Bluetooth monitoring',
      oldPrice: '$199.99',
      newPrice: '$159.99',
      wasPrice: '$179.99'
    },
    {
      badge: 'Up to 15% off',
      image: '/assets/bestseller3.jpg',
      tag: 'Best Seller',
      title: 'Portable Power Station 1000Wh',
      description: 'Multiple output ports Fast charging capability',
      oldPrice: '$899.99',
      newPrice: '$759.99',
      wasPrice: '$849.99'
    },
    {
      badge: 'Up to 25% off',
      image: '/assets/bestseller4.jpg',
      tag: 'Best Seller',
      title: 'Flexible Solar Panel 200W',
      description: 'Lightweight and durable Perfect for RVs and boats',
      oldPrice: '$399.99',
      newPrice: '$299.99',
      wasPrice: '$349.99'
    },
    {
      badge: 'Up to 18% off',
      image: '/assets/bestseller5.jpg',
      tag: 'Best Seller',
      title: 'Battery Monitor with Shunt 500A',
      description: 'Real-time monitoring App connectivity',
      oldPrice: '$149.99',
      newPrice: '$122.99',
      wasPrice: '$139.99'
    }
  ];

  const currentProducts = activeTab === 'hot' ? hotProducts : bestSellerProducts;

  return (
    <div className="w-full bg-white py-12">
      <div className="container mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Best Sellers
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Take a scroll through our affordable solar devices
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8 border-b-2 border-gray-200">
          <button
            onClick={() => setActiveTab('hot')}
            className={`pb-3 px-2 text-base sm:text-lg font-semibold transition-all relative ${
              activeTab === 'hot'
                ? 'text-blue-700'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Hot Products
            {activeTab === 'hot' && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-700"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab('bestSeller')}
            className={`pb-3 px-2 text-base sm:text-lg font-semibold transition-all relative ${
              activeTab === 'bestSeller'
                ? 'text-blue-700'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Best Seller Deals
            {activeTab === 'bestSeller' && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-700"></div>
            )}
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {currentProducts.map((product, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Product Image Container */}
              <div className="relative bg-white p-4">
                {/* Discount Badge */}
                <div className="absolute top-2 left-2 bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                  {product.badge}
                </div>

                {/* Product Image */}
                <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-2">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain"
                  />
                  {/* Price Tags on Image */}
                  <div className="absolute top-2 right-2 flex flex-col gap-1">
                    {product.oldPrice && (
                      <div className="bg-amber-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">
                        {product.oldPrice}
                      </div>
                    )}
                  </div>
                </div>

                {/* Was Price */}
                {product.wasPrice && (
                  <div className="text-center">
                    <span className="text-xs text-gray-500">Was </span>
                    <span className="text-xs text-gray-500 line-through">
                      {product.wasPrice}
                    </span>
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="p-4">
                <div className="mb-2">
                  <span
                    className={`text-xs font-semibold ${
                      product.tag === 'New' ? 'text-cyan-500' : 'text-orange-600'
                    }`}
                  >
                    {product.tag}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[40px]">
                  {product.title}
                </h3>

                <p className="text-xs text-gray-600 mb-3 line-clamp-2 min-h-[32px]">
                  {product.description}
                </p>

                <div className="mb-4">
                  <span className="text-xs text-gray-500">From </span>
                  <span className="text-lg font-bold text-gray-900">
                    {product.newPrice}
                  </span>
                  {product.wasPrice && (
                    <span className="text-xs text-gray-500 line-through ml-2">
                      {product.wasPrice}
                    </span>
                  )}
                </div>

                <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-full transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
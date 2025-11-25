import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('Featured');
  const productsPerPage = 50; // 5 columns x 10 rows

  // Sample products data (50 products for demonstration)
  const allProducts = Array.from({ length: 150 }, (_, index) => ({
    id: index + 1,
    badge: ['Up to 19% off', 'Up to 28% off', '18% off', 'Up to 20% off', '12% off'][index % 5],
    image: `/assets/product${(index % 5) + 1}.jpg`,
    tag: ['New', 'Hot', 'Pre-order'][index % 3],
    title: `Product ${index + 1} - Sample Solar Product Name`,
    description: 'High-quality solar equipment with advanced features',
    oldPrice: '$899.99',
    newPrice: `$${(299 + (index * 10) % 500).toFixed(2)}`,
    wasPrice: `$${(399 + (index * 10) % 500).toFixed(2)}`,
    special: index % 7 === 0 ? '30 DAY PRICE' : null
  }));

  const totalPages = Math.ceil(allProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = allProducts.slice(startIndex, startIndex + productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPaginationRange = () => {
    const range = [];
    const showPages = 5;
    
    let start = Math.max(1, currentPage - Math.floor(showPages / 2));
    let end = Math.min(totalPages, start + showPages - 1);
    
    if (end - start < showPages - 1) {
      start = Math.max(1, end - showPages + 1);
    }
    
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    
    return range;
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <div className="container mx-auto px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            <span className="hover:text-cyan-500 cursor-pointer">Home</span>
            <span className="mx-2">›</span>
            <span className="text-gray-900 font-semibold">All products</span>
          </p>
        </div>

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
          All products
        </h1>

        {/* Filter and Sort Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-300">
          <button className="flex items-center gap-2 text-gray-700 hover:text-cyan-500 font-semibold">
            <SlidersHorizontal size={20} />
            Filter
          </button>
          
          <div className="flex items-center gap-2">
            <span className="text-gray-700 font-semibold">Sort by</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
              <option>Best Selling</option>
            </select>
          </div>
        </div>

        {/* Products Grid - 5 columns x 10 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Product Image Container */}
              <div className="relative bg-white p-4">
                {/* Discount Badge */}
                <div className="absolute top-2 left-2 bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                  {product.badge}
                </div>

                {/* Product Image Placeholder */}
                <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-2 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain"
                  />
                  
                  {/* Price Tags on Image */}
                  <div className="absolute top-2 right-2 flex flex-col gap-1">
                    <div className="bg-amber-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">
                      {product.oldPrice}
                    </div>
                    <div className="bg-amber-300 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
                      Member Price
                    </div>
                  </div>

                  {/* 30 Day Price Badge */}
                  {product.special && (
                    <div className="absolute bottom-2 right-2 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded">
                      {product.special}
                    </div>
                  )}
                </div>

                {/* Was Price */}
                <div className="text-center">
                  <span className="text-xs text-gray-500">Was </span>
                  <span className="text-xs text-gray-500 line-through">
                    {product.wasPrice}
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-4">
                {/* Tag */}
                <div className="mb-2">
                  <span className={`text-xs font-semibold ${
                    product.tag === 'New' ? 'text-cyan-500' : 
                    product.tag === 'Hot' ? 'text-orange-600' : 
                    'text-blue-600'
                  }`}>
                    {product.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[40px]">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-600 mb-3 line-clamp-2 min-h-[32px]">
                  {product.description}
                </p>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-xs text-gray-500">From </span>
                  <span className="text-lg font-bold text-gray-900">
                    {product.newPrice}
                  </span>
                  <span className="text-xs text-gray-500 line-through ml-2">
                    {product.wasPrice}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-3 rounded-full text-sm transition-colors">
                    Choose Options
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 pb-12">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2 rounded-lg border ${
              currentPage === 1
                ? 'border-gray-300 text-gray-400 cursor-not-allowed'
                : 'border-gray-300 text-gray-700 hover:bg-gray-100'
            }`}
          >
            <ChevronLeft size={20} />
          </button>

          {/* First Page */}
          {getPaginationRange()[0] > 1 && (
            <>
              <button
                onClick={() => handlePageChange(1)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                1
              </button>
              {getPaginationRange()[0] > 2 && (
                <span className="px-2 text-gray-500">...</span>
              )}
            </>
          )}

          {/* Page Numbers */}
          {getPaginationRange().map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded-lg border ${
                page === currentPage
                  ? 'bg-cyan-500 text-white border-cyan-500'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ))}

          {/* Last Page */}
          {getPaginationRange()[getPaginationRange().length - 1] < totalPages && (
            <>
              {getPaginationRange()[getPaginationRange().length - 1] < totalPages - 1 && (
                <span className="px-2 text-gray-500">...</span>
              )}
              <button
                onClick={() => handlePageChange(totalPages)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                {totalPages}
              </button>
            </>
          )}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-lg border ${
              currentPage === totalPages
                ? 'border-gray-300 text-gray-400 cursor-not-allowed'
                : 'border-gray-300 text-gray-700 hover:bg-gray-100'
            }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
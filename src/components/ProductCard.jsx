import React, { useState } from "react";
import { FiEye, FiHeart } from "react-icons/fi";

function ProductCard({ 
  image, 
  title, 
  price, 
  categories = [], 
  isOutOfStock = false 
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white overflow-hidden shadow hover:shadow-md transition-all duration-300 flex flex-col h-full border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Product Image */}
        <div className="aspect-square relative">
          <img
            src={image || "https://placehold.co/250x250/e2e8f0/64748b?text=Product"}
            alt={title}
            className="w-full h-full object-contain p-2 sm:p-4"
          />
          
          {/* Out of Stock Label */}
          {isOutOfStock && (
            <div className="absolute top-1 sm:top-2 right-1 sm:right-2 bg-red-500 text-white text-[10px] sm:text-xs font-bold uppercase px-1 py-0.5 sm:px-2 sm:py-1 rounded">
              Out of Stock
            </div>
          )}
          
          {/* Hover Icons - Show on hover for desktop, always visible for touch devices */}
          {isHovered && (
            <div className="absolute inset-0 bg-opacity-5 flex flex-col items-end justify-start p-2 sm:p-3 space-y-2 sm:space-y-3">
              {/* Wishlist Button with Tooltip */}
              <div className="group relative">
                <button className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-green-700 hover:text-white transition-colors focus:outline-none">
                  <FiHeart className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <div className="absolute top-2 right-full mr-1 sm:mr-2 hidden group-hover:block bg-green-700 text-white text-[10px] sm:text-xs py-0.5 px-1 sm:py-1 sm:px-2 rounded whitespace-nowrap z-10">
                  Add to Wishlist
                </div>
              </div>
              
              {/* View Button with Tooltip */}
              <div className="group relative">
                <button className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-green-700 hover:text-white transition-colors focus:outline-none">
                  <FiEye className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <div className="absolute top-2 right-full mr-1 sm:mr-2 hidden group-hover:block bg-green-700 text-white text-[10px] sm:text-xs py-0.5 px-1 sm:py-1 sm:px-2 rounded whitespace-nowrap z-10">
                  Quick View
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Product Details */}
      <div className="p-2 sm:p-4 flex flex-col flex-grow">
        <h3 className="font-medium text-gray-900 mb-1 leading-tight line-clamp-2 text-xs sm:text-sm">
          {title}
        </h3>
        
        {/* Categories - Hide on extra small screens */}
        <div className="hidden xs:flex flex-col mt-1 mb-1 sm:mb-2 text-[10px] sm:text-xs text-gray-500 space-y-0.5 flex-grow">
          {categories.slice(0, 2).map((category, index) => (
            <span key={index} className="flex items-center">
              {category}
            </span>
          ))}
          {categories.length > 2 && (
            <span className="text-gray-400 text-[9px] sm:text-[10px]">+{categories.length - 2} more</span>
          )}
        </div>
        
        {/* Price */}
        <div className="text-green-600 font-semibold text-base sm:text-lg mt-auto">
          £{price.toFixed(2)}
        </div>
        
        {/* Add to Basket Button */}
        <button className="mt-2 sm:mt-3 w-full rounded-full border border-gray-300 bg-white py-1 sm:py-2 px-2 sm:px-4 text-[10px] sm:text-xs font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:outline-none uppercase">
          {isOutOfStock ? "Read More" : "Add to Basket"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard; 
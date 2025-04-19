import React from "react";

function CategoryCard({ name, color, image, highlight }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group mx-auto py-3">
      <div
        className={`rounded-lg overflow-hidden shadow mb-2 sm:mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 hover:translate-y-[-3px] ${color}`}
        style={{ width: "100px", height: "100px" }}
      >
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className={`w-full h-full ${color}`}></div>
        )}
      </div>
      <div
        className={`text-center text-xs sm:text-sm font-medium ${
          highlight ? "text-green-500" : "text-gray-700"
        } w-full leading-tight px-1`}
      >
        {name}
      </div>
    </div>
  );
}

export default CategoryCard;

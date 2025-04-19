import { useState } from 'react';

function BannerCard({ title, gradientFrom, gradientTo, textColor, image, buttonText = "Shop Now" }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    console.error(`Failed to load image: ${image}`);
    setImageError(true);
  };

  return (
    <div className="banner-card rounded-3xl overflow-hidden relative shadow-md">
      {/* Background - either image or gradient */}
      {image && !imageError ? (
        <div className="absolute inset-0 rounded-3xl">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover rounded-3xl"
            onError={handleImageError}
            loading="lazy"
          />
          {/* Add a stronger overlay to ensure text is readable */}
          <div className="absolute rounded-3xl inset-0 bg-gradient-to-r from-black to-transparent opacity-40"></div>
        </div>
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-r from-${gradientFrom} to-${gradientTo}`}></div>
      )}
      
      <div className={`p-6 sm:p-8 text-${textColor} relative z-10 min-h-[220px] sm:min-h-[280px] flex flex-col justify-center`}>
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 drop-shadow-sm">{title}</h2>
        <button className="bg-white text-gray-800 px-4 sm:px-6 py-2 rounded-full font-medium mt-4 border border-gray-300 hover:shadow-md transition-shadow w-max">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default BannerCard; 
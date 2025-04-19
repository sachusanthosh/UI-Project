import React from 'react';

function HeroSection() {
  return (
    <div className="w-full overflow-hidden relative bg-gradient-to-r from-emerald-700 to-green-600 rounded-3xl mx-auto my-6 shadow-lg">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-4 md:p-0">
          <img 
            src="https://bestoptions.uk/wp-content/uploads/2023/09/tastydaily-2805536912.png" 
            alt="Delivery rider with groceries" 
            className="w-full h-auto object-contain max-h-[400px] hero-image"
            loading="eager"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 md:p-12 text-white">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-2 md:mb-4 drop-shadow-md leading-tight">
            Next Day Delivery
          </h1>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 drop-shadow-md leading-tight">
            10:00 AM to 08:00 PM
          </h2>
          <p className="text-sm mb-6 md:mb-8">* T&C Apply</p>
          <button className="bg-white text-green-800 px-6 py-3 rounded-full font-medium hover:bg-gray-100 hover:shadow-md transition-all w-max">
            Read More
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto opacity-10">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
}

export default HeroSection; 
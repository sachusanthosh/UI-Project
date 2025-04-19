import React, { useState, useRef, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProductCard from "./ProductCard";

function Chips() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(6);
  const carouselRef = useRef(null);
  
  // Update items to show based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) setItemsToShow(6); // xl
      else if (width >= 1024) setItemsToShow(4); // lg
      else if (width >= 768) setItemsToShow(3); // md
      else if (width >= 640) setItemsToShow(2); // sm
      else setItemsToShow(1); // xs
    };
    
    // Initial check
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const products = [
    {
      id: 1,
      title: "LAYS WEST INDIES HOT N CHILLY 100G",
      image: "https://bestoptions.uk/wp-content/uploads/2025/03/lays-west-indies-hot-n-sweet-chilli.jpg",
      price: 2.59,
      categories: ["Cereals & Breakfast", "Frozen Foods", "Grocery & Essentials"]
    },
    {
      id: 2,
      title: "LAYS WEST INDIES HOT N CHILLY 100G",
      image: "https://bestoptions.uk/wp-content/uploads/2025/03/lays-west-indies-hot-n-sweet-chilli.jpg",
      price: 2.99,
      categories: ["Cereals & Breakfast", "Grocery & Essentials"]
    },
    {
      id: 3,
      title: "LAYS WEST INDIES HOT N CHILLY 100G",
      image: "https://bestoptions.uk/wp-content/uploads/2025/03/lays-west-indies-hot-n-sweet-chilli.jpg",
      price: 2.95,
      categories: ["Cereals & Breakfast", "Grocery & Essentials"]
    },
    {
      id: 4,
      title: "LAYS WEST INDIES HOT N CHILLY 100G",
      image: "https://bestoptions.uk/wp-content/uploads/2025/03/lays-west-indies-hot-n-sweet-chilli.jpg",
      price: 2.79,
      categories: ["Cereals & Breakfast", "Grocery & Essentials"]
    },
    {
      id: 5,
      title: "LAYS WEST INDIES HOT N CHILLY 100G",
      image: "https://bestoptions.uk/wp-content/uploads/2025/03/lays-west-indies-hot-n-sweet-chilli.jpg",
      price: 2.49,
      categories: ["Cereals & Breakfast", "Frozen Foods", "Grocery & Essentials"],
      isOutOfStock: true
    },
    {
      id: 6,
      title: "LAYS WEST INDIES HOT N CHILLY 100G",
      image: "https://bestoptions.uk/wp-content/uploads/2025/03/lays-west-indies-hot-n-sweet-chilli.jpg",
      price: 3.89,
      categories: ["Cereals & Breakfast", "Frozen Foods", "Grocery & Essentials"]
    },
    {
      id: 7,
      title: "AJ STEAMMADE PUTTUPODI 5KG",
      image: "https://bestoptions.uk/wp-content/uploads/2025/03/double-horse-appam-idiyappam-1kg.jpg",
      price: 10.99,
      categories: ["Cereals & Breakfast", "Grocery & Essentials"]
    },
    {
      id: 8,
      title: "PALAT INSTANT EASY PALAPAM 1KG",
      image: "https://bestoptions.uk/wp-content/uploads/2025/03/double-horse-appam-idiyappam-1kg.jpg",
      price: 2.35,
      categories: ["Cereals & Breakfast", "Grocery & Essentials"]
    }
  ];

  // Reset scroll position when itemsToShow changes
  useEffect(() => {
    setScrollPosition(0);
  }, [itemsToShow]);

  const scrollLeft = () => {
    if (scrollPosition > 0 && !isAnimating) {
      setIsAnimating(true);
      setScrollPosition(prev => Math.max(prev - 1, 0));
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const scrollRight = () => {
    if (scrollPosition < products.length - itemsToShow && !isAnimating) {
      setIsAnimating(true);
      setScrollPosition(prev => Math.min(prev + 1, products.length - itemsToShow));
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  return (
    <div className="w-full bg-[#EFF5EE] py-6 sm:py-8 md:py-10">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-green-800 mb-4 sm:mb-6 md:mb-8">Chips & Namkeen</h2>

        <div className="relative mt-4">
          {scrollPosition > 0 && (
            <button 
              onClick={scrollLeft} 
              className="absolute -left-2 sm:-left-3 md:-left-4 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 sm:p-3 bg-white shadow-md hover:bg-green-50 text-gray-700 hover:text-green-700 disabled:opacity-50 focus:outline-none"
              disabled={scrollPosition === 0 || isAnimating}
              aria-label="Previous products"
            >
              <FaArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </button>
          )}
          
          <div className="mx-4 sm:mx-6 md:mx-8 overflow-hidden">
            <div 
              ref={carouselRef} 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${scrollPosition * (100 / itemsToShow)}%)` }}
            >
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="flex-none "
                  style={{ width: `${100 / itemsToShow}%` }}
                >
                  <ProductCard 
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    categories={product.categories}
                    isOutOfStock={product.isOutOfStock}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {scrollPosition < products.length - itemsToShow && (
            <button 
              onClick={scrollRight} 
              className="absolute -right-2 sm:-right-3 md:-right-4 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 sm:p-3 bg-white shadow-md text-gray-700 hover:text-green-700 disabled:opacity-50 focus:outline-none"
              disabled={scrollPosition >= products.length - itemsToShow || isAnimating}
              aria-label="Next products"
            >
              <FaArrowRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chips; 
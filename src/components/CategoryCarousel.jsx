import { useState, useRef, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import CategoryCard from './CategoryCard';

function CategoryCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef(null);
  
  const categories = [
    { 
      id: 1, 
      name: 'Atta, Rice & Dal',
      color: 'bg-lime-100',
      image: 'https://bestoptions.uk/wp-content/uploads/2025/03/cat-atta-rice.png'
    },
    { 
      id: 2, 
      name: 'Cereals & Breakfast',
      color: 'bg-blue-100',
      image: 'https://bestoptions.uk/wp-content/uploads/2025/03/cat-cereals.png'
    },
    { 
      id: 3, 
      name: 'Food Colour & Essence',
      color: 'bg-pink-100',
      image: 'https://bestoptions.uk/wp-content/uploads/2025/03/cat-foodcolour-essence.png'
    },
    { 
      id: 4, 
      name: 'Frozen Foods',
      color: 'bg-yellow-100',
      image: 'https://bestoptions.uk/wp-content/uploads/2025/03/cat-frozen-foods.png'
    },
    { 
      id: 5, 
      name: 'Frozen Seafood',
      color: 'bg-blue-50',
      image: 'https://bestoptions.uk/wp-content/uploads/2025/03/cat-frozen-seafood.png'
    },
    { 
      id: 6, 
      name: 'Pickles, Sauces & Spreads',
      color: 'bg-red-100',
      image: 'https://bestoptions.uk/wp-content/uploads/2025/03/cat-pickles-sauces.png'
    },
    { 
      id: 7, 
      name: 'Tea & Coffee',
      color: 'bg-amber-100',
      image: 'https://bestoptions.uk/wp-content/uploads/2025/03/cat-tea-coffee.png'
    },
    { 
      id: 8, 
      name: 'Bread, Dairy & Eggs',
      color: 'bg-orange-50',
      image: 'https://bestoptions.uk/wp-content/uploads/2025/03/cat-dairy-bread-eggs.png'
    },
    { 
      id: 9, 
      name: 'Oils & Ghee',
      color: 'bg-yellow-100',
      image: 'https://bestoptions.uk/wp-content/uploads/2025/03/cat-oil-ghee.png'
    },
    { 
      id: 10, 
      name: 'Masalas & Spices',
      color: 'bg-amber-200',
      image: 'https://bestoptions.uk/wp-content/uploads/2025/04/cat-masalas-spices.png'
    }
  ];

  // Responsive number of items to show
  const getItemsToShow = () => {
    const width = window.innerWidth;
    if (width >= 1280) return 10; // xl
    if (width >= 1024) return 8; // lg
    if (width >= 768) return 6; // md
    if (width >= 640) return 4; // sm
    return 3; // xs
  }

  const [itemsToShow, setItemsToShow] = useState(getItemsToShow());

  // Update itemsToShow on window resize
  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(getItemsToShow());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollLeft = () => {
    if (scrollPosition > 0 && !isAnimating) {
      setIsAnimating(true);
      setScrollPosition(prev => Math.max(prev - 1, 0));
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const scrollRight = () => {
    if (scrollPosition < categories.length - itemsToShow && !isAnimating) {
      setIsAnimating(true);
      setScrollPosition(prev => Math.min(prev + 1, categories.length - itemsToShow));
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  return (
    <div className="w-full bg-[#EFF5EE] py-6">
      <div className="relative max-w-[1500px] mx-auto px-4 sm:px-6">
        <div className="flex items-center relative">
          {scrollPosition > 0 && (
            <button 
              onClick={scrollLeft} 
              className="absolute -left-4 sm:-left-6 z-20 rounded-full p-2 sm:p-3 bg-white shadow-md text-gray-700 hover:text-green-600 disabled:opacity-50 focus:outline-none"
              disabled={scrollPosition === 0 || isAnimating}
              aria-label="Previous categories"
            >
              <FaArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          )}
          
          <div className="w-full overflow-hidden px-2 sm:px-4">
            <div 
              ref={carouselRef} 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${scrollPosition * (100 / itemsToShow)}%)` }}
            >
              {categories.map((category) => (
                <div 
                  key={category.id} 
                  className="flex-none"
                  style={{ width: `${100 / itemsToShow}%` }}
                >
                  <CategoryCard 
                    name={category.name}
                    color={category.color}
                    image={category.image}
                    highlight={category.highlight}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {scrollPosition < categories.length - itemsToShow && (
            <button 
              onClick={scrollRight} 
              className="absolute -right-4 sm:-right-6 z-20 rounded-full p-2 sm:p-3 bg-white shadow-md text-gray-700 hover:text-green-600 disabled:opacity-50 focus:outline-none"
              disabled={scrollPosition >= categories.length - itemsToShow || isAnimating}
              aria-label="Next categories"
            >
              <FaArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryCarousel;
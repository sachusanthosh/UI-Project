import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { FaShoppingBasket, FaCarrot, FaAppleAlt, FaCocktail, FaBirthdayCake, FaThLarge } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Check if screen is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIsMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Close menu when resizing to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const menuItems = [
    { 
      id: 'grocery', 
      name: 'Grocery & Essentials', 
      icon: <FaShoppingBasket className="h-5 w-5 mr-2 text-green-500" />,
      submenu: [
        'Atta, Rice & Dal',
        'Bakery & Biscuits',
        'Bread, Dairy & Eggs',
        'Cereals & Breakfast',
        'Dry Fruits & Nuts',
        'Frozen Foods',
        'Frozen Seafood',
        'Pickles, Sauces & Spreads',
        'Tea & Coffee',
        'Masalas & Spices',
        'Oils & Ghee'
      ]
    },
    { 
      id: 'vegetables', 
      name: 'Fresh Vegetables', 
      icon: <FaCarrot className="h-5 w-5 mr-2 text-green-500" />,
      submenu: [
        'Aubergine',
        'Beetroot',
        'Coco Yam',
        'Drumsticks',
        'Elephant Yam',
        'Ginger',
        'Indian Chilli',
        'Indian Curry Leaves',
        'Indian Vellarika',
        'Koorka'
      ]
    },
    { 
      id: 'fruits', 
      name: 'Fresh Fruits', 
      icon: <FaAppleAlt className="h-5 w-5 mr-2 text-green-500" />,
      submenu: [
        'Banana Small',
        'Haden Mango',
        'Kent Mango',
        'Orange',
        'Apple',
        'Pear',
        'Grapes',
        'Watermelon'
      ]
    },
    { 
      id: 'drinks', 
      name: 'Drinks & Snacks', 
      icon: <FaCocktail className="h-5 w-5 mr-2 text-green-500" />,
      submenu: [
        'Chips & Namkeens',
        'Chocolates & Sweets',
        'Noodles & Pasta',
        'Sodas & Juices',
      ]
    },
    { 
      id: 'cakes', 
      name: 'Cakes', 
      icon: <FaBirthdayCake className="h-5 w-5 mr-2 text-green-500" />
    },
    { 
      id: 'more', 
      name: 'More...', 
      icon: <FaThLarge className="h-5 w-5 mr-2 text-green-500" />,
      submenu: [
        'Beauty & Wellness',
        'Home & Office Care',
        'Lifestyle'
      ],
      megaMenu: {
        'Beauty & Wellness': [
          'Bath, Body & Oral Care',
          'Hair Care',
          'Health Care',
          'Skin Care & Make Up',
          'Grooming & Perfumes'
        ],
        'Home & Office Care': [
          'Furnishings',
          'Kitchen & Dining',
          'Cleaning Essentials',
          'Stationery'
        ],
        'Lifestyle': [
          'Electronics & Appliances',
          'Fashion & Accessories'
        ]
      }
    }
  ];

  return (
    <nav className="bg-white shadow-md w-full sticky top-0 z-50">
      <div className="w-full flex justify-between items-center max-w-[1400px] mx-auto">
        {/* Mobile Menu Button */}
        <div className="flex items-center lg:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700 focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>

        {/* Logo */}
        <div className="logo flex-shrink-0">
          <img src="https://bestoptions.uk/wp-content/uploads/2025/02/bestoptions-logo.png" alt="BestOptions" className="h-8 sm:h-10" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-grow justify-center space-x-4 mx-6" ref={dropdownRef}>
          {menuItems.map((item) => (
            <div 
              key={item.id} 
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a 
                href="#" 
                className="flex items-center text-gray-700 hover:text-green-600 py-2 px-3 text-sm"
                onClick={(e) => e.preventDefault()}
              >
                {React.cloneElement(item.icon, { className: "h-4 w-4 mr-1 text-green-500" })}
                <span>{item.name}</span>
              </a>
              
              {/* Standard Dropdown */}
              {item.submenu && !item.megaMenu && activeDropdown === item.id && (
                <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-lg rounded-md overflow-hidden z-20 transition-all duration-300">
                  <div className="py-2">
                    {item.submenu.map((subItem, idx) => (
                      <a 
                        key={idx} 
                        href="#" 
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-600 text-sm"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Mega Menu */}
              {item.megaMenu && activeDropdown === item.id && (
                <div className="absolute top-full left-0 mt-0 w-[800px] bg-white shadow-lg rounded-md overflow-hidden z-20 transition-all duration-300">
                  <div className="grid grid-cols-3 gap-6 p-6">
                    {Object.keys(item.megaMenu).map((category, idx) => (
                      <div key={idx} className="flex flex-col">
                        <h3 className="font-medium text-base mb-3 text-gray-800">{category}</h3>
                        {item.megaMenu[category].map((subItem, subIdx) => (
                          <a 
                            key={subIdx} 
                            href="#" 
                            className="block py-2 text-gray-700 hover:text-green-600 text-sm"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-1 sm:space-x-4">
          <button className="p-2 text-gray-700 hover:text-green-600 focus:outline-none" aria-label="Search">
            <FiSearch className="h-4 w-4" />
          </button>
          <button className="p-2 text-gray-700 hover:text-green-600 focus:outline-none" aria-label="Account">
            <FiUser className="h-4 w-4" />
          </button>
          <button className="p-2 text-gray-700 hover:text-green-600 focus:outline-none" aria-label="Cart">
            <FiShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300">
          <div className="px-4 py-3 flex flex-col space-y-3">
            {menuItems.map((item, index) => (
              <div key={index}>
                <a href="#" className="flex items-center py-2 text-gray-700 hover:text-green-600 border-b border-gray-100 text-sm">
                  {React.cloneElement(item.icon, { className: "h-4 w-4 mr-2 text-green-500" })}
                  <span className="ml-2">{item.name}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar; 
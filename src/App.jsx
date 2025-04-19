import './App.css'
import { useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import CategoryCarousel from './components/CategoryCarousel';
import DailyEssentials from './components/DailyEssentials';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Chips from './components/Chips';

function App() {
  useEffect(() => {
    // Add category placeholders CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/category-placeholders.css';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="app bg-[#EFF5EE]">
      <Header />
      <Navbar />
      <div className="w-full">
        <div className="container mx-auto px-4">
          <Banner />
          <CategoryCarousel />
          <DailyEssentials />
          <Chips />
          <HeroSection />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App

import BannerCard from './BannerCard';

function Banner() {
  const banners = [
    {
      title: "Vishu Sadhya",
      gradientFrom: "teal-600",
      gradientTo: "green-500",
      textColor: "white",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDsEVhBJkmoh6p9bJzj7zcZ0G3QJnTYVhPpA&s",
      buttonText: "Shop Now"
    },
    {
      title: "Easter Essentials",
      gradientFrom: "yellow-100",
      gradientTo: "yellow-300",
      textColor: "white",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSLr5hRWGH0wWudrdzz07Q2318jphxOCI2kVG6gr9rdFkXnTWeu",
      buttonText: "Shop Now"
    },
    {
      title: "Grocery & Essentials",
      gradientFrom: "amber-100",
      gradientTo: "amber-300",
      textColor: "white",
      image: "https://m.media-amazon.com/images/I/71UwL9cdLQL.jpg",
      buttonText: "Shop Now"
    }
  ];

  return (
    <div className="w-full bg-[#EFF5EE] py-4 sm:py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {banners.map((banner, index) => (
            <BannerCard
              key={index}
              title={banner.title}
              gradientFrom={banner.gradientFrom}
              gradientTo={banner.gradientTo}
              textColor={banner.textColor}
              image={banner.image}
              buttonText={banner.buttonText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banner; 
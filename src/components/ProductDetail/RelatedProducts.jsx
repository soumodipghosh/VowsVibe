import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Star } from 'lucide-react';
import { Container } from '../Layout/Container';

export const RelatedProducts = ({ title = "Similar Products" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4); // Default desktop

  // List of products
  const products = [
    {
      id: 1,
      name: 'Rose Gold Earrings with Alloy',
      price: '₹1,999',
      originalPrice: '₹2,999',
      rating: 4.2,
      reviews: 15,
      image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=400',
      isBestSeller: true,
    },
    {
      id: 2,
      name: 'Silver Chain Bracelet',
      price: '₹1,499',
      originalPrice: '₹2,199',
      rating: 4.5,
      reviews: 28,
      image: 'https://images.pexels.com/photos/1454172/pexels-photo-1454172.jpeg?auto=compress&cs=tinysrgb&w=400',
      isBestSeller: false,
    },
    {
      id: 3,
      name: 'Diamond Ring Set',
      price: '₹3,999',
      originalPrice: '₹5,999',
      rating: 4.8,
      reviews: 42,
      image: 'https://images.pexels.com/photos/1454173/pexels-photo-1454173.jpeg?auto=compress&cs=tinysrgb&w=400',
      isBestSeller: true,
    },
    {
      id: 4,
      name: 'Pearl Pendant Necklace',
      price: '₹2,299',
      originalPrice: '₹3,499',
      rating: 4.3,
      reviews: 19,
      image: 'https://images.pexels.com/photos/1454174/pexels-photo-1454174.jpeg?auto=compress&cs=tinysrgb&w=400',
      isBestSeller: false,
    },
    {
      id: 5,
      name: 'Gold Plated Anklet',
      price: '₹899',
      originalPrice: '₹1,299',
      rating: 4.1,
      reviews: 8,
      image: 'https://images.pexels.com/photos/1454175/pexels-photo-1454175.jpeg?auto=compress&cs=tinysrgb&w=400',
      isBestSeller: false,
    },
  ];

  // Update items per slide based on window width
  const updateItemsPerSlide = () => {
    const width = window.innerWidth;
    if (width < 640) setItemsPerSlide(1); // Mobile
    else if (width < 1024) setItemsPerSlide(2); // Tablet
    else setItemsPerSlide(4); // Desktop
  };

  useEffect(() => {
    updateItemsPerSlide(); // Set on load
    window.addEventListener('resize', updateItemsPerSlide); // Update on resize
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  const totalSlides = Math.ceil(products.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Function to render star rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-3 h-3 ${index < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-12 bg-gray-50">
      <Container>
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">{title}</h2>
          </div>

          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 -ml-6"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 -mr-6"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Products Slider */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }, (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`}>
                      {products
                        .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                        .map((product) => (
                          <div
                            key={product.id}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
                          >
                            {/* Product Image */}
                            <div className="relative aspect-square overflow-hidden">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              {product.isBestSeller && (
                                <div className="absolute top-3 left-0 bg-red-600 text-white px-3 py-1 rounded-r-full text-xs font-semibold">
                                  BestSeller
                                </div>
                              )}
                              <button className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white rounded-full transition-colors duration-200">
                                <Heart className="w-4 h-4 text-gray-600 hover:text-rose-500" />
                              </button>
                            </div>

                            {/* Product Details */}
                            <div className="p-4 space-y-3">
                              <h3 className="font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
                              <div className="flex items-center space-x-2">
                                <span className="text-lg font-bold text-gray-900">{product.price}</span>
                                <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="flex items-center space-x-1">{renderStars(product.rating)}</div>
                                <span className="text-xs text-gray-600">({product.reviews})</span>
                              </div>
                              <button className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${index === currentSlide ? 'bg-rose-500' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

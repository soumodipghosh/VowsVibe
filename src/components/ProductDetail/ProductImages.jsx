import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

export const ProductImages = () => {
  // Track current image
  const [currentImage, setCurrentImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Product images
  const productImages = [
    "https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1454172/pexels-photo-1454172.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1454173/pexels-photo-1454173.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1454174/pexels-photo-1454174.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  // Next & previous functions
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <div className="space-y-4">

      {/* Main Product Image */}
      <div className="relative bg-gray-100 rounded-2xl overflow-hidden group w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto aspect-square">
        <img
          src={productImages[currentImage]}
          alt={`Product image ${currentImage + 1}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Bestseller Badge */}
        <div className="absolute top-3 left-0 bg-red-600 text-white px-3 py-1 rounded-r-full text-xs sm:text-sm font-semibold">
          BestSeller
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className={`absolute top-3 right-3 p-2 rounded-full transition-colors duration-200 ${
            isWishlisted
              ? "bg-rose-500 text-white"
              : "bg-white/80 text-gray-600 hover:bg-white hover:text-rose-500"
          }`}
        >
          <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
        </button>

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {productImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImage(idx)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                idx === currentImage ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Images */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {productImages.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              idx === currentImage
                ? "border-rose-500 ring-2 ring-rose-200"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

import { useState } from "react";
import { Star, Check, Truck, Shield, Award, Sparkles } from "lucide-react";

export const ProductInfo = () => {
  // State for pincode input
  const [pincode, setPincode] = useState("");

  // State for product quantity
  const [quantity, setQuantity] = useState(1);

  // Features icons and text
  const features = [
    { icon: Truck, text: "Easy 30 Day Return", color: "text-blue-600" },
    { icon: Award, text: "925 Silver Plating", color: "text-purple-600" },
    { icon: Shield, text: "6-Month Warranty", color: "text-green-600" },
    { icon: Sparkles, text: "Premium Gold", color: "text-yellow-600" },
  ];

  // Product specifications
  const specifications = [
    { label: "Material", value: "925 Sterling Silver" },
    { label: "Plating", value: "18K Gold" },
    { label: "Weight", value: "10 grams" },
    { label: "Stone Type", value: "Premium Jerkin" },
  ];

  return (
    <div className="space-y-6">

      {/* Product Title */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Gold-Plated Pearls Necklace
        </h1>
        <p className="text-base sm:text-lg text-gray-600 font-medium">
          Made with 925 Silver
        </p>
      </div>

      {/* Rating */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-1 bg-green-600 text-white px-2 sm:px-3 py-1 rounded-lg text-sm sm:text-base">
          <span className="font-semibold">4.1</span>
          <Star className="w-4 h-4 fill-current" />
        </div>
        <span className="text-gray-600 text-sm sm:text-base font-medium">
          (23)
        </span>
      </div>

      {/* Price */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-4">
        <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          ₹1,600
        </span>
        <span className="text-lg sm:text-xl text-gray-500 line-through">
          ₹2,000
        </span>
        <span className="text-lg sm:text-xl font-semibold text-green-600">
          (20% off)
        </span>
      </div>

      {/* Product Features */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-50 rounded-lg"
          >
            <feature.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${feature.color}`} />
            <span className="text-xs sm:text-sm font-medium text-gray-700">
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      {/* Quantity Selector */}
      {/* <div className="flex items-center space-x-3 sm:space-x-4">
        <span className="font-medium text-gray-700 text-sm sm:text-base">
          Quantity:
        </span>
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-2 sm:px-3 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
          >
            -
          </button>
          <span className="px-3 sm:px-4 py-2 font-medium">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-2 sm:px-3 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
          >
            +
          </button>
        </div>
      </div>
      */}

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <button className="w-full border-2 border-rose-500 text-rose-500 hover:bg-rose-50 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-colors duration-200 cursor-pointer">
          ADD TO CART
        </button>
        <button className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-colors duration-200 cursor-pointer">
          BUY NOW
        </button>
      </div>

      {/* Delivery Info */}
      <div className="space-y-3 sm:space-y-4 p-3 sm:p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-gray-900">Estimated Delivery Time</h3>
        <div className="relative w-full sm:max-w-xs">
  <input
    type="text"
    placeholder="Enter Pincode"
    value={pincode}
    onChange={(e) => setPincode(e.target.value)}
    className="w-full px-3 pr-16 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 text-gray-900"
  />
  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-rose-500 font-medium cursor-pointer">
    Check
  </span>
</div>

        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Truck className="w-4 h-4" />
          <span>
            Get it by <strong className="text-rose-600">25 Sept</strong>
          </span>
        </div>
      </div>

      {/* Offers Section */}
<div className="space-y-3 p-3 sm:p-4 bg-green-50 rounded-lg">
  {/* Top Row: Offers, 2 available, Check */}
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Offers</h3>
      <span className="text-xs sm:text-sm text-gray-600">2 available</span>
    </div>
    <span className="text-xs sm:text-sm text-rose-600 font-medium cursor-pointer">
      Check
    </span>
  </div>

  {/* Coupon Text */}
  <p className="text-xs sm:text-sm text-gray-700 italic mt-1">
    Coupon can be applied at checkout
  </p>
</div>

{/* Horizontal line after offers section */}
<hr className="border-t border-rose-500 my-4" />



      {/* Product Specifications */}
      <div className="space-y-3 sm:space-y-4">
        <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
          Product Description
        </h3>
        <div className="space-y-2 sm:space-y-3">
          {specifications.map((spec, idx) => (
            <div key={idx} className="flex items-center space-x-2 sm:space-x-3">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
              <div className="text-gray-700 text-sm sm:text-base">
                <span className="font-semibold">{spec.label}:</span>{" "}
                <span className="text-gray-600">{spec.value}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-b border-rose-500 pb-4 sm:pb-6 mb-4 sm:mb-6">
  {/* Section Title */}
  <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-2 sm:mb-3">
    Shipping
  </h3>

  {/* Delivery Info */}
  <div className="text-sm sm:text-base text-gray-700">
    <p>
      Get it by <span className="text-rose-600 font-medium">25 Sept</span>
    </p>
  </div>
</div>


      </div>
    </div>
  );
};

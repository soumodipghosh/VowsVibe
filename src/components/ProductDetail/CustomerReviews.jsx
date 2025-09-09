import { Star, User } from "lucide-react";

export const CustomerReviews = () => {
  // Sample review data
  const reviewData = [
    {
      id: 1,
      name: "Anu",
      date: "15/08/24",
      rating: 5,
      comment:
        "Such a gorgeous necklace. Got many compliments as well. Absolutely loved it",
      images: 2,
      verified: true,
    },
    {
      id: 2,
      name: "Priya",
      date: "15/08/24",
      rating: 5,
      comment:
        "Looks beautiful 😻❤❤❤ Go for it girls 😍💝💐 the quality is good ..",
      images: 1,
      verified: true,
    },
  ];

  // Function to render star rating
  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ));

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="border-b border-rose-500 pb-4">
        <h2 className="text-2xl font-bold text-gray-900">Customer Ratings</h2>
        <div className="flex flex-wrap items-center gap-2 mt-2">
          <div className="flex items-center space-x-1">
            {renderStars(4)}
            <span className="ml-2 text-lg font-semibold">4.1</span>
          </div>
          <span className="text-gray-600">Based on 23 reviews</span>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviewData.map((review) => (
          <div key={review.id} className="border-b border-rose-600 pb-6 last:border-b-0">
            <div className="flex items-start space-x-4">
              
              {/* User Avatar */}
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-600" />
                </div>
              </div>

              {/* Review Content */}
              <div className="flex-1 space-y-3">
                {/* Name, Date, Stars */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      {review.verified && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          Verified Purchase
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{review.date}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>

                {/* Review Comment */}
                <p className="text-gray-700 leading-relaxed break-words">{review.comment}</p>

                {/* Review Images */}
                {review.images > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {Array.from({ length: review.images }).map((_, idx) => (
                      <div
                        key={idx}
                        className="w-20 h-20 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center"
                      >
                        <span className="text-xs text-gray-500">Image {idx + 1}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <button className="text-gray-600 hover:text-rose-500 transition-colors">
                    Helpful (12)
                  </button>
                  <button className="text-gray-600 hover:text-rose-500 transition-colors">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Reviews */}
      <div className="text-center">
        <button className="px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200">
          Load More Reviews
        </button>
      </div>
    </div>
  );
};

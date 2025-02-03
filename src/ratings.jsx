import React, { useState } from 'react';

const StarRating = ({ totalStars = 5, initialRating = 0, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleRating = (newRating) => {
    setRating(newRating);
    if (onRatingChange) onRatingChange(newRating); 
  };

  return (
    <div className="flex space-x-2 cursor-pointer">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            className={`text-3xl transition-colors ${
              starValue <= rating ? 'text-blue-500' : 'text-gray-500'
            } hover:text-yellow-400 w-[6vh]`}
            onClick={() => handleRating(starValue)}
            
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;

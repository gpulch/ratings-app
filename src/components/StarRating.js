import React, { useState } from "react";

export default function StarRating( { rating, setRating } ) {
  
  const handleClick = (value) => {
    setRating(value);
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star, index) => {
        const isFilled = index < rating;
        return (
          <button
            key={star}
            onClick={() => handleClick(star)}
            className={`star ${isFilled ? "filled" : "empty"}`}
          >
            &#9733;
          </button>
        );
      })}
    </div>
  );
}

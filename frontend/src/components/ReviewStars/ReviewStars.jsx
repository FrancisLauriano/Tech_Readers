import React, { useState } from 'react';
import { StyledReviewStars, Star } from './ReviewStars.styles';

const ReviewStars = ({ rating, onClick }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (index) => {
    setHoverRating(index + 1);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (index) => {
    onClick(index + 1);
  };

  return (
    <StyledReviewStars>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          $filled={index < (hoverRating || rating)}
        >
          {index < (hoverRating || rating) ? '★' : '☆'}
        </Star>
      ))}
    </StyledReviewStars>
  );
};

export default ReviewStars;



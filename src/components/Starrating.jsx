import React from "react";

const Starrating = ({ rating }) => {
  const getStarColor = (index) => {
    // Logic to determine star color based on rating value
    if (index < rating) {
      return "yellow"; // Filled star color
    } else {
      return "gray"; // Empty star color
    }
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 inline-block"
          fill={getStarColor(index)}
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
};

export default Starrating;
